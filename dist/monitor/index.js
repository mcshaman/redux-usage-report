"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _isEqual = _interopRequireDefault(require("lodash/isEqual"));

var _theme = _interopRequireDefault(require("./theme"));

var _Info = _interopRequireDefault(require("./Info"));

var _ReduxTree = _interopRequireDefault(require("./ReduxTree"));

var _jsxRuntime = require("react/jsx-runtime");

var _templateObject, _templateObject2, _templateObject3, _templateObject4;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var localStorageKey = "reduxUsageReportBreakpoints";

var Container = _styledComponents["default"].div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  background-color: ", ";\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  overflow-y: auto;\n  font-size: 16px;\n  font-weight: normal;\n  color: ", ";\n\n  p {\n    line-height: 1.5;\n  }\n\n  a {\n    color: ", ";\n    font-weight: bold;\n    text-decoration: none;\n    &:hover,\n    &:focus {\n      text-decoration: underline;\n    }\n  }\n"])), function (props) {
  return props.theme.base00;
}, function (props) {
  return props.theme.base05;
}, function (props) {
  return props.theme.base0D;
});

var TabContainer = _styledComponents["default"].ul(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  display: flex;\n  padding: 0;\n  margin: 0;\n  list-style: none;\n  li {\n    flex: 1;\n  }\n  a {\n    font-weight: normal;\n  }\n"])));

var Tab = _styledComponents["default"].a(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  display: block;\n  text-decoration: none !important;\n  text-align: center;\n  font-weight: ", ";\n  background-color: ", ";\n  padding: 1rem;\n  color: ", ";\n  border-bottom: 3px solid transparent;\n  border-color: ", ";\n  background-color: ", ";\n  &:hover {\n    background-color: ", ";\n  }\n"])), function (props) {
  return props.active ? "bold" : "normal";
}, function (props) {
  return "fade-out(".concat(props.theme.base07, ", 0.9)");
}, function (props) {
  return props.active ? "".concat(props.theme.base07, " !important") : props.theme.base0D;
}, function (props) {
  return props.active ? props.theme.base0D : props.theme.base02;
}, function (props) {
  return props.active ? "hsla(0, 0%, 100%, 0.08)" : null;
}, function (props) {
  return props.active ? "hsla(0, 0%, 100%, 0.08)" : "hsla(0, 0%, 100%, 0.03)";
});

var ContentContainer = _styledComponents["default"].div(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  padding: 0 1.5rem 0 1.5rem;\n"])));

var ReduxUsageMonitor = /*#__PURE__*/function (_Component) {
  _inherits(ReduxUsageMonitor, _Component);

  var _super = _createSuper(ReduxUsageMonitor);

  function ReduxUsageMonitor() {
    var _this;

    _classCallCheck(this, ReduxUsageMonitor);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "state", {
      showInfo: false,
      currentBreakpoint: localStorage[localStorageKey],
      used: {},
      stateCopy: {}
    });

    _defineProperty(_assertThisInitialized(_this), "updateReport", function () {
      var report = window.reduxReport.generate();
      if ((0, _isEqual["default"])(report.used, _this.state.used) && (0, _isEqual["default"])(report.stateCopy, _this.state.stateCopy)) return;

      _this.setState({
        used: report.used,
        stateCopy: report.stateCopy
      });
    });

    _defineProperty(_assertThisInitialized(_this), "setBreakpoint", function (breakpointPath) {
      window.reduxReport.setBreakpoint(breakpointPath);

      _this.setState({
        currentBreakpoint: breakpointPath
      });
    });

    _defineProperty(_assertThisInitialized(_this), "showInfo", function () {
      _this.setState({
        showInfo: true
      });
    });

    _defineProperty(_assertThisInitialized(_this), "hideInfo", function () {
      _this.setState({
        showInfo: false
      });
    });

    return _this;
  }

  _createClass(ReduxUsageMonitor, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.updateReport(); // not sure why this bind is necessary

      window.reduxReport.setOnChangeCallback(this.updateReport.bind(this));
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      window.reduxReport.removeOnChangeCallback();
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/(0, _jsxRuntime.jsxs)(Container, {
        theme: _theme["default"],
        children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(TabContainer, {
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("li", {
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)(Tab, {
              href: "#",
              onClick: this.hideInfo,
              active: !this.state.showInfo,
              theme: _theme["default"],
              children: "Redux Usage"
            })
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)("li", {
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)(Tab, {
              href: "#",
              onClick: this.showInfo,
              active: this.state.showInfo,
              theme: _theme["default"],
              children: "More Info"
            })
          })]
        }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(ContentContainer, {
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
            style: {
              display: this.state.showInfo ? "block" : "none"
            },
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Info["default"], {
              theme: _theme["default"],
              currentBreakpoint: this.state.currentBreakpoint,
              setBreakpoint: this.setBreakpoint,
              show: this.state.showInfo,
              used: this.state.used,
              stateCopy: this.state.stateCopy
            })
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
            style: {
              display: this.state.showInfo ? "none" : "block"
            },
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_ReduxTree["default"], {
              theme: _theme["default"],
              currentBreakpoint: this.state.currentBreakpoint,
              setBreakpoint: this.setBreakpoint,
              used: this.state.used,
              stateCopy: this.state.stateCopy
            })
          })]
        })]
      });
    }
  }]);

  return ReduxUsageMonitor;
}(_react.Component);

_defineProperty(ReduxUsageMonitor, "propTypes", {
  computedStates: _propTypes["default"].array
});

_defineProperty(ReduxUsageMonitor, "update", function () {});

var _default = ReduxUsageMonitor;
exports["default"] = _default;