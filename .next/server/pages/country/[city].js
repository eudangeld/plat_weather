module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/country/[city].tsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/spinner.tsx":
/*!********************************!*\
  !*** ./components/spinner.tsx ***!
  \********************************/
/*! exports provided: Spinner, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Spinner\", function() { return Spinner; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);\nvar _jsxFileName = \"/Users/dannylodangel/Documents/repos/plat_weather/components/spinner.tsx\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\nfunction _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }\n\n\n\nconst Spinner = props => {\n  return __jsx(StyledSpinner, _extends({\n    viewBox: \"0 0 50 50\"\n  }, props, {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 12,\n      columnNumber: 5\n    }\n  }), __jsx(\"circle\", {\n    className: \"path\",\n    cx: \"25\",\n    cy: \"25\",\n    r: \"20\",\n    fill: \"none\",\n    strokeWidth: \"2\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 13,\n      columnNumber: 7\n    }\n  }));\n};\nconst StyledSpinner = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.svg`\n  stroke: blueviolet;\n  animation: rotate 1s linear infinite;\n  margin: ${props => props.plain ? \"0px\" : \"40px\"};\n  width: ${props => props.size || \"50px\"};\n  height: ${props => props.size || \"50px\"};\n  & .path {\n    stroke: \"black\";\n    stroke-linecap: round;\n    animation: dash 1.5s ease-in-out infinite;\n  }\n  @keyframes rotate {\n    100% {\n      transform: rotate(360deg);\n    }\n  }\n  @keyframes dash {\n    0% {\n      stroke-dasharray: 1, 150;\n      stroke-dashoffset: 0;\n    }\n    50% {\n      stroke-dasharray: 90, 150;\n      stroke-dashoffset: -35;\n    }\n    100% {\n      stroke-dasharray: 90, 150;\n      stroke-dashoffset: -124;\n    }\n  }\n`;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Spinner);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3NwaW5uZXIudHN4PzViYzgiXSwibmFtZXMiOlsiU3Bpbm5lciIsInByb3BzIiwiU3R5bGVkU3Bpbm5lciIsInN0eWxlZCIsInN2ZyIsInBsYWluIiwic2l6ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBUU8sTUFBTUEsT0FBa0IsR0FBSUMsS0FBRCxJQUFXO0FBQzNDLFNBQ0UsTUFBQyxhQUFEO0FBQWUsV0FBTyxFQUFDO0FBQXZCLEtBQXVDQSxLQUF2QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BQ0U7QUFDRSxhQUFTLEVBQUMsTUFEWjtBQUVFLE1BQUUsRUFBQyxJQUZMO0FBR0UsTUFBRSxFQUFDLElBSEw7QUFJRSxLQUFDLEVBQUMsSUFKSjtBQUtFLFFBQUksRUFBQyxNQUxQO0FBTUUsZUFBVyxFQUFDLEdBTmQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLENBREY7QUFZRCxDQWJNO0FBZVAsTUFBTUMsYUFBYSxHQUFHQyx3REFBTSxDQUFDQyxHQUFXO0FBQ3hDO0FBQ0E7QUFDQSxZQUFhSCxLQUFELElBQVlBLEtBQUssQ0FBQ0ksS0FBTixHQUFjLEtBQWQsR0FBc0IsTUFBUTtBQUN0RCxXQUFZSixLQUFELElBQVdBLEtBQUssQ0FBQ0ssSUFBTixJQUFjLE1BQU87QUFDM0MsWUFBYUwsS0FBRCxJQUFXQSxLQUFLLENBQUNLLElBQU4sSUFBYyxNQUFPO0FBQzVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBOUJBO0FBZ0NlTixzRUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvc3Bpbm5lci50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgRkMgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XG5cbnR5cGUgUHJvcHMgPSB7XG4gIHBsYWluPzogYm9vbGVhbjtcbiAgY29sb3I/OiBzdHJpbmc7XG4gIHNpemU/OiBzdHJpbmc7XG59O1xuXG5leHBvcnQgY29uc3QgU3Bpbm5lcjogRkM8UHJvcHM+ID0gKHByb3BzKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPFN0eWxlZFNwaW5uZXIgdmlld0JveD1cIjAgMCA1MCA1MFwiIHsuLi5wcm9wc30+XG4gICAgICA8Y2lyY2xlXG4gICAgICAgIGNsYXNzTmFtZT1cInBhdGhcIlxuICAgICAgICBjeD1cIjI1XCJcbiAgICAgICAgY3k9XCIyNVwiXG4gICAgICAgIHI9XCIyMFwiXG4gICAgICAgIGZpbGw9XCJub25lXCJcbiAgICAgICAgc3Ryb2tlV2lkdGg9XCIyXCJcbiAgICAgIC8+XG4gICAgPC9TdHlsZWRTcGlubmVyPlxuICApO1xufTtcblxuY29uc3QgU3R5bGVkU3Bpbm5lciA9IHN0eWxlZC5zdmc8UHJvcHM+YFxuICBzdHJva2U6IGJsdWV2aW9sZXQ7XG4gIGFuaW1hdGlvbjogcm90YXRlIDFzIGxpbmVhciBpbmZpbml0ZTtcbiAgbWFyZ2luOiAkeyhwcm9wcykgPT4gKHByb3BzLnBsYWluID8gXCIwcHhcIiA6IFwiNDBweFwiKX07XG4gIHdpZHRoOiAkeyhwcm9wcykgPT4gcHJvcHMuc2l6ZSB8fCBcIjUwcHhcIn07XG4gIGhlaWdodDogJHsocHJvcHMpID0+IHByb3BzLnNpemUgfHwgXCI1MHB4XCJ9O1xuICAmIC5wYXRoIHtcbiAgICBzdHJva2U6IFwiYmxhY2tcIjtcbiAgICBzdHJva2UtbGluZWNhcDogcm91bmQ7XG4gICAgYW5pbWF0aW9uOiBkYXNoIDEuNXMgZWFzZS1pbi1vdXQgaW5maW5pdGU7XG4gIH1cbiAgQGtleWZyYW1lcyByb3RhdGUge1xuICAgIDEwMCUge1xuICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcbiAgICB9XG4gIH1cbiAgQGtleWZyYW1lcyBkYXNoIHtcbiAgICAwJSB7XG4gICAgICBzdHJva2UtZGFzaGFycmF5OiAxLCAxNTA7XG4gICAgICBzdHJva2UtZGFzaG9mZnNldDogMDtcbiAgICB9XG4gICAgNTAlIHtcbiAgICAgIHN0cm9rZS1kYXNoYXJyYXk6IDkwLCAxNTA7XG4gICAgICBzdHJva2UtZGFzaG9mZnNldDogLTM1O1xuICAgIH1cbiAgICAxMDAlIHtcbiAgICAgIHN0cm9rZS1kYXNoYXJyYXk6IDkwLCAxNTA7XG4gICAgICBzdHJva2UtZGFzaG9mZnNldDogLTEyNDtcbiAgICB9XG4gIH1cbmA7XG5cbmV4cG9ydCBkZWZhdWx0IFNwaW5uZXI7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/spinner.tsx\n");

/***/ }),

/***/ "./hooks/useWeather.tsx":
/*!******************************!*\
  !*** ./hooks/useWeather.tsx ***!
  \******************************/
/*! exports provided: default, withWeatherCordinates, withWeatherCity, withIpLocation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"withWeatherCordinates\", function() { return withWeatherCordinates; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"withWeatherCity\", function() { return withWeatherCity; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"withIpLocation\", function() { return withIpLocation; });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\nconst useGeoWeather = city => {\n  const {\n    0: usingGeoIp,\n    1: setGeoIp\n  } = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(false);\n  const {\n    0: weather,\n    1: setWeather\n  } = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])();\n  const {\n    0: loading,\n    1: setLoading\n  } = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(true);\n  const {\n    0: location,\n    1: setLocation\n  } = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])({\n    lat: 0,\n    lng: 0\n  });\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(() => {\n    async function withBrowserLocation() {\n      navigator.geolocation.getCurrentPosition(success, error);\n      console.log(city);\n\n      async function success(pos) {\n        await getWeather({\n          lat: pos.coords.latitude,\n          lng: pos.coords.longitude\n        });\n      }\n\n      async function error(_) {\n        setGeoIp(true);\n        withIpLocation().then(getWeather);\n      }\n\n      async function getWeather(position) {\n        withWeatherCordinates(position).then(weather => {\n          setLocation(position);\n          setWeather(weather);\n          setLoading(false);\n        });\n      }\n    }\n\n    withBrowserLocation();\n  }, []);\n  return [weather, loading, usingGeoIp, location];\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (useGeoWeather);\nasync function withWeatherCordinates(props) {\n  const _result = await axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(`http://api.openweathermap.org/data/2.5/weather?units=metric&lat=${props.lat.toString()}&lon=${props === null || props === void 0 ? void 0 : props.lng.toString()}&appid=${\"59e1631fec54ec05e6346868bff05bdf\"}`);\n\n  return _result.data;\n}\nasync function withWeatherCity(cityName) {\n  const _result = await axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(`api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${\"59e1631fec54ec05e6346868bff05bdf\"}`);\n\n  return _result.data;\n}\nasync function withIpLocation() {\n  const _result = await axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(`https://ipgeolocation.abstractapi.com/v1/?api_key=${\"c8f30a60577147b5b2c75625505133cf\"}`);\n\n  return {\n    lat: _result.data.latitude,\n    lng: _result.data.longitude\n  };\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ob29rcy91c2VXZWF0aGVyLnRzeD8zYmI3Il0sIm5hbWVzIjpbInVzZUdlb1dlYXRoZXIiLCJjaXR5IiwidXNpbmdHZW9JcCIsInNldEdlb0lwIiwidXNlU3RhdGUiLCJ3ZWF0aGVyIiwic2V0V2VhdGhlciIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwibG9jYXRpb24iLCJzZXRMb2NhdGlvbiIsImxhdCIsImxuZyIsInVzZUVmZmVjdCIsIndpdGhCcm93c2VyTG9jYXRpb24iLCJuYXZpZ2F0b3IiLCJnZW9sb2NhdGlvbiIsImdldEN1cnJlbnRQb3NpdGlvbiIsInN1Y2Nlc3MiLCJlcnJvciIsImNvbnNvbGUiLCJsb2ciLCJwb3MiLCJnZXRXZWF0aGVyIiwiY29vcmRzIiwibGF0aXR1ZGUiLCJsb25naXR1ZGUiLCJfIiwid2l0aElwTG9jYXRpb24iLCJ0aGVuIiwicG9zaXRpb24iLCJ3aXRoV2VhdGhlckNvcmRpbmF0ZXMiLCJwcm9wcyIsIl9yZXN1bHQiLCJheGlvcyIsImdldCIsInRvU3RyaW5nIiwicHJvY2VzcyIsImRhdGEiLCJ3aXRoV2VhdGhlckNpdHkiLCJjaXR5TmFtZSJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7O0FBR0EsTUFBTUEsYUFBYSxHQUFJQyxJQUFELElBQW1CO0FBQ3ZDLFFBQU07QUFBQSxPQUFDQyxVQUFEO0FBQUEsT0FBYUM7QUFBYixNQUF5QkMsc0RBQVEsQ0FBQyxLQUFELENBQXZDO0FBQ0EsUUFBTTtBQUFBLE9BQUNDLE9BQUQ7QUFBQSxPQUFVQztBQUFWLE1BQXdCRixzREFBUSxFQUF0QztBQUNBLFFBQU07QUFBQSxPQUFDRyxPQUFEO0FBQUEsT0FBVUM7QUFBVixNQUF3Qkosc0RBQVEsQ0FBQyxJQUFELENBQXRDO0FBQ0EsUUFBTTtBQUFBLE9BQUNLLFFBQUQ7QUFBQSxPQUFXQztBQUFYLE1BQTBCTixzREFBUSxDQUFnQjtBQUN0RE8sT0FBRyxFQUFFLENBRGlEO0FBRXREQyxPQUFHLEVBQUU7QUFGaUQsR0FBaEIsQ0FBeEM7QUFLQUMseURBQVMsQ0FBQyxNQUFNO0FBQ2QsbUJBQWVDLG1CQUFmLEdBQXFDO0FBQ25DQyxlQUFTLENBQUNDLFdBQVYsQ0FBc0JDLGtCQUF0QixDQUF5Q0MsT0FBekMsRUFBa0RDLEtBQWxEO0FBQ0FDLGFBQU8sQ0FBQ0MsR0FBUixDQUFZcEIsSUFBWjs7QUFDQSxxQkFBZWlCLE9BQWYsQ0FBdUJJLEdBQXZCLEVBQWlDO0FBQy9CLGNBQU1DLFVBQVUsQ0FBQztBQUNmWixhQUFHLEVBQUVXLEdBQUcsQ0FBQ0UsTUFBSixDQUFXQyxRQUREO0FBRWZiLGFBQUcsRUFBRVUsR0FBRyxDQUFDRSxNQUFKLENBQVdFO0FBRkQsU0FBRCxDQUFoQjtBQUlEOztBQUVELHFCQUFlUCxLQUFmLENBQXFCUSxDQUFyQixFQUE2QjtBQUMzQnhCLGdCQUFRLENBQUMsSUFBRCxDQUFSO0FBQ0F5QixzQkFBYyxHQUFHQyxJQUFqQixDQUFzQk4sVUFBdEI7QUFDRDs7QUFFRCxxQkFBZUEsVUFBZixDQUEwQk8sUUFBMUIsRUFBeUM7QUFDdkNDLDZCQUFxQixDQUFDRCxRQUFELENBQXJCLENBQWdDRCxJQUFoQyxDQUFzQ3hCLE9BQUQsSUFBYTtBQUNoREsscUJBQVcsQ0FBQ29CLFFBQUQsQ0FBWDtBQUNBeEIsb0JBQVUsQ0FBQ0QsT0FBRCxDQUFWO0FBQ0FHLG9CQUFVLENBQUMsS0FBRCxDQUFWO0FBQ0QsU0FKRDtBQUtEO0FBQ0Y7O0FBRURNLHVCQUFtQjtBQUNwQixHQTFCUSxFQTBCTixFQTFCTSxDQUFUO0FBNEJBLFNBQU8sQ0FBQ1QsT0FBRCxFQUFVRSxPQUFWLEVBQW1CTCxVQUFuQixFQUErQk8sUUFBL0IsQ0FBUDtBQUNELENBdENEOztBQXdDZVQsNEVBQWY7QUFFTyxlQUFlK0IscUJBQWYsQ0FDTEMsS0FESyxFQUVrQjtBQUN2QixRQUFNQyxPQUFPLEdBQUcsTUFBTUMsNENBQUssQ0FBQ0MsR0FBTixDQUNuQixtRUFBa0VILEtBQUssQ0FBQ3JCLEdBQU4sQ0FBVXlCLFFBQVYsRUFBcUIsUUFBT0osS0FBL0YsYUFBK0ZBLEtBQS9GLHVCQUErRkEsS0FBSyxDQUFFcEIsR0FBUCxDQUFXd0IsUUFBWCxFQUFzQixVQUNuSEMsa0NBQ0QsRUFIbUIsQ0FBdEI7O0FBS0EsU0FBT0osT0FBTyxDQUFDSyxJQUFmO0FBQ0Q7QUFDTSxlQUFlQyxlQUFmLENBQStCQyxRQUEvQixFQUF3RTtBQUM3RSxRQUFNUCxPQUFPLEdBQUcsTUFBTUMsNENBQUssQ0FBQ0MsR0FBTixDQUNuQiw2Q0FBNENLLFFBQVMsVUFBU0gsa0NBQXdCLEVBRG5FLENBQXRCOztBQUdBLFNBQU9KLE9BQU8sQ0FBQ0ssSUFBZjtBQUNEO0FBRU0sZUFBZVYsY0FBZixHQUF3RDtBQUM3RCxRQUFNSyxPQUFPLEdBQUcsTUFBTUMsNENBQUssQ0FBQ0MsR0FBTixDQUNuQixxREFBb0RFLGtDQUEyQixFQUQ1RCxDQUF0Qjs7QUFHQSxTQUFPO0FBQ0wxQixPQUFHLEVBQUVzQixPQUFPLENBQUNLLElBQVIsQ0FBYWIsUUFEYjtBQUVMYixPQUFHLEVBQUVxQixPQUFPLENBQUNLLElBQVIsQ0FBYVo7QUFGYixHQUFQO0FBSUQiLCJmaWxlIjoiLi9ob29rcy91c2VXZWF0aGVyLnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IEdlb0NvcmRpbmF0ZXMsIFdlYXRoZXJQcm9wcyB9IGZyb20gXCIuLi9pbnRlcmZhY2VzL3R5cGVzXCI7XG5cbmNvbnN0IHVzZUdlb1dlYXRoZXIgPSAoY2l0eT86IHN0cmluZykgPT4ge1xuICBjb25zdCBbdXNpbmdHZW9JcCwgc2V0R2VvSXBdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbd2VhdGhlciwgc2V0V2VhdGhlcl0gPSB1c2VTdGF0ZTxhbnk+KCk7XG4gIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKHRydWUpO1xuICBjb25zdCBbbG9jYXRpb24sIHNldExvY2F0aW9uXSA9IHVzZVN0YXRlPEdlb0NvcmRpbmF0ZXM+KHtcbiAgICBsYXQ6IDAsXG4gICAgbG5nOiAwLFxuICB9KTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGFzeW5jIGZ1bmN0aW9uIHdpdGhCcm93c2VyTG9jYXRpb24oKSB7XG4gICAgICBuYXZpZ2F0b3IuZ2VvbG9jYXRpb24uZ2V0Q3VycmVudFBvc2l0aW9uKHN1Y2Nlc3MsIGVycm9yKTtcbiAgICAgIGNvbnNvbGUubG9nKGNpdHkpO1xuICAgICAgYXN5bmMgZnVuY3Rpb24gc3VjY2Vzcyhwb3M6IGFueSkge1xuICAgICAgICBhd2FpdCBnZXRXZWF0aGVyKHtcbiAgICAgICAgICBsYXQ6IHBvcy5jb29yZHMubGF0aXR1ZGUsXG4gICAgICAgICAgbG5nOiBwb3MuY29vcmRzLmxvbmdpdHVkZSxcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIGFzeW5jIGZ1bmN0aW9uIGVycm9yKF86IGFueSkge1xuICAgICAgICBzZXRHZW9JcCh0cnVlKTtcbiAgICAgICAgd2l0aElwTG9jYXRpb24oKS50aGVuKGdldFdlYXRoZXIpO1xuICAgICAgfVxuXG4gICAgICBhc3luYyBmdW5jdGlvbiBnZXRXZWF0aGVyKHBvc2l0aW9uOiBhbnkpIHtcbiAgICAgICAgd2l0aFdlYXRoZXJDb3JkaW5hdGVzKHBvc2l0aW9uKS50aGVuKCh3ZWF0aGVyKSA9PiB7XG4gICAgICAgICAgc2V0TG9jYXRpb24ocG9zaXRpb24pO1xuICAgICAgICAgIHNldFdlYXRoZXIod2VhdGhlcik7XG4gICAgICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cblxuICAgIHdpdGhCcm93c2VyTG9jYXRpb24oKTtcbiAgfSwgW10pO1xuXG4gIHJldHVybiBbd2VhdGhlciwgbG9hZGluZywgdXNpbmdHZW9JcCwgbG9jYXRpb25dO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgdXNlR2VvV2VhdGhlcjtcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHdpdGhXZWF0aGVyQ29yZGluYXRlcyhcbiAgcHJvcHM6IEdlb0NvcmRpbmF0ZXNcbik6IFByb21pc2U8V2VhdGhlclByb3BzPiB7XG4gIGNvbnN0IF9yZXN1bHQgPSBhd2FpdCBheGlvcy5nZXQoXG4gICAgYGh0dHA6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2RhdGEvMi41L3dlYXRoZXI/dW5pdHM9bWV0cmljJmxhdD0ke3Byb3BzLmxhdC50b1N0cmluZygpfSZsb249JHtwcm9wcz8ubG5nLnRvU3RyaW5nKCl9JmFwcGlkPSR7XG4gICAgICBwcm9jZXNzLmVudi5XRUFUSEVSX0tFWVxuICAgIH1gXG4gICk7XG4gIHJldHVybiBfcmVzdWx0LmRhdGE7XG59XG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gd2l0aFdlYXRoZXJDaXR5KGNpdHlOYW1lOiBzdHJpbmcpOiBQcm9taXNlPFdlYXRoZXJQcm9wcz4ge1xuICBjb25zdCBfcmVzdWx0ID0gYXdhaXQgYXhpb3MuZ2V0KFxuICAgIGBhcGkub3BlbndlYXRoZXJtYXAub3JnL2RhdGEvMi41L3dlYXRoZXI/cT0ke2NpdHlOYW1lfSZhcHBpZD0ke3Byb2Nlc3MuZW52LldFQVRIRVJfS0VZfWBcbiAgKTtcbiAgcmV0dXJuIF9yZXN1bHQuZGF0YTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHdpdGhJcExvY2F0aW9uKCk6IFByb21pc2U8R2VvQ29yZGluYXRlcz4ge1xuICBjb25zdCBfcmVzdWx0ID0gYXdhaXQgYXhpb3MuZ2V0KFxuICAgIGBodHRwczovL2lwZ2VvbG9jYXRpb24uYWJzdHJhY3RhcGkuY29tL3YxLz9hcGlfa2V5PSR7cHJvY2Vzcy5lbnYuSVBMT0NBVElPTl9LRVl9YFxuICApO1xuICByZXR1cm4ge1xuICAgIGxhdDogX3Jlc3VsdC5kYXRhLmxhdGl0dWRlLFxuICAgIGxuZzogX3Jlc3VsdC5kYXRhLmxvbmdpdHVkZSxcbiAgfTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./hooks/useWeather.tsx\n");

/***/ }),

/***/ "./pages/country/[city].tsx":
/*!**********************************!*\
  !*** ./pages/country/[city].tsx ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_spinner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/spinner */ \"./components/spinner.tsx\");\n/* harmony import */ var _hooks_useWeather__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../hooks/useWeather */ \"./hooks/useWeather.tsx\");\nvar _jsxFileName = \"/Users/dannylodangel/Documents/repos/plat_weather/pages/country/[city].tsx\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\nconst Topic = _ => {\n  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_1__[\"useRouter\"])();\n  console.log(\"vamos corinthians\");\n  console.log(router.asPath.split(\"/\")[2]);\n  const [weather, loading, usingGeoIp] = Object(_hooks_useWeather__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(router.asPath.split(\"/\")[2]);\n  return __jsx(_components_spinner__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 16,\n      columnNumber: 10\n    }\n  });\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Topic);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9jb3VudHJ5L1tjaXR5XS50c3g/ZmNkOSJdLCJuYW1lcyI6WyJUb3BpYyIsIl8iLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJjb25zb2xlIiwibG9nIiwiYXNQYXRoIiwic3BsaXQiLCJ3ZWF0aGVyIiwibG9hZGluZyIsInVzaW5nR2VvSXAiLCJ1c2VHZW9XZWF0aGVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQ0E7QUFFQTtBQUNBOztBQUVBLE1BQU1BLEtBQWUsR0FBSUMsQ0FBRCxJQUFPO0FBQzdCLFFBQU1DLE1BQU0sR0FBR0MsNkRBQVMsRUFBeEI7QUFFQUMsU0FBTyxDQUFDQyxHQUFSLENBQVksbUJBQVo7QUFDQUQsU0FBTyxDQUFDQyxHQUFSLENBQVlILE1BQU0sQ0FBQ0ksTUFBUCxDQUFjQyxLQUFkLENBQW9CLEdBQXBCLEVBQXlCLENBQXpCLENBQVo7QUFFQSxRQUFNLENBQUNDLE9BQUQsRUFBVUMsT0FBVixFQUFtQkMsVUFBbkIsSUFBaUNDLGlFQUFhLENBQ2xEVCxNQUFNLENBQUNJLE1BQVAsQ0FBY0MsS0FBZCxDQUFvQixHQUFwQixFQUF5QixDQUF6QixDQURrRCxDQUFwRDtBQUdBLFNBQU8sTUFBQywyREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBQVA7QUFDRCxDQVZEOztBQVdlUCxvRUFBZiIsImZpbGUiOiIuL3BhZ2VzL2NvdW50cnkvW2NpdHldLnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5leHRQYWdlIH0gZnJvbSBcIm5leHRcIjtcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFNwaW5uZXIgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvc3Bpbm5lclwiO1xuaW1wb3J0IHVzZUdlb1dlYXRoZXIgZnJvbSBcIi4uLy4uL2hvb2tzL3VzZVdlYXRoZXJcIjtcblxuY29uc3QgVG9waWM6IE5leHRQYWdlID0gKF8pID0+IHtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG5cbiAgY29uc29sZS5sb2coXCJ2YW1vcyBjb3JpbnRoaWFuc1wiKTtcbiAgY29uc29sZS5sb2cocm91dGVyLmFzUGF0aC5zcGxpdChcIi9cIilbMl0pO1xuXG4gIGNvbnN0IFt3ZWF0aGVyLCBsb2FkaW5nLCB1c2luZ0dlb0lwXSA9IHVzZUdlb1dlYXRoZXIoXG4gICAgcm91dGVyLmFzUGF0aC5zcGxpdChcIi9cIilbMl1cbiAgKTtcbiAgcmV0dXJuIDxTcGlubmVyIC8+O1xufTtcbmV4cG9ydCBkZWZhdWx0IFRvcGljO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/country/[city].tsx\n");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"axios\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJheGlvc1wiPzcwYzYiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoiYXhpb3MuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJheGlvc1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///axios\n");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next/router\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L3JvdXRlclwiP2Q4M2UiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoibmV4dC9yb3V0ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L3JvdXRlclwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///next/router\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"styled-components\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzdHlsZWQtY29tcG9uZW50c1wiP2Y1YWQiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoic3R5bGVkLWNvbXBvbmVudHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzdHlsZWQtY29tcG9uZW50c1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///styled-components\n");

/***/ })

/******/ });