webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _Users_dannylodangel_Documents_repos_plat_weather_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/extends */ \"./node_modules/@babel/runtime/helpers/esm/extends.js\");\n/* harmony import */ var _Users_dannylodangel_Documents_repos_plat_weather_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _Users_dannylodangel_Documents_repos_plat_weather_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Users_dannylodangel_Documents_repos_plat_weather_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Users_dannylodangel_Documents_repos_plat_weather_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/layout */ \"./components/layout.tsx\");\n/* harmony import */ var _hooks_use_weather__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../hooks/use-weather */ \"./hooks/use-weather.ts\");\n/* harmony import */ var _components_spinner__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/spinner */ \"./components/spinner.tsx\");\n\n\n\n\nvar _this = undefined,\n    _jsxFileName = \"/Users/dannylodangel/Documents/repos/plat_weather/pages/index.tsx\",\n    _s2 = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;\n\n\n\n\n\nvar Index = function Index(_) {\n  _s2();\n\n  var _aproximateLocation = false;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])({\n    lat: 0,\n    lng: 0\n  }),\n      currentLocation = _useState[0],\n      setCurrentLocation = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])(),\n      weather = _useState2[0],\n      setWeather = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])(true),\n      loading = _useState3[0],\n      setLoading = _useState3[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useLayoutEffect\"])(function () {\n    /*#__PURE__*/\n    Object(_Users_dannylodangel_Documents_repos_plat_weather_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__[\"default\"])( /*#__PURE__*/_Users_dannylodangel_Documents_repos_plat_weather_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee() {\n      return _Users_dannylodangel_Documents_repos_plat_weather_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              _context.next = 2;\n              return navigator.geolocation.getCurrentPosition(function (b) {\n                return setCurrentLocation({\n                  lat: b.coords.latitude,\n                  lng: b.coords.longitude\n                });\n              });\n\n            case 2:\n              return _context.abrupt(\"return\", _context.sent);\n\n            case 3:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee);\n    }));\n\n    if (currentLocation.lat === 0 && currentLocation.lng === 0) {\n      var _s = $RefreshSig$();\n\n      /*#__PURE__*/\n      Object(_Users_dannylodangel_Documents_repos_plat_weather_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_s( /*#__PURE__*/_Users_dannylodangel_Documents_repos_plat_weather_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee2() {\n        var ip, _weather;\n\n        return _Users_dannylodangel_Documents_repos_plat_weather_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee2$(_context2) {\n          while (1) {\n            switch (_context2.prev = _context2.next) {\n              case 0:\n                _s();\n\n                _context2.next = 3;\n                return Object(_hooks_use_weather__WEBPACK_IMPORTED_MODULE_5__[\"useIPWeather\"])();\n\n              case 3:\n                ip = _context2.sent;\n                _context2.next = 6;\n                return Object(_hooks_use_weather__WEBPACK_IMPORTED_MODULE_5__[\"useWeatherCordinates\"])(ip);\n\n              case 6:\n                _weather = _context2.sent;\n                console.log(_weather);\n\n              case 8:\n              case \"end\":\n                return _context2.stop();\n            }\n          }\n        }, _callee2);\n      }), \"54TbCV7Ho8g9rEtp9cVO4jBzpig=\", false, function () {\n        return [_hooks_use_weather__WEBPACK_IMPORTED_MODULE_5__[\"useIPWeather\"], _hooks_use_weather__WEBPACK_IMPORTED_MODULE_5__[\"useWeatherCordinates\"]];\n      }));\n    }\n  }, []);\n  console.log(weather);\n  console.log(currentLocation);\n\n  if (weather === undefined) {\n    return __jsx(_components_spinner__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 40,\n        columnNumber: 12\n      }\n    });\n  } // return <Box></Box>;\n\n\n  return __jsx(_components_layout__WEBPACK_IMPORTED_MODULE_4__[\"default\"], Object(_Users_dannylodangel_Documents_repos_plat_weather_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({}, weather, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 45,\n      columnNumber: 10\n    }\n  }));\n};\n\n_s2(Index, \"+Kyys8B4JkZjqChslDCu7ds487U=\");\n\n_c = Index;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Index);\n\nvar _c;\n\n$RefreshReg$(_c, \"Index\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXgudHN4P2RiNzYiXSwibmFtZXMiOlsiSW5kZXgiLCJfIiwiX2Fwcm94aW1hdGVMb2NhdGlvbiIsInVzZVN0YXRlIiwibGF0IiwibG5nIiwiY3VycmVudExvY2F0aW9uIiwic2V0Q3VycmVudExvY2F0aW9uIiwid2VhdGhlciIsInNldFdlYXRoZXIiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsInVzZUxheW91dEVmZmVjdCIsIm5hdmlnYXRvciIsImdlb2xvY2F0aW9uIiwiZ2V0Q3VycmVudFBvc2l0aW9uIiwiYiIsImNvb3JkcyIsImxhdGl0dWRlIiwibG9uZ2l0dWRlIiwidXNlSVBXZWF0aGVyIiwiaXAiLCJ1c2VXZWF0aGVyQ29yZGluYXRlcyIsIl93ZWF0aGVyIiwiY29uc29sZSIsImxvZyIsInVuZGVmaW5lZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTtBQUVBO0FBQ0E7QUFFQTs7QUFFQSxJQUFNQSxLQUFvQixHQUFHLFNBQXZCQSxLQUF1QixDQUFDQyxDQUFELEVBQU87QUFBQTs7QUFDbEMsTUFBSUMsbUJBQW1CLEdBQUcsS0FBMUI7O0FBRGtDLGtCQUVZQyxzREFBUSxDQUFnQjtBQUNwRUMsT0FBRyxFQUFFLENBRCtEO0FBRXBFQyxPQUFHLEVBQUU7QUFGK0QsR0FBaEIsQ0FGcEI7QUFBQSxNQUUzQkMsZUFGMkI7QUFBQSxNQUVWQyxrQkFGVTs7QUFBQSxtQkFNSkosc0RBQVEsRUFOSjtBQUFBLE1BTTNCSyxPQU4yQjtBQUFBLE1BTWxCQyxVQU5rQjs7QUFBQSxtQkFPSk4sc0RBQVEsQ0FBQyxJQUFELENBUEo7QUFBQSxNQU8zQk8sT0FQMkI7QUFBQSxNQU9sQkMsVUFQa0I7O0FBU2xDQywrREFBZSxDQUFDLFlBQU07QUFDcEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFDUUMsU0FBUyxDQUFDQyxXQUFWLENBQXNCQyxrQkFBdEIsQ0FBeUMsVUFBQ0MsQ0FBRDtBQUFBLHVCQUM3Q1Qsa0JBQWtCLENBQUM7QUFDakJILHFCQUFHLEVBQUVZLENBQUMsQ0FBQ0MsTUFBRixDQUFTQyxRQURHO0FBRWpCYixxQkFBRyxFQUFFVyxDQUFDLENBQUNDLE1BQUYsQ0FBU0U7QUFGRyxpQkFBRCxDQUQyQjtBQUFBLGVBQXpDLENBRFI7O0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFRQSxRQUFJYixlQUFlLENBQUNGLEdBQWhCLEtBQXdCLENBQXhCLElBQTZCRSxlQUFlLENBQUNELEdBQWhCLEtBQXdCLENBQXpELEVBQTREO0FBQUE7O0FBQzFEO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUEsdUJBQ21CZSx1RUFBWSxFQUQvQjs7QUFBQTtBQUNRQyxrQkFEUjtBQUFBO0FBQUEsdUJBRXlCQywrRUFBb0IsQ0FBQ0QsRUFBRCxDQUY3Qzs7QUFBQTtBQUVRRSx3QkFGUjtBQUdFQyx1QkFBTyxDQUFDQyxHQUFSLENBQVlGLFFBQVo7O0FBSEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFDbUJILCtEQURuQixFQUV5QkUsdUVBRnpCO0FBQUE7QUFLRDtBQUNGLEdBaEJjLEVBZ0JaLEVBaEJZLENBQWY7QUFrQkFFLFNBQU8sQ0FBQ0MsR0FBUixDQUFZakIsT0FBWjtBQUNBZ0IsU0FBTyxDQUFDQyxHQUFSLENBQVluQixlQUFaOztBQUVBLE1BQUlFLE9BQU8sS0FBS2tCLFNBQWhCLEVBQTJCO0FBQ3pCLFdBQU8sTUFBQywyREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BQVA7QUFDRCxHQWhDaUMsQ0FrQ2xDOzs7QUFFQSxTQUFPLE1BQUMsMERBQUQsdUpBQVlsQixPQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBUDtBQUNELENBckNEOztJQUFNUixLOztLQUFBQSxLO0FBdUNTQSxvRUFBZiIsImZpbGUiOiIuL3BhZ2VzL2luZGV4LnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEJveCwgSW1hZ2UgfSBmcm9tIFwiZ3JvbW1ldFwiO1xuaW1wb3J0IExheW91dCBmcm9tIFwiLi4vY29tcG9uZW50cy9sYXlvdXRcIjtcbmltcG9ydCB7IE5leHRQYWdlIH0gZnJvbSBcIm5leHRcIjtcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlTGF5b3V0RWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdXNlSVBXZWF0aGVyLCB1c2VXZWF0aGVyQ29yZGluYXRlcyB9IGZyb20gXCIuLi9ob29rcy91c2Utd2VhdGhlclwiO1xuaW1wb3J0IHsgR2VvQ29yZGluYXRlcyB9IGZyb20gXCIuLi9pbnRlcmZhY2VzL3R5cGVzXCI7XG5pbXBvcnQgU3Bpbm5lciBmcm9tIFwiLi4vY29tcG9uZW50cy9zcGlubmVyXCI7XG5cbmNvbnN0IEluZGV4OiBOZXh0UGFnZTxhbnk+ID0gKF8pID0+IHtcbiAgbGV0IF9hcHJveGltYXRlTG9jYXRpb24gPSBmYWxzZTtcbiAgY29uc3QgW2N1cnJlbnRMb2NhdGlvbiwgc2V0Q3VycmVudExvY2F0aW9uXSA9IHVzZVN0YXRlPEdlb0NvcmRpbmF0ZXM+KHtcbiAgICBsYXQ6IDAsXG4gICAgbG5nOiAwLFxuICB9KTtcbiAgY29uc3QgW3dlYXRoZXIsIHNldFdlYXRoZXJdID0gdXNlU3RhdGU8YW55PigpO1xuICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZSh0cnVlKTtcblxuICB1c2VMYXlvdXRFZmZlY3QoKCkgPT4ge1xuICAgIGFzeW5jICgpID0+XG4gICAgICBhd2FpdCBuYXZpZ2F0b3IuZ2VvbG9jYXRpb24uZ2V0Q3VycmVudFBvc2l0aW9uKChiKSA9PlxuICAgICAgICBzZXRDdXJyZW50TG9jYXRpb24oe1xuICAgICAgICAgIGxhdDogYi5jb29yZHMubGF0aXR1ZGUsXG4gICAgICAgICAgbG5nOiBiLmNvb3Jkcy5sb25naXR1ZGUsXG4gICAgICAgIH0pXG4gICAgICApO1xuXG4gICAgaWYgKGN1cnJlbnRMb2NhdGlvbi5sYXQgPT09IDAgJiYgY3VycmVudExvY2F0aW9uLmxuZyA9PT0gMCkge1xuICAgICAgYXN5bmMgKCkgPT4ge1xuICAgICAgICBjb25zdCBpcCA9IGF3YWl0IHVzZUlQV2VhdGhlcigpO1xuICAgICAgICBjb25zdCBfd2VhdGhlciA9IGF3YWl0IHVzZVdlYXRoZXJDb3JkaW5hdGVzKGlwKTtcbiAgICAgICAgY29uc29sZS5sb2coX3dlYXRoZXIpO1xuICAgICAgfTtcbiAgICB9XG4gIH0sIFtdKTtcblxuICBjb25zb2xlLmxvZyh3ZWF0aGVyKTtcbiAgY29uc29sZS5sb2coY3VycmVudExvY2F0aW9uKTtcblxuICBpZiAod2VhdGhlciA9PT0gdW5kZWZpbmVkKSB7XG4gICAgcmV0dXJuIDxTcGlubmVyIC8+O1xuICB9XG5cbiAgLy8gcmV0dXJuIDxCb3g+PC9Cb3g+O1xuXG4gIHJldHVybiA8TGF5b3V0IHsuLi53ZWF0aGVyfT48L0xheW91dD47XG59O1xuXG5leHBvcnQgZGVmYXVsdCBJbmRleDtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.tsx\n");

/***/ })

})