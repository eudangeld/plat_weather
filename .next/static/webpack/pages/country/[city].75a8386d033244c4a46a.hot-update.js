webpackHotUpdate_N_E("pages/country/[city]",{

/***/ "./hooks/useWeather.tsx":
/*!******************************!*\
  !*** ./hooks/useWeather.tsx ***!
  \******************************/
/*! exports provided: default, useWeatherCordinates, withIpLocation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"useWeatherCordinates\", function() { return useWeatherCordinates; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"withIpLocation\", function() { return withIpLocation; });\n/* harmony import */ var _Users_dannylodangel_Documents_repos_plat_weather_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _Users_dannylodangel_Documents_repos_plat_weather_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_dannylodangel_Documents_repos_plat_weather_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Users_dannylodangel_Documents_repos_plat_weather_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\nvar _s2 = $RefreshSig$();\n\n\n\n\nvar useGeoWeather = function useGeoWeather(city) {\n  _s2();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])(),\n      cityName = _useState[0],\n      setCityName = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])(false),\n      usingGeoIp = _useState2[0],\n      setGeoIp = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])(),\n      weather = _useState3[0],\n      setWeather = _useState3[1];\n\n  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])(true),\n      loading = _useState4[0],\n      setLoading = _useState4[1];\n\n  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])({\n    lat: 0,\n    lng: 0\n  }),\n      location = _useState5[0],\n      setLocation = _useState5[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useEffect\"])(function () {\n    function withBrowserLocation() {\n      return _withBrowserLocation.apply(this, arguments);\n    }\n\n    function _withBrowserLocation() {\n      _withBrowserLocation = Object(_Users_dannylodangel_Documents_repos_plat_weather_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_Users_dannylodangel_Documents_repos_plat_weather_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee4() {\n        var success, _success, error, _error, getWeather, _getWeather;\n\n        return _Users_dannylodangel_Documents_repos_plat_weather_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee4$(_context4) {\n          while (1) {\n            switch (_context4.prev = _context4.next) {\n              case 0:\n                _getWeather = function _getWeather3() {\n                  var _s = $RefreshSig$();\n\n                  _getWeather = Object(_Users_dannylodangel_Documents_repos_plat_weather_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_s( /*#__PURE__*/_Users_dannylodangel_Documents_repos_plat_weather_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3(position) {\n                    return _Users_dannylodangel_Documents_repos_plat_weather_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {\n                      while (1) {\n                        switch (_context3.prev = _context3.next) {\n                          case 0:\n                            _s();\n\n                            useWeatherCordinates(position).then(function (weather) {\n                              setLocation(position);\n                              setWeather(weather);\n                              setLoading(false);\n                            });\n\n                          case 2:\n                          case \"end\":\n                            return _context3.stop();\n                        }\n                      }\n                    }, _callee3);\n                  }), \"ED1WSfPuAutyyotkH0ImvhNO/X4=\", false, function () {\n                    return [useWeatherCordinates];\n                  }));\n                  return _getWeather.apply(this, arguments);\n                };\n\n                getWeather = function _getWeather2(_x3) {\n                  return _getWeather.apply(this, arguments);\n                };\n\n                _error = function _error3() {\n                  _error = Object(_Users_dannylodangel_Documents_repos_plat_weather_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_Users_dannylodangel_Documents_repos_plat_weather_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(_) {\n                    return _Users_dannylodangel_Documents_repos_plat_weather_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {\n                      while (1) {\n                        switch (_context2.prev = _context2.next) {\n                          case 0:\n                            setGeoIp(true);\n                            withIpLocation().then(getWeather);\n\n                          case 2:\n                          case \"end\":\n                            return _context2.stop();\n                        }\n                      }\n                    }, _callee2);\n                  }));\n                  return _error.apply(this, arguments);\n                };\n\n                error = function _error2(_x2) {\n                  return _error.apply(this, arguments);\n                };\n\n                _success = function _success3() {\n                  _success = Object(_Users_dannylodangel_Documents_repos_plat_weather_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_Users_dannylodangel_Documents_repos_plat_weather_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(pos) {\n                    return _Users_dannylodangel_Documents_repos_plat_weather_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n                      while (1) {\n                        switch (_context.prev = _context.next) {\n                          case 0:\n                            _context.next = 2;\n                            return getWeather({\n                              lat: pos.coords.latitude,\n                              lng: pos.coords.longitude\n                            });\n\n                          case 2:\n                          case \"end\":\n                            return _context.stop();\n                        }\n                      }\n                    }, _callee);\n                  }));\n                  return _success.apply(this, arguments);\n                };\n\n                success = function _success2(_x) {\n                  return _success.apply(this, arguments);\n                };\n\n                navigator.geolocation.getCurrentPosition(success, error);\n                console.log(city);\n\n              case 8:\n              case \"end\":\n                return _context4.stop();\n            }\n          }\n        }, _callee4);\n      }));\n      return _withBrowserLocation.apply(this, arguments);\n    }\n\n    withBrowserLocation();\n  }, []);\n  return [weather, loading, usingGeoIp, location];\n};\n\n_s2(useGeoWeather, \"MTIXmmSX1euWln9lwsNRWJ3ZGLc=\");\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (useGeoWeather);\nfunction useWeatherCordinates(_x4) {\n  return _useWeatherCordinates.apply(this, arguments);\n}\n\nfunction _useWeatherCordinates() {\n  _useWeatherCordinates = Object(_Users_dannylodangel_Documents_repos_plat_weather_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_Users_dannylodangel_Documents_repos_plat_weather_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee5(props) {\n    var _result;\n\n    return _Users_dannylodangel_Documents_repos_plat_weather_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee5$(_context5) {\n      while (1) {\n        switch (_context5.prev = _context5.next) {\n          case 0:\n            _context5.next = 2;\n            return axios__WEBPACK_IMPORTED_MODULE_2___default.a.get(\"http://api.openweathermap.org/data/2.5/weather?units=metric&lat=\".concat(props.lat.toString(), \"&lon=\").concat(props === null || props === void 0 ? void 0 : props.lng.toString(), \"&appid=\").concat(\"59e1631fec54ec05e6346868bff05bdf\"));\n\n          case 2:\n            _result = _context5.sent;\n            return _context5.abrupt(\"return\", _result.data);\n\n          case 4:\n          case \"end\":\n            return _context5.stop();\n        }\n      }\n    }, _callee5);\n  }));\n  return _useWeatherCordinates.apply(this, arguments);\n}\n\nfunction withIpLocation() {\n  return _withIpLocation.apply(this, arguments);\n}\n\nfunction _withIpLocation() {\n  _withIpLocation = Object(_Users_dannylodangel_Documents_repos_plat_weather_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_Users_dannylodangel_Documents_repos_plat_weather_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee6() {\n    var _result;\n\n    return _Users_dannylodangel_Documents_repos_plat_weather_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee6$(_context6) {\n      while (1) {\n        switch (_context6.prev = _context6.next) {\n          case 0:\n            _context6.next = 2;\n            return axios__WEBPACK_IMPORTED_MODULE_2___default.a.get(\"https://ipgeolocation.abstractapi.com/v1/?api_key=\".concat(\"c8f30a60577147b5b2c75625505133cf\"));\n\n          case 2:\n            _result = _context6.sent;\n            return _context6.abrupt(\"return\", {\n              lat: _result.data.latitude,\n              lng: _result.data.longitude\n            });\n\n          case 4:\n          case \"end\":\n            return _context6.stop();\n        }\n      }\n    }, _callee6);\n  }));\n  return _withIpLocation.apply(this, arguments);\n}\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vaG9va3MvdXNlV2VhdGhlci50c3g/M2JiNyJdLCJuYW1lcyI6WyJ1c2VHZW9XZWF0aGVyIiwiY2l0eSIsInVzZVN0YXRlIiwiY2l0eU5hbWUiLCJzZXRDaXR5TmFtZSIsInVzaW5nR2VvSXAiLCJzZXRHZW9JcCIsIndlYXRoZXIiLCJzZXRXZWF0aGVyIiwibG9hZGluZyIsInNldExvYWRpbmciLCJsYXQiLCJsbmciLCJsb2NhdGlvbiIsInNldExvY2F0aW9uIiwidXNlRWZmZWN0Iiwid2l0aEJyb3dzZXJMb2NhdGlvbiIsInN1Y2Nlc3MiLCJlcnJvciIsImdldFdlYXRoZXIiLCJwb3NpdGlvbiIsInVzZVdlYXRoZXJDb3JkaW5hdGVzIiwidGhlbiIsIl8iLCJ3aXRoSXBMb2NhdGlvbiIsInBvcyIsImNvb3JkcyIsImxhdGl0dWRlIiwibG9uZ2l0dWRlIiwibmF2aWdhdG9yIiwiZ2VvbG9jYXRpb24iLCJnZXRDdXJyZW50UG9zaXRpb24iLCJjb25zb2xlIiwibG9nIiwicHJvcHMiLCJheGlvcyIsImdldCIsInRvU3RyaW5nIiwicHJvY2VzcyIsIl9yZXN1bHQiLCJkYXRhIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOztBQUdBLElBQU1BLGFBQWEsR0FBRyxTQUFoQkEsYUFBZ0IsQ0FBQ0MsSUFBRCxFQUFtQjtBQUFBOztBQUFBLGtCQUNQQyxzREFBUSxFQUREO0FBQUEsTUFDaENDLFFBRGdDO0FBQUEsTUFDdEJDLFdBRHNCOztBQUFBLG1CQUVSRixzREFBUSxDQUFDLEtBQUQsQ0FGQTtBQUFBLE1BRWhDRyxVQUZnQztBQUFBLE1BRXBCQyxRQUZvQjs7QUFBQSxtQkFHVEosc0RBQVEsRUFIQztBQUFBLE1BR2hDSyxPQUhnQztBQUFBLE1BR3ZCQyxVQUh1Qjs7QUFBQSxtQkFJVE4sc0RBQVEsQ0FBQyxJQUFELENBSkM7QUFBQSxNQUloQ08sT0FKZ0M7QUFBQSxNQUl2QkMsVUFKdUI7O0FBQUEsbUJBS1BS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QUcsRUFBRTRCLE9BQU8sQ0FBQ0MsSUFBUixDQUFhYixRQURiO0FBRUxmLGlCQUFHLEVBQUUyQixPQUFPLENBQUNDLElBQVIsQ0FBYVo7QUFGYixhQUpGOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEciLCJmaWxlIjoiLi9ob29rcy91c2VXZWF0aGVyLnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IEdlb0NvcmRpbmF0ZXMsIFdlYXRoZXJQcm9wcyB9IGZyb20gXCIuLi9pbnRlcmZhY2VzL3R5cGVzXCI7XG5cbmNvbnN0IHVzZUdlb1dlYXRoZXIgPSAoY2l0eT86IHN0cmluZykgPT4ge1xuICBjb25zdCBbY2l0eU5hbWUsIHNldENpdHlOYW1lXSA9IHVzZVN0YXRlPHN0cmluZz4oKTtcbiAgY29uc3QgW3VzaW5nR2VvSXAsIHNldEdlb0lwXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW3dlYXRoZXIsIHNldFdlYXRoZXJdID0gdXNlU3RhdGU8YW55PigpO1xuICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZSh0cnVlKTtcbiAgY29uc3QgW2xvY2F0aW9uLCBzZXRMb2NhdGlvbl0gPSB1c2VTdGF0ZTxHZW9Db3JkaW5hdGVzPih7XG4gICAgbGF0OiAwLFxuICAgIGxuZzogMCxcbiAgfSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBhc3luYyBmdW5jdGlvbiB3aXRoQnJvd3NlckxvY2F0aW9uKCkge1xuICAgICAgbmF2aWdhdG9yLmdlb2xvY2F0aW9uLmdldEN1cnJlbnRQb3NpdGlvbihzdWNjZXNzLCBlcnJvcik7XG4gICAgICBjb25zb2xlLmxvZyhjaXR5KTtcblxuICAgICAgYXN5bmMgZnVuY3Rpb24gc3VjY2Vzcyhwb3M6IGFueSkge1xuICAgICAgICBhd2FpdCBnZXRXZWF0aGVyKHtcbiAgICAgICAgICBsYXQ6IHBvcy5jb29yZHMubGF0aXR1ZGUsXG4gICAgICAgICAgbG5nOiBwb3MuY29vcmRzLmxvbmdpdHVkZSxcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIGFzeW5jIGZ1bmN0aW9uIGVycm9yKF86IGFueSkge1xuICAgICAgICBzZXRHZW9JcCh0cnVlKTtcbiAgICAgICAgd2l0aElwTG9jYXRpb24oKS50aGVuKGdldFdlYXRoZXIpO1xuICAgICAgfVxuXG4gICAgICBhc3luYyBmdW5jdGlvbiBnZXRXZWF0aGVyKHBvc2l0aW9uOiBhbnkpIHtcbiAgICAgICAgdXNlV2VhdGhlckNvcmRpbmF0ZXMocG9zaXRpb24pLnRoZW4oKHdlYXRoZXIpID0+IHtcbiAgICAgICAgICBzZXRMb2NhdGlvbihwb3NpdGlvbik7XG4gICAgICAgICAgc2V0V2VhdGhlcih3ZWF0aGVyKTtcbiAgICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgd2l0aEJyb3dzZXJMb2NhdGlvbigpO1xuICB9LCBbXSk7XG5cbiAgcmV0dXJuIFt3ZWF0aGVyLCBsb2FkaW5nLCB1c2luZ0dlb0lwLCBsb2NhdGlvbl07XG59O1xuXG5leHBvcnQgZGVmYXVsdCB1c2VHZW9XZWF0aGVyO1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdXNlV2VhdGhlckNvcmRpbmF0ZXMoXG4gIHByb3BzOiBHZW9Db3JkaW5hdGVzXG4pOiBQcm9taXNlPFdlYXRoZXJQcm9wcz4ge1xuICBjb25zdCBfcmVzdWx0ID0gYXdhaXQgYXhpb3MuZ2V0KFxuICAgIGBodHRwOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9kYXRhLzIuNS93ZWF0aGVyP3VuaXRzPW1ldHJpYyZsYXQ9JHtwcm9wcy5sYXQudG9TdHJpbmcoKX0mbG9uPSR7cHJvcHM/LmxuZy50b1N0cmluZygpfSZhcHBpZD0ke1xuICAgICAgcHJvY2Vzcy5lbnYuV0VBVEhFUl9LRVlcbiAgICB9YFxuICApO1xuICByZXR1cm4gX3Jlc3VsdC5kYXRhO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gd2l0aElwTG9jYXRpb24oKTogUHJvbWlzZTxHZW9Db3JkaW5hdGVzPiB7XG4gIGNvbnN0IF9yZXN1bHQgPSBhd2FpdCBheGlvcy5nZXQoXG4gICAgYGh0dHBzOi8vaXBnZW9sb2NhdGlvbi5hYnN0cmFjdGFwaS5jb20vdjEvP2FwaV9rZXk9JHtwcm9jZXNzLmVudi5JUExPQ0FUSU9OX0tFWX1gXG4gICk7XG4gIHJldHVybiB7XG4gICAgbGF0OiBfcmVzdWx0LmRhdGEubGF0aXR1ZGUsXG4gICAgbG5nOiBfcmVzdWx0LmRhdGEubG9uZ2l0dWRlLFxuICB9O1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./hooks/useWeather.tsx\n");

/***/ })

})