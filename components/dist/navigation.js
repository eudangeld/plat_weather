"use strict";
exports.__esModule = true;
exports.mockNavigation = void 0;
var grommet_1 = require("grommet");
var grommet_icons_1 = require("grommet-icons");
var link_1 = require("next/link");
var Navigation = function (props) {
    return (React.createElement(grommet_1.Box, { style: { boxShadow: "none" }, onClick: function () {
            return props.defaultAction !== undefined ? props.defaultAction() : null;
        }, margin: { left: "small" }, direction: "column" },
        React.createElement(grommet_1.Text, { margin: { bottom: "small", top: "medium" } }, "Filter by EUA city"),
        exports.mockNavigation.map(function (item) { return (React.createElement(link_1["default"], { key: item + "eia-key-", passHref: true, href: "/city/" + item.toLowerCase() },
            React.createElement(grommet_1.Box, { margin: { bottom: "medium" }, style: { boxShadow: "none" }, gap: "mediu,", align: "center", direction: "row" },
                React.createElement(grommet_icons_1.HomeOption, { color: "white" }),
                React.createElement(grommet_1.Text, { color: "white" }, item)))); })));
};
exports["default"] = Navigation;
exports.mockNavigation = [
    "Chicago",
    "New orleans",
    "Nashville",
    "Los Angeles",
    "New York City",
];
