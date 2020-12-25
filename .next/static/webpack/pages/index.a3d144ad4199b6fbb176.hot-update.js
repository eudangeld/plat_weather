webpackHotUpdate_N_E("pages/index",{

/***/ "./hooks/useWeather.tsx":
/*!******************************!*\
  !*** ./hooks/useWeather.tsx ***!
  \******************************/
/*! exports provided: default, useWeatherCordinates, withIpLocation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"useWeatherCordinates\", function() { return useWeatherCordinates; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"withIpLocation\", function() { return withIpLocation; });\n/* harmony import */ var _Users_dannylodangel_Documents_repos_plat_weather_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _Users_dannylodangel_Documents_repos_plat_weather_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_dannylodangel_Documents_repos_plat_weather_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Users_dannylodangel_Documents_repos_plat_weather_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\nvar _s2 = $RefreshSig$();\n\n\n\n\nvar useGeoWeather = function useGeoWeather() {\n  _s2();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])(false),\n      usingGeoIp = _useState[0],\n      setGeoIp = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])(),\n      weather = _useState2[0],\n      setWeather = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])(true),\n      loading = _useState3[0],\n      setLoading = _useState3[1];\n\n  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])(),\n      location = _useState4[0],\n      setLocation = _useState4[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useEffect\"])(function () {\n    var _s = $RefreshSig$();\n\n    function withBrowserLocation() {\n      return _withBrowserLocation.apply(this, arguments);\n    }\n\n    function _withBrowserLocation() {\n      _withBrowserLocation = Object(_Users_dannylodangel_Documents_repos_plat_weather_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_Users_dannylodangel_Documents_repos_plat_weather_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {\n        return _Users_dannylodangel_Documents_repos_plat_weather_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {\n          while (1) {\n            switch (_context2.prev = _context2.next) {\n              case 0:\n                _context2.next = 2;\n                return navigator.geolocation.getCurrentPosition(function (sucess) {\n                  console.log(sucess);\n                  setLocation({\n                    lat: sucess.coords.latitude,\n                    lng: sucess.coords.longitude\n                  });\n                }, /*#__PURE__*/function () {\n                  var _ref = Object(_Users_dannylodangel_Documents_repos_plat_weather_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_Users_dannylodangel_Documents_repos_plat_weather_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(error) {\n                    var _ipLocation;\n\n                    return _Users_dannylodangel_Documents_repos_plat_weather_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n                      while (1) {\n                        switch (_context.prev = _context.next) {\n                          case 0:\n                            setGeoIp(true);\n                            _context.next = 3;\n                            return withIpLocation();\n\n                          case 3:\n                            _ipLocation = _context.sent;\n                            console.log(error);\n\n                          case 5:\n                          case \"end\":\n                            return _context.stop();\n                        }\n                      }\n                    }, _callee);\n                  }));\n\n                  return function (_x) {\n                    return _ref.apply(this, arguments);\n                  };\n                }());\n\n              case 2:\n              case \"end\":\n                return _context2.stop();\n            }\n          }\n        }, _callee2);\n      }));\n      return _withBrowserLocation.apply(this, arguments);\n    }\n\n    withBrowserLocation().then(_s(function () {\n      _s();\n\n      useWeatherCordinates(location).then(function (_weather) {\n        setWeather(_weather);\n        setLoading(false);\n      });\n    }, \"ED1WSfPuAutyyotkH0ImvhNO/X4=\", false, function () {\n      return [useWeatherCordinates];\n    }));\n  }, []);\n  return [weather, loading, usingGeoIp];\n};\n\n_s2(useGeoWeather, \"p0cGRQP7u75P6Fn3xY7eq0H+Fq4=\");\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (useGeoWeather);\nfunction useWeatherCordinates(_x2) {\n  return _useWeatherCordinates.apply(this, arguments);\n}\n\nfunction _useWeatherCordinates() {\n  _useWeatherCordinates = Object(_Users_dannylodangel_Documents_repos_plat_weather_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_Users_dannylodangel_Documents_repos_plat_weather_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3(props) {\n    var _result;\n\n    return _Users_dannylodangel_Documents_repos_plat_weather_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {\n      while (1) {\n        switch (_context3.prev = _context3.next) {\n          case 0:\n            console.log(props);\n            _context3.next = 3;\n            return axios__WEBPACK_IMPORTED_MODULE_2___default.a.get(\"http://api.openweathermap.org/data/2.5/weather?units=metric&lat=\".concat(props.lat.toString(), \"&lon=\").concat(props === null || props === void 0 ? void 0 : props.lng.toString(), \"&appid=\").concat(\"59e1631fec54ec05e6346868bff05bdf\"));\n\n          case 3:\n            _result = _context3.sent;\n            return _context3.abrupt(\"return\", _result.data);\n\n          case 5:\n          case \"end\":\n            return _context3.stop();\n        }\n      }\n    }, _callee3);\n  }));\n  return _useWeatherCordinates.apply(this, arguments);\n}\n\nfunction withIpLocation() {\n  return _withIpLocation.apply(this, arguments);\n}\n\nfunction _withIpLocation() {\n  _withIpLocation = Object(_Users_dannylodangel_Documents_repos_plat_weather_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_Users_dannylodangel_Documents_repos_plat_weather_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee4() {\n    var _result;\n\n    return _Users_dannylodangel_Documents_repos_plat_weather_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee4$(_context4) {\n      while (1) {\n        switch (_context4.prev = _context4.next) {\n          case 0:\n            _context4.next = 2;\n            return axios__WEBPACK_IMPORTED_MODULE_2___default.a.get(\"https://ipgeolocation.abstractapi.com/v1/?api_key=\".concat(\"c8f30a60577147b5b2c75625505133cf\"));\n\n          case 2:\n            _result = _context4.sent;\n            return _context4.abrupt(\"return\", {\n              lat: _result.data.latitude,\n              lng: _result.data.longitude\n            });\n\n          case 4:\n          case \"end\":\n            return _context4.stop();\n        }\n      }\n    }, _callee4);\n  }));\n  return _withIpLocation.apply(this, arguments);\n}\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vaG9va3MvdXNlV2VhdGhlci50c3g/M2JiNyJdLCJuYW1lcyI6WyJ1c2VHZW9XZWF0aGVyIiwidXNlU3RhdGUiLCJ1c2luZ0dlb0lwIiwic2V0R2VvSXAiLCJ3ZWF0aGVyIiwic2V0V2VhdGhlciIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwibG9jYXRpb24iLCJzZXRMb2NhdGlvbiIsInVzZUVmZmVjdCIsIndpdGhCcm93c2VyTG9jYXRpb24iLCJuYXZpZ2F0b3IiLCJnZW9sb2NhdGlvbiIsImdldEN1cnJlbnRQb3NpdGlvbiIsInN1Y2VzcyIsImNvbnNvbGUiLCJsb2ciLCJsYXQiLCJjb29yZHMiLCJsYXRpdHVkZSIsImxuZyIsImxvbmdpdHVkZSIsImVycm9yIiwid2l0aElwTG9jYXRpb24iLCJfaXBMb2NhdGlvbiIsInRoZW4iLCJ1c2VXZWF0aGVyQ29yZGluYXRlcyIsIl93ZWF0aGVyIiwicHJvcHMiLCJheGlvcyIsImdldCIsInRvU3RyaW5nIiwicHJvY2VzcyIsIl9yZXN1bHQiLCJkYXRhIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOztBQUdBLElBQU1BLGFBQWEsR0FBRyxTQUFoQkEsYUFBZ0IsR0FBTTtBQUFBOztBQUFBLGtCQUNLQyxzREFBUSxDQUFDLEtBQUQsQ0FEYjtBQUFBLE1BQ25CQyxVQURtQjtBQUFBLE1BQ1BDLFFBRE87O0FBQUEsbUJBRUlGLHNEQUFRLEVBRlo7QUFBQSxNQUVuQkcsT0FGbUI7QUFBQSxNQUVWQyxVQUZVOztBQUFBLG1CQUdJSixzREFBUSxDQUFDLElBQUQsQ0FIWjtBQUFBLE1BR25CSyxPQUhtQjtBQUFBLE1BR1ZDLFVBSFU7O0FBQUEsbUJBSU1OLHNEQUFRLEVBSmQ7QUFBQSxNQUluQk8sUUFKbUI7QUFBQSxNQUlUQyxXQUpTOztBQU0xQkMseURBQVMsQ0FBQyxZQUFNO0FBQUE7O0FBQUEsYUFDQ0MsbUJBREQ7QUFBQTtBQUFBOztBQUFBO0FBQUEsMFVBQ2Q7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBQ1FDLFNBQVMsQ0FBQ0MsV0FBVixDQUFzQkMsa0JBQXRCLENBQ0osVUFBQ0MsTUFBRCxFQUFZO0FBQ1ZDLHlCQUFPLENBQUNDLEdBQVIsQ0FBWUYsTUFBWjtBQUNBTiw2QkFBVyxDQUFDO0FBQ1ZTLHVCQUFHLEVBQUVILE1BQU0sQ0FBQ0ksTUFBUCxDQUFjQyxRQURUO0FBRVZDLHVCQUFHLEVBQUVOLE1BQU0sQ0FBQ0ksTUFBUCxDQUFjRztBQUZULG1CQUFELENBQVg7QUFJRCxpQkFQRztBQUFBLDBVQVFKLGlCQUFPQyxLQUFQO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDRXBCLG9DQUFRLENBQUMsSUFBRCxDQUFSO0FBREY7QUFBQSxtQ0FFNEJxQixjQUFjLEVBRjFDOztBQUFBO0FBRVFDLHVDQUZSO0FBR0VULG1DQUFPLENBQUNDLEdBQVIsQ0FBWU0sS0FBWjs7QUFIRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFSSTs7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFEUjs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQURjO0FBQUE7QUFBQTs7QUFrQmRaLHVCQUFtQixHQUFHZSxJQUF0QixJQUEyQixZQUFNO0FBQUE7O0FBQy9CQywwQkFBb0IsQ0FBQ25CLFFBQUQsQ0FBcEIsQ0FBK0JrQixJQUEvQixDQUFvQyxVQUFDRSxRQUFELEVBQWM7QUFDaER2QixrQkFBVSxDQUFDdUIsUUFBRCxDQUFWO0FBQ0FyQixrQkFBVSxDQUFDLEtBQUQsQ0FBVjtBQUNELE9BSEQ7QUFJRCxLQUxEO0FBQUEsY0FDRW9CLG9CQURGO0FBQUE7QUFNRCxHQXhCUSxFQXdCTixFQXhCTSxDQUFUO0FBMEJBLFNBQU8sQ0FBQ3ZCLE9BQUQsRUFBVUUsT0FBVixFQUFtQkosVUFBbkIsQ0FBUDtBQUNELENBakNEOztJQUFNRixhOztBQW1DU0EsNEVBQWY7QUFFTyxTQUFlMkIsb0JBQXRCO0FBQUE7QUFBQTs7O3VVQUFPLGtCQUNMRSxLQURLO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFHTGIsbUJBQU8sQ0FBQ0MsR0FBUixDQUFZWSxLQUFaO0FBSEs7QUFBQSxtQkFJaUJDLDRDQUFLLENBQUNDLEdBQU4sMkVBQytDRixLQUFLLENBQUNYLEdBQU4sQ0FBVWMsUUFBVixFQUQvQyxrQkFDMkVILEtBRDNFLGFBQzJFQSxLQUQzRSx1QkFDMkVBLEtBQUssQ0FBRVIsR0FBUCxDQUFXVyxRQUFYLEVBRDNFLG9CQUVsQkMsa0NBRmtCLEVBSmpCOztBQUFBO0FBSUNDLG1CQUpEO0FBQUEsOENBU0VBLE9BQU8sQ0FBQ0MsSUFUVjs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHOzs7O0FBWUEsU0FBZVgsY0FBdEI7QUFBQTtBQUFBOzs7aVVBQU87QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBQ2lCTSw0Q0FBSyxDQUFDQyxHQUFOLDZEQUNpQ0Usa0NBRGpDLEVBRGpCOztBQUFBO0FBQ0NDLG1CQUREO0FBQUEsOENBSUU7QUFDTGhCLGlCQUFHLEVBQUVnQixPQUFPLENBQUNDLElBQVIsQ0FBYWYsUUFEYjtBQUVMQyxpQkFBRyxFQUFFYSxPQUFPLENBQUNDLElBQVIsQ0FBYWI7QUFGYixhQUpGOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEciLCJmaWxlIjoiLi9ob29rcy91c2VXZWF0aGVyLnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IEdlb0NvcmRpbmF0ZXMsIFdlYXRoZXJQcm9wcyB9IGZyb20gXCIuLi9pbnRlcmZhY2VzL3R5cGVzXCI7XG5cbmNvbnN0IHVzZUdlb1dlYXRoZXIgPSAoKSA9PiB7XG4gIGNvbnN0IFt1c2luZ0dlb0lwLCBzZXRHZW9JcF0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFt3ZWF0aGVyLCBzZXRXZWF0aGVyXSA9IHVzZVN0YXRlPGFueT4oKTtcbiAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUodHJ1ZSk7XG4gIGNvbnN0IFtsb2NhdGlvbiwgc2V0TG9jYXRpb25dID0gdXNlU3RhdGU8YW55PigpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgYXN5bmMgZnVuY3Rpb24gd2l0aEJyb3dzZXJMb2NhdGlvbigpIHtcbiAgICAgIGF3YWl0IG5hdmlnYXRvci5nZW9sb2NhdGlvbi5nZXRDdXJyZW50UG9zaXRpb24oXG4gICAgICAgIChzdWNlc3MpID0+IHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhzdWNlc3MpO1xuICAgICAgICAgIHNldExvY2F0aW9uKHtcbiAgICAgICAgICAgIGxhdDogc3VjZXNzLmNvb3Jkcy5sYXRpdHVkZSxcbiAgICAgICAgICAgIGxuZzogc3VjZXNzLmNvb3Jkcy5sb25naXR1ZGUsXG4gICAgICAgICAgfSk7XG4gICAgICAgIH0sXG4gICAgICAgIGFzeW5jIChlcnJvcikgPT4ge1xuICAgICAgICAgIHNldEdlb0lwKHRydWUpO1xuICAgICAgICAgIGNvbnN0IF9pcExvY2F0aW9uID0gYXdhaXQgd2l0aElwTG9jYXRpb24oKTtcbiAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICAgIH1cbiAgICAgICk7XG4gICAgfVxuXG4gICAgd2l0aEJyb3dzZXJMb2NhdGlvbigpLnRoZW4oKCkgPT4ge1xuICAgICAgdXNlV2VhdGhlckNvcmRpbmF0ZXMobG9jYXRpb24pLnRoZW4oKF93ZWF0aGVyKSA9PiB7XG4gICAgICAgIHNldFdlYXRoZXIoX3dlYXRoZXIpO1xuICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9LCBbXSk7XG5cbiAgcmV0dXJuIFt3ZWF0aGVyLCBsb2FkaW5nLCB1c2luZ0dlb0lwXTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHVzZUdlb1dlYXRoZXI7XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB1c2VXZWF0aGVyQ29yZGluYXRlcyhcbiAgcHJvcHM6IEdlb0NvcmRpbmF0ZXNcbik6IFByb21pc2U8V2VhdGhlclByb3BzPiB7XG4gIGNvbnNvbGUubG9nKHByb3BzKTtcbiAgY29uc3QgX3Jlc3VsdCA9IGF3YWl0IGF4aW9zLmdldChcbiAgICBgaHR0cDovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZGF0YS8yLjUvd2VhdGhlcj91bml0cz1tZXRyaWMmbGF0PSR7cHJvcHMubGF0LnRvU3RyaW5nKCl9Jmxvbj0ke3Byb3BzPy5sbmcudG9TdHJpbmcoKX0mYXBwaWQ9JHtcbiAgICAgIHByb2Nlc3MuZW52LldFQVRIRVJfS0VZXG4gICAgfWBcbiAgKTtcbiAgcmV0dXJuIF9yZXN1bHQuZGF0YTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHdpdGhJcExvY2F0aW9uKCk6IFByb21pc2U8R2VvQ29yZGluYXRlcz4ge1xuICBjb25zdCBfcmVzdWx0ID0gYXdhaXQgYXhpb3MuZ2V0KFxuICAgIGBodHRwczovL2lwZ2VvbG9jYXRpb24uYWJzdHJhY3RhcGkuY29tL3YxLz9hcGlfa2V5PSR7cHJvY2Vzcy5lbnYuSVBMT0NBVElPTl9LRVl9YFxuICApO1xuICByZXR1cm4ge1xuICAgIGxhdDogX3Jlc3VsdC5kYXRhLmxhdGl0dWRlLFxuICAgIGxuZzogX3Jlc3VsdC5kYXRhLmxvbmdpdHVkZSxcbiAgfTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./hooks/useWeather.tsx\n");

/***/ })

})