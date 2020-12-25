webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _Users_dannylodangel_Documents_repos_plat_weather_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/extends */ \"./node_modules/@babel/runtime/helpers/esm/extends.js\");\n/* harmony import */ var _Users_dannylodangel_Documents_repos_plat_weather_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _Users_dannylodangel_Documents_repos_plat_weather_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Users_dannylodangel_Documents_repos_plat_weather_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Users_dannylodangel_Documents_repos_plat_weather_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/layout */ \"./components/layout.tsx\");\n/* harmony import */ var _hooks_use_weather__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../hooks/use-weather */ \"./hooks/use-weather.ts\");\n/* harmony import */ var _components_spinner__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/spinner */ \"./components/spinner.tsx\");\n\n\n\n\nvar _this = undefined,\n    _jsxFileName = \"/Users/dannylodangel/Documents/repos/plat_weather/pages/index.tsx\",\n    _s2 = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;\n\n\n\n\n\nvar Index = function Index(_) {\n  _s2();\n\n  var _s = $RefreshSig$();\n\n  var _aproximateLocation = false;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])({\n    lat: 0,\n    lng: 0\n  }),\n      currentLocation = _useState[0],\n      setCurrentLocation = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])(),\n      weather = _useState2[0],\n      setWeather = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])(true),\n      loading = _useState3[0],\n      setLoading = _useState3[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useLayoutEffect\"])(_s(function () {\n    _s();\n\n    /*#__PURE__*/\n    Object(_Users_dannylodangel_Documents_repos_plat_weather_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__[\"default\"])( /*#__PURE__*/_Users_dannylodangel_Documents_repos_plat_weather_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee() {\n      return _Users_dannylodangel_Documents_repos_plat_weather_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              _context.next = 2;\n              return navigator.geolocation.getCurrentPosition(function (b) {\n                return setCurrentLocation({\n                  lat: b.coords.latitude,\n                  lng: b.coords.longitude\n                });\n              });\n\n            case 2:\n              return _context.abrupt(\"return\", _context.sent);\n\n            case 3:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee);\n    }));\n\n    if (currentLocation.lat === 0 && currentLocation.lng === 0) {\n      _aproximateLocation = true;\n      Object(_hooks_use_weather__WEBPACK_IMPORTED_MODULE_5__[\"useIPWeather\"])().then(function (result) {\n        return setCurrentLocation(result);\n      });\n    }\n\n    Object(_hooks_use_weather__WEBPACK_IMPORTED_MODULE_5__[\"useWeatherCordinates\"])(currentLocation).then(function (result) {\n      return setWeather(result);\n    });\n  }, \"54TbCV7Ho8g9rEtp9cVO4jBzpig=\", false, function () {\n    return [_hooks_use_weather__WEBPACK_IMPORTED_MODULE_5__[\"useIPWeather\"], _hooks_use_weather__WEBPACK_IMPORTED_MODULE_5__[\"useWeatherCordinates\"]];\n  }), [loading]);\n\n  if (loading) {\n    return __jsx(_components_spinner__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 36,\n        columnNumber: 12\n      }\n    });\n  }\n\n  return __jsx(_components_layout__WEBPACK_IMPORTED_MODULE_4__[\"default\"], Object(_Users_dannylodangel_Documents_repos_plat_weather_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({}, weather, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 39,\n      columnNumber: 10\n    }\n  }));\n};\n\n_s2(Index, \"+Kyys8B4JkZjqChslDCu7ds487U=\");\n\n_c = Index;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Index);\n\nvar _c;\n\n$RefreshReg$(_c, \"Index\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXgudHN4P2RiNzYiXSwibmFtZXMiOlsiSW5kZXgiLCJfIiwiX2Fwcm94aW1hdGVMb2NhdGlvbiIsInVzZVN0YXRlIiwibGF0IiwibG5nIiwiY3VycmVudExvY2F0aW9uIiwic2V0Q3VycmVudExvY2F0aW9uIiwid2VhdGhlciIsInNldFdlYXRoZXIiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsInVzZUxheW91dEVmZmVjdCIsIm5hdmlnYXRvciIsImdlb2xvY2F0aW9uIiwiZ2V0Q3VycmVudFBvc2l0aW9uIiwiYiIsImNvb3JkcyIsImxhdGl0dWRlIiwibG9uZ2l0dWRlIiwidXNlSVBXZWF0aGVyIiwidGhlbiIsInJlc3VsdCIsInVzZVdlYXRoZXJDb3JkaW5hdGVzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBO0FBRUE7QUFDQTtBQUVBOztBQUVBLElBQU1BLEtBQW9CLEdBQUcsU0FBdkJBLEtBQXVCLENBQUNDLENBQUQsRUFBTztBQUFBOztBQUFBOztBQUNsQyxNQUFJQyxtQkFBbUIsR0FBRyxLQUExQjs7QUFEa0Msa0JBRVlDLHNEQUFRLENBQWdCO0FBQ3BFQyxPQUFHLEVBQUUsQ0FEK0Q7QUFFcEVDLE9BQUcsRUFBRTtBQUYrRCxHQUFoQixDQUZwQjtBQUFBLE1BRTNCQyxlQUYyQjtBQUFBLE1BRVZDLGtCQUZVOztBQUFBLG1CQU1KSixzREFBUSxFQU5KO0FBQUEsTUFNM0JLLE9BTjJCO0FBQUEsTUFNbEJDLFVBTmtCOztBQUFBLG1CQU9KTixzREFBUSxDQUFDLElBQUQsQ0FQSjtBQUFBLE1BTzNCTyxPQVAyQjtBQUFBLE1BT2xCQyxVQVBrQjs7QUFTbENDLCtEQUFlLElBQUMsWUFBTTtBQUFBOztBQUNwQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUNRQyxTQUFTLENBQUNDLFdBQVYsQ0FBc0JDLGtCQUF0QixDQUF5QyxVQUFDQyxDQUFEO0FBQUEsdUJBQzdDVCxrQkFBa0IsQ0FBQztBQUNqQkgscUJBQUcsRUFBRVksQ0FBQyxDQUFDQyxNQUFGLENBQVNDLFFBREc7QUFFakJiLHFCQUFHLEVBQUVXLENBQUMsQ0FBQ0MsTUFBRixDQUFTRTtBQUZHLGlCQUFELENBRDJCO0FBQUEsZUFBekMsQ0FEUjs7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQVFBLFFBQUliLGVBQWUsQ0FBQ0YsR0FBaEIsS0FBd0IsQ0FBeEIsSUFBNkJFLGVBQWUsQ0FBQ0QsR0FBaEIsS0FBd0IsQ0FBekQsRUFBNEQ7QUFDMURILHlCQUFtQixHQUFHLElBQXRCO0FBQ0FrQiw2RUFBWSxHQUFHQyxJQUFmLENBQW9CLFVBQUNDLE1BQUQ7QUFBQSxlQUFZZixrQkFBa0IsQ0FBQ2UsTUFBRCxDQUE5QjtBQUFBLE9BQXBCO0FBQ0Q7O0FBRURDLG1GQUFvQixDQUFDakIsZUFBRCxDQUFwQixDQUFzQ2UsSUFBdEMsQ0FBMkMsVUFBQ0MsTUFBRDtBQUFBLGFBQVliLFVBQVUsQ0FBQ2EsTUFBRCxDQUF0QjtBQUFBLEtBQTNDO0FBQ0QsR0FmYztBQUFBLFlBV1hGLCtEQVhXLEVBY2JHLHVFQWRhO0FBQUEsTUFlWixDQUFDYixPQUFELENBZlksQ0FBZjs7QUFpQkEsTUFBSUEsT0FBSixFQUFhO0FBQ1gsV0FBTyxNQUFDLDJEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFBUDtBQUNEOztBQUVELFNBQU8sTUFBQywwREFBRCx1SkFBWUYsT0FBWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQVA7QUFDRCxDQS9CRDs7SUFBTVIsSzs7S0FBQUEsSztBQWlDU0Esb0VBQWYiLCJmaWxlIjoiLi9wYWdlcy9pbmRleC50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBCb3gsIEltYWdlIH0gZnJvbSBcImdyb21tZXRcIjtcbmltcG9ydCBMYXlvdXQgZnJvbSBcIi4uL2NvbXBvbmVudHMvbGF5b3V0XCI7XG5pbXBvcnQgeyBOZXh0UGFnZSB9IGZyb20gXCJuZXh0XCI7XG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZUxheW91dEVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHVzZUlQV2VhdGhlciwgdXNlV2VhdGhlckNvcmRpbmF0ZXMgfSBmcm9tIFwiLi4vaG9va3MvdXNlLXdlYXRoZXJcIjtcbmltcG9ydCB7IEdlb0NvcmRpbmF0ZXMgfSBmcm9tIFwiLi4vaW50ZXJmYWNlcy90eXBlc1wiO1xuaW1wb3J0IFNwaW5uZXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvc3Bpbm5lclwiO1xuXG5jb25zdCBJbmRleDogTmV4dFBhZ2U8YW55PiA9IChfKSA9PiB7XG4gIGxldCBfYXByb3hpbWF0ZUxvY2F0aW9uID0gZmFsc2U7XG4gIGNvbnN0IFtjdXJyZW50TG9jYXRpb24sIHNldEN1cnJlbnRMb2NhdGlvbl0gPSB1c2VTdGF0ZTxHZW9Db3JkaW5hdGVzPih7XG4gICAgbGF0OiAwLFxuICAgIGxuZzogMCxcbiAgfSk7XG4gIGNvbnN0IFt3ZWF0aGVyLCBzZXRXZWF0aGVyXSA9IHVzZVN0YXRlPGFueT4oKTtcbiAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUodHJ1ZSk7XG5cbiAgdXNlTGF5b3V0RWZmZWN0KCgpID0+IHtcbiAgICBhc3luYyAoKSA9PlxuICAgICAgYXdhaXQgbmF2aWdhdG9yLmdlb2xvY2F0aW9uLmdldEN1cnJlbnRQb3NpdGlvbigoYikgPT5cbiAgICAgICAgc2V0Q3VycmVudExvY2F0aW9uKHtcbiAgICAgICAgICBsYXQ6IGIuY29vcmRzLmxhdGl0dWRlLFxuICAgICAgICAgIGxuZzogYi5jb29yZHMubG9uZ2l0dWRlLFxuICAgICAgICB9KVxuICAgICAgKTtcblxuICAgIGlmIChjdXJyZW50TG9jYXRpb24ubGF0ID09PSAwICYmIGN1cnJlbnRMb2NhdGlvbi5sbmcgPT09IDApIHtcbiAgICAgIF9hcHJveGltYXRlTG9jYXRpb24gPSB0cnVlO1xuICAgICAgdXNlSVBXZWF0aGVyKCkudGhlbigocmVzdWx0KSA9PiBzZXRDdXJyZW50TG9jYXRpb24ocmVzdWx0KSk7XG4gICAgfVxuXG4gICAgdXNlV2VhdGhlckNvcmRpbmF0ZXMoY3VycmVudExvY2F0aW9uKS50aGVuKChyZXN1bHQpID0+IHNldFdlYXRoZXIocmVzdWx0KSk7XG4gIH0sIFtsb2FkaW5nXSk7XG5cbiAgaWYgKGxvYWRpbmcpIHtcbiAgICByZXR1cm4gPFNwaW5uZXIgLz47XG4gIH1cblxuICByZXR1cm4gPExheW91dCB7Li4ud2VhdGhlcn0+PC9MYXlvdXQ+O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSW5kZXg7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.tsx\n");

/***/ })

})