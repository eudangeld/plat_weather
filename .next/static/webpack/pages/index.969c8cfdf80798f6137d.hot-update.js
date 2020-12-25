webpackHotUpdate_N_E("pages/index",{

/***/ "./hooks/useWeather.tsx":
/*!******************************!*\
  !*** ./hooks/useWeather.tsx ***!
  \******************************/
/*! exports provided: default, withWeatherCordinates, withWeatherCity, withIpLocation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"withWeatherCordinates\", function() { return withWeatherCordinates; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"withWeatherCity\", function() { return withWeatherCity; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"withIpLocation\", function() { return withIpLocation; });\n/* harmony import */ var _Users_dannylodangel_Documents_repos_plat_weather_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _Users_dannylodangel_Documents_repos_plat_weather_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_dannylodangel_Documents_repos_plat_weather_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Users_dannylodangel_Documents_repos_plat_weather_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\nvar _s = $RefreshSig$();\n\n\n\n\nvar useGeoWeather = function useGeoWeather(city) {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])(),\n      cityName = _useState[0],\n      setCityName = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])(false),\n      usingGeoIp = _useState2[0],\n      setGeoIp = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])(),\n      weather = _useState3[0],\n      setWeather = _useState3[1];\n\n  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])(true),\n      loading = _useState4[0],\n      setLoading = _useState4[1];\n\n  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])({\n    lat: 0,\n    lng: 0\n  }),\n      location = _useState5[0],\n      setLocation = _useState5[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useEffect\"])(function () {\n    function withBrowserLocation() {\n      return _withBrowserLocation.apply(this, arguments);\n    }\n\n    function _withBrowserLocation() {\n      _withBrowserLocation = Object(_Users_dannylodangel_Documents_repos_plat_weather_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_Users_dannylodangel_Documents_repos_plat_weather_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee4() {\n        var success, _success, error, _error, getWeather, _getWeather;\n\n        return _Users_dannylodangel_Documents_repos_plat_weather_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee4$(_context4) {\n          while (1) {\n            switch (_context4.prev = _context4.next) {\n              case 0:\n                _getWeather = function _getWeather3() {\n                  _getWeather = Object(_Users_dannylodangel_Documents_repos_plat_weather_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_Users_dannylodangel_Documents_repos_plat_weather_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3(position) {\n                    return _Users_dannylodangel_Documents_repos_plat_weather_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {\n                      while (1) {\n                        switch (_context3.prev = _context3.next) {\n                          case 0:\n                            withWeatherCordinates(position).then(function (weather) {\n                              setLocation(position);\n                              setWeather(weather);\n                              setLoading(false);\n                            });\n\n                          case 1:\n                          case \"end\":\n                            return _context3.stop();\n                        }\n                      }\n                    }, _callee3);\n                  }));\n                  return _getWeather.apply(this, arguments);\n                };\n\n                getWeather = function _getWeather2(_x3) {\n                  return _getWeather.apply(this, arguments);\n                };\n\n                _error = function _error3() {\n                  _error = Object(_Users_dannylodangel_Documents_repos_plat_weather_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_Users_dannylodangel_Documents_repos_plat_weather_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(_) {\n                    return _Users_dannylodangel_Documents_repos_plat_weather_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {\n                      while (1) {\n                        switch (_context2.prev = _context2.next) {\n                          case 0:\n                            setGeoIp(true);\n                            withIpLocation().then(getWeather);\n\n                          case 2:\n                          case \"end\":\n                            return _context2.stop();\n                        }\n                      }\n                    }, _callee2);\n                  }));\n                  return _error.apply(this, arguments);\n                };\n\n                error = function _error2(_x2) {\n                  return _error.apply(this, arguments);\n                };\n\n                _success = function _success3() {\n                  _success = Object(_Users_dannylodangel_Documents_repos_plat_weather_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_Users_dannylodangel_Documents_repos_plat_weather_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(pos) {\n                    return _Users_dannylodangel_Documents_repos_plat_weather_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n                      while (1) {\n                        switch (_context.prev = _context.next) {\n                          case 0:\n                            _context.next = 2;\n                            return getWeather({\n                              lat: pos.coords.latitude,\n                              lng: pos.coords.longitude\n                            });\n\n                          case 2:\n                          case \"end\":\n                            return _context.stop();\n                        }\n                      }\n                    }, _callee);\n                  }));\n                  return _success.apply(this, arguments);\n                };\n\n                success = function _success2(_x) {\n                  return _success.apply(this, arguments);\n                };\n\n                navigator.geolocation.getCurrentPosition(success, error);\n                console.log(city);\n\n              case 8:\n              case \"end\":\n                return _context4.stop();\n            }\n          }\n        }, _callee4);\n      }));\n      return _withBrowserLocation.apply(this, arguments);\n    }\n\n    withBrowserLocation();\n  }, []);\n  return [weather, loading, usingGeoIp, location];\n};\n\n_s(useGeoWeather, \"MTIXmmSX1euWln9lwsNRWJ3ZGLc=\");\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (useGeoWeather);\nfunction withWeatherCordinates(_x4) {\n  return _withWeatherCordinates.apply(this, arguments);\n}\n\nfunction _withWeatherCordinates() {\n  _withWeatherCordinates = Object(_Users_dannylodangel_Documents_repos_plat_weather_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_Users_dannylodangel_Documents_repos_plat_weather_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee5(props) {\n    var _result;\n\n    return _Users_dannylodangel_Documents_repos_plat_weather_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee5$(_context5) {\n      while (1) {\n        switch (_context5.prev = _context5.next) {\n          case 0:\n            _context5.next = 2;\n            return axios__WEBPACK_IMPORTED_MODULE_2___default.a.get(\"http://api.openweathermap.org/data/2.5/weather?units=metric&lat=\".concat(props.lat.toString(), \"&lon=\").concat(props === null || props === void 0 ? void 0 : props.lng.toString(), \"&appid=\").concat(\"59e1631fec54ec05e6346868bff05bdf\"));\n\n          case 2:\n            _result = _context5.sent;\n            return _context5.abrupt(\"return\", _result.data);\n\n          case 4:\n          case \"end\":\n            return _context5.stop();\n        }\n      }\n    }, _callee5);\n  }));\n  return _withWeatherCordinates.apply(this, arguments);\n}\n\nfunction withWeatherCity(_x5) {\n  return _withWeatherCity.apply(this, arguments);\n}\n\nfunction _withWeatherCity() {\n  _withWeatherCity = Object(_Users_dannylodangel_Documents_repos_plat_weather_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_Users_dannylodangel_Documents_repos_plat_weather_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee6(props) {\n    var _result;\n\n    return _Users_dannylodangel_Documents_repos_plat_weather_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee6$(_context6) {\n      while (1) {\n        switch (_context6.prev = _context6.next) {\n          case 0:\n            _context6.next = 2;\n            return axios__WEBPACK_IMPORTED_MODULE_2___default.a.get(\"http://api.openweathermap.org/data/2.5/weather?units=metric&lat=\".concat(props.lat.toString(), \"&lon=\").concat(props === null || props === void 0 ? void 0 : props.lng.toString(), \"&appid=\").concat(\"59e1631fec54ec05e6346868bff05bdf\"));\n\n          case 2:\n            _result = _context6.sent;\n            return _context6.abrupt(\"return\", _result.data);\n\n          case 4:\n          case \"end\":\n            return _context6.stop();\n        }\n      }\n    }, _callee6);\n  }));\n  return _withWeatherCity.apply(this, arguments);\n}\n\nfunction withIpLocation() {\n  return _withIpLocation.apply(this, arguments);\n}\n\nfunction _withIpLocation() {\n  _withIpLocation = Object(_Users_dannylodangel_Documents_repos_plat_weather_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_Users_dannylodangel_Documents_repos_plat_weather_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee7() {\n    var _result;\n\n    return _Users_dannylodangel_Documents_repos_plat_weather_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee7$(_context7) {\n      while (1) {\n        switch (_context7.prev = _context7.next) {\n          case 0:\n            _context7.next = 2;\n            return axios__WEBPACK_IMPORTED_MODULE_2___default.a.get(\"https://ipgeolocation.abstractapi.com/v1/?api_key=\".concat(\"c8f30a60577147b5b2c75625505133cf\"));\n\n          case 2:\n            _result = _context7.sent;\n            return _context7.abrupt(\"return\", {\n              lat: _result.data.latitude,\n              lng: _result.data.longitude\n            });\n\n          case 4:\n          case \"end\":\n            return _context7.stop();\n        }\n      }\n    }, _callee7);\n  }));\n  return _withIpLocation.apply(this, arguments);\n}\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vaG9va3MvdXNlV2VhdGhlci50c3g/M2JiNyJdLCJuYW1lcyI6WyJ1c2VHZW9XZWF0aGVyIiwiY2l0eSIsInVzZVN0YXRlIiwiY2l0eU5hbWUiLCJzZXRDaXR5TmFtZSIsInVzaW5nR2VvSXAiLCJzZXRHZW9JcCIsIndlYXRoZXIiLCJzZXRXZWF0aGVyIiwibG9hZGluZyIsInNldExvYWRpbmciLCJsYXQiLCJsbmciLCJsb2NhdGlvbiIsInNldExvY2F0aW9uIiwidXNlRWZmZWN0Iiwid2l0aEJyb3dzZXJMb2NhdGlvbiIsInN1Y2Nlc3MiLCJlcnJvciIsImdldFdlYXRoZXIiLCJwb3NpdGlvbiIsIndpdGhXZWF0aGVyQ29yZGluYXRlcyIsInRoZW4iLCJfIiwid2l0aElwTG9jYXRpb24iLCJwb3MiLCJjb29yZHMiLCJsYXRpdHVkZSIsImxvbmdpdHVkZSIsIm5hdmlnYXRvciIsImdlb2xvY2F0aW9uIiwiZ2V0Q3VycmVudFBvc2l0aW9uIiwiY29uc29sZSIsImxvZyIsInByb3BzIiwiYXhpb3MiLCJnZXQiLCJ0b1N0cmluZyIsInByb2Nlc3MiLCJfcmVzdWx0IiwiZGF0YSIsIndpdGhXZWF0aGVyQ2l0eSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBR0EsSUFBTUEsYUFBYSxHQUFHLFNBQWhCQSxhQUFnQixDQUFDQyxJQUFELEVBQW1CO0FBQUE7O0FBQUEsa0JBQ1BDLHNEQUFRLEVBREQ7QUFBQSxNQUNoQ0MsUUFEZ0M7QUFBQSxNQUN0QkMsV0FEc0I7O0FBQUEsbUJBRVJGLHNEQUFRLENBQUMsS0FBRCxDQUZBO0FBQUEsTUFFaENHLFVBRmdDO0FBQUEsTUFFcEJDLFFBRm9COztBQUFBLG1CQUdUSixzREFBUSxFQUhDO0FBQUEsTUFHaENLLE9BSGdDO0FBQUEsTUFHdkJDLFVBSHVCOztBQUFBLG1CQUlUTixzREFBUSxDQUFDLElBQUQsQ0FKQztBQUFBLE1BSWhDTyxPQUpnQztBQUFBLE1BSXZC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dUJBQzJFQSxLQUFLLENBQUV0QixHQUFQLENBQVd5QixRQUFYLEVBRDNFLG9CQUVsQkMsa0NBRmtCLEVBRGpCOztBQUFBO0FBQ0NDLG1CQUREO0FBQUEsOENBTUVBLE9BQU8sQ0FBQ0MsSUFOVjs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHOzs7O0FBU0EsU0FBZWhCLGNBQXRCO0FBQUE7QUFBQTs7O2lVQUFPO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUNpQlcsNENBQUssQ0FBQ0MsR0FBTiw2REFDaUNFLGtDQURqQyxFQURqQjs7QUFBQTtBQUNDQyxtQkFERDtBQUFBLDhDQUlFO0FBQ0w1QixpQkFBRyxFQUFFNEIsT0FBTyxDQUFDQyxJQUFSLENBQWFiLFFBRGI7QUFFTGYsaUJBQUcsRUFBRTJCLE9BQU8sQ0FBQ0MsSUFBUixDQUFhWjtBQUZiLGFBSkY7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsRyIsImZpbGUiOiIuL2hvb2tzL3VzZVdlYXRoZXIudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgR2VvQ29yZGluYXRlcywgV2VhdGhlclByb3BzIH0gZnJvbSBcIi4uL2ludGVyZmFjZXMvdHlwZXNcIjtcblxuY29uc3QgdXNlR2VvV2VhdGhlciA9IChjaXR5Pzogc3RyaW5nKSA9PiB7XG4gIGNvbnN0IFtjaXR5TmFtZSwgc2V0Q2l0eU5hbWVdID0gdXNlU3RhdGU8c3RyaW5nPigpO1xuICBjb25zdCBbdXNpbmdHZW9JcCwgc2V0R2VvSXBdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbd2VhdGhlciwgc2V0V2VhdGhlcl0gPSB1c2VTdGF0ZTxhbnk+KCk7XG4gIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKHRydWUpO1xuICBjb25zdCBbbG9jYXRpb24sIHNldExvY2F0aW9uXSA9IHVzZVN0YXRlPEdlb0NvcmRpbmF0ZXM+KHtcbiAgICBsYXQ6IDAsXG4gICAgbG5nOiAwLFxuICB9KTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGFzeW5jIGZ1bmN0aW9uIHdpdGhCcm93c2VyTG9jYXRpb24oKSB7XG4gICAgICBuYXZpZ2F0b3IuZ2VvbG9jYXRpb24uZ2V0Q3VycmVudFBvc2l0aW9uKHN1Y2Nlc3MsIGVycm9yKTtcbiAgICAgIGNvbnNvbGUubG9nKGNpdHkpO1xuICAgICAgYXN5bmMgZnVuY3Rpb24gc3VjY2Vzcyhwb3M6IGFueSkge1xuICAgICAgICBhd2FpdCBnZXRXZWF0aGVyKHtcbiAgICAgICAgICBsYXQ6IHBvcy5jb29yZHMubGF0aXR1ZGUsXG4gICAgICAgICAgbG5nOiBwb3MuY29vcmRzLmxvbmdpdHVkZSxcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIGFzeW5jIGZ1bmN0aW9uIGVycm9yKF86IGFueSkge1xuICAgICAgICBzZXRHZW9JcCh0cnVlKTtcbiAgICAgICAgd2l0aElwTG9jYXRpb24oKS50aGVuKGdldFdlYXRoZXIpO1xuICAgICAgfVxuXG4gICAgICBhc3luYyBmdW5jdGlvbiBnZXRXZWF0aGVyKHBvc2l0aW9uOiBhbnkpIHtcbiAgICAgICAgd2l0aFdlYXRoZXJDb3JkaW5hdGVzKHBvc2l0aW9uKS50aGVuKCh3ZWF0aGVyKSA9PiB7XG4gICAgICAgICAgc2V0TG9jYXRpb24ocG9zaXRpb24pO1xuICAgICAgICAgIHNldFdlYXRoZXIod2VhdGhlcik7XG4gICAgICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cblxuICAgIHdpdGhCcm93c2VyTG9jYXRpb24oKTtcbiAgfSwgW10pO1xuXG4gIHJldHVybiBbd2VhdGhlciwgbG9hZGluZywgdXNpbmdHZW9JcCwgbG9jYXRpb25dO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgdXNlR2VvV2VhdGhlcjtcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHdpdGhXZWF0aGVyQ29yZGluYXRlcyhcbiAgcHJvcHM6IEdlb0NvcmRpbmF0ZXNcbik6IFByb21pc2U8V2VhdGhlclByb3BzPiB7XG4gIGNvbnN0IF9yZXN1bHQgPSBhd2FpdCBheGlvcy5nZXQoXG4gICAgYGh0dHA6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2RhdGEvMi41L3dlYXRoZXI/dW5pdHM9bWV0cmljJmxhdD0ke3Byb3BzLmxhdC50b1N0cmluZygpfSZsb249JHtwcm9wcz8ubG5nLnRvU3RyaW5nKCl9JmFwcGlkPSR7XG4gICAgICBwcm9jZXNzLmVudi5XRUFUSEVSX0tFWVxuICAgIH1gXG4gICk7XG4gIHJldHVybiBfcmVzdWx0LmRhdGE7XG59XG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gd2l0aFdlYXRoZXJDaXR5KHByb3BzOiBzdHJpbmcpOiBQcm9taXNlPFdlYXRoZXJQcm9wcz4ge1xuICBjb25zdCBfcmVzdWx0ID0gYXdhaXQgYXhpb3MuZ2V0KFxuICAgIGBodHRwOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9kYXRhLzIuNS93ZWF0aGVyP3VuaXRzPW1ldHJpYyZsYXQ9JHtwcm9wcy5sYXQudG9TdHJpbmcoKX0mbG9uPSR7cHJvcHM/LmxuZy50b1N0cmluZygpfSZhcHBpZD0ke1xuICAgICAgcHJvY2Vzcy5lbnYuV0VBVEhFUl9LRVlcbiAgICB9YFxuICApO1xuICByZXR1cm4gX3Jlc3VsdC5kYXRhO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gd2l0aElwTG9jYXRpb24oKTogUHJvbWlzZTxHZW9Db3JkaW5hdGVzPiB7XG4gIGNvbnN0IF9yZXN1bHQgPSBhd2FpdCBheGlvcy5nZXQoXG4gICAgYGh0dHBzOi8vaXBnZW9sb2NhdGlvbi5hYnN0cmFjdGFwaS5jb20vdjEvP2FwaV9rZXk9JHtwcm9jZXNzLmVudi5JUExPQ0FUSU9OX0tFWX1gXG4gICk7XG4gIHJldHVybiB7XG4gICAgbGF0OiBfcmVzdWx0LmRhdGEubGF0aXR1ZGUsXG4gICAgbG5nOiBfcmVzdWx0LmRhdGEubG9uZ2l0dWRlLFxuICB9O1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./hooks/useWeather.tsx\n");

/***/ })

})