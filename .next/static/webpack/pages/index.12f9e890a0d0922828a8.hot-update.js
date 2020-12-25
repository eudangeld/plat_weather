webpackHotUpdate_N_E("pages/index",{

/***/ "./hooks/useWeather.tsx":
/*!******************************!*\
  !*** ./hooks/useWeather.tsx ***!
  \******************************/
/*! exports provided: default, useWeatherCordinates, withIpLocation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"useWeatherCordinates\", function() { return useWeatherCordinates; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"withIpLocation\", function() { return withIpLocation; });\n/* harmony import */ var _Users_dannylodangel_Documents_repos_plat_weather_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _Users_dannylodangel_Documents_repos_plat_weather_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_dannylodangel_Documents_repos_plat_weather_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Users_dannylodangel_Documents_repos_plat_weather_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\nvar _s2 = $RefreshSig$();\n\n\n\n\nvar useGeoWeather = function useGeoWeather() {\n  _s2();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])(false),\n      usingGeoIp = _useState[0],\n      setGeoIp = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])(),\n      weather = _useState2[0],\n      setWeather = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])(true),\n      loading = _useState3[0],\n      setLoading = _useState3[1];\n\n  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])({\n    lat: 0,\n    lng: 0\n  }),\n      location = _useState4[0],\n      setLocation = _useState4[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useEffect\"])(function () {\n    function withBrowserLocation() {\n      return _withBrowserLocation.apply(this, arguments);\n    }\n\n    function _withBrowserLocation() {\n      _withBrowserLocation = Object(_Users_dannylodangel_Documents_repos_plat_weather_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_Users_dannylodangel_Documents_repos_plat_weather_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3() {\n        return _Users_dannylodangel_Documents_repos_plat_weather_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {\n          while (1) {\n            switch (_context3.prev = _context3.next) {\n              case 0:\n                _context3.next = 2;\n                return navigator.geolocation.getCurrentPosition(function (sucess) {\n                  console.log(sucess);\n                  return setLocation({\n                    lat: sucess.coords.latitude,\n                    lng: sucess.coords.longitude\n                  });\n                }, /*#__PURE__*/function () {\n                  var _ref2 = Object(_Users_dannylodangel_Documents_repos_plat_weather_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_Users_dannylodangel_Documents_repos_plat_weather_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(error) {\n                    var _ipLocation;\n\n                    return _Users_dannylodangel_Documents_repos_plat_weather_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {\n                      while (1) {\n                        switch (_context2.prev = _context2.next) {\n                          case 0:\n                            setGeoIp(true);\n                            _context2.next = 3;\n                            return withIpLocation();\n\n                          case 3:\n                            _ipLocation = _context2.sent;\n                            setLocation(_ipLocation);\n\n                          case 5:\n                          case \"end\":\n                            return _context2.stop();\n                        }\n                      }\n                    }, _callee2);\n                  }));\n\n                  return function (_x) {\n                    return _ref2.apply(this, arguments);\n                  };\n                }());\n\n              case 2:\n              case \"end\":\n                return _context3.stop();\n            }\n          }\n        }, _callee3);\n      }));\n      return _withBrowserLocation.apply(this, arguments);\n    }\n\n    /*#__PURE__*/\n    Object(_Users_dannylodangel_Documents_repos_plat_weather_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_Users_dannylodangel_Documents_repos_plat_weather_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {\n      var _s = $RefreshSig$();\n\n      return _Users_dannylodangel_Documents_repos_plat_weather_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              _context.next = 2;\n              return withBrowserLocation().then(_s(function () {\n                _s();\n\n                useWeatherCordinates(location).then(function (_weather) {\n                  setWeather(_weather);\n                  setLoading(false);\n                });\n              }, \"ED1WSfPuAutyyotkH0ImvhNO/X4=\", false, function () {\n                return [useWeatherCordinates];\n              }));\n\n            case 2:\n              return _context.abrupt(\"return\", _context.sent);\n\n            case 3:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee);\n    }));\n  }, []);\n  return [weather, loading, usingGeoIp];\n};\n\n_s2(useGeoWeather, \"GPyJpcyZXBYkxM+0mCqJdKHS0vg=\");\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (useGeoWeather);\nfunction useWeatherCordinates(_x2) {\n  return _useWeatherCordinates.apply(this, arguments);\n}\n\nfunction _useWeatherCordinates() {\n  _useWeatherCordinates = Object(_Users_dannylodangel_Documents_repos_plat_weather_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_Users_dannylodangel_Documents_repos_plat_weather_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee4(props) {\n    var _result;\n\n    return _Users_dannylodangel_Documents_repos_plat_weather_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee4$(_context4) {\n      while (1) {\n        switch (_context4.prev = _context4.next) {\n          case 0:\n            console.log(props);\n            _context4.next = 3;\n            return axios__WEBPACK_IMPORTED_MODULE_2___default.a.get(\"http://api.openweathermap.org/data/2.5/weather?units=metric&lat=\".concat(props.lat.toString(), \"&lon=\").concat(props === null || props === void 0 ? void 0 : props.lng.toString(), \"&appid=\").concat(\"59e1631fec54ec05e6346868bff05bdf\"));\n\n          case 3:\n            _result = _context4.sent;\n            return _context4.abrupt(\"return\", _result.data);\n\n          case 5:\n          case \"end\":\n            return _context4.stop();\n        }\n      }\n    }, _callee4);\n  }));\n  return _useWeatherCordinates.apply(this, arguments);\n}\n\nfunction withIpLocation() {\n  return _withIpLocation.apply(this, arguments);\n}\n\nfunction _withIpLocation() {\n  _withIpLocation = Object(_Users_dannylodangel_Documents_repos_plat_weather_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_Users_dannylodangel_Documents_repos_plat_weather_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee5() {\n    var _result;\n\n    return _Users_dannylodangel_Documents_repos_plat_weather_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee5$(_context5) {\n      while (1) {\n        switch (_context5.prev = _context5.next) {\n          case 0:\n            _context5.next = 2;\n            return axios__WEBPACK_IMPORTED_MODULE_2___default.a.get(\"https://ipgeolocation.abstractapi.com/v1/?api_key=\".concat(\"c8f30a60577147b5b2c75625505133cf\"));\n\n          case 2:\n            _result = _context5.sent;\n            return _context5.abrupt(\"return\", {\n              lat: _result.data.latitude,\n              lng: _result.data.longitude\n            });\n\n          case 4:\n          case \"end\":\n            return _context5.stop();\n        }\n      }\n    }, _callee5);\n  }));\n  return _withIpLocation.apply(this, arguments);\n}\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vaG9va3MvdXNlV2VhdGhlci50c3g/M2JiNyJdLCJuYW1lcyI6WyJ1c2VHZW9XZWF0aGVyIiwidXNlU3RhdGUiLCJ1c2luZ0dlb0lwIiwic2V0R2VvSXAiLCJ3ZWF0aGVyIiwic2V0V2VhdGhlciIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwibGF0IiwibG5nIiwibG9jYXRpb24iLCJzZXRMb2NhdGlvbiIsInVzZUVmZmVjdCIsIndpdGhCcm93c2VyTG9jYXRpb24iLCJuYXZpZ2F0b3IiLCJnZW9sb2NhdGlvbiIsImdldEN1cnJlbnRQb3NpdGlvbiIsInN1Y2VzcyIsImNvbnNvbGUiLCJsb2ciLCJjb29yZHMiLCJsYXRpdHVkZSIsImxvbmdpdHVkZSIsImVycm9yIiwid2l0aElwTG9jYXRpb24iLCJfaXBMb2NhdGlvbiIsInRoZW4iLCJ1c2VXZWF0aGVyQ29yZGluYXRlcyIsIl93ZWF0aGVyIiwicHJvcHMiLCJheGlvcyIsImdldCIsInRvU3RyaW5nIiwicHJvY2VzcyIsIl9yZXN1bHQiLCJkYXRhIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOztBQUdBLElBQU1BLGFBQWEsR0FBRyxTQUFoQkEsYUFBZ0IsR0FBTTtBQUFBOztBQUFBLGtCQUNLQyxzREFBUSxDQUFDLEtBQUQsQ0FEYjtBQUFBLE1BQ25CQyxVQURtQjtBQUFBLE1BQ1BDLFFBRE87O0FBQUEsbUJBRUlGLHNEQUFRLEVBRlo7QUFBQSxNQUVuQkcsT0FGbUI7QUFBQSxNQUVWQyxVQUZVOztBQUFBLG1CQUdJSixzREFBUSxDQUFDLElBQUQsQ0FIWjtBQUFBLE1BR25CSyxPQUhtQjtBQUFBLE1BR1ZDLFVBSFU7O0FBQUEsbUJBSU1OLHNEQUFRLENBQWdCO0FBQ3RETyxPQUFHLEVBQUUsQ0FEaUQ7QUFFdERDLE9BQUcsRUFBRTtBQUZpRCxHQUFoQixDQUpkO0FBQUEsTUFJbkJDLFFBSm1CO0FBQUEsTUFJVEMsV0FKUzs7QUFTMUJDLHlEQUFTLENBQUMsWUFBTTtBQUFBLGFBQ0NDLG1CQUREO0FBQUE7QUFBQTs7QUFBQTtBQUFBLDBVQUNkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQUNRQyxTQUFTLENBQUNDLFdBQVYsQ0FBc0JDLGtCQUF0QixDQUNKLFVBQUNDLE1BQUQsRUFBWTtBQUNWQyx5QkFBTyxDQUFDQyxHQUFSLENBQVlGLE1BQVo7QUFDQSx5QkFBT04sV0FBVyxDQUFDO0FBQ2pCSCx1QkFBRyxFQUFFUyxNQUFNLENBQUNHLE1BQVAsQ0FBY0MsUUFERjtBQUVqQlosdUJBQUcsRUFBRVEsTUFBTSxDQUFDRyxNQUFQLENBQWNFO0FBRkYsbUJBQUQsQ0FBbEI7QUFJRCxpQkFQRztBQUFBLDJVQVFKLGtCQUFPQyxLQUFQO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDRXBCLG9DQUFRLENBQUMsSUFBRCxDQUFSO0FBREY7QUFBQSxtQ0FFNEJxQixjQUFjLEVBRjFDOztBQUFBO0FBRVFDLHVDQUZSO0FBR0VkLHVDQUFXLENBQUNjLFdBQUQsQ0FBWDs7QUFIRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFSSTs7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFEUjs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQURjO0FBQUE7QUFBQTs7QUFrQmQ7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFDUVosbUJBQW1CLEdBQUdhLElBQXRCLElBQTJCLFlBQU07QUFBQTs7QUFDckNDLG9DQUFvQixDQUFDakIsUUFBRCxDQUFwQixDQUErQmdCLElBQS9CLENBQW9DLFVBQUNFLFFBQUQsRUFBYztBQUNoRHZCLDRCQUFVLENBQUN1QixRQUFELENBQVY7QUFDQXJCLDRCQUFVLENBQUMsS0FBRCxDQUFWO0FBQ0QsaUJBSEQ7QUFJRCxlQUxLO0FBQUEsd0JBQ0pvQixvQkFESTtBQUFBLGlCQURSOztBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFPRCxHQXpCUSxFQXlCTixFQXpCTSxDQUFUO0FBMkJBLFNBQU8sQ0FBQ3ZCLE9BQUQsRUFBVUUsT0FBVixFQUFtQkosVUFBbkIsQ0FBUDtBQUNELENBckNEOztJQUFNRixhOztBQXVDU0EsNEVBQWY7QUFFTyxTQUFlMkIsb0JBQXRCO0FBQUE7QUFBQTs7O3VVQUFPLGtCQUNMRSxLQURLO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFHTFgsbUJBQU8sQ0FBQ0MsR0FBUixDQUFZVSxLQUFaO0FBSEs7QUFBQSxtQkFJaUJDLDRDQUFLLENBQUNDLEdBQU4sMkVBQytDRixLQUFLLENBQUNyQixHQUFOLENBQVV3QixRQUFWLEVBRC9DLGtCQUMyRUgsS0FEM0UsYUFDMkVBLEtBRDNFLHVCQUMyRUEsS0FBSyxDQUFFcEIsR0FBUCxDQUFXdUIsUUFBWCxFQUQzRSxvQkFFbEJDLGtDQUZrQixFQUpqQjs7QUFBQTtBQUlDQyxtQkFKRDtBQUFBLDhDQVNFQSxPQUFPLENBQUNDLElBVFY7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsRzs7OztBQVlBLFNBQWVYLGNBQXRCO0FBQUE7QUFBQTs7O2lVQUFPO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUNpQk0sNENBQUssQ0FBQ0MsR0FBTiw2REFDaUNFLGtDQURqQyxFQURqQjs7QUFBQTtBQUNDQyxtQkFERDtBQUFBLDhDQUlFO0FBQ0wxQixpQkFBRyxFQUFFMEIsT0FBTyxDQUFDQyxJQUFSLENBQWFkLFFBRGI7QUFFTFosaUJBQUcsRUFBRXlCLE9BQU8sQ0FBQ0MsSUFBUixDQUFhYjtBQUZiLGFBSkY7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsRyIsImZpbGUiOiIuL2hvb2tzL3VzZVdlYXRoZXIudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgR2VvQ29yZGluYXRlcywgV2VhdGhlclByb3BzIH0gZnJvbSBcIi4uL2ludGVyZmFjZXMvdHlwZXNcIjtcblxuY29uc3QgdXNlR2VvV2VhdGhlciA9ICgpID0+IHtcbiAgY29uc3QgW3VzaW5nR2VvSXAsIHNldEdlb0lwXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW3dlYXRoZXIsIHNldFdlYXRoZXJdID0gdXNlU3RhdGU8YW55PigpO1xuICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZSh0cnVlKTtcbiAgY29uc3QgW2xvY2F0aW9uLCBzZXRMb2NhdGlvbl0gPSB1c2VTdGF0ZTxHZW9Db3JkaW5hdGVzPih7XG4gICAgbGF0OiAwLFxuICAgIGxuZzogMCxcbiAgfSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBhc3luYyBmdW5jdGlvbiB3aXRoQnJvd3NlckxvY2F0aW9uKCkge1xuICAgICAgYXdhaXQgbmF2aWdhdG9yLmdlb2xvY2F0aW9uLmdldEN1cnJlbnRQb3NpdGlvbihcbiAgICAgICAgKHN1Y2VzcykgPT4ge1xuICAgICAgICAgIGNvbnNvbGUubG9nKHN1Y2Vzcyk7XG4gICAgICAgICAgcmV0dXJuIHNldExvY2F0aW9uKHtcbiAgICAgICAgICAgIGxhdDogc3VjZXNzLmNvb3Jkcy5sYXRpdHVkZSxcbiAgICAgICAgICAgIGxuZzogc3VjZXNzLmNvb3Jkcy5sb25naXR1ZGUsXG4gICAgICAgICAgfSk7XG4gICAgICAgIH0sXG4gICAgICAgIGFzeW5jIChlcnJvcikgPT4ge1xuICAgICAgICAgIHNldEdlb0lwKHRydWUpO1xuICAgICAgICAgIGNvbnN0IF9pcExvY2F0aW9uID0gYXdhaXQgd2l0aElwTG9jYXRpb24oKTtcbiAgICAgICAgICBzZXRMb2NhdGlvbihfaXBMb2NhdGlvbik7XG4gICAgICAgIH1cbiAgICAgICk7XG4gICAgfVxuXG4gICAgYXN5bmMgKCkgPT5cbiAgICAgIGF3YWl0IHdpdGhCcm93c2VyTG9jYXRpb24oKS50aGVuKCgpID0+IHtcbiAgICAgICAgdXNlV2VhdGhlckNvcmRpbmF0ZXMobG9jYXRpb24pLnRoZW4oKF93ZWF0aGVyKSA9PiB7XG4gICAgICAgICAgc2V0V2VhdGhlcihfd2VhdGhlcik7XG4gICAgICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gIH0sIFtdKTtcblxuICByZXR1cm4gW3dlYXRoZXIsIGxvYWRpbmcsIHVzaW5nR2VvSXBdO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgdXNlR2VvV2VhdGhlcjtcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHVzZVdlYXRoZXJDb3JkaW5hdGVzKFxuICBwcm9wczogR2VvQ29yZGluYXRlc1xuKTogUHJvbWlzZTxXZWF0aGVyUHJvcHM+IHtcbiAgY29uc29sZS5sb2cocHJvcHMpO1xuICBjb25zdCBfcmVzdWx0ID0gYXdhaXQgYXhpb3MuZ2V0KFxuICAgIGBodHRwOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9kYXRhLzIuNS93ZWF0aGVyP3VuaXRzPW1ldHJpYyZsYXQ9JHtwcm9wcy5sYXQudG9TdHJpbmcoKX0mbG9uPSR7cHJvcHM/LmxuZy50b1N0cmluZygpfSZhcHBpZD0ke1xuICAgICAgcHJvY2Vzcy5lbnYuV0VBVEhFUl9LRVlcbiAgICB9YFxuICApO1xuICByZXR1cm4gX3Jlc3VsdC5kYXRhO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gd2l0aElwTG9jYXRpb24oKTogUHJvbWlzZTxHZW9Db3JkaW5hdGVzPiB7XG4gIGNvbnN0IF9yZXN1bHQgPSBhd2FpdCBheGlvcy5nZXQoXG4gICAgYGh0dHBzOi8vaXBnZW9sb2NhdGlvbi5hYnN0cmFjdGFwaS5jb20vdjEvP2FwaV9rZXk9JHtwcm9jZXNzLmVudi5JUExPQ0FUSU9OX0tFWX1gXG4gICk7XG4gIHJldHVybiB7XG4gICAgbGF0OiBfcmVzdWx0LmRhdGEubGF0aXR1ZGUsXG4gICAgbG5nOiBfcmVzdWx0LmRhdGEubG9uZ2l0dWRlLFxuICB9O1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./hooks/useWeather.tsx\n");

/***/ })

})