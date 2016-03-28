"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var _ = require("lodash");
var React = require("react");
var ReactDOM = require("react-dom");
var observable_1 = require("./observable");
var Observable = (function () {
    function Observable() {
        observable_1["default"](this);
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
this["Component"] = React.Component;
var Tag = (function (_super) {
    __extends(Tag, _super);
    function Tag(props) {
        var _this = this;
        _super.call(this, props);
        observable_1["default"](this);
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
}(Component));
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
        var tagList = Object.keys(exports.tags);
        _.each(tagList, function (tagName) {
            var nodes = document.querySelectorAll(tagName);
            _.each(nodes, function (node) {
                if (node.childNodes.length) {
                    console.warn("the mounting node <" + tagName + "> should not have children");
                }
                var tagClass = tagClasses[tagName];
                try {
                    ReactDOM.render(React.createElement(tagClass, {}), node);
                }
                catch (ex) {
                    throw "failed to mount " + tagName + "() on DOM node <" + tagName + ">, error: " + ex.message;
                }
            });
        });
    }
}
exports.mount = mount;
exports.tags = {};
var tagClasses = {};
exports.styles = [];
function updateStyles() {
    var styleNode = document.querySelector("style[name=rioct]");
    if (!styleNode) {
        styleNode = document.createElement('style');
        styleNode.setAttribute("name", "rioct");
        document.head.appendChild(styleNode);
    }
    var allStyles = exports.styles.join('');
    styleNode.innerHTML = exports.styleParser ? exports.styleParser(allStyles) : allStyles;
}
exports.updateStyles = updateStyles;
function template(tagName) {
    if (typeof (tagName) === "string") {
        return function (target) {
            var tagFunction = exports.tags[tagName];
            if (!tagFunction) {
                throw "tag \"" + tagName + "\" not defined/loaded";
            }
            target.prototype["render"] = tagFunction;
            tagClasses[tagName] = target;
        };
    }
    else {
        return function (target) {
            var tagFunction = tagName;
            if (!tagFunction) {
                throw "tag function not defined/loaded";
            }
            target.prototype["render"] = tagFunction;
        };
    }
}
exports.template = template;
//# sourceMappingURL=rioct.js.map