webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _Users_dannylodangel_Documents_repos_plat_weather_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_spinner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/spinner */ \"./components/spinner.tsx\");\n/* harmony import */ var _hooks_useWeather__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../hooks/useWeather */ \"./hooks/useWeather.tsx\");\n\n\nvar _this = undefined,\n    _jsxFileName = \"/Users/dannylodangel/Documents/repos/plat_weather/pages/index.tsx\",\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\n\n\nvar Index = function Index(_) {\n  _s();\n\n  // let _aproximateLocation = false;\n  // const [currentLocation, setCurrentLocation] = useState<GeoCordinates>({\n  //   lat: 0,\n  //   lng: 0,\n  // });\n  // const [weather, setWeather] = useState<any>();\n  // const [loading, setLoading] = useState(true);\n  // useLayoutEffect(() => {\n  //   async () =>\n  //     await navigator.geolocation.getCurrentPosition((b) =>\n  //       setCurrentLocation({\n  //         lat: b.coords.latitude,\n  //         lng: b.coords.longitude,\n  //       })\n  //     );\n  //   if (currentLocation.lat === 0 && currentLocation.lng === 0) {\n  //     async () => {\n  //       const ip = await useIPWeather();\n  //       const _weather = await useWeatherCordinates(ip);\n  //       console.log(_weather);\n  //     };\n  //   }\n  // }, []);\n  // console.log(weather);\n  // console.log(currentLocation);\n  var _useGeoWeather = Object(_hooks_useWeather__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(),\n      _useGeoWeather2 = Object(_Users_dannylodangel_Documents_repos_plat_weather_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_useGeoWeather, 3),\n      weather = _useGeoWeather2[0],\n      loading = _useGeoWeather2[1],\n      usingGeoIp = _useGeoWeather2[2];\n\n  console.log(weather);\n  console.log(loading);\n  console.log(usingGeoIp);\n  return __jsx(_components_spinner__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 47,\n      columnNumber: 10\n    }\n  }); // return <Box></Box>;\n  // return <Layout {...weather}></Layout>;\n};\n\n_s(Index, \"U/yl6vBN64XNkqfzOJYsrIryWLM=\", false, function () {\n  return [_hooks_useWeather__WEBPACK_IMPORTED_MODULE_3__[\"default\"]];\n});\n\n_c = Index;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Index);\n\nvar _c;\n\n$RefreshReg$(_c, \"Index\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXgudHN4P2RiNzYiXSwibmFtZXMiOlsiSW5kZXgiLCJfIiwidXNlR2VvV2VhdGhlciIsIndlYXRoZXIiLCJsb2FkaW5nIiwidXNpbmdHZW9JcCIsImNvbnNvbGUiLCJsb2ciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBT0E7QUFDQTs7QUFFQSxJQUFNQSxLQUFvQixHQUFHLFNBQXZCQSxLQUF1QixDQUFDQyxDQUFELEVBQU87QUFBQTs7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUE1QmtDLHVCQThCS0MsaUVBQWEsRUE5QmxCO0FBQUE7QUFBQSxNQThCM0JDLE9BOUIyQjtBQUFBLE1BOEJsQkMsT0E5QmtCO0FBQUEsTUE4QlRDLFVBOUJTOztBQWdDbENDLFNBQU8sQ0FBQ0MsR0FBUixDQUFZSixPQUFaO0FBQ0FHLFNBQU8sQ0FBQ0MsR0FBUixDQUFZSCxPQUFaO0FBQ0FFLFNBQU8sQ0FBQ0MsR0FBUixDQUFZRixVQUFaO0FBRUEsU0FBTyxNQUFDLDJEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFBUCxDQXBDa0MsQ0FzQ2xDO0FBRUE7QUFDRCxDQXpDRDs7R0FBTUwsSztVQThCbUNFLHlEOzs7S0E5Qm5DRixLO0FBMkNTQSxvRUFBZiIsImZpbGUiOiIuL3BhZ2VzL2luZGV4LnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEJveCwgSW1hZ2UgfSBmcm9tIFwiZ3JvbW1ldFwiO1xuaW1wb3J0IExheW91dCBmcm9tIFwiLi4vY29tcG9uZW50cy9sYXlvdXRcIjtcbmltcG9ydCB7IE5leHRQYWdlIH0gZnJvbSBcIm5leHRcIjtcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlTGF5b3V0RWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuXG5pbXBvcnQgeyB1c2VJUFdlYXRoZXIsIHVzZVdlYXRoZXJDb3JkaW5hdGVzIH0gZnJvbSBcIi4uL2hvb2tzL3VzZS13ZWF0aGVyXCI7XG5pbXBvcnQgeyBHZW9Db3JkaW5hdGVzIH0gZnJvbSBcIi4uL2ludGVyZmFjZXMvdHlwZXNcIjtcbmltcG9ydCBTcGlubmVyIGZyb20gXCIuLi9jb21wb25lbnRzL3NwaW5uZXJcIjtcbmltcG9ydCB1c2VHZW9XZWF0aGVyIGZyb20gXCIuLi9ob29rcy91c2VXZWF0aGVyXCI7XG5cbmNvbnN0IEluZGV4OiBOZXh0UGFnZTxhbnk+ID0gKF8pID0+IHtcbiAgLy8gbGV0IF9hcHJveGltYXRlTG9jYXRpb24gPSBmYWxzZTtcbiAgLy8gY29uc3QgW2N1cnJlbnRMb2NhdGlvbiwgc2V0Q3VycmVudExvY2F0aW9uXSA9IHVzZVN0YXRlPEdlb0NvcmRpbmF0ZXM+KHtcbiAgLy8gICBsYXQ6IDAsXG4gIC8vICAgbG5nOiAwLFxuICAvLyB9KTtcbiAgLy8gY29uc3QgW3dlYXRoZXIsIHNldFdlYXRoZXJdID0gdXNlU3RhdGU8YW55PigpO1xuICAvLyBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZSh0cnVlKTtcblxuICAvLyB1c2VMYXlvdXRFZmZlY3QoKCkgPT4ge1xuICAvLyAgIGFzeW5jICgpID0+XG4gIC8vICAgICBhd2FpdCBuYXZpZ2F0b3IuZ2VvbG9jYXRpb24uZ2V0Q3VycmVudFBvc2l0aW9uKChiKSA9PlxuICAvLyAgICAgICBzZXRDdXJyZW50TG9jYXRpb24oe1xuICAvLyAgICAgICAgIGxhdDogYi5jb29yZHMubGF0aXR1ZGUsXG4gIC8vICAgICAgICAgbG5nOiBiLmNvb3Jkcy5sb25naXR1ZGUsXG4gIC8vICAgICAgIH0pXG4gIC8vICAgICApO1xuXG4gIC8vICAgaWYgKGN1cnJlbnRMb2NhdGlvbi5sYXQgPT09IDAgJiYgY3VycmVudExvY2F0aW9uLmxuZyA9PT0gMCkge1xuICAvLyAgICAgYXN5bmMgKCkgPT4ge1xuICAvLyAgICAgICBjb25zdCBpcCA9IGF3YWl0IHVzZUlQV2VhdGhlcigpO1xuICAvLyAgICAgICBjb25zdCBfd2VhdGhlciA9IGF3YWl0IHVzZVdlYXRoZXJDb3JkaW5hdGVzKGlwKTtcbiAgLy8gICAgICAgY29uc29sZS5sb2coX3dlYXRoZXIpO1xuICAvLyAgICAgfTtcbiAgLy8gICB9XG4gIC8vIH0sIFtdKTtcblxuICAvLyBjb25zb2xlLmxvZyh3ZWF0aGVyKTtcbiAgLy8gY29uc29sZS5sb2coY3VycmVudExvY2F0aW9uKTtcblxuICBjb25zdCBbd2VhdGhlciwgbG9hZGluZywgdXNpbmdHZW9JcF0gPSB1c2VHZW9XZWF0aGVyKCk7XG5cbiAgY29uc29sZS5sb2cod2VhdGhlcik7XG4gIGNvbnNvbGUubG9nKGxvYWRpbmcpO1xuICBjb25zb2xlLmxvZyh1c2luZ0dlb0lwKTtcblxuICByZXR1cm4gPFNwaW5uZXIgLz47XG5cbiAgLy8gcmV0dXJuIDxCb3g+PC9Cb3g+O1xuXG4gIC8vIHJldHVybiA8TGF5b3V0IHsuLi53ZWF0aGVyfT48L0xheW91dD47XG59O1xuXG5leHBvcnQgZGVmYXVsdCBJbmRleDtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.tsx\n");

/***/ })

})