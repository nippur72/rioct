"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setStyleParser = exports.updateStyles = exports.mount = void 0;
const react_1 = require("react");
const react_dom_1 = require("react-dom");
let mounted = false;
function mount(selector, tag, props) {
    if (selector && tag) {
        let mountNode = document.querySelector(selector);
        if (!mountNode) {
            throw `mount node '${selector}' not found`;
        }
        mounted = true;
        updateStyles();
        (0, react_dom_1.render)((0, react_1.createElement)(tag, props), mountNode);
    }
}
exports.mount = mount;
let styles = [];
function updateStyles(style) {
    if (style !== undefined)
        styles.push(style);
    if (!mounted)
        return;
    let styleNode = document.querySelector("style[name=rioct]");
    if (!styleNode) {
        styleNode = document.createElement('style');
        styleNode.setAttribute("name", "rioct");
        document.head.appendChild(styleNode);
    }
    let allStyles = styles.join('');
    styleNode.innerHTML = styleParser ? styleParser(allStyles) : allStyles;
}
exports.updateStyles = updateStyles;
let styleParser;
function setStyleParser(parser) {
    styleParser = parser;
}
exports.setStyleParser = setStyleParser;
