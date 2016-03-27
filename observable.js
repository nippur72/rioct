"use strict";
var observable = function (el) {
    el = el || {};
    var callbacks = {}, slice = Array.prototype.slice, onEachEvent = function (e, fn) { e.replace(/\S+/g, fn); }, defineProperty = function (key, value) {
        Object.defineProperty(el, key, {
            value: value,
            enumerable: false,
            writable: false,
            configurable: false
        });
    };
    defineProperty('on', function (events, fn) {
        if (typeof fn != 'function')
            return el;
        onEachEvent(events, function (name, pos) {
            (callbacks[name] = callbacks[name] || []).push(fn);
            fn.typed = pos > 0;
        });
        return el;
    });
    defineProperty('off', function (events, fn) {
        if (events == '*' && !fn)
            callbacks = {};
        else {
            onEachEvent(events, function (name) {
                if (fn) {
                    var arr = callbacks[name];
                    for (var i = 0, cb; cb = arr && arr[i]; ++i) {
                        if (cb == fn)
                            arr.splice(i--, 1);
                    }
                }
                else
                    delete callbacks[name];
            });
        }
        return el;
    });
    defineProperty('one', function (events, fn) {
        function on() {
            el.off(events, on);
            fn.apply(el, arguments);
        }
        return el.on(events, on);
    });
    defineProperty('trigger', function (events) {
        var args = slice.call(arguments, 1), fns;
        onEachEvent(events, function (name) {
            fns = slice.call(callbacks[name] || [], 0);
            for (var i = 0, fn; fn = fns[i]; ++i) {
                if (fn.busy)
                    return;
                fn.busy = 1;
                fn.apply(el, fn.typed ? [name].concat(args) : args);
                if (fns[i] !== fn) {
                    i--;
                }
                fn.busy = 0;
            }
            if (callbacks['*'] && name != '*')
                el.trigger.apply(el, ['*', name].concat(args));
        });
        return el;
    });
    return el;
};
exports.__esModule = true;
exports["default"] = observable;
//# sourceMappingURL=observable.js.map