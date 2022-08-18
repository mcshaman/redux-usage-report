"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _jsxRuntime = require("react/jsx-runtime");

var _templateObject, _templateObject2, _templateObject3;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var propTypes = {
  currentBreakpoint: _propTypes["default"].string,
  setBreakpoint: _propTypes["default"].func.isRequired,
  theme: _propTypes["default"].object.isRequired
};

var Header = _styledComponents["default"].h3(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  font-size: 1.1rem;\n  margin-top: 1.5rem;\n  line-height: 1.3;\n  margin-bottom: 1rem;\n  font-weight: bold;\n  color: ", ";\n"])), function (props) {
  return props.theme.base05;
});

var Button = _styledComponents["default"].button(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  margin: 0 0 1rem 0;\n  padding: 0;\n  border: 0;\n  border-radius: 3px;\n  background: none;\n  font-size: 100%;\n  vertical-align: baseline;\n  font-family: inherit;\n  font-weight: inherit;\n  color: ", ";\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n  -webkit-font-smoothing: antialiased;\n  background-color: ", ";\n  padding: 8px 12px;\n  font-weight: bold;\n  cursor: pointer;\n  &:hover,\n  &:focus {\n    background-color: ", ";\n  }\n"])), function (props) {
  return props.theme.base00;
}, function (props) {
  return props.theme.base0D;
}, function (props) {
  return props.theme.base0D;
});

var SpacingWrapper = _styledComponents["default"].div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  margin-top: 1rem;\n  margin-bottom: 1rem;\n"])));

var Info = function Info(_ref) {
  var currentBreakpoint = _ref.currentBreakpoint,
      setBreakpoint = _ref.setBreakpoint,
      theme = _ref.theme;

  var removeBreakpoint = function removeBreakpoint() {
    return setBreakpoint("");
  };

  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(Header, {
      theme: theme,
      children: "About this tool"
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("p", {
        children: ["This monitor shows you a view of your Redux store based on what parts of it your code has actually touched. Values that have not been accessed are faded out. To learn more, check out", " ", /*#__PURE__*/(0, _jsxRuntime.jsx)("a", {
          href: "https://github.com/aholachek/redux-usage-report#redux-usage-report",
          children: "the README."
        })]
      })
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(Header, {
      theme: theme,
      children: "Setting a breakpoint"
    }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      children: [!!currentBreakpoint && /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
        children: ["There is currently a breakpoint set at", " ", /*#__PURE__*/(0, _jsxRuntime.jsx)(SpacingWrapper, {
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)("pre", {
            style: {
              maxWidth: "100%",
              overflowY: "scroll"
            },
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)("code", {
              children: currentBreakpoint
            })
          })
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(Button, {
          onClick: removeBreakpoint,
          theme: theme,
          children: "Remove breakpoint"
        })]
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("p", {
        children: "Shift + click a key in the \"Redux Usage\" view to set a breakpoint."
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("p", {
        children: "You can reload the page with your devtools open and execution will stop whenever that value in your store is accessed by your app."
      })]
    })]
  });
};

Info.propTypes = propTypes;
var _default = Info;
exports["default"] = _default;