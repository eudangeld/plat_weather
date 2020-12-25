"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
exports.withIpLocation = exports.withWeatherCity = exports.withWeatherCordinates = void 0;
var axios_1 = require("axios");
var react_1 = require("react");
var useGeoWeather = function (city) {
    var _a = react_1.useState(false), usingGeoIp = _a[0], setGeoIp = _a[1];
    var _b = react_1.useState(), weather = _b[0], setWeather = _b[1];
    var _c = react_1.useState(true), loading = _c[0], setLoading = _c[1];
    var _d = react_1.useState({
        lat: 0,
        lng: 0
    }), location = _d[0], setLocation = _d[1];
    react_1.useEffect(function () {
        function withBrowserLocation() {
            return __awaiter(this, void 0, void 0, function () {
                function success(pos) {
                    return __awaiter(this, void 0, void 0, function () {
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, getWeather({
                                        lat: pos.coords.latitude,
                                        lng: pos.coords.longitude
                                    })];
                                case 1:
                                    _a.sent();
                                    return [2 /*return*/];
                            }
                        });
                    });
                }
                function error(_) {
                    return __awaiter(this, void 0, void 0, function () {
                        return __generator(this, function (_a) {
                            setGeoIp(true);
                            withIpLocation().then(getWeather);
                            return [2 /*return*/];
                        });
                    });
                }
                function getWeather(position) {
                    return __awaiter(this, void 0, void 0, function () {
                        return __generator(this, function (_a) {
                            withWeatherCordinates(position).then(function (weather) {
                                setLocation(position);
                                setWeather(weather);
                                setLoading(false);
                            });
                            return [2 /*return*/];
                        });
                    });
                }
                return __generator(this, function (_a) {
                    navigator.geolocation.getCurrentPosition(success, error);
                    console.log(city);
                    return [2 /*return*/];
                });
            });
        }
        withBrowserLocation();
    }, []);
    return [weather, loading, usingGeoIp, location];
};
exports["default"] = useGeoWeather;
function withWeatherCordinates(props) {
    return __awaiter(this, void 0, Promise, function () {
        var _result;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, axios_1["default"].get("http://api.openweathermap.org/data/2.5/weather?units=metric&lat=" + props.lat.toString() + "&lon=" + (props === null || props === void 0 ? void 0 : props.lng.toString()) + "&appid=" + process.env.WEATHER_KEY)];
                case 1:
                    _result = _a.sent();
                    return [2 /*return*/, _result.data];
            }
        });
    });
}
exports.withWeatherCordinates = withWeatherCordinates;
function withWeatherCity(cityName) {
    return __awaiter(this, void 0, Promise, function () {
        var _result;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, axios_1["default"].get("api.openweathermap.org/data/2.5/weather?q=" + cityName + "&appid=" + process.env.WEATHER_KEY)];
                case 1:
                    _result = _a.sent();
                    return [2 /*return*/, _result.data];
            }
        });
    });
}
exports.withWeatherCity = withWeatherCity;
function withIpLocation() {
    return __awaiter(this, void 0, Promise, function () {
        var _result;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, axios_1["default"].get("https://ipgeolocation.abstractapi.com/v1/?api_key=" + process.env.IPLOCATION_KEY)];
                case 1:
                    _result = _a.sent();
                    return [2 /*return*/, {
                            lat: _result.data.latitude,
                            lng: _result.data.longitude
                        }];
            }
        });
    });
}
exports.withIpLocation = withIpLocation;
