webpackHotUpdate_N_E("pages/index",{

/***/ "./components/spinner.tsx":
/*!********************************!*\
  !*** ./components/spinner.tsx ***!
  \********************************/
/*! exports provided: Spinner, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Spinner\", function() { return Spinner; });\n/* harmony import */ var _Users_dannylodangel_Documents_repos_plat_weather_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ \"./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js\");\n/* harmony import */ var _Users_dannylodangel_Documents_repos_plat_weather_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/extends */ \"./node_modules/@babel/runtime/helpers/esm/extends.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n\n\n\nvar _this = undefined,\n    _jsxFileName = \"/Users/dannylodangel/Documents/repos/plat_weather/components/spinner.tsx\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;\n\nfunction _templateObject() {\n  var data = Object(_Users_dannylodangel_Documents_repos_plat_weather_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n  stroke: blueviolet;\\n  animation: rotate 1s linear infinite;\\n  margin: \", \";\\n  width: \", \";\\n  height: \", \";\\n  & .path {\\n    stroke: \\\"black\\\";\\n    stroke-linecap: round;\\n    animation: dash 1.5s ease-in-out infinite;\\n  }\\n  @keyframes rotate {\\n    100% {\\n      transform: rotate(360deg);\\n    }\\n  }\\n  @keyframes dash {\\n    0% {\\n      stroke-dasharray: 1, 150;\\n      stroke-dashoffset: 0;\\n    }\\n    50% {\\n      stroke-dasharray: 90, 150;\\n      stroke-dashoffset: -35;\\n    }\\n    100% {\\n      stroke-dasharray: 90, 150;\\n      stroke-dashoffset: -124;\\n    }\\n  }\\n\"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\n\n\nvar Spinner = function Spinner(props) {\n  return __jsx(StyledSpinner, Object(_Users_dannylodangel_Documents_repos_plat_weather_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__[\"default\"])({\n    viewBox: \"0 0 50 50\"\n  }, props, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 12,\n      columnNumber: 5\n    }\n  }), __jsx(\"circle\", {\n    className: \"path\",\n    cx: \"25\",\n    cy: \"25\",\n    r: \"20\",\n    fill: \"none\",\n    strokeWidth: \"2\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 13,\n      columnNumber: 7\n    }\n  }));\n};\n_c = Spinner;\nvar StyledSpinner = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].svg(_templateObject(), function (props) {\n  return props.plain ? \"0px\" : \"40px\";\n}, function (props) {\n  return props.size || \"50px\";\n}, function (props) {\n  return props.size || \"50px\";\n});\n_c2 = StyledSpinner;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Spinner);\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"Spinner\");\n$RefreshReg$(_c2, \"StyledSpinner\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9zcGlubmVyLnRzeD81YmM4Il0sIm5hbWVzIjpbIlNwaW5uZXIiLCJwcm9wcyIsIlN0eWxlZFNwaW5uZXIiLCJzdHlsZWQiLCJzdmciLCJwbGFpbiIsInNpemUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBUU8sSUFBTUEsT0FBa0IsR0FBRyxTQUFyQkEsT0FBcUIsQ0FBQ0MsS0FBRCxFQUFXO0FBQzNDLFNBQ0UsTUFBQyxhQUFEO0FBQWUsV0FBTyxFQUFDO0FBQXZCLEtBQXVDQSxLQUF2QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BQ0U7QUFDRSxhQUFTLEVBQUMsTUFEWjtBQUVFLE1BQUUsRUFBQyxJQUZMO0FBR0UsTUFBRSxFQUFDLElBSEw7QUFJRSxLQUFDLEVBQUMsSUFKSjtBQUtFLFFBQUksRUFBQyxNQUxQO0FBTUUsZUFBVyxFQUFDLEdBTmQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLENBREY7QUFZRCxDQWJNO0tBQU1ELE87QUFlYixJQUFNRSxhQUFhLEdBQUdDLHlEQUFNLENBQUNDLEdBQVYsb0JBR1AsVUFBQ0gsS0FBRDtBQUFBLFNBQVlBLEtBQUssQ0FBQ0ksS0FBTixHQUFjLEtBQWQsR0FBc0IsTUFBbEM7QUFBQSxDQUhPLEVBSVIsVUFBQ0osS0FBRDtBQUFBLFNBQVdBLEtBQUssQ0FBQ0ssSUFBTixJQUFjLE1BQXpCO0FBQUEsQ0FKUSxFQUtQLFVBQUNMLEtBQUQ7QUFBQSxTQUFXQSxLQUFLLENBQUNLLElBQU4sSUFBYyxNQUF6QjtBQUFBLENBTE8sQ0FBbkI7TUFBTUosYTtBQWdDU0Ysc0VBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL3NwaW5uZXIudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IEZDIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xuXG50eXBlIFByb3BzID0ge1xuICBwbGFpbj86IGJvb2xlYW47XG4gIGNvbG9yPzogc3RyaW5nO1xuICBzaXplPzogc3RyaW5nO1xufTtcblxuZXhwb3J0IGNvbnN0IFNwaW5uZXI6IEZDPFByb3BzPiA9IChwcm9wcykgPT4ge1xuICByZXR1cm4gKFxuICAgIDxTdHlsZWRTcGlubmVyIHZpZXdCb3g9XCIwIDAgNTAgNTBcIiB7Li4ucHJvcHN9PlxuICAgICAgPGNpcmNsZVxuICAgICAgICBjbGFzc05hbWU9XCJwYXRoXCJcbiAgICAgICAgY3g9XCIyNVwiXG4gICAgICAgIGN5PVwiMjVcIlxuICAgICAgICByPVwiMjBcIlxuICAgICAgICBmaWxsPVwibm9uZVwiXG4gICAgICAgIHN0cm9rZVdpZHRoPVwiMlwiXG4gICAgICAvPlxuICAgIDwvU3R5bGVkU3Bpbm5lcj5cbiAgKTtcbn07XG5cbmNvbnN0IFN0eWxlZFNwaW5uZXIgPSBzdHlsZWQuc3ZnPFByb3BzPmBcbiAgc3Ryb2tlOiBibHVldmlvbGV0O1xuICBhbmltYXRpb246IHJvdGF0ZSAxcyBsaW5lYXIgaW5maW5pdGU7XG4gIG1hcmdpbjogJHsocHJvcHMpID0+IChwcm9wcy5wbGFpbiA/IFwiMHB4XCIgOiBcIjQwcHhcIil9O1xuICB3aWR0aDogJHsocHJvcHMpID0+IHByb3BzLnNpemUgfHwgXCI1MHB4XCJ9O1xuICBoZWlnaHQ6ICR7KHByb3BzKSA9PiBwcm9wcy5zaXplIHx8IFwiNTBweFwifTtcbiAgJiAucGF0aCB7XG4gICAgc3Ryb2tlOiBcImJsYWNrXCI7XG4gICAgc3Ryb2tlLWxpbmVjYXA6IHJvdW5kO1xuICAgIGFuaW1hdGlvbjogZGFzaCAxLjVzIGVhc2UtaW4tb3V0IGluZmluaXRlO1xuICB9XG4gIEBrZXlmcmFtZXMgcm90YXRlIHtcbiAgICAxMDAlIHtcbiAgICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XG4gICAgfVxuICB9XG4gIEBrZXlmcmFtZXMgZGFzaCB7XG4gICAgMCUge1xuICAgICAgc3Ryb2tlLWRhc2hhcnJheTogMSwgMTUwO1xuICAgICAgc3Ryb2tlLWRhc2hvZmZzZXQ6IDA7XG4gICAgfVxuICAgIDUwJSB7XG4gICAgICBzdHJva2UtZGFzaGFycmF5OiA5MCwgMTUwO1xuICAgICAgc3Ryb2tlLWRhc2hvZmZzZXQ6IC0zNTtcbiAgICB9XG4gICAgMTAwJSB7XG4gICAgICBzdHJva2UtZGFzaGFycmF5OiA5MCwgMTUwO1xuICAgICAgc3Ryb2tlLWRhc2hvZmZzZXQ6IC0xMjQ7XG4gICAgfVxuICB9XG5gO1xuXG5leHBvcnQgZGVmYXVsdCBTcGlubmVyO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/spinner.tsx\n");

/***/ }),

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _Users_dannylodangel_Documents_repos_plat_weather_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/extends */ \"./node_modules/@babel/runtime/helpers/esm/extends.js\");\n/* harmony import */ var _Users_dannylodangel_Documents_repos_plat_weather_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _Users_dannylodangel_Documents_repos_plat_weather_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Users_dannylodangel_Documents_repos_plat_weather_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Users_dannylodangel_Documents_repos_plat_weather_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/layout */ \"./components/layout.tsx\");\n/* harmony import */ var _hooks_use_weather__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../hooks/use-weather */ \"./hooks/use-weather.ts\");\n/* harmony import */ var _components_spinner__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/spinner */ \"./components/spinner.tsx\");\n\n\n\n\nvar _this = undefined,\n    _jsxFileName = \"/Users/dannylodangel/Documents/repos/plat_weather/pages/index.tsx\",\n    _s2 = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;\n\n\n\n\n\nvar Index = function Index(_) {\n  _s2();\n\n  var _s = $RefreshSig$();\n\n  var _aproximateLocation = false;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])({\n    lat: 0,\n    lng: 0\n  }),\n      currentLocation = _useState[0],\n      setCurrentLocation = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])(),\n      weather = _useState2[0],\n      setWeather = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])(true),\n      loading = _useState3[0],\n      setLoading = _useState3[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useEffect\"])(_s(function () {\n    _s();\n\n    /*#__PURE__*/\n    Object(_Users_dannylodangel_Documents_repos_plat_weather_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__[\"default\"])( /*#__PURE__*/_Users_dannylodangel_Documents_repos_plat_weather_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee() {\n      return _Users_dannylodangel_Documents_repos_plat_weather_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              _context.next = 2;\n              return navigator.geolocation.getCurrentPosition(function (b) {\n                return setCurrentLocation({\n                  lat: b.coords.latitude,\n                  lng: b.coords.longitude\n                });\n              });\n\n            case 2:\n              return _context.abrupt(\"return\", _context.sent);\n\n            case 3:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee);\n    }));\n\n    if (currentLocation.lat === 0 && currentLocation.lng === 0) {\n      _aproximateLocation = true;\n      Object(_hooks_use_weather__WEBPACK_IMPORTED_MODULE_5__[\"useIPWeather\"])().then(function (result) {\n        return setCurrentLocation(result);\n      });\n    }\n\n    Object(_hooks_use_weather__WEBPACK_IMPORTED_MODULE_5__[\"useWeatherCordinates\"])(currentLocation).then(function (result) {\n      return setWeather(result);\n    });\n  }, \"54TbCV7Ho8g9rEtp9cVO4jBzpig=\", false, function () {\n    return [_hooks_use_weather__WEBPACK_IMPORTED_MODULE_5__[\"useIPWeather\"], _hooks_use_weather__WEBPACK_IMPORTED_MODULE_5__[\"useWeatherCordinates\"]];\n  }), []);\n\n  if (weather === undefined) {\n    return __jsx(_components_spinner__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 36,\n        columnNumber: 12\n      }\n    });\n  }\n\n  return __jsx(_components_layout__WEBPACK_IMPORTED_MODULE_4__[\"default\"], Object(_Users_dannylodangel_Documents_repos_plat_weather_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({}, weather, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 39,\n      columnNumber: 10\n    }\n  }));\n};\n\n_s2(Index, \"3/KKT+z3/j5xp1RHP9feBfaePbA=\");\n\n_c = Index;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Index);\n\nvar _c;\n\n$RefreshReg$(_c, \"Index\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXgudHN4P2RiNzYiXSwibmFtZXMiOlsiSW5kZXgiLCJfIiwiX2Fwcm94aW1hdGVMb2NhdGlvbiIsInVzZVN0YXRlIiwibGF0IiwibG5nIiwiY3VycmVudExvY2F0aW9uIiwic2V0Q3VycmVudExvY2F0aW9uIiwid2VhdGhlciIsInNldFdlYXRoZXIiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsInVzZUVmZmVjdCIsIm5hdmlnYXRvciIsImdlb2xvY2F0aW9uIiwiZ2V0Q3VycmVudFBvc2l0aW9uIiwiYiIsImNvb3JkcyIsImxhdGl0dWRlIiwibG9uZ2l0dWRlIiwidXNlSVBXZWF0aGVyIiwidGhlbiIsInJlc3VsdCIsInVzZVdlYXRoZXJDb3JkaW5hdGVzIiwidW5kZWZpbmVkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBO0FBRUE7QUFDQTtBQUVBOztBQUVBLElBQU1BLEtBQW9CLEdBQUcsU0FBdkJBLEtBQXVCLENBQUNDLENBQUQsRUFBTztBQUFBOztBQUFBOztBQUNsQyxNQUFJQyxtQkFBbUIsR0FBRyxLQUExQjs7QUFEa0Msa0JBRVlDLHNEQUFRLENBQWdCO0FBQ3BFQyxPQUFHLEVBQUUsQ0FEK0Q7QUFFcEVDLE9BQUcsRUFBRTtBQUYrRCxHQUFoQixDQUZwQjtBQUFBLE1BRTNCQyxlQUYyQjtBQUFBLE1BRVZDLGtCQUZVOztBQUFBLG1CQU1KSixzREFBUSxFQU5KO0FBQUEsTUFNM0JLLE9BTjJCO0FBQUEsTUFNbEJDLFVBTmtCOztBQUFBLG1CQU9KTixzREFBUSxDQUFDLElBQUQsQ0FQSjtBQUFBLE1BTzNCTyxPQVAyQjtBQUFBLE1BT2xCQyxVQVBrQjs7QUFTbENDLHlEQUFTLElBQUMsWUFBTTtBQUFBOztBQUNkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBQ1FDLFNBQVMsQ0FBQ0MsV0FBVixDQUFzQkMsa0JBQXRCLENBQXlDLFVBQUNDLENBQUQ7QUFBQSx1QkFDN0NULGtCQUFrQixDQUFDO0FBQ2pCSCxxQkFBRyxFQUFFWSxDQUFDLENBQUNDLE1BQUYsQ0FBU0MsUUFERztBQUVqQmIscUJBQUcsRUFBRVcsQ0FBQyxDQUFDQyxNQUFGLENBQVNFO0FBRkcsaUJBQUQsQ0FEMkI7QUFBQSxlQUF6QyxDQURSOztBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBUUEsUUFBSWIsZUFBZSxDQUFDRixHQUFoQixLQUF3QixDQUF4QixJQUE2QkUsZUFBZSxDQUFDRCxHQUFoQixLQUF3QixDQUF6RCxFQUE0RDtBQUMxREgseUJBQW1CLEdBQUcsSUFBdEI7QUFDQWtCLDZFQUFZLEdBQUdDLElBQWYsQ0FBb0IsVUFBQ0MsTUFBRDtBQUFBLGVBQVlmLGtCQUFrQixDQUFDZSxNQUFELENBQTlCO0FBQUEsT0FBcEI7QUFDRDs7QUFFREMsbUZBQW9CLENBQUNqQixlQUFELENBQXBCLENBQXNDZSxJQUF0QyxDQUEyQyxVQUFDQyxNQUFEO0FBQUEsYUFBWWIsVUFBVSxDQUFDYSxNQUFELENBQXRCO0FBQUEsS0FBM0M7QUFDRCxHQWZRO0FBQUEsWUFXTEYsK0RBWEssRUFjUEcsdUVBZE87QUFBQSxNQWVOLEVBZk0sQ0FBVDs7QUFpQkEsTUFBSWYsT0FBTyxLQUFLZ0IsU0FBaEIsRUFBMkI7QUFDekIsV0FBTyxNQUFDLDJEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFBUDtBQUNEOztBQUVELFNBQU8sTUFBQywwREFBRCx1SkFBWWhCLE9BQVo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFQO0FBQ0QsQ0EvQkQ7O0lBQU1SLEs7O0tBQUFBLEs7QUFpQ1NBLG9FQUFmIiwiZmlsZSI6Ii4vcGFnZXMvaW5kZXgudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQm94LCBJbWFnZSB9IGZyb20gXCJncm9tbWV0XCI7XG5pbXBvcnQgTGF5b3V0IGZyb20gXCIuLi9jb21wb25lbnRzL2xheW91dFwiO1xuaW1wb3J0IHsgTmV4dFBhZ2UgfSBmcm9tIFwibmV4dFwiO1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdXNlSVBXZWF0aGVyLCB1c2VXZWF0aGVyQ29yZGluYXRlcyB9IGZyb20gXCIuLi9ob29rcy91c2Utd2VhdGhlclwiO1xuaW1wb3J0IHsgR2VvQ29yZGluYXRlcyB9IGZyb20gXCIuLi9pbnRlcmZhY2VzL3R5cGVzXCI7XG5pbXBvcnQgU3Bpbm5lciBmcm9tIFwiLi4vY29tcG9uZW50cy9zcGlubmVyXCI7XG5cbmNvbnN0IEluZGV4OiBOZXh0UGFnZTxhbnk+ID0gKF8pID0+IHtcbiAgbGV0IF9hcHJveGltYXRlTG9jYXRpb24gPSBmYWxzZTtcbiAgY29uc3QgW2N1cnJlbnRMb2NhdGlvbiwgc2V0Q3VycmVudExvY2F0aW9uXSA9IHVzZVN0YXRlPEdlb0NvcmRpbmF0ZXM+KHtcbiAgICBsYXQ6IDAsXG4gICAgbG5nOiAwLFxuICB9KTtcbiAgY29uc3QgW3dlYXRoZXIsIHNldFdlYXRoZXJdID0gdXNlU3RhdGU8YW55PigpO1xuICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZSh0cnVlKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGFzeW5jICgpID0+XG4gICAgICBhd2FpdCBuYXZpZ2F0b3IuZ2VvbG9jYXRpb24uZ2V0Q3VycmVudFBvc2l0aW9uKChiKSA9PlxuICAgICAgICBzZXRDdXJyZW50TG9jYXRpb24oe1xuICAgICAgICAgIGxhdDogYi5jb29yZHMubGF0aXR1ZGUsXG4gICAgICAgICAgbG5nOiBiLmNvb3Jkcy5sb25naXR1ZGUsXG4gICAgICAgIH0pXG4gICAgICApO1xuXG4gICAgaWYgKGN1cnJlbnRMb2NhdGlvbi5sYXQgPT09IDAgJiYgY3VycmVudExvY2F0aW9uLmxuZyA9PT0gMCkge1xuICAgICAgX2Fwcm94aW1hdGVMb2NhdGlvbiA9IHRydWU7XG4gICAgICB1c2VJUFdlYXRoZXIoKS50aGVuKChyZXN1bHQpID0+IHNldEN1cnJlbnRMb2NhdGlvbihyZXN1bHQpKTtcbiAgICB9XG5cbiAgICB1c2VXZWF0aGVyQ29yZGluYXRlcyhjdXJyZW50TG9jYXRpb24pLnRoZW4oKHJlc3VsdCkgPT4gc2V0V2VhdGhlcihyZXN1bHQpKTtcbiAgfSwgW10pO1xuXG4gIGlmICh3ZWF0aGVyID09PSB1bmRlZmluZWQpIHtcbiAgICByZXR1cm4gPFNwaW5uZXIgLz47XG4gIH1cblxuICByZXR1cm4gPExheW91dCB7Li4ud2VhdGhlcn0+PC9MYXlvdXQ+O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSW5kZXg7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.tsx\n");

/***/ })

})