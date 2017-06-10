"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var react_1 = require("react");
var react_dom_1 = require("react-dom");
var component_1 = require("./component");
var Tag = (function (_super) {
    __extends(Tag, _super);
    function Tag() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Tag.prototype.update = function () {
        this.forceUpdate();
    };
    return Tag;
}(component_1["default"]));
exports.Tag = Tag;
function mount(selector, tag, props) {
    if (selector && tag) {
        var mountNode = document.querySelector(selector);
        if (!mountNode) {
            throw "mount node '" + selector + "' not found";
        }
        updateStyles();
        react_dom_1.render(react_1.createElement(tag, props), mountNode);
    }
}
exports.mount = mount;
exports.styles = [];
function updateStyles() {
    var styleNode = document.querySelector("style[name=rioct]");
    if (!styleNode) {
        styleNode = document.createElement('style');
        styleNode.setAttribute("name", "rioct");
        document.head.appendChild(styleNode);
    }
    var allStyles = exports.styles.join('');
    styleNode.innerHTML = styleParser ? styleParser(allStyles) : allStyles;
}
exports.updateStyles = updateStyles;
var styleParser;
function setStyleParser(parser) {
    styleParser = parser;
}
exports.setStyleParser = setStyleParser;
