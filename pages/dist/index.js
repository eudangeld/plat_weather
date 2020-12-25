"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
var layout_1 = require("../components/layout");
var spinner_1 = require("../components/spinner");
var useWeather_1 = require("../hooks/useWeather");
var Index = function (_) {
    var _a = useWeather_1["default"](), weather = _a[0], loading = _a[1], usingGeoIp = _a[2];
    if (loading) {
        return React.createElement(spinner_1["default"], null);
    }
    var props = __assign({}, weather);
    props.iplocation = usingGeoIp;
    return React.createElement(layout_1["default"], __assign({}, props));
};
exports["default"] = Index;
