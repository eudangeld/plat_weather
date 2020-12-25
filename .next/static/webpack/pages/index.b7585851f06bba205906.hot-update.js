webpackHotUpdate_N_E("pages/index",{

/***/ "./hooks/useWeather.tsx":
/*!******************************!*\
  !*** ./hooks/useWeather.tsx ***!
  \******************************/
/*! exports provided: default, useWeatherCordinates, withIpLocation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"useWeatherCordinates\", function() { return useWeatherCordinates; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"withIpLocation\", function() { return withIpLocation; });\n/* harmony import */ var _Users_dannylodangel_Documents_repos_plat_weather_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _Users_dannylodangel_Documents_repos_plat_weather_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_dannylodangel_Documents_repos_plat_weather_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Users_dannylodangel_Documents_repos_plat_weather_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\nvar _s2 = $RefreshSig$();\n\n\n\n\nvar useGeoWeather = function useGeoWeather() {\n  _s2();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])(false),\n      usingGeoIp = _useState[0],\n      setGeoIp = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])(),\n      weather = _useState2[0],\n      setWeather = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])(true),\n      loading = _useState3[0],\n      setLoading = _useState3[1];\n\n  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])(),\n      location = _useState4[0],\n      setLocation = _useState4[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useEffect\"])(function () {\n    var _s = $RefreshSig$();\n\n    var geo;\n\n    function withBrowserLocation() {\n      return _withBrowserLocation.apply(this, arguments);\n    }\n\n    function _withBrowserLocation() {\n      _withBrowserLocation = Object(_Users_dannylodangel_Documents_repos_plat_weather_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_Users_dannylodangel_Documents_repos_plat_weather_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {\n        return _Users_dannylodangel_Documents_repos_plat_weather_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n          while (1) {\n            switch (_context.prev = _context.next) {\n              case 0:\n                navigator.geolocation.getCurrentPosition(function (sucess) {\n                  setLocation({\n                    lat: sucess.coords.latitude,\n                    lng: sucess.coords.longitude\n                  });\n                }, function (_) {\n                  setGeoIp(true);\n                  withIpLocation().then(setLocation);\n                });\n\n              case 1:\n              case \"end\":\n                return _context.stop();\n            }\n          }\n        }, _callee);\n      }));\n      return _withBrowserLocation.apply(this, arguments);\n    }\n\n    withBrowserLocation().then(_s(function () {\n      _s();\n\n      useWeatherCordinates(location).then(function (_weather) {\n        setWeather(_weather);\n        setLoading(false);\n      });\n    }, \"ED1WSfPuAutyyotkH0ImvhNO/X4=\", false, function () {\n      return [useWeatherCordinates];\n    }));\n  }, []);\n  return [weather, loading, usingGeoIp];\n};\n\n_s2(useGeoWeather, \"p0cGRQP7u75P6Fn3xY7eq0H+Fq4=\");\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (useGeoWeather);\nfunction useWeatherCordinates(_x) {\n  return _useWeatherCordinates.apply(this, arguments);\n}\n\nfunction _useWeatherCordinates() {\n  _useWeatherCordinates = Object(_Users_dannylodangel_Documents_repos_plat_weather_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_Users_dannylodangel_Documents_repos_plat_weather_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(props) {\n    var _result;\n\n    return _Users_dannylodangel_Documents_repos_plat_weather_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {\n      while (1) {\n        switch (_context2.prev = _context2.next) {\n          case 0:\n            _context2.next = 2;\n            return axios__WEBPACK_IMPORTED_MODULE_2___default.a.get(\"http://api.openweathermap.org/data/2.5/weather?units=metric&lat=\".concat(props.lat.toString(), \"&lon=\").concat(props === null || props === void 0 ? void 0 : props.lng.toString(), \"&appid=\").concat(\"59e1631fec54ec05e6346868bff05bdf\"));\n\n          case 2:\n            _result = _context2.sent;\n            return _context2.abrupt(\"return\", _result.data);\n\n          case 4:\n          case \"end\":\n            return _context2.stop();\n        }\n      }\n    }, _callee2);\n  }));\n  return _useWeatherCordinates.apply(this, arguments);\n}\n\nfunction withIpLocation() {\n  return _withIpLocation.apply(this, arguments);\n}\n\nfunction _withIpLocation() {\n  _withIpLocation = Object(_Users_dannylodangel_Documents_repos_plat_weather_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_Users_dannylodangel_Documents_repos_plat_weather_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3() {\n    var _result;\n\n    return _Users_dannylodangel_Documents_repos_plat_weather_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {\n      while (1) {\n        switch (_context3.prev = _context3.next) {\n          case 0:\n            _context3.next = 2;\n            return axios__WEBPACK_IMPORTED_MODULE_2___default.a.get(\"https://ipgeolocation.abstractapi.com/v1/?api_key=\".concat(\"c8f30a60577147b5b2c75625505133cf\"));\n\n          case 2:\n            _result = _context3.sent;\n            return _context3.abrupt(\"return\", {\n              lat: _result.data.latitude,\n              lng: _result.data.longitude\n            });\n\n          case 4:\n          case \"end\":\n            return _context3.stop();\n        }\n      }\n    }, _callee3);\n  }));\n  return _withIpLocation.apply(this, arguments);\n}\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vaG9va3MvdXNlV2VhdGhlci50c3g/M2JiNyJdLCJuYW1lcyI6WyJ1c2VHZW9XZWF0aGVyIiwidXNlU3RhdGUiLCJ1c2luZ0dlb0lwIiwic2V0R2VvSXAiLCJ3ZWF0aGVyIiwic2V0V2VhdGhlciIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwibG9jYXRpb24iLCJzZXRMb2NhdGlvbiIsInVzZUVmZmVjdCIsImdlbyIsIndpdGhCcm93c2VyTG9jYXRpb24iLCJuYXZpZ2F0b3IiLCJnZW9sb2NhdGlvbiIsImdldEN1cnJlbnRQb3NpdGlvbiIsInN1Y2VzcyIsImxhdCIsImNvb3JkcyIsImxhdGl0dWRlIiwibG5nIiwibG9uZ2l0dWRlIiwiXyIsIndpdGhJcExvY2F0aW9uIiwidGhlbiIsInVzZVdlYXRoZXJDb3JkaW5hdGVzIiwiX3dlYXRoZXIiLCJwcm9wcyIsImF4aW9zIiwiZ2V0IiwidG9TdHJpbmciLCJwcm9jZXNzIiwiX3Jlc3VsdCIsImRhdGEiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBR0EsSUFBTUEsYUFBYSxHQUFHLFNBQWhCQSxhQUFnQixHQUFNO0FBQUE7O0FBQUEsa0JBQ0tDLHNEQUFRLENBQUMsS0FBRCxDQURiO0FBQUEsTUFDbkJDLFVBRG1CO0FBQUEsTUFDUEMsUUFETzs7QUFBQSxtQkFFSUYsc0RBQVEsRUFGWjtBQUFBLE1BRW5CRyxPQUZtQjtBQUFBLE1BRVZDLFVBRlU7O0FBQUEsbUJBR0lKLHNEQUFRLENBQUMsSUFBRCxDQUhaO0FBQUEsTUFHbkJLLE9BSG1CO0FBQUEsTUFHVkMsVUFIVTs7QUFBQSxtQkFJTU4sc0RBQVEsRUFKZDtBQUFBLE1BSW5CTyxRQUptQjtBQUFBLE1BSVRDLFdBSlM7O0FBTTFCQyx5REFBUyxDQUFDLFlBQU07QUFBQTs7QUFDZCxRQUFJQyxHQUFKOztBQURjLGFBRUNDLG1CQUZEO0FBQUE7QUFBQTs7QUFBQTtBQUFBLDBVQUVkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDRUMseUJBQVMsQ0FBQ0MsV0FBVixDQUFzQkMsa0JBQXRCLENBQ0UsVUFBQ0MsTUFBRCxFQUFZO0FBQ1ZQLDZCQUFXLENBQUM7QUFDVlEsdUJBQUcsRUFBRUQsTUFBTSxDQUFDRSxNQUFQLENBQWNDLFFBRFQ7QUFFVkMsdUJBQUcsRUFBRUosTUFBTSxDQUFDRSxNQUFQLENBQWNHO0FBRlQsbUJBQUQsQ0FBWDtBQUlELGlCQU5ILEVBT0UsVUFBQ0MsQ0FBRCxFQUFPO0FBQ0xuQiwwQkFBUSxDQUFDLElBQUQsQ0FBUjtBQUNBb0IsZ0NBQWMsR0FBR0MsSUFBakIsQ0FBc0JmLFdBQXRCO0FBQ0QsaUJBVkg7O0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FGYztBQUFBO0FBQUE7O0FBaUJkRyx1QkFBbUIsR0FBR1ksSUFBdEIsSUFBMkIsWUFBTTtBQUFBOztBQUMvQkMsMEJBQW9CLENBQUNqQixRQUFELENBQXBCLENBQStCZ0IsSUFBL0IsQ0FBb0MsVUFBQ0UsUUFBRCxFQUFjO0FBQ2hEckIsa0JBQVUsQ0FBQ3FCLFFBQUQsQ0FBVjtBQUNBbkIsa0JBQVUsQ0FBQyxLQUFELENBQVY7QUFDRCxPQUhEO0FBSUQsS0FMRDtBQUFBLGNBQ0VrQixvQkFERjtBQUFBO0FBTUQsR0F2QlEsRUF1Qk4sRUF2Qk0sQ0FBVDtBQXlCQSxTQUFPLENBQUNyQixPQUFELEVBQVVFLE9BQVYsRUFBbUJKLFVBQW5CLENBQVA7QUFDRCxDQWhDRDs7SUFBTUYsYTs7QUFrQ1NBLDRFQUFmO0FBRU8sU0FBZXlCLG9CQUF0QjtBQUFBO0FBQUE7Ozt1VUFBTyxrQkFDTEUsS0FESztBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFHaUJDLDRDQUFLLENBQUNDLEdBQU4sMkVBQytDRixLQUFLLENBQUNWLEdBQU4sQ0FBVWEsUUFBVixFQUQvQyxrQkFDMkVILEtBRDNFLGFBQzJFQSxLQUQzRSx1QkFDMkVBLEtBQUssQ0FBRVAsR0FBUCxDQUFXVSxRQUFYLEVBRDNFLG9CQUVsQkMsa0NBRmtCLEVBSGpCOztBQUFBO0FBR0NDLG1CQUhEO0FBQUEsOENBUUVBLE9BQU8sQ0FBQ0MsSUFSVjs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHOzs7O0FBV0EsU0FBZVYsY0FBdEI7QUFBQTtBQUFBOzs7aVVBQU87QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBQ2lCSyw0Q0FBSyxDQUFDQyxHQUFOLDZEQUNpQ0Usa0NBRGpDLEVBRGpCOztBQUFBO0FBQ0NDLG1CQUREO0FBQUEsOENBSUU7QUFDTGYsaUJBQUcsRUFBRWUsT0FBTyxDQUFDQyxJQUFSLENBQWFkLFFBRGI7QUFFTEMsaUJBQUcsRUFBRVksT0FBTyxDQUFDQyxJQUFSLENBQWFaO0FBRmIsYUFKRjs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHIiwiZmlsZSI6Ii4vaG9va3MvdXNlV2VhdGhlci50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBHZW9Db3JkaW5hdGVzLCBXZWF0aGVyUHJvcHMgfSBmcm9tIFwiLi4vaW50ZXJmYWNlcy90eXBlc1wiO1xuXG5jb25zdCB1c2VHZW9XZWF0aGVyID0gKCkgPT4ge1xuICBjb25zdCBbdXNpbmdHZW9JcCwgc2V0R2VvSXBdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbd2VhdGhlciwgc2V0V2VhdGhlcl0gPSB1c2VTdGF0ZTxhbnk+KCk7XG4gIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKHRydWUpO1xuICBjb25zdCBbbG9jYXRpb24sIHNldExvY2F0aW9uXSA9IHVzZVN0YXRlPGFueT4oKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGxldCBnZW86IGFueTtcbiAgICBhc3luYyBmdW5jdGlvbiB3aXRoQnJvd3NlckxvY2F0aW9uKCkge1xuICAgICAgbmF2aWdhdG9yLmdlb2xvY2F0aW9uLmdldEN1cnJlbnRQb3NpdGlvbihcbiAgICAgICAgKHN1Y2VzcykgPT4ge1xuICAgICAgICAgIHNldExvY2F0aW9uKHtcbiAgICAgICAgICAgIGxhdDogc3VjZXNzLmNvb3Jkcy5sYXRpdHVkZSxcbiAgICAgICAgICAgIGxuZzogc3VjZXNzLmNvb3Jkcy5sb25naXR1ZGUsXG4gICAgICAgICAgfSk7XG4gICAgICAgIH0sXG4gICAgICAgIChfKSA9PiB7XG4gICAgICAgICAgc2V0R2VvSXAodHJ1ZSk7XG4gICAgICAgICAgd2l0aElwTG9jYXRpb24oKS50aGVuKHNldExvY2F0aW9uKTtcbiAgICAgICAgfVxuICAgICAgKTtcbiAgICB9XG5cbiAgICB3aXRoQnJvd3NlckxvY2F0aW9uKCkudGhlbigoKSA9PiB7XG4gICAgICB1c2VXZWF0aGVyQ29yZGluYXRlcyhsb2NhdGlvbikudGhlbigoX3dlYXRoZXIpID0+IHtcbiAgICAgICAgc2V0V2VhdGhlcihfd2VhdGhlcik7XG4gICAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH0sIFtdKTtcblxuICByZXR1cm4gW3dlYXRoZXIsIGxvYWRpbmcsIHVzaW5nR2VvSXBdO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgdXNlR2VvV2VhdGhlcjtcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHVzZVdlYXRoZXJDb3JkaW5hdGVzKFxuICBwcm9wczogR2VvQ29yZGluYXRlc1xuKTogUHJvbWlzZTxXZWF0aGVyUHJvcHM+IHtcbiAgY29uc3QgX3Jlc3VsdCA9IGF3YWl0IGF4aW9zLmdldChcbiAgICBgaHR0cDovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZGF0YS8yLjUvd2VhdGhlcj91bml0cz1tZXRyaWMmbGF0PSR7cHJvcHMubGF0LnRvU3RyaW5nKCl9Jmxvbj0ke3Byb3BzPy5sbmcudG9TdHJpbmcoKX0mYXBwaWQ9JHtcbiAgICAgIHByb2Nlc3MuZW52LldFQVRIRVJfS0VZXG4gICAgfWBcbiAgKTtcbiAgcmV0dXJuIF9yZXN1bHQuZGF0YTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHdpdGhJcExvY2F0aW9uKCk6IFByb21pc2U8R2VvQ29yZGluYXRlcz4ge1xuICBjb25zdCBfcmVzdWx0ID0gYXdhaXQgYXhpb3MuZ2V0KFxuICAgIGBodHRwczovL2lwZ2VvbG9jYXRpb24uYWJzdHJhY3RhcGkuY29tL3YxLz9hcGlfa2V5PSR7cHJvY2Vzcy5lbnYuSVBMT0NBVElPTl9LRVl9YFxuICApO1xuICByZXR1cm4ge1xuICAgIGxhdDogX3Jlc3VsdC5kYXRhLmxhdGl0dWRlLFxuICAgIGxuZzogX3Jlc3VsdC5kYXRhLmxvbmdpdHVkZSxcbiAgfTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./hooks/useWeather.tsx\n");

/***/ })

})