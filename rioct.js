/// <reference path="typings/lodash/lodash.d.ts" />
/// <reference path="typings/react/react.d.ts" />
/// <reference path="typings/react/react-dom.d.ts" />
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/// <reference path="observable.ts" />
/// <reference path="types.ts" />
var _ = require("lodash");
var React = require("react");
var ReactDOM = require("react-dom");
var observable_1 = require("./observable");
var Observable = (function () {
    function Observable() {
        observable_1.default(this);
    }
    Observable.prototype.on = function (events, callback) { };
    ;
    Observable.prototype.one = function (events, callback) { };
    ;
    Observable.prototype.off = function (events) { };
    ;
    Observable.prototype.trigger = function (eventName) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
    };
    ;
    return Observable;
}());
exports.Observable = Observable;
var Tag = (function (_super) {
    __extends(Tag, _super);
    function Tag(props) {
        var _this = this;
        _super.call(this, props);
        observable_1.default(this);
        Object.defineProperty(this, "_refs", {
            get: function () { return _this.refs; },
            enumerable: true,
            configurable: true
        });
    }
    Tag.prototype.on = function (events, callback) { };
    Tag.prototype.one = function (events, callback) { };
    Tag.prototype.off = function (events) { };
    Tag.prototype.trigger = function (eventName) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
    };
    Tag.prototype.update = function () {
        this.forceUpdate();
    };
    return Tag;
}(React.Component));
exports.Tag = Tag;
function mount(selector, tag, props) {
    if (selector && tag) {
        var mountNode = document.querySelector(selector);
        if (!mountNode) {
            throw "mount node '" + selector + "' not found";
        }
        updateStyles();
        ReactDOM.render(React.createElement(tag, props), mountNode);
    }
    else {
        updateStyles();
        var tagList = Object.keys(tags);
        _.each(tagList, function (tagName) {
            var nodes = document.querySelectorAll(tagName);
            _.each(nodes, function (node) {
                if (node.childNodes.length) {
                    console.warn("the mounting node <" + tagName + "> should not have children");
                }
                var tagClass = tagClasses[tagName];
                ReactDOM.render(React.createElement(tagClass, {}), node);
            });
        });
    }
}
exports.mount = mount;
var tags = {};
exports.tags = tags;
var tagClasses = {};
var styles = [];
exports.styles = styles;
function updateStyles() {
    var styleNode = document.querySelector("style[name=rioct]");
    if (!styleNode) {
        styleNode = document.createElement('style');
        styleNode.setAttribute("name", "rioct");
        document.head.appendChild(styleNode);
    }
    var allStyles = styles.join('');
    styleNode.innerHTML = styleParser ? styleParser(allStyles) : allStyles;
}
exports.updateStyles = updateStyles;
var styleParser;
exports.styleParser = styleParser;
// @template decorator
function template(tagName) {
    return function (target) {
        var tagFunction = tags[tagName];
        if (!tagFunction) {
            throw "tag \"" + tagName + "\" not defined/loaded";
        }
        target.prototype["render"] = tagFunction; //function() { try { return tagFunction() } catch(ex) { console.error(ex) } };               
        tagClasses[tagName] = target;
    };
}
exports.template = template;
//# sourceMappingURL=rioct.js.map