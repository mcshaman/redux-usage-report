"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactJsonTree = require("react-json-tree");

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _jsxRuntime = require("react/jsx-runtime");

var _templateObject, _templateObject2, _templateObject3;

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

var FadeSpan = _styledComponents["default"].span(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  opacity: ", ";\n  font-size: 16.5px;\n  line-height: 1.4;\n"])), function (props) {
  return props.fullOpacity ? 1 : 0.3;
});

var KeySpan = (0, _styledComponents["default"])(FadeSpan)(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  position: relative;\n  color: ", ";\n  font-weight: ", ";\n  cursor: pointer;\n"])), function (props) {
  return props.breakpointActive ? "red" : null;
}, function (props) {
  return props.breakpointActive ? "bold" : "normal";
});

var InfoContainer = _styledComponents["default"].div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  margin-top: 1.5rem;\n  margin-bottom: 1rem;\n"])));

var ReduxTree = /*#__PURE__*/function (_Component) {
  _inherits(ReduxTree, _Component);

  var _super = _createSuper(ReduxTree);

  function ReduxTree() {
    var _this;

    _classCallCheck(this, ReduxTree);

    for (var _len = arguments.length, _args = new Array(_len), _key = 0; _key < _len; _key++) {
      _args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(_args));

    _defineProperty(_assertThisInitialized(_this), "setBreakpointOnClick", function (breakpointPath) {
      return function (e) {
        if (!e.shiftKey) return;

        if (breakpointPath === _this.props.currentBreakpoint) {
          _this.props.setBreakpoint("");
        } else {
          _this.props.setBreakpoint(breakpointPath);
        }

        e.stopPropagation();
      };
    });

    _defineProperty(_assertThisInitialized(_this), "getItemString", function (type, data, itemType, itemString) {
      return /*#__PURE__*/(0, _jsxRuntime.jsx)(FadeSpan, {
        children: itemType
      });
    });

    _defineProperty(_assertThisInitialized(_this), "valueRenderer", function (val) {
      for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
        args[_key2 - 1] = arguments[_key2];
      }

      var isUsed = _this.isUsed(args.slice(1).reverse());

      return /*#__PURE__*/(0, _jsxRuntime.jsx)(FadeSpan, {
        fullOpacity: isUsed,
        children: val
      });
    });

    _defineProperty(_assertThisInitialized(_this), "labelRenderer", function (keyPath, type) {
      var isUsed = _this.isUsed(keyPath.slice().reverse());

      var breakpointPath = keyPath.slice().reverse().join(".");
      var breakpointActive = breakpointPath === _this.props.currentBreakpoint;
      return /*#__PURE__*/(0, _jsxRuntime.jsx)(KeySpan, {
        fullOpacity: isUsed,
        breakpointActive: breakpointActive,
        onClick: _this.setBreakpointOnClick(breakpointPath),
        children: keyPath[0]
      });
    });

    return _this;
  }

  _createClass(ReduxTree, [{
    key: "isUsed",
    value: function isUsed(path) {
      var used = this.props.used;

      for (var i = 0; i < path.length; i++) {
        used = used[path[i]]; // null is used as placeholders in arrays

        if (used === undefined || used === null) return false;
      }

      return true;
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          used = _this$props.used,
          stateCopy = _this$props.stateCopy,
          theme = _this$props.theme,
          currentBreakpoint = _this$props.currentBreakpoint;
      var usedLength = JSON.stringify(used).length;
      var totalLength = JSON.stringify(stateCopy).length;
      var percentUsed = usedLength > 2 ? "".concat(Math.round(usedLength / totalLength * 100), "%") : "N/A";
      return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
        children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(InfoContainer, {
          children: ["Estimated percentage used: ", /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
            style: {
              color: theme.base0D
            },
            children: percentUsed
          })]
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactJsonTree.JSONTree, {
          data: stateCopy,
          hideRoot: true,
          theme: theme,
          invertTheme: false,
          getItemString: this.getItemString,
          valueRenderer: this.valueRenderer,
          labelRenderer: this.labelRenderer // force re-rendering when breakpoint changes
          ,
          currentBreakpoint: currentBreakpoint // force re-rendering when "used" report key changes
          ,
          used: used
        })]
      });
    }
  }]);

  return ReduxTree;
}(_react.Component);

_defineProperty(ReduxTree, "propTypes", {
  theme: _propTypes["default"].object.isRequired,
  currentBreakpoint: _propTypes["default"].string,
  setBreakpoint: _propTypes["default"].func.isRequired,
  used: _propTypes["default"].object.isRequired,
  stateCopy: _propTypes["default"].object.isRequired
});

var _default = ReduxTree;
exports["default"] = _default;