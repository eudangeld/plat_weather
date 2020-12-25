webpackHotUpdate_N_E("pages/index",{

/***/ "./hooks/useWeather.tsx":
/*!******************************!*\
  !*** ./hooks/useWeather.tsx ***!
  \******************************/
/*! exports provided: default, useWeatherCordinates, withIpLocation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"useWeatherCordinates\", function() { return useWeatherCordinates; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"withIpLocation\", function() { return withIpLocation; });\n/* harmony import */ var _Users_dannylodangel_Documents_repos_plat_weather_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _Users_dannylodangel_Documents_repos_plat_weather_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_dannylodangel_Documents_repos_plat_weather_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Users_dannylodangel_Documents_repos_plat_weather_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\nvar _s2 = $RefreshSig$();\n\n\n\n\nvar useGeoWeather = function useGeoWeather() {\n  _s2();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])(false),\n      usingGeoIp = _useState[0],\n      setGeoIp = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])(),\n      weather = _useState2[0],\n      setWeather = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])(true),\n      loading = _useState3[0],\n      setLoading = _useState3[1];\n\n  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])({\n    lat: 0,\n    lng: 0\n  }),\n      location = _useState4[0],\n      setLocation = _useState4[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useEffect\"])(function () {\n    function withBrowserLocation() {\n      return _withBrowserLocation.apply(this, arguments);\n    }\n\n    function _withBrowserLocation() {\n      _withBrowserLocation = Object(_Users_dannylodangel_Documents_repos_plat_weather_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_Users_dannylodangel_Documents_repos_plat_weather_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3() {\n        var success, error, _error, getWeather, _getWeather;\n\n        return _Users_dannylodangel_Documents_repos_plat_weather_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {\n          while (1) {\n            switch (_context3.prev = _context3.next) {\n              case 0:\n                _getWeather = function _getWeather3() {\n                  var _s = $RefreshSig$();\n\n                  _getWeather = Object(_Users_dannylodangel_Documents_repos_plat_weather_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_s( /*#__PURE__*/_Users_dannylodangel_Documents_repos_plat_weather_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {\n                    return _Users_dannylodangel_Documents_repos_plat_weather_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {\n                      while (1) {\n                        switch (_context2.prev = _context2.next) {\n                          case 0:\n                            _s();\n\n                            _context2.next = 3;\n                            return useWeatherCordinates(location);\n\n                          case 3:\n                          case \"end\":\n                            return _context2.stop();\n                        }\n                      }\n                    }, _callee2);\n                  }), \"ED1WSfPuAutyyotkH0ImvhNO/X4=\", false, function () {\n                    return [useWeatherCordinates];\n                  }));\n                  return _getWeather.apply(this, arguments);\n                };\n\n                getWeather = function _getWeather2() {\n                  return _getWeather.apply(this, arguments);\n                };\n\n                _error = function _error3() {\n                  _error = Object(_Users_dannylodangel_Documents_repos_plat_weather_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_Users_dannylodangel_Documents_repos_plat_weather_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(err) {\n                    var _ipLocation;\n\n                    return _Users_dannylodangel_Documents_repos_plat_weather_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n                      while (1) {\n                        switch (_context.prev = _context.next) {\n                          case 0:\n                            setGeoIp(true);\n                            _context.next = 3;\n                            return withIpLocation();\n\n                          case 3:\n                            _ipLocation = _context.sent;\n                            setLocation(_ipLocation);\n\n                          case 5:\n                          case \"end\":\n                            return _context.stop();\n                        }\n                      }\n                    }, _callee);\n                  }));\n                  return _error.apply(this, arguments);\n                };\n\n                error = function _error2(_x) {\n                  return _error.apply(this, arguments);\n                };\n\n                success = function _success(pos) {\n                  setLocation({\n                    lat: pos.coords.latitude,\n                    lng: pos.coords.longitude\n                  });\n                };\n\n                console.log(\"vamos aí\");\n                navigator.geolocation.getCurrentPosition( // (sucess) => {\n                //   console.log(\"Sucesss\");\n                //   console.log(sucess);\n                //   return setLocation({\n                //     lat: sucess.coords.latitude,\n                //     lng: sucess.coords.longitude,\n                //   });\n                // },\n                // async (error) => {\n                //   console.log(\"error\");\n                //   setGeoIp(true);\n                //   const _ipLocation = await withIpLocation();\n                //   return setLocation(_ipLocation);\n                // }\n                success, error);\n\n              case 7:\n              case \"end\":\n                return _context3.stop();\n            }\n          }\n        }, _callee3);\n      }));\n      return _withBrowserLocation.apply(this, arguments);\n    }\n\n    withBrowserLocation();\n  }, []);\n  return [weather, loading, usingGeoIp];\n};\n\n_s2(useGeoWeather, \"GPyJpcyZXBYkxM+0mCqJdKHS0vg=\");\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (useGeoWeather);\nfunction useWeatherCordinates(_x2) {\n  return _useWeatherCordinates.apply(this, arguments);\n}\n\nfunction _useWeatherCordinates() {\n  _useWeatherCordinates = Object(_Users_dannylodangel_Documents_repos_plat_weather_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_Users_dannylodangel_Documents_repos_plat_weather_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee4(props) {\n    var _result;\n\n    return _Users_dannylodangel_Documents_repos_plat_weather_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee4$(_context4) {\n      while (1) {\n        switch (_context4.prev = _context4.next) {\n          case 0:\n            console.log(props);\n            _context4.next = 3;\n            return axios__WEBPACK_IMPORTED_MODULE_2___default.a.get(\"http://api.openweathermap.org/data/2.5/weather?units=metric&lat=\".concat(props.lat.toString(), \"&lon=\").concat(props === null || props === void 0 ? void 0 : props.lng.toString(), \"&appid=\").concat(\"59e1631fec54ec05e6346868bff05bdf\"));\n\n          case 3:\n            _result = _context4.sent;\n            return _context4.abrupt(\"return\", _result.data);\n\n          case 5:\n          case \"end\":\n            return _context4.stop();\n        }\n      }\n    }, _callee4);\n  }));\n  return _useWeatherCordinates.apply(this, arguments);\n}\n\nfunction withIpLocation() {\n  return _withIpLocation.apply(this, arguments);\n}\n\nfunction _withIpLocation() {\n  _withIpLocation = Object(_Users_dannylodangel_Documents_repos_plat_weather_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_Users_dannylodangel_Documents_repos_plat_weather_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee5() {\n    var _result;\n\n    return _Users_dannylodangel_Documents_repos_plat_weather_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee5$(_context5) {\n      while (1) {\n        switch (_context5.prev = _context5.next) {\n          case 0:\n            _context5.next = 2;\n            return axios__WEBPACK_IMPORTED_MODULE_2___default.a.get(\"https://ipgeolocation.abstractapi.com/v1/?api_key=\".concat(\"c8f30a60577147b5b2c75625505133cf\"));\n\n          case 2:\n            _result = _context5.sent;\n            return _context5.abrupt(\"return\", {\n              lat: _result.data.latitude,\n              lng: _result.data.longitude\n            });\n\n          case 4:\n          case \"end\":\n            return _context5.stop();\n        }\n      }\n    }, _callee5);\n  }));\n  return _withIpLocation.apply(this, arguments);\n}\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vaG9va3MvdXNlV2VhdGhlci50c3g/M2JiNyJdLCJuYW1lcyI6WyJ1c2VHZW9XZWF0aGVyIiwidXNlU3RhdGUiLCJ1c2luZ0dlb0lwIiwic2V0R2VvSXAiLCJ3ZWF0aGVyIiwic2V0V2VhdGhlciIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwibGF0IiwibG5nIiwibG9jYXRpb24iLCJzZXRMb2NhdGlvbiIsInVzZUVmZmVjdCIsIndpdGhCcm93c2VyTG9jYXRpb24iLCJzdWNjZXNzIiwiZXJyb3IiLCJnZXRXZWF0aGVyIiwidXNlV2VhdGhlckNvcmRpbmF0ZXMiLCJlcnIiLCJ3aXRoSXBMb2NhdGlvbiIsIl9pcExvY2F0aW9uIiwicG9zIiwiY29vcmRzIiwibGF0aXR1ZGUiLCJsb25naXR1ZGUiLCJjb25zb2xlIiwibG9nIiwibmF2aWdhdG9yIiwiZ2VvbG9jYXRpb24iLCJnZXRDdXJyZW50UG9zaXRpb24iLCJwcm9wcyIsImF4aW9zIiwiZ2V0IiwidG9TdHJpbmciLCJwcm9jZXNzIiwiX3Jlc3VsdCIsImRhdGEiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBR0EsSUFBTUEsYUFBYSxHQUFHLFNBQWhCQSxhQUFnQixHQUFNO0FBQUE7O0FBQUEsa0JBQ0tDLHNEQUFRLENBQUMsS0FBRCxDQURiO0FBQUEsTUFDbkJDLFVBRG1CO0FBQUEsTUFDUEMsUUFETzs7QUFBQSxtQkFFSUYsc0RBQVEsRUFGWjtBQUFBLE1BRW5CRyxPQUZtQjtBQUFBLE1BRVZDLFVBRlU7O0FBQUEsbUJBR0lKLHNEQUFRLENBQUMsSUFBRCxDQUhaO0FBQUEsTUFHbkJLLE9BSG1CO0FBQUEsTUFHVkMsVUFIVTs7QUFBQSxtQkFJTU4sc0RBQVEsQ0FBZ0I7QUFDdERPLE9BQUcsRUFBRSxDQURpRDtBQUV0REMsT0FBRyxFQUFFO0FBRmlELEdBQWhCLENBSmQ7QUFBQSxNQUluQkMsUUFKbUI7QUFBQSxNQUlUQyxXQUpTOztBQVMxQkMs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bSBcImF4aW9zXCI7XG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBHZW9Db3JkaW5hdGVzLCBXZWF0aGVyUHJvcHMgfSBmcm9tIFwiLi4vaW50ZXJmYWNlcy90eXBlc1wiO1xuXG5jb25zdCB1c2VHZW9XZWF0aGVyID0gKCkgPT4ge1xuICBjb25zdCBbdXNpbmdHZW9JcCwgc2V0R2VvSXBdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbd2VhdGhlciwgc2V0V2VhdGhlcl0gPSB1c2VTdGF0ZTxhbnk+KCk7XG4gIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKHRydWUpO1xuICBjb25zdCBbbG9jYXRpb24sIHNldExvY2F0aW9uXSA9IHVzZVN0YXRlPEdlb0NvcmRpbmF0ZXM+KHtcbiAgICBsYXQ6IDAsXG4gICAgbG5nOiAwLFxuICB9KTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGFzeW5jIGZ1bmN0aW9uIHdpdGhCcm93c2VyTG9jYXRpb24oKSB7XG4gICAgICBjb25zb2xlLmxvZyhcInZhbW9zIGHDrVwiKTtcbiAgICAgIG5hdmlnYXRvci5nZW9sb2NhdGlvbi5nZXRDdXJyZW50UG9zaXRpb24oXG4gICAgICAgIC8vIChzdWNlc3MpID0+IHtcbiAgICAgICAgLy8gICBjb25zb2xlLmxvZyhcIlN1Y2Vzc3NcIik7XG4gICAgICAgIC8vICAgY29uc29sZS5sb2coc3VjZXNzKTtcbiAgICAgICAgLy8gICByZXR1cm4gc2V0TG9jYXRpb24oe1xuICAgICAgICAvLyAgICAgbGF0OiBzdWNlc3MuY29vcmRzLmxhdGl0dWRlLFxuICAgICAgICAvLyAgICAgbG5nOiBzdWNlc3MuY29vcmRzLmxvbmdpdHVkZSxcbiAgICAgICAgLy8gICB9KTtcbiAgICAgICAgLy8gfSxcbiAgICAgICAgLy8gYXN5bmMgKGVycm9yKSA9PiB7XG4gICAgICAgIC8vICAgY29uc29sZS5sb2coXCJlcnJvclwiKTtcbiAgICAgICAgLy8gICBzZXRHZW9JcCh0cnVlKTtcbiAgICAgICAgLy8gICBjb25zdCBfaXBMb2NhdGlvbiA9IGF3YWl0IHdpdGhJcExvY2F0aW9uKCk7XG4gICAgICAgIC8vICAgcmV0dXJuIHNldExvY2F0aW9uKF9pcExvY2F0aW9uKTtcbiAgICAgICAgLy8gfVxuXG4gICAgICAgIHN1Y2Nlc3MsXG4gICAgICAgIGVycm9yXG4gICAgICApO1xuXG4gICAgICBmdW5jdGlvbiBzdWNjZXNzKHBvczogYW55KSB7XG4gICAgICAgIHNldExvY2F0aW9uKHtcbiAgICAgICAgICBsYXQ6IHBvcy5jb29yZHMubGF0aXR1ZGUsXG4gICAgICAgICAgbG5nOiBwb3MuY29vcmRzLmxvbmdpdHVkZSxcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIGFzeW5jIGZ1bmN0aW9uIGVycm9yKGVycjogYW55KSB7XG4gICAgICAgIHNldEdlb0lwKHRydWUpO1xuICAgICAgICBjb25zdCBfaXBMb2NhdGlvbiA9IGF3YWl0IHdpdGhJcExvY2F0aW9uKCk7XG4gICAgICAgIHNldExvY2F0aW9uKF9pcExvY2F0aW9uKTtcbiAgICAgIH1cblxuICAgICAgYXN5bmMgZnVuY3Rpb24gZ2V0V2VhdGhlcigpIHtcbiAgICAgICAgYXdhaXQgdXNlV2VhdGhlckNvcmRpbmF0ZXMobG9jYXRpb24pO1xuICAgICAgfVxuICAgIH1cblxuICAgIHdpdGhCcm93c2VyTG9jYXRpb24oKTtcbiAgfSwgW10pO1xuXG4gIHJldHVybiBbd2VhdGhlciwgbG9hZGluZywgdXNpbmdHZW9JcF07XG59O1xuXG5leHBvcnQgZGVmYXVsdCB1c2VHZW9XZWF0aGVyO1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdXNlV2VhdGhlckNvcmRpbmF0ZXMoXG4gIHByb3BzOiBHZW9Db3JkaW5hdGVzXG4pOiBQcm9taXNlPFdlYXRoZXJQcm9wcz4ge1xuICBjb25zb2xlLmxvZyhwcm9wcyk7XG4gIGNvbnN0IF9yZXN1bHQgPSBhd2FpdCBheGlvcy5nZXQoXG4gICAgYGh0dHA6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2RhdGEvMi41L3dlYXRoZXI/dW5pdHM9bWV0cmljJmxhdD0ke3Byb3BzLmxhdC50b1N0cmluZygpfSZsb249JHtwcm9wcz8ubG5nLnRvU3RyaW5nKCl9JmFwcGlkPSR7XG4gICAgICBwcm9jZXNzLmVudi5XRUFUSEVSX0tFWVxuICAgIH1gXG4gICk7XG4gIHJldHVybiBfcmVzdWx0LmRhdGE7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB3aXRoSXBMb2NhdGlvbigpOiBQcm9taXNlPEdlb0NvcmRpbmF0ZXM+IHtcbiAgY29uc3QgX3Jlc3VsdCA9IGF3YWl0IGF4aW9zLmdldChcbiAgICBgaHR0cHM6Ly9pcGdlb2xvY2F0aW9uLmFic3RyYWN0YXBpLmNvbS92MS8/YXBpX2tleT0ke3Byb2Nlc3MuZW52LklQTE9DQVRJT05fS0VZfWBcbiAgKTtcbiAgcmV0dXJuIHtcbiAgICBsYXQ6IF9yZXN1bHQuZGF0YS5sYXRpdHVkZSxcbiAgICBsbmc6IF9yZXN1bHQuZGF0YS5sb25naXR1ZGUsXG4gIH07XG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./hooks/useWeather.tsx\n");

/***/ })

})