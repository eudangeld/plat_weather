webpackHotUpdate_N_E("pages/index",{

/***/ "./hooks/useWeather.tsx":
/*!******************************!*\
  !*** ./hooks/useWeather.tsx ***!
  \******************************/
/*! exports provided: default, useWeatherCordinates, withIpLocation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"useWeatherCordinates\", function() { return useWeatherCordinates; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"withIpLocation\", function() { return withIpLocation; });\n/* harmony import */ var _Users_dannylodangel_Documents_repos_plat_weather_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _Users_dannylodangel_Documents_repos_plat_weather_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_dannylodangel_Documents_repos_plat_weather_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Users_dannylodangel_Documents_repos_plat_weather_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\nvar _s2 = $RefreshSig$();\n\n\n\n\nvar useGeoWeather = function useGeoWeather() {\n  _s2();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])(false),\n      usingGeoIp = _useState[0],\n      setGeoIp = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])(),\n      weather = _useState2[0],\n      setWeather = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])(true),\n      loading = _useState3[0],\n      setLoading = _useState3[1];\n\n  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])({\n    lat: 0,\n    lng: 0\n  }),\n      location = _useState4[0],\n      setLocation = _useState4[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useEffect\"])(function () {\n    function withBrowserLocation() {\n      return _withBrowserLocation.apply(this, arguments);\n    }\n\n    function _withBrowserLocation() {\n      _withBrowserLocation = Object(_Users_dannylodangel_Documents_repos_plat_weather_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_Users_dannylodangel_Documents_repos_plat_weather_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3() {\n        return _Users_dannylodangel_Documents_repos_plat_weather_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {\n          while (1) {\n            switch (_context3.prev = _context3.next) {\n              case 0:\n                _context3.next = 2;\n                return navigator.geolocation.getCurrentPosition(function (sucess) {\n                  console.log(sucess);\n                  return setLocation({\n                    lat: sucess.coords.latitude,\n                    lng: sucess.coords.longitude\n                  });\n                }, /*#__PURE__*/function () {\n                  var _ref2 = Object(_Users_dannylodangel_Documents_repos_plat_weather_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_Users_dannylodangel_Documents_repos_plat_weather_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(error) {\n                    var _ipLocation;\n\n                    return _Users_dannylodangel_Documents_repos_plat_weather_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {\n                      while (1) {\n                        switch (_context2.prev = _context2.next) {\n                          case 0:\n                            setGeoIp(true);\n                            _context2.next = 3;\n                            return withIpLocation();\n\n                          case 3:\n                            _ipLocation = _context2.sent;\n                            setLocation(_ipLocation);\n\n                          case 5:\n                          case \"end\":\n                            return _context2.stop();\n                        }\n                      }\n                    }, _callee2);\n                  }));\n\n                  return function (_x) {\n                    return _ref2.apply(this, arguments);\n                  };\n                }());\n\n              case 2:\n              case \"end\":\n                return _context3.stop();\n            }\n          }\n        }, _callee3);\n      }));\n      return _withBrowserLocation.apply(this, arguments);\n    }\n\n    /*#__PURE__*/\n    Object(_Users_dannylodangel_Documents_repos_plat_weather_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_Users_dannylodangel_Documents_repos_plat_weather_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {\n      var _s = $RefreshSig$();\n\n      return _Users_dannylodangel_Documents_repos_plat_weather_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              return _context.abrupt(\"return\", withBrowserLocation().then(_s(function () {\n                _s();\n\n                useWeatherCordinates(location).then(function (_weather) {\n                  setWeather(_weather);\n                  setLoading(false);\n                });\n              }, \"ED1WSfPuAutyyotkH0ImvhNO/X4=\", false, function () {\n                return [useWeatherCordinates];\n              })));\n\n            case 1:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee);\n    }));\n  }, []);\n  return [weather, loading, usingGeoIp];\n};\n\n_s2(useGeoWeather, \"GPyJpcyZXBYkxM+0mCqJdKHS0vg=\");\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (useGeoWeather);\nfunction useWeatherCordinates(_x2) {\n  return _useWeatherCordinates.apply(this, arguments);\n}\n\nfunction _useWeatherCordinates() {\n  _useWeatherCordinates = Object(_Users_dannylodangel_Documents_repos_plat_weather_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_Users_dannylodangel_Documents_repos_plat_weather_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee4(props) {\n    var _result;\n\n    return _Users_dannylodangel_Documents_repos_plat_weather_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee4$(_context4) {\n      while (1) {\n        switch (_context4.prev = _context4.next) {\n          case 0:\n            console.log(props);\n            _context4.next = 3;\n            return axios__WEBPACK_IMPORTED_MODULE_2___default.a.get(\"http://api.openweathermap.org/data/2.5/weather?units=metric&lat=\".concat(props.lat.toString(), \"&lon=\").concat(props === null || props === void 0 ? void 0 : props.lng.toString(), \"&appid=\").concat(\"59e1631fec54ec05e6346868bff05bdf\"));\n\n          case 3:\n            _result = _context4.sent;\n            return _context4.abrupt(\"return\", _result.data);\n\n          case 5:\n          case \"end\":\n            return _context4.stop();\n        }\n      }\n    }, _callee4);\n  }));\n  return _useWeatherCordinates.apply(this, arguments);\n}\n\nfunction withIpLocation() {\n  return _withIpLocation.apply(this, arguments);\n}\n\nfunction _withIpLocation() {\n  _withIpLocation = Object(_Users_dannylodangel_Documents_repos_plat_weather_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_Users_dannylodangel_Documents_repos_plat_weather_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee5() {\n    var _result;\n\n    return _Users_dannylodangel_Documents_repos_plat_weather_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee5$(_context5) {\n      while (1) {\n        switch (_context5.prev = _context5.next) {\n          case 0:\n            _context5.next = 2;\n            return axios__WEBPACK_IMPORTED_MODULE_2___default.a.get(\"https://ipgeolocation.abstractapi.com/v1/?api_key=\".concat(\"c8f30a60577147b5b2c75625505133cf\"));\n\n          case 2:\n            _result = _context5.sent;\n            return _context5.abrupt(\"return\", {\n              lat: _result.data.latitude,\n              lng: _result.data.longitude\n            });\n\n          case 4:\n          case \"end\":\n            return _context5.stop();\n        }\n      }\n    }, _callee5);\n  }));\n  return _withIpLocation.apply(this, arguments);\n}\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vaG9va3MvdXNlV2VhdGhlci50c3g/M2JiNyJdLCJuYW1lcyI6WyJ1c2VHZW9XZWF0aGVyIiwidXNlU3RhdGUiLCJ1c2luZ0dlb0lwIiwic2V0R2VvSXAiLCJ3ZWF0aGVyIiwic2V0V2VhdGhlciIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwibGF0IiwibG5nIiwibG9jYXRpb24iLCJzZXRMb2NhdGlvbiIsInVzZUVmZmVjdCIsIndpdGhCcm93c2VyTG9jYXRpb24iLCJuYXZpZ2F0b3IiLCJnZW9sb2NhdGlvbiIsImdldEN1cnJlbnRQb3NpdGlvbiIsInN1Y2VzcyIsImNvbnNvbGUiLCJsb2ciLCJjb29yZHMiLCJsYXRpdHVkZSIsImxvbmdpdHVkZSIsImVycm9yIiwid2l0aElwTG9jYXRpb24iLCJfaXBMb2NhdGlvbiIsInRoZW4iLCJ1c2VXZWF0aGVyQ29yZGluYXRlcyIsIl93ZWF0aGVyIiwicHJvcHMiLCJheGlvcyIsImdldCIsInRvU3RyaW5nIiwicHJvY2VzcyIsIl9yZXN1bHQiLCJkYXRhIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOztBQUdBLElBQU1BLGFBQWEsR0FBRyxTQUFoQkEsYUFBZ0IsR0FBTTtBQUFBOztBQUFBLGtCQUNLQyxzREFBUSxDQUFDLEtBQUQsQ0FEYjtBQUFBLE1BQ25CQyxVQURtQjtBQUFBLE1BQ1BDLFFBRE87O0FBQUEsbUJBRUlGLHNEQUFRLEVBRlo7QUFBQSxNQUVuQkcsT0FGbUI7QUFBQSxNQUVWQyxVQUZVOztBQUFBLG1CQUdJSixzREFBUSxDQUFDLElBQUQsQ0FIWjtBQUFBLE1BR25CSyxPQUhtQjtBQUFBLE1BR1ZDLFVBSFU7O0FBQUEsbUJBSU1OLHNEQUFRLENBQWdCO0FBQ3RETyxPQUFHLEVBQUUsQ0FEaUQ7QUFFdERDLE9BQUcsRUFBRTtBQUZpRCxHQUFoQixDQUpkO0FBQUEsTUFJbkJDLFFBSm1CO0FBQUEsTUFJVEMsV0FKUzs7QUFTMUJDLHlEQUFTLENBQUMsWUFBTTtBQUFBLGFBQ0NDLG1CQUREO0FBQUE7QUFBQTs7QUFBQTtBQUFBLDBVQUNkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQUNRQyxTQUFTLENBQUNDLFdBQVYsQ0FBc0JDLGtCQUF0QixDQUNKLFVBQUNDLE1BQUQsRUFBWTtBQUNWQyx5QkFBTyxDQUFDQyxHQUFSLENBQVlGLE1BQVo7QUFDQSx5QkFBT04sV0FBVyxDQUFDO0FBQ2pCSCx1QkFBRyxFQUFFUyxNQUFNLENBQUNHLE1BQVAsQ0FBY0MsUUFERjtBQUVqQlosdUJBQUcsRUFBRVEsTUFBTSxDQUFDRyxNQUFQLENBQWNFO0FBRkYsbUJBQUQsQ0FBbEI7QUFJRCxpQkFQRztBQUFBLDJVQVFKLGtCQUFPQyxLQUFQO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDRXBCLG9DQUFRLENBQUMsSUFBRCxDQUFSO0FBREY7QUFBQSxtQ0FFNEJxQixjQUFjLEVBRjFDOztBQUFBO0FBRVFDLHVDQUZSO0FBR0VkLHVDQUFXLENBQUNjLFdBQUQsQ0FBWDs7QUFIRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFSSTs7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFEUjs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQURjO0FBQUE7QUFBQTs7QUFrQmQ7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsK0NBQ0VaLG1CQUFtQixHQUFHYSxJQUF0QixJQUEyQixZQUFNO0FBQUE7O0FBQy9CQyxvQ0FBb0IsQ0FBQ2pCLFFBQUQsQ0FBcEIsQ0FBK0JnQixJQUEvQixDQUFvQyxVQUFDRSxRQUFELEVBQWM7QUFDaER2Qiw0QkFBVSxDQUFDdUIsUUFBRCxDQUFWO0FBQ0FyQiw0QkFBVSxDQUFDLEtBQUQsQ0FBVjtBQUNELGlCQUhEO0FBSUQsZUFMRDtBQUFBLHdCQUNFb0Isb0JBREY7QUFBQSxpQkFERjs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQU9ELEdBekJRLEVBeUJOLEVBekJNLENBQVQ7QUEyQkEsU0FBTyxDQUFDdkIsT0FBRCxFQUFVRSxPQUFWLEVBQW1CSixVQUFuQixDQUFQO0FBQ0QsQ0FyQ0Q7O0lBQU1GLGE7O0FBdUNTQSw0RUFBZjtBQUVPLFNBQWUyQixvQkFBdEI7QUFBQTtBQUFBOzs7dVVBQU8sa0JBQ0xFLEtBREs7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUdMWCxtQkFBTyxDQUFDQyxHQUFSLENBQVlVLEtBQVo7QUFISztBQUFBLG1CQUlpQkMsNENBQUssQ0FBQ0MsR0FBTiwyRUFDK0NGLEtBQUssQ0FBQ3JCLEdBQU4sQ0FBVXdCLFFBQVYsRUFEL0Msa0JBQzJFSCxLQUQzRSxhQUMyRUEsS0FEM0UsdUJBQzJFQSxLQUFLLENBQUVwQixHQUFQLENBQVd1QixRQUFYLEVBRDNFLG9CQUVsQkMsa0NBRmtCLEVBSmpCOztBQUFBO0FBSUNDLG1CQUpEO0FBQUEsOENBU0VBLE9BQU8sQ0FBQ0MsSUFUVjs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHOzs7O0FBWUEsU0FBZVgsY0FBdEI7QUFBQTtBQUFBOzs7aVVBQU87QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBQ2lCTSw0Q0FBSyxDQUFDQyxHQUFOLDZEQUNpQ0Usa0NBRGpDLEVBRGpCOztBQUFBO0FBQ0NDLG1CQUREO0FBQUEsOENBSUU7QUFDTDFCLGlCQUFHLEVBQUUwQixPQUFPLENBQUNDLElBQVIsQ0FBYWQsUUFEYjtBQUVMWixpQkFBRyxFQUFFeUIsT0FBTyxDQUFDQyxJQUFSLENBQWFiO0FBRmIsYUFKRjs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHIiwiZmlsZSI6Ii4vaG9va3MvdXNlV2VhdGhlci50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBHZW9Db3JkaW5hdGVzLCBXZWF0aGVyUHJvcHMgfSBmcm9tIFwiLi4vaW50ZXJmYWNlcy90eXBlc1wiO1xuXG5jb25zdCB1c2VHZW9XZWF0aGVyID0gKCkgPT4ge1xuICBjb25zdCBbdXNpbmdHZW9JcCwgc2V0R2VvSXBdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbd2VhdGhlciwgc2V0V2VhdGhlcl0gPSB1c2VTdGF0ZTxhbnk+KCk7XG4gIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKHRydWUpO1xuICBjb25zdCBbbG9jYXRpb24sIHNldExvY2F0aW9uXSA9IHVzZVN0YXRlPEdlb0NvcmRpbmF0ZXM+KHtcbiAgICBsYXQ6IDAsXG4gICAgbG5nOiAwLFxuICB9KTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGFzeW5jIGZ1bmN0aW9uIHdpdGhCcm93c2VyTG9jYXRpb24oKSB7XG4gICAgICBhd2FpdCBuYXZpZ2F0b3IuZ2VvbG9jYXRpb24uZ2V0Q3VycmVudFBvc2l0aW9uKFxuICAgICAgICAoc3VjZXNzKSA9PiB7XG4gICAgICAgICAgY29uc29sZS5sb2coc3VjZXNzKTtcbiAgICAgICAgICByZXR1cm4gc2V0TG9jYXRpb24oe1xuICAgICAgICAgICAgbGF0OiBzdWNlc3MuY29vcmRzLmxhdGl0dWRlLFxuICAgICAgICAgICAgbG5nOiBzdWNlc3MuY29vcmRzLmxvbmdpdHVkZSxcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSxcbiAgICAgICAgYXN5bmMgKGVycm9yKSA9PiB7XG4gICAgICAgICAgc2V0R2VvSXAodHJ1ZSk7XG4gICAgICAgICAgY29uc3QgX2lwTG9jYXRpb24gPSBhd2FpdCB3aXRoSXBMb2NhdGlvbigpO1xuICAgICAgICAgIHNldExvY2F0aW9uKF9pcExvY2F0aW9uKTtcbiAgICAgICAgfVxuICAgICAgKTtcbiAgICB9XG5cbiAgICBhc3luYyAoKSA9PlxuICAgICAgd2l0aEJyb3dzZXJMb2NhdGlvbigpLnRoZW4oKCkgPT4ge1xuICAgICAgICB1c2VXZWF0aGVyQ29yZGluYXRlcyhsb2NhdGlvbikudGhlbigoX3dlYXRoZXIpID0+IHtcbiAgICAgICAgICBzZXRXZWF0aGVyKF93ZWF0aGVyKTtcbiAgICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgfSwgW10pO1xuXG4gIHJldHVybiBbd2VhdGhlciwgbG9hZGluZywgdXNpbmdHZW9JcF07XG59O1xuXG5leHBvcnQgZGVmYXVsdCB1c2VHZW9XZWF0aGVyO1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdXNlV2VhdGhlckNvcmRpbmF0ZXMoXG4gIHByb3BzOiBHZW9Db3JkaW5hdGVzXG4pOiBQcm9taXNlPFdlYXRoZXJQcm9wcz4ge1xuICBjb25zb2xlLmxvZyhwcm9wcyk7XG4gIGNvbnN0IF9yZXN1bHQgPSBhd2FpdCBheGlvcy5nZXQoXG4gICAgYGh0dHA6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2RhdGEvMi41L3dlYXRoZXI/dW5pdHM9bWV0cmljJmxhdD0ke3Byb3BzLmxhdC50b1N0cmluZygpfSZsb249JHtwcm9wcz8ubG5nLnRvU3RyaW5nKCl9JmFwcGlkPSR7XG4gICAgICBwcm9jZXNzLmVudi5XRUFUSEVSX0tFWVxuICAgIH1gXG4gICk7XG4gIHJldHVybiBfcmVzdWx0LmRhdGE7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB3aXRoSXBMb2NhdGlvbigpOiBQcm9taXNlPEdlb0NvcmRpbmF0ZXM+IHtcbiAgY29uc3QgX3Jlc3VsdCA9IGF3YWl0IGF4aW9zLmdldChcbiAgICBgaHR0cHM6Ly9pcGdlb2xvY2F0aW9uLmFic3RyYWN0YXBpLmNvbS92MS8/YXBpX2tleT0ke3Byb2Nlc3MuZW52LklQTE9DQVRJT05fS0VZfWBcbiAgKTtcbiAgcmV0dXJuIHtcbiAgICBsYXQ6IF9yZXN1bHQuZGF0YS5sYXRpdHVkZSxcbiAgICBsbmc6IF9yZXN1bHQuZGF0YS5sb25naXR1ZGUsXG4gIH07XG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./hooks/useWeather.tsx\n");

/***/ })

})