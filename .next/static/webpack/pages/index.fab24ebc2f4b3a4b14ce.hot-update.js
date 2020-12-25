webpackHotUpdate_N_E("pages/index",{

/***/ "./hooks/useWeather.tsx":
/*!******************************!*\
  !*** ./hooks/useWeather.tsx ***!
  \******************************/
/*! exports provided: default, useWeatherCordinates, withIpLocation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"useWeatherCordinates\", function() { return useWeatherCordinates; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"withIpLocation\", function() { return withIpLocation; });\n/* harmony import */ var _Users_dannylodangel_Documents_repos_plat_weather_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _Users_dannylodangel_Documents_repos_plat_weather_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_dannylodangel_Documents_repos_plat_weather_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Users_dannylodangel_Documents_repos_plat_weather_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\nvar _s2 = $RefreshSig$();\n\n\n\n\nvar useGeoWeather = function useGeoWeather() {\n  _s2();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])(false),\n      usingGeoIp = _useState[0],\n      setGeoIp = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])(),\n      weather = _useState2[0],\n      setWeather = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])(true),\n      loading = _useState3[0],\n      setLoading = _useState3[1];\n\n  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])({\n    lat: 0,\n    lng: 0\n  }),\n      location = _useState4[0],\n      setLocation = _useState4[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useEffect\"])(function () {\n    function withBrowserLocation() {\n      return _withBrowserLocation.apply(this, arguments);\n    }\n\n    function _withBrowserLocation() {\n      _withBrowserLocation = Object(_Users_dannylodangel_Documents_repos_plat_weather_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_Users_dannylodangel_Documents_repos_plat_weather_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {\n        var _s = $RefreshSig$();\n\n        var success, error, getWeather;\n        return _Users_dannylodangel_Documents_repos_plat_weather_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n          while (1) {\n            switch (_context.prev = _context.next) {\n              case 0:\n                getWeather = function _getWeather() {\n                  _s();\n\n                  useWeatherCordinates({\n                    lat: pos.coords.latitude,\n                    lng: pos.coords.longitude\n                  }).then(function (_weather) {\n                    setWeather(_weather);\n                    setLoading(false);\n                  });\n                };\n\n                error = function _error(err) {\n                  console.warn(\"ERROR(\" + err.code + \"): \" + err.message);\n                };\n\n                success = function _success(pos) {\n                  setLocation({\n                    lat: pos.coords.latitude,\n                    lng: pos.coords.longitude\n                  });\n                };\n\n                console.log(\"vamos aí\");\n                navigator.geolocation.getCurrentPosition( // (sucess) => {\n                //   console.log(\"Sucesss\");\n                //   console.log(sucess);\n                //   return setLocation({\n                //     lat: sucess.coords.latitude,\n                //     lng: sucess.coords.longitude,\n                //   });\n                // },\n                // async (error) => {\n                //   console.log(\"error\");\n                //   setGeoIp(true);\n                //   const _ipLocation = await withIpLocation();\n                //   return setLocation(_ipLocation);\n                // }\n                success, error);\n\n                _s(getWeather, \"ED1WSfPuAutyyotkH0ImvhNO/X4=\", false, function () {\n                  return [useWeatherCordinates];\n                });\n\n              case 6:\n              case \"end\":\n                return _context.stop();\n            }\n          }\n        }, _callee);\n      }));\n      return _withBrowserLocation.apply(this, arguments);\n    }\n\n    withBrowserLocation();\n  }, []);\n  return [weather, loading, usingGeoIp];\n};\n\n_s2(useGeoWeather, \"GPyJpcyZXBYkxM+0mCqJdKHS0vg=\");\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (useGeoWeather);\nfunction useWeatherCordinates(_x) {\n  return _useWeatherCordinates.apply(this, arguments);\n}\n\nfunction _useWeatherCordinates() {\n  _useWeatherCordinates = Object(_Users_dannylodangel_Documents_repos_plat_weather_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_Users_dannylodangel_Documents_repos_plat_weather_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(props) {\n    var _result;\n\n    return _Users_dannylodangel_Documents_repos_plat_weather_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {\n      while (1) {\n        switch (_context2.prev = _context2.next) {\n          case 0:\n            console.log(props);\n            _context2.next = 3;\n            return axios__WEBPACK_IMPORTED_MODULE_2___default.a.get(\"http://api.openweathermap.org/data/2.5/weather?units=metric&lat=\".concat(props.lat.toString(), \"&lon=\").concat(props === null || props === void 0 ? void 0 : props.lng.toString(), \"&appid=\").concat(\"59e1631fec54ec05e6346868bff05bdf\"));\n\n          case 3:\n            _result = _context2.sent;\n            return _context2.abrupt(\"return\", _result.data);\n\n          case 5:\n          case \"end\":\n            return _context2.stop();\n        }\n      }\n    }, _callee2);\n  }));\n  return _useWeatherCordinates.apply(this, arguments);\n}\n\nfunction withIpLocation() {\n  return _withIpLocation.apply(this, arguments);\n}\n\nfunction _withIpLocation() {\n  _withIpLocation = Object(_Users_dannylodangel_Documents_repos_plat_weather_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_Users_dannylodangel_Documents_repos_plat_weather_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3() {\n    var _result;\n\n    return _Users_dannylodangel_Documents_repos_plat_weather_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {\n      while (1) {\n        switch (_context3.prev = _context3.next) {\n          case 0:\n            _context3.next = 2;\n            return axios__WEBPACK_IMPORTED_MODULE_2___default.a.get(\"https://ipgeolocation.abstractapi.com/v1/?api_key=\".concat(\"c8f30a60577147b5b2c75625505133cf\"));\n\n          case 2:\n            _result = _context3.sent;\n            return _context3.abrupt(\"return\", {\n              lat: _result.data.latitude,\n              lng: _result.data.longitude\n            });\n\n          case 4:\n          case \"end\":\n            return _context3.stop();\n        }\n      }\n    }, _callee3);\n  }));\n  return _withIpLocation.apply(this, arguments);\n}\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vaG9va3MvdXNlV2VhdGhlci50c3g/M2JiNyJdLCJuYW1lcyI6WyJ1c2VHZW9XZWF0aGVyIiwidXNlU3RhdGUiLCJ1c2luZ0dlb0lwIiwic2V0R2VvSXAiLCJ3ZWF0aGVyIiwic2V0V2VhdGhlciIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwibGF0IiwibG5nIiwibG9jYXRpb24iLCJzZXRMb2NhdGlvbiIsInVzZUVmZmVjdCIsIndpdGhCcm93c2VyTG9jYXRpb24iLCJzdWNjZXNzIiwiZXJyb3IiLCJnZXRXZWF0aGVyIiwidXNlV2VhdGhlckNvcmRpbmF0ZXMiLCJwb3MiLCJjb29yZHMiLCJsYXRpdHVkZSIsImxvbmdpdHVkZSIsInRoZW4iLCJfd2VhdGhlciIsImVyciIsImNvbnNvbGUiLCJ3YXJuIiwiY29kZSIsIm1lc3NhZ2UiLCJsb2ciLCJuYXZpZ2F0b3IiLCJnZW9sb2NhdGlvbiIsImdldEN1cnJlbnRQb3NpdGlvbiIsInByb3BzIiwiYXhpb3MiLCJnZXQiLCJ0b1N0cmluZyIsInByb2Nlc3MiLCJfcmVzdWx0IiwiZGF0YSIsIndpdGhJcExvY2F0aW9uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOztBQUdBLElBQU1BLGFBQWEsR0FBRyxTQUFoQkEsYUFBZ0IsR0FBTTtBQUFBOztBQUFBLGtCQUNLQyxzREFBUSxDQUFDLEtBQUQsQ0FEYjtBQUFBLE1BQ25CQyxVQURtQjtBQUFBLE1BQ1BDLFFBRE87O0FBQUEsbUJBRUlGLHNEQUFRLEVBRlo7QUFBQSxNQUVuQkcsT0FGbUI7QUFBQSxNQUVWQyxVQUZVOztBQUFBLG1CQUdJSixzREFBUSxDQUFDLElBQUQsQ0FIWjtBQUFBLE1BR25CSyxPQUhtQjtBQUFBLE1BR1ZDLFVBSFU7O0FBQUEsbUJBSU1OLHNEQUFRLENBQWdCO0FBQ3RETyxPQUFHLEVBQUUsQ0FEaUQ7QUFFdERDLE9BQUcsRUFBRTtBQUZpRCxHQUFoQixDQUpkO0FBQUEsTUFJbkJDLFFB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dHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgR2VvQ29yZGluYXRlcywgV2VhdGhlclByb3BzIH0gZnJvbSBcIi4uL2ludGVyZmFjZXMvdHlwZXNcIjtcblxuY29uc3QgdXNlR2VvV2VhdGhlciA9ICgpID0+IHtcbiAgY29uc3QgW3VzaW5nR2VvSXAsIHNldEdlb0lwXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW3dlYXRoZXIsIHNldFdlYXRoZXJdID0gdXNlU3RhdGU8YW55PigpO1xuICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZSh0cnVlKTtcbiAgY29uc3QgW2xvY2F0aW9uLCBzZXRMb2NhdGlvbl0gPSB1c2VTdGF0ZTxHZW9Db3JkaW5hdGVzPih7XG4gICAgbGF0OiAwLFxuICAgIGxuZzogMCxcbiAgfSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBhc3luYyBmdW5jdGlvbiB3aXRoQnJvd3NlckxvY2F0aW9uKCkge1xuICAgICAgY29uc29sZS5sb2coXCJ2YW1vcyBhw61cIik7XG4gICAgICBuYXZpZ2F0b3IuZ2VvbG9jYXRpb24uZ2V0Q3VycmVudFBvc2l0aW9uKFxuICAgICAgICAvLyAoc3VjZXNzKSA9PiB7XG4gICAgICAgIC8vICAgY29uc29sZS5sb2coXCJTdWNlc3NzXCIpO1xuICAgICAgICAvLyAgIGNvbnNvbGUubG9nKHN1Y2Vzcyk7XG4gICAgICAgIC8vICAgcmV0dXJuIHNldExvY2F0aW9uKHtcbiAgICAgICAgLy8gICAgIGxhdDogc3VjZXNzLmNvb3Jkcy5sYXRpdHVkZSxcbiAgICAgICAgLy8gICAgIGxuZzogc3VjZXNzLmNvb3Jkcy5sb25naXR1ZGUsXG4gICAgICAgIC8vICAgfSk7XG4gICAgICAgIC8vIH0sXG4gICAgICAgIC8vIGFzeW5jIChlcnJvcikgPT4ge1xuICAgICAgICAvLyAgIGNvbnNvbGUubG9nKFwiZXJyb3JcIik7XG4gICAgICAgIC8vICAgc2V0R2VvSXAodHJ1ZSk7XG4gICAgICAgIC8vICAgY29uc3QgX2lwTG9jYXRpb24gPSBhd2FpdCB3aXRoSXBMb2NhdGlvbigpO1xuICAgICAgICAvLyAgIHJldHVybiBzZXRMb2NhdGlvbihfaXBMb2NhdGlvbik7XG4gICAgICAgIC8vIH1cblxuICAgICAgICBzdWNjZXNzLFxuICAgICAgICBlcnJvclxuICAgICAgKTtcblxuICAgICAgZnVuY3Rpb24gc3VjY2Vzcyhwb3M6IGFueSkge1xuICAgICAgICBzZXRMb2NhdGlvbih7XG4gICAgICAgICAgbGF0OiBwb3MuY29vcmRzLmxhdGl0dWRlLFxuICAgICAgICAgIGxuZzogcG9zLmNvb3Jkcy5sb25naXR1ZGUsXG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICBmdW5jdGlvbiBlcnJvcihlcnI6IGFueSkge1xuICAgICAgICBjb25zb2xlLndhcm4oXCJFUlJPUihcIiArIGVyci5jb2RlICsgXCIpOiBcIiArIGVyci5tZXNzYWdlKTtcbiAgICAgIH1cblxuICAgICAgZnVuY3Rpb24gZ2V0V2VhdGhlcigpIHtcbiAgICAgICAgdXNlV2VhdGhlckNvcmRpbmF0ZXMoe1xuICAgICAgICAgIGxhdDogcG9zLmNvb3Jkcy5sYXRpdHVkZSxcbiAgICAgICAgICBsbmc6IHBvcy5jb29yZHMubG9uZ2l0dWRlLFxuICAgICAgICB9KS50aGVuKChfd2VhdGhlcikgPT4ge1xuICAgICAgICAgIHNldFdlYXRoZXIoX3dlYXRoZXIpO1xuICAgICAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB3aXRoQnJvd3NlckxvY2F0aW9uKCk7XG4gIH0sIFtdKTtcblxuICByZXR1cm4gW3dlYXRoZXIsIGxvYWRpbmcsIHVzaW5nR2VvSXBdO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgdXNlR2VvV2VhdGhlcjtcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHVzZVdlYXRoZXJDb3JkaW5hdGVzKFxuICBwcm9wczogR2VvQ29yZGluYXRlc1xuKTogUHJvbWlzZTxXZWF0aGVyUHJvcHM+IHtcbiAgY29uc29sZS5sb2cocHJvcHMpO1xuICBjb25zdCBfcmVzdWx0ID0gYXdhaXQgYXhpb3MuZ2V0KFxuICAgIGBodHRwOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9kYXRhLzIuNS93ZWF0aGVyP3VuaXRzPW1ldHJpYyZsYXQ9JHtwcm9wcy5sYXQudG9TdHJpbmcoKX0mbG9uPSR7cHJvcHM/LmxuZy50b1N0cmluZygpfSZhcHBpZD0ke1xuICAgICAgcHJvY2Vzcy5lbnYuV0VBVEhFUl9LRVlcbiAgICB9YFxuICApO1xuICByZXR1cm4gX3Jlc3VsdC5kYXRhO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gd2l0aElwTG9jYXRpb24oKTogUHJvbWlzZTxHZW9Db3JkaW5hdGVzPiB7XG4gIGNvbnN0IF9yZXN1bHQgPSBhd2FpdCBheGlvcy5nZXQoXG4gICAgYGh0dHBzOi8vaXBnZW9sb2NhdGlvbi5hYnN0cmFjdGFwaS5jb20vdjEvP2FwaV9rZXk9JHtwcm9jZXNzLmVudi5JUExPQ0FUSU9OX0tFWX1gXG4gICk7XG4gIHJldHVybiB7XG4gICAgbGF0OiBfcmVzdWx0LmRhdGEubGF0aXR1ZGUsXG4gICAgbG5nOiBfcmVzdWx0LmRhdGEubG9uZ2l0dWRlLFxuICB9O1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./hooks/useWeather.tsx\n");

/***/ })

})