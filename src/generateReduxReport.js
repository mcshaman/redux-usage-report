import { diff } from "deep-object-diff"
import StackTrace from "stacktrace-js"
import { isObjectOrArray } from "./utility"
import { createMakeProxyFunction } from "./trackObjectUse"
import debounce from "lodash/debounce"

const localStorageKey = "reduxUsageReportBreakpoints"

// so that JSON.stringify doesn't remove all undefined fields
function replaceUndefinedWithNull(obj) {
  Object.keys(obj).forEach(k => {
    const val = obj[k]
    if (val === undefined) {
      obj[k] = null
    }
    if (isObjectOrArray(val)) {
      replaceUndefinedWithNull(val)
    }
  })
}

let globalObjectCache

const shouldSkipProxy = () => {
  if (global.reduxReport.__inProgress || global.reduxReport.__reducerInProgress) return true

  if (!global.reduxReport.__skipAccessOriginCheck) {
    const stackFrames = StackTrace.getSync()
    const initiatingFunc =
      stackFrames[stackFrames.findIndex(s => s.functionName === "Object.get") + 1]

    const initiatingFuncNotLocal =
      !!initiatingFunc &&
      initiatingFunc.fileName &&
      (initiatingFunc.fileName.match(/\.\/~\/|\/node_modules\//) ||
        initiatingFunc.fileName.match(/extension:\/\//))

    if (!!initiatingFuncNotLocal) return true
  }
  return false
}

// this function takes a reducer and returns 
// an augmented reducer that tracks redux usage
function generateReduxReport(global, rootReducer) {
  globalObjectCache = globalObjectCache || global
  global.reduxReport = global.reduxReport || {
    accessedState: {},
    state: {},
    setOnChangeCallback(cb) {
      global.reduxReport.onChangeCallback = debounce(cb, 10)
    },
    removeOnChangeCallback() {
      global.reduxReport.onChangeCallback = undefined
    },
    setBreakpoint: function(breakpoint) {
      if (!global.localStorage) return
      global.localStorage.setItem(localStorageKey, breakpoint)
    },
    clearBreakpoint: function() {
      if (!global.localStorage) return
      global.localStorage.setItem(localStorageKey, null)
    },
    generate() {
      global.reduxReport.__inProgress = true
      const used = JSON.parse(JSON.stringify(this.accessedState))
      const stateCopy = JSON.parse(JSON.stringify(this.state))
      const unused = diff(stateCopy, used)
      replaceUndefinedWithNull(unused)
      const report = {
        used,
        unused,
        stateCopy
      }
      global.reduxReport.__inProgress = false
      return report
    }
  }

  const makeProxy = createMakeProxyFunction({
    shouldSkipProxy,
    accessedProperties: global.reduxReport.accessedState,
    getBreakpoint: () => global.localStorage && global.localStorage.getItem(localStorageKey),
    onChange: stateLocation =>
      global.reduxReport.onChangeCallback && global.reduxReport.onChangeCallback(stateLocation)
  })

  // this function replaces the previous root reducer
  // it will break if the DevTools.instrument() call came before generateReduxReport
  // in the compose order
  return (prevState, action) => {
    global.reduxReport.__reducerInProgress = true
    const state = rootReducer(prevState, action)
    const proxiedState = makeProxy(state)
    global.reduxReport.__reducerInProgress = false

    global.reduxReport.state = proxiedState
    if (global.reduxReport.onChangeCallback)
      setTimeout(() => global.reduxReport.onChangeCallback(""), 1)
    return proxiedState
  }
}

// "next" is either createStore or a wrapped version from another enhancer
const storeEnhancer = (global = window) => next => (reducer, ...args) => {
  const wrappedReducer = generateReduxReport(global, reducer)
  const store = next(wrappedReducer, ...args)
  return { ...store, replaceReducer: nextReducer => generateReduxReport(global, nextReducer) }
}

export default storeEnhancer
