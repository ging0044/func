"use strict";
exports.__esModule = true;
exports.func = function (fn, numArgs) {
    if (numArgs === void 0) { numArgs = fn.length; }
    return function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        return args.length >= numArgs
            ? fn.apply(null, args)
            : exports.func(Function.prototype.bind.apply(fn, [null].concat(args)), numArgs - args.length);
    };
};
exports.pipe = function () {
    var fns = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        fns[_i] = arguments[_i];
    }
    return function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        return Array.prototype.reduce.call(fns, function (acc, fn) { return fn(acc); }, (fns.shift() || (function () { })).apply(null, args));
    };
};
exports.compose = function () {
    var fns = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        fns[_i] = arguments[_i];
    }
    return function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        return Array.prototype.reduceRight.call(fns, function (acc, fn) { return fn(acc); }, (fns.pop() || (function () { })).apply(null, args));
    };
};
exports.flip = function (fn) {
    return function (a, b) {
        var rest = [];
        for (var _i = 2; _i < arguments.length; _i++) {
            rest[_i - 2] = arguments[_i];
        }
        return fn.apply(void 0, [b, a].concat(rest));
    };
};
exports.map = exports.func(function (fn, array) {
    return Array.prototype.map.call(array, fn);
});
exports.foldl = exports.func(function (fn, init, array) {
    return Array.prototype.reduce.call(array, fn, init);
});
exports.foldr = exports.func(function (fn, init, array) {
    return Array.prototype.reduceRight.call(array, exports.flip(fn), init);
});
exports.reverse = function (_a) {
    var x = _a[0], xs = _a.slice(1);
    return x
        ? exports.reverse(xs).concat([x]) : [];
};
exports.listc = function () { return "lots of list comprehension-y stuff"; };
