"use strict";
exports.__esModule = true;
/**
 * Make a normal function curried
 *
 * @param {Function} fn The function to curry
 * @param {int} [numArgs=fn.length] The number of arguments the function
 * expects. Useful for functions without a set number of arguments
 * @returns {Function} Returns a function that is curried (can be partially
 * applied) and calls the original function when all arguments have been passed
 */
exports.func = function (fn, numArgs) {
    if (numArgs === void 0) { numArgs = fn.length; }
    return function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var _a;
        return args.length >= numArgs
            ? Function.prototype.apply.call(fn, null, args)
            : exports.func((_a = Function.prototype.bind).call.apply(_a, [fn,
                null].concat(args)), numArgs - args.length);
    };
};
/**
 * Compose functions into a pipeline. The output of each function is passed to
 * the next. Similar to Haskell's (&) operator.
 *
 * @param {...Function} fns The functions to compose
 * @returns {Function} A function that accepts any number of arguments, which
 * are passed to the first function in the pipeline, and returns the result of
 * the last function.
 */
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
/**
 * Compose functions in the opposite direction of {@link pipe}. Similar to
 * Haskell's (.) operator.
 *
 * @param {...Function} fns The functions to compose
 * @returns {Function} A function that accepts any number of arguments, which
 * are passed to the last (innermost) function, and returns the result of the
 * first (outermost) function.
 */
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
/**
 * Reverse the order of the first two parameters of a given function. Useful
 * when passing a function as argument to another, in the case that the order
 * of arguments passed in don't match up with the expected order.
 *
 * @param {Function} fn The function which will have its parameters flipped
 * @returns {Function} The original function, but with the first and second
 * parameters reversed
 */
exports.flip = function (fn) {
    return function (a, b) {
        var rest = [];
        for (var _i = 2; _i < arguments.length; _i++) {
            rest[_i - 2] = arguments[_i];
        }
        return fn.apply(void 0, [b, a].concat(rest));
    };
};
/**
 * Map a function over an array of values. (You can do some really fun things
 * with this if you pass in a curried function)
 *
 * @function
 *
 * @param {Function} fn The function to map over the array. The function must
 * accept a value of the same type as the array contains.
 * @param {Array<*>} array The array of values. All values must be of the same
 * type.
 * @returns {Array<*>} An array of values of the type returned by fn
 */
exports.map = exports.func(function (fn, array) {
    return Array.prototype.map.call(array, fn);
});
/**
 * Fold (reduce) an iterable from the left. Words like Haskell's foldl,
 * obviously.
 *
 * @function
 *
 * @param {Function} fn The function with which to fold the iterable. Should
 * accept an accumulator of the same type as is returned, and an item from the
 * iterable.
 * @param {*} init The initial value. Should match the return type of fn
 * @param {Array<*>} array The iterator to fold
 * @returns {*} Returns a value of the type returned by fn
 */
exports.foldl = exports.func(function (fn, init, array) {
    return Array.prototype.reduce.call(array, fn, init);
});
/**
 * Fold (reduce) an iterable from the right. Words like Haskell's foldr,
 * obviously.
 *
 * @function
 *
 * @param {Function} fn The function with which to fold the iterable. Should
 * accept an item form the iterable, and an accumulator of the same type as is
 * returned.
 * @param {*} init The initial value. Should match the return type of fn
 * @param {Array<*>} array The iterator to fold
 * @returns {*} Returns a value of the type returned by fn
 */
exports.foldr = exports.func(function (fn, init, array) {
    return Array.prototype.reduceRight.call(array, exports.flip(fn), init);
});
/**
 * Reverse an array.
 *
 * @param {Array<*>} array The array to reverse
 * @returns {Array<*>} The reversed array
 */
exports.reverse = function (_a) {
    var x = _a[0], xs = _a.slice(1);
    return x
        ? exports.reverse(xs).concat([x]) : [];
};
/**
 * Append a value onto an array
 *
 * @param {*} x The value to append
 * @param {Array<*>} xs The array to which the value should be appended
 * @returns {Array<*>} A new array consisting of the original with the value
 * added to the front
 */
exports.cons = function (x, xs) { return [x].concat(xs); };
exports.listc = function () { return "lots of list comprehension-y stuff"; }; // TODO
