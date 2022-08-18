"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _deepObjectDiff = require("deep-object-diff");

var _stacktraceJs = _interopRequireDefault(require("stacktrace-js"));

var _utility = require("./utility");

var _trackObjectUse = require("./trackObjectUse");

var _debounce = _interopRequireDefault(require("lodash/debounce"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var localStorageKey = "reduxUsageReportBreakpoints"; // so that JSON.stringify doesn't remove all undefined fields

function replaceUndefinedWithNull(obj) {
  Object.keys(obj).forEach(function (k) {
    var val = obj[k];

    if (val === undefined) {
      obj[k] = null;
    }

    if ((0, _utility.isObjectOrArray)(val)) {
      replaceUndefinedWithNull(val);
    }
  });
}

var globalObjectCache;

var shouldSkipProxy = function shouldSkipProxy() {
  if (global.reduxReport.__inProgress || global.reduxReport.__reducerInProgress) return true;

  if (!global.reduxReport.__skipAccessOriginCheck) {
    var stackFrames = _stacktraceJs["default"].getSync();

    var initiatingFunc = stackFrames[stackFrames.findIndex(function (s) {
      return s.functionName === "Object.get";
    }) + 1];
    var initiatingFuncNotLocal = !!initiatingFunc && initiatingFunc.fileName && (initiatingFunc.fileName.match(/\.\/~\/|\/node_modules\//) || initiatingFunc.fileName.match(/extension:\/\//));
    if (!!initiatingFuncNotLocal) return true;
  }

  return false;
}; // this function takes a reducer and returns 
// an augmented reducer that tracks redux usage


function generateReduxReport(global, rootReducer) {
  globalObjectCache = globalObjectCache || global;
  global.reduxReport = global.reduxReport || {
    accessedState: {},
    state: {},
    setOnChangeCallback: function setOnChangeCallback(cb) {
      global.reduxReport.onChangeCallback = (0, _debounce["default"])(cb, 10);
    },
    removeOnChangeCallback: function removeOnChangeCallback() {
      global.reduxReport.onChangeCallback = undefined;
    },
    setBreakpoint: function setBreakpoint(breakpoint) {
      if (!global.localStorage) return;
      global.localStorage.setItem(localStorageKey, breakpoint);
    },
    clearBreakpoint: function clearBreakpoint() {
      if (!global.localStorage) return;
      global.localStorage.setItem(localStorageKey, null);
    },
    generate: function generate() {
      global.reduxReport.__inProgress = true;
      var used = JSON.parse(JSON.stringify(this.accessedState));
      var stateCopy = JSON.parse(JSON.stringify(this.state));
      var unused = (0, _deepObjectDiff.diff)(stateCopy, used);
      replaceUndefinedWithNull(unused);
      var report = {
        used: used,
        unused: unused,
        stateCopy: stateCopy
      };
      global.reduxReport.__inProgress = false;
      return report;
    }
  };
  var makeProxy = (0, _trackObjectUse.createMakeProxyFunction)({
    shouldSkipProxy: shouldSkipProxy,
    accessedProperties: global.reduxReport.accessedState,
    getBreakpoint: function getBreakpoint() {
      return global.localStorage && global.localStorage.getItem(localStorageKey);
    },
    onChange: function onChange(stateLocation) {
      return global.reduxReport.onChangeCallback && global.reduxReport.onChangeCallback(stateLocation);
    }
  }); // this function replaces the previous root reducer
  // it will break if the DevTools.instrument() call came before generateReduxReport
  // in the compose order

  return function (prevState, action) {
    global.reduxReport.__reducerInProgress = true;
    var state = rootReducer(prevState, action);
    var proxiedState = makeProxy(state);
    global.reduxReport.__reducerInProgress = false;
    global.reduxReport.state = proxiedState;
    if (global.reduxReport.onChangeCallback) setTimeout(function () {
      return global.reduxReport.onChangeCallback("");
    }, 1);
    return proxiedState;
  };
} // "next" is either createStore or a wrapped version from another enhancer


var storeEnhancer = function storeEnhancer() {
  var global = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : window;
  return function (next) {
    return function (reducer) {
      var wrappedReducer = generateReduxReport(global, reducer);

      for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }

      var store = next.apply(void 0, [wrappedReducer].concat(args));
      return _objectSpread(_objectSpread({}, store), {}, {
        replaceReducer: function replaceReducer(nextReducer) {
          return generateReduxReport(global, nextReducer);
        }
      });
    };
  };
};

var _default = storeEnhancer;
exports["default"] = _default;