webpackHotUpdate_N_E("pages/country/[city]",{

/***/ "./hooks/useWeather.tsx":
/*!******************************!*\
  !*** ./hooks/useWeather.tsx ***!
  \******************************/
/*! exports provided: default, withWeatherCordinates, withWeatherCity, withIpLocation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"withWeatherCordinates\", function() { return withWeatherCordinates; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"withWeatherCity\", function() { return withWeatherCity; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"withIpLocation\", function() { return withIpLocation; });\n/* harmony import */ var _Users_dannylodangel_Documents_repos_plat_weather_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _Users_dannylodangel_Documents_repos_plat_weather_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_dannylodangel_Documents_repos_plat_weather_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Users_dannylodangel_Documents_repos_plat_weather_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\nvar _s = $RefreshSig$();\n\n\n\n\nvar useGeoWeather = function useGeoWeather(city) {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])(false),\n      usingGeoIp = _useState[0],\n      setGeoIp = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])(),\n      weather = _useState2[0],\n      setWeather = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])(true),\n      loading = _useState3[0],\n      setLoading = _useState3[1];\n\n  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])({\n    lat: 0,\n    lng: 0\n  }),\n      location = _useState4[0],\n      setLocation = _useState4[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useEffect\"])(function () {\n    function withBrowserLocation() {\n      return _withBrowserLocation.apply(this, arguments);\n    }\n\n    function _withBrowserLocation() {\n      _withBrowserLocation = Object(_Users_dannylodangel_Documents_repos_plat_weather_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_Users_dannylodangel_Documents_repos_plat_weather_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee4() {\n        var success, _success, error, _error, getWeather, _getWeather;\n\n        return _Users_dannylodangel_Documents_repos_plat_weather_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee4$(_context4) {\n          while (1) {\n            switch (_context4.prev = _context4.next) {\n              case 0:\n                _getWeather = function _getWeather3() {\n                  _getWeather = Object(_Users_dannylodangel_Documents_repos_plat_weather_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_Users_dannylodangel_Documents_repos_plat_weather_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3(position) {\n                    return _Users_dannylodangel_Documents_repos_plat_weather_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {\n                      while (1) {\n                        switch (_context3.prev = _context3.next) {\n                          case 0:\n                            withWeatherCordinates(position).then(function (weather) {\n                              setLocation(position);\n                              setWeather(weather);\n                              setLoading(false);\n                            });\n\n                          case 1:\n                          case \"end\":\n                            return _context3.stop();\n                        }\n                      }\n                    }, _callee3);\n                  }));\n                  return _getWeather.apply(this, arguments);\n                };\n\n                getWeather = function _getWeather2(_x3) {\n                  return _getWeather.apply(this, arguments);\n                };\n\n                _error = function _error3() {\n                  _error = Object(_Users_dannylodangel_Documents_repos_plat_weather_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_Users_dannylodangel_Documents_repos_plat_weather_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(_) {\n                    return _Users_dannylodangel_Documents_repos_plat_weather_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {\n                      while (1) {\n                        switch (_context2.prev = _context2.next) {\n                          case 0:\n                            setGeoIp(true);\n                            withIpLocation().then(getWeather);\n\n                          case 2:\n                          case \"end\":\n                            return _context2.stop();\n                        }\n                      }\n                    }, _callee2);\n                  }));\n                  return _error.apply(this, arguments);\n                };\n\n                error = function _error2(_x2) {\n                  return _error.apply(this, arguments);\n                };\n\n                _success = function _success3() {\n                  _success = Object(_Users_dannylodangel_Documents_repos_plat_weather_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_Users_dannylodangel_Documents_repos_plat_weather_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(pos) {\n                    return _Users_dannylodangel_Documents_repos_plat_weather_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n                      while (1) {\n                        switch (_context.prev = _context.next) {\n                          case 0:\n                            _context.next = 2;\n                            return getWeather({\n                              lat: pos.coords.latitude,\n                              lng: pos.coords.longitude\n                            });\n\n                          case 2:\n                          case \"end\":\n                            return _context.stop();\n                        }\n                      }\n                    }, _callee);\n                  }));\n                  return _success.apply(this, arguments);\n                };\n\n                success = function _success2(_x) {\n                  return _success.apply(this, arguments);\n                };\n\n                navigator.geolocation.getCurrentPosition(success, error);\n                console.log(city);\n\n              case 8:\n              case \"end\":\n                return _context4.stop();\n            }\n          }\n        }, _callee4);\n      }));\n      return _withBrowserLocation.apply(this, arguments);\n    }\n\n    withBrowserLocation();\n  }, []);\n  return [weather, loading, usingGeoIp, location];\n};\n\n_s(useGeoWeather, \"GPyJpcyZXBYkxM+0mCqJdKHS0vg=\");\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (useGeoWeather);\nfunction withWeatherCordinates(_x4) {\n  return _withWeatherCordinates.apply(this, arguments);\n}\n\nfunction _withWeatherCordinates() {\n  _withWeatherCordinates = Object(_Users_dannylodangel_Documents_repos_plat_weather_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_Users_dannylodangel_Documents_repos_plat_weather_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee5(props) {\n    var _result;\n\n    return _Users_dannylodangel_Documents_repos_plat_weather_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee5$(_context5) {\n      while (1) {\n        switch (_context5.prev = _context5.next) {\n          case 0:\n            _context5.next = 2;\n            return axios__WEBPACK_IMPORTED_MODULE_2___default.a.get(\"http://api.openweathermap.org/data/2.5/weather?units=metric&lat=\".concat(props.lat.toString(), \"&lon=\").concat(props === null || props === void 0 ? void 0 : props.lng.toString(), \"&appid=\").concat(\"59e1631fec54ec05e6346868bff05bdf\"));\n\n          case 2:\n            _result = _context5.sent;\n            return _context5.abrupt(\"return\", _result.data);\n\n          case 4:\n          case \"end\":\n            return _context5.stop();\n        }\n      }\n    }, _callee5);\n  }));\n  return _withWeatherCordinates.apply(this, arguments);\n}\n\nfunction withWeatherCity(_x5) {\n  return _withWeatherCity.apply(this, arguments);\n}\n\nfunction _withWeatherCity() {\n  _withWeatherCity = Object(_Users_dannylodangel_Documents_repos_plat_weather_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_Users_dannylodangel_Documents_repos_plat_weather_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee6(cityName) {\n    var _result;\n\n    return _Users_dannylodangel_Documents_repos_plat_weather_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee6$(_context6) {\n      while (1) {\n        switch (_context6.prev = _context6.next) {\n          case 0:\n            _context6.next = 2;\n            return axios__WEBPACK_IMPORTED_MODULE_2___default.a.get(\"api.openweathermap.org/data/2.5/weather?q=\".concat(cityName, \"&appid=\").concat(\"59e1631fec54ec05e6346868bff05bdf\"));\n\n          case 2:\n            _result = _context6.sent;\n            return _context6.abrupt(\"return\", _result.data);\n\n          case 4:\n          case \"end\":\n            return _context6.stop();\n        }\n      }\n    }, _callee6);\n  }));\n  return _withWeatherCity.apply(this, arguments);\n}\n\nfunction withIpLocation() {\n  return _withIpLocation.apply(this, arguments);\n}\n\nfunction _withIpLocation() {\n  _withIpLocation = Object(_Users_dannylodangel_Documents_repos_plat_weather_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_Users_dannylodangel_Documents_repos_plat_weather_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee7() {\n    var _result;\n\n    return _Users_dannylodangel_Documents_repos_plat_weather_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee7$(_context7) {\n      while (1) {\n        switch (_context7.prev = _context7.next) {\n          case 0:\n            _context7.next = 2;\n            return axios__WEBPACK_IMPORTED_MODULE_2___default.a.get(\"https://ipgeolocation.abstractapi.com/v1/?api_key=\".concat(\"c8f30a60577147b5b2c75625505133cf\"));\n\n          case 2:\n            _result = _context7.sent;\n            return _context7.abrupt(\"return\", {\n              lat: _result.data.latitude,\n              lng: _result.data.longitude\n            });\n\n          case 4:\n          case \"end\":\n            return _context7.stop();\n        }\n      }\n    }, _callee7);\n  }));\n  return _withIpLocation.apply(this, arguments);\n}\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vaG9va3MvdXNlV2VhdGhlci50c3g/M2JiNyJdLCJuYW1lcyI6WyJ1c2VHZW9XZWF0aGVyIiwiY2l0eSIsInVzZVN0YXRlIiwidXNpbmdHZW9JcCIsInNldEdlb0lwIiwid2VhdGhlciIsInNldFdlYXRoZXIiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsImxhdCIsImxuZyIsImxvY2F0aW9uIiwic2V0TG9jYXRpb24iLCJ1c2VFZmZlY3QiLCJ3aXRoQnJvd3NlckxvY2F0aW9uIiwic3VjY2VzcyIsImVycm9yIiwiZ2V0V2VhdGhlciIsInBvc2l0aW9uIiwid2l0aFdlYXRoZXJDb3JkaW5hdGVzIiwidGhlbiIsIl8iLCJ3aXRoSXBMb2NhdGlvbiIsInBvcyIsImNvb3JkcyIsImxhdGl0dWRlIiwibG9uZ2l0dWRlIiwibmF2aWdhdG9yIiwiZ2VvbG9jYXRpb24iLCJnZXRDdXJyZW50UG9zaXRpb24iLCJjb25zb2xlIiwibG9nIiwicHJvcHMiLCJheGlvcyIsImdldCIsInRvU3RyaW5nIiwicHJvY2VzcyIsIl9yZXN1bHQiLCJkYXRhIiwid2l0aFdlYXRoZXJDaXR5IiwiY2l0eU5hbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOztBQUdBLElBQU1BLGFBQWEsR0FBRyxTQUFoQkEsYUFBZ0IsQ0FBQ0MsSUFBRCxFQUFtQjtBQUFBOztBQUFBLGtCQUNSQyxzREFBUSxDQUFDLEtBQUQsQ0FEQTtBQUFBLE1BQ2hDQyxVQURnQztBQUFBLE1BQ3BCQyxRQURvQjs7QUFBQSxtQkFFVEYsc0RBQVEsRUFGQztBQUFBLE1BRWhDRyxPQUZnQztBQUFBLE1BRXZCQyxVQUZ1Qjs7QUFBQSxtQkFHVEosc0RBQVEsQ0FBQyxJQUFELENBSEM7QUFBQSxNQUdoQ0ssT0FIZ0M7QUFBQSxNQUd2QkMsVUFIdUI7O0FBQUEsbUJBSVBOLHNEQUFRLENBQWdCO0FBQ3RETyxPQUFHLEVBQUUsQ0FEaUQ7QUFFdERDLE9BQUcsRUFBRTtB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O0FBQUE7OztpVUFBTztBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFDaUJXLDRDQUFLLENBQUNDLEdBQU4sNkRBQ2lDRSxrQ0FEakMsRUFEakI7O0FBQUE7QUFDQ0MsbUJBREQ7QUFBQSw4Q0FJRTtBQUNMNUIsaUJBQUcsRUFBRTRCLE9BQU8sQ0FBQ0MsSUFBUixDQUFhYixRQURiO0FBRUxmLGlCQUFHLEVBQUUyQixPQUFPLENBQUNDLElBQVIsQ0FBYVo7QUFGYixhQUpGOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEciLCJmaWxlIjoiLi9ob29rcy91c2VXZWF0aGVyLnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IEdlb0NvcmRpbmF0ZXMsIFdlYXRoZXJQcm9wcyB9IGZyb20gXCIuLi9pbnRlcmZhY2VzL3R5cGVzXCI7XG5cbmNvbnN0IHVzZUdlb1dlYXRoZXIgPSAoY2l0eT86IHN0cmluZykgPT4ge1xuICBjb25zdCBbdXNpbmdHZW9JcCwgc2V0R2VvSXBdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbd2VhdGhlciwgc2V0V2VhdGhlcl0gPSB1c2VTdGF0ZTxhbnk+KCk7XG4gIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKHRydWUpO1xuICBjb25zdCBbbG9jYXRpb24sIHNldExvY2F0aW9uXSA9IHVzZVN0YXRlPEdlb0NvcmRpbmF0ZXM+KHtcbiAgICBsYXQ6IDAsXG4gICAgbG5nOiAwLFxuICB9KTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGFzeW5jIGZ1bmN0aW9uIHdpdGhCcm93c2VyTG9jYXRpb24oKSB7XG4gICAgICBuYXZpZ2F0b3IuZ2VvbG9jYXRpb24uZ2V0Q3VycmVudFBvc2l0aW9uKHN1Y2Nlc3MsIGVycm9yKTtcbiAgICAgIGNvbnNvbGUubG9nKGNpdHkpO1xuICAgICAgYXN5bmMgZnVuY3Rpb24gc3VjY2Vzcyhwb3M6IGFueSkge1xuICAgICAgICBhd2FpdCBnZXRXZWF0aGVyKHtcbiAgICAgICAgICBsYXQ6IHBvcy5jb29yZHMubGF0aXR1ZGUsXG4gICAgICAgICAgbG5nOiBwb3MuY29vcmRzLmxvbmdpdHVkZSxcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIGFzeW5jIGZ1bmN0aW9uIGVycm9yKF86IGFueSkge1xuICAgICAgICBzZXRHZW9JcCh0cnVlKTtcbiAgICAgICAgd2l0aElwTG9jYXRpb24oKS50aGVuKGdldFdlYXRoZXIpO1xuICAgICAgfVxuXG4gICAgICBhc3luYyBmdW5jdGlvbiBnZXRXZWF0aGVyKHBvc2l0aW9uOiBhbnkpIHtcbiAgICAgICAgd2l0aFdlYXRoZXJDb3JkaW5hdGVzKHBvc2l0aW9uKS50aGVuKCh3ZWF0aGVyKSA9PiB7XG4gICAgICAgICAgc2V0TG9jYXRpb24ocG9zaXRpb24pO1xuICAgICAgICAgIHNldFdlYXRoZXIod2VhdGhlcik7XG4gICAgICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cblxuICAgIHdpdGhCcm93c2VyTG9jYXRpb24oKTtcbiAgfSwgW10pO1xuXG4gIHJldHVybiBbd2VhdGhlciwgbG9hZGluZywgdXNpbmdHZW9JcCwgbG9jYXRpb25dO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgdXNlR2VvV2VhdGhlcjtcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHdpdGhXZWF0aGVyQ29yZGluYXRlcyhcbiAgcHJvcHM6IEdlb0NvcmRpbmF0ZXNcbik6IFByb21pc2U8V2VhdGhlclByb3BzPiB7XG4gIGNvbnN0IF9yZXN1bHQgPSBhd2FpdCBheGlvcy5nZXQoXG4gICAgYGh0dHA6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2RhdGEvMi41L3dlYXRoZXI/dW5pdHM9bWV0cmljJmxhdD0ke3Byb3BzLmxhdC50b1N0cmluZygpfSZsb249JHtwcm9wcz8ubG5nLnRvU3RyaW5nKCl9JmFwcGlkPSR7XG4gICAgICBwcm9jZXNzLmVudi5XRUFUSEVSX0tFWVxuICAgIH1gXG4gICk7XG4gIHJldHVybiBfcmVzdWx0LmRhdGE7XG59XG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gd2l0aFdlYXRoZXJDaXR5KGNpdHlOYW1lOiBzdHJpbmcpOiBQcm9taXNlPFdlYXRoZXJQcm9wcz4ge1xuICBjb25zdCBfcmVzdWx0ID0gYXdhaXQgYXhpb3MuZ2V0KFxuICAgIGBhcGkub3BlbndlYXRoZXJtYXAub3JnL2RhdGEvMi41L3dlYXRoZXI/cT0ke2NpdHlOYW1lfSZhcHBpZD0ke3Byb2Nlc3MuZW52LldFQVRIRVJfS0VZfWBcbiAgKTtcbiAgcmV0dXJuIF9yZXN1bHQuZGF0YTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHdpdGhJcExvY2F0aW9uKCk6IFByb21pc2U8R2VvQ29yZGluYXRlcz4ge1xuICBjb25zdCBfcmVzdWx0ID0gYXdhaXQgYXhpb3MuZ2V0KFxuICAgIGBodHRwczovL2lwZ2VvbG9jYXRpb24uYWJzdHJhY3RhcGkuY29tL3YxLz9hcGlfa2V5PSR7cHJvY2Vzcy5lbnYuSVBMT0NBVElPTl9LRVl9YFxuICApO1xuICByZXR1cm4ge1xuICAgIGxhdDogX3Jlc3VsdC5kYXRhLmxhdGl0dWRlLFxuICAgIGxuZzogX3Jlc3VsdC5kYXRhLmxvbmdpdHVkZSxcbiAgfTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./hooks/useWeather.tsx\n");

/***/ })

})