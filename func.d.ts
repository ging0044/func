/**
 * Make a normal function curried
 *
 * @param {Function} fn The function to curry
 * @param {int} [numArgs=fn.length] The number of arguments the function
 * expects. Useful for functions without a set number of arguments
 * @returns {Function} Returns a function that is curried (can be partially
 * applied) and calls the original function when all arguments have been passed
 */
export declare const func: (fn: Function, numArgs?: number) => Function;
/**
 * Compose functions into a pipeline. The output of each function is passed to
 * the next. Similar to Haskell's (&) operator.
 *
 * @param {...Function} fns The functions to compose
 * @returns {Function} A function that accepts any number of arguments, which
 * are passed to the first function in the pipeline, and returns the result of
 * the last function.
 */
export declare const pipe: (...fns: Function[]) => Function;
/**
 * Compose functions in the opposite direction of {@link pipe}. Similar to
 * Haskell's (.) operator.
 *
 * @param {...Function} fns The functions to compose
 * @returns {Function} A function that accepts any number of arguments, which
 * are passed to the last (innermost) function, and returns the result of the
 * first (outermost) function.
 */
export declare const compose: (...fns: Function[]) => Function;
/**
 * Reverse the order of the first two parameters of a given function. Useful
 * when passing a function as argument to another, in the case that the order
 * of arguments passed in don't match up with the expected order.
 *
 * @param {Function} fn The function which will have its parameters flipped
 * @returns {Function} The original function, but with the first and second
 * parameters reversed
 */
export declare const flip: <A, B, C>(fn: (b: B, a: A, ...x: any[]) => C) => (a: A, b: B, ...x: any[]) => C;
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
export declare const map: Function;
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
export declare const foldl: Function;
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
export declare const foldr: Function;
/**
 * Reverse an array.
 *
 * @param {Array<*>} array The array to reverse
 * @returns {Array<*>} The reversed array
 */
export declare const reverse: <A>([x, ...xs]: A[]) => A[];
/**
 * Append a value onto an array
 *
 * @param {*} x The value to append
 * @param {Array<*>} xs The array to which the value should be appended
 * @returns {Array<*>} A new array consisting of the original with the value
 * added to the front
 */
export declare const cons: <A>(x: A, xs: A[]) => A[];
export declare const listc: () => string;
