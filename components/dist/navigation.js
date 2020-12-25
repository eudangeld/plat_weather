"use strict";
exports.__esModule = true;
exports.mockNavigation = void 0;
var grommet_1 = require("grommet");
var grommet_icons_1 = require("grommet-icons");
var link_1 = require("next/link");
var router_1 = require("next/router");
var Navigation = function (props) {
    var router = router_1.useRouter();
    var _topic = router.asPath.split("/")[2];
    return (React.createElement(grommet_1.Box, { style: { boxShadow: "none" }, onClick: function () {
            return props.defaultAction !== undefined ? props.defaultAction() : null;
        }, margin: { left: "small" }, direction: "column" },
        React.createElement(grommet_1.Text, { margin: { bottom: "small", top: "medium" } }, "Filter by country"),
        exports.mockNavigation.map(function (item) { return (React.createElement(link_1["default"], { key: item + "eia-key-", passHref: true, href: "/city/" + item.toLowerCase() },
            React.createElement(grommet_1.Box, { style: { boxShadow: "none" }, gap: "mediu,", align: "center", direction: "row" },
                React.createElement(grommet_icons_1.HomeOption, { color: _topic === item.toLowerCase() ? "brand" : "black" }),
                React.createElement(grommet_1.Text, { color: _topic === item.toLowerCase() ? "brand" : "black" }, item)))); })));
};
exports["default"] = Navigation;
exports.mockNavigation = [
    "Chicago",
    "New orleans",
    "Oahu",
    "Nashville",
    "Los Angeles",
    "New York City",
];
