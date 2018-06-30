export const func =
  (fn: Function, numArgs = fn.length): Function =>
    (...args: any[]): Function =>
      args.length >= numArgs
        ? fn.apply(null, args)
        : func(
          Function.prototype.bind.apply(
            fn,
            [null, ...args]),
            numArgs - args.length);

export const pipe = (...fns: Function[]): Function =>
  (...args: any[]) => Array.prototype.reduce.call(
    fns,
    (acc: any, fn: Function) => fn(acc),
    (fns.shift() || (() => {})).apply(null, args));

export const compose = (...fns: Function[]): Function =>
  (...args: any[]) => Array.prototype.reduceRight.call(
    fns,
    (acc: any, fn: Function): any => fn(acc),
    (fns.pop() || (() => {})).apply(null, args));

export const flip =
  <a, b, c>(fn: (b: b, a: a, ...x) => c): ((a: a, b: b, ...x) => c) =>
  (a: a, b: b, ...rest) => fn(b, a, ...rest);

export const map =
  func(<a, b>(fn: (x: a) => b, array: a[]): b[] =>
    Array.prototype.map.call(array, fn));

export const foldl =
  func(<a, b>(fn: (acc: b, i: a) => b, init: b, array: a[]): b[] =>
    Array.prototype.reduce.call(array, fn, init))

export const foldr =
  func(<a, b>(fn: (i:a, acc:b) => b, init: b, array: a[]): b[] =>
    Array.prototype.reduceRight.call(array, flip(fn), init));

export const reverse = <a>([x, ...xs]: a[]): a[] =>
  x
  ? [...reverse(xs), x]
  : [];

export const listc = () => "lots of list comprehension-y stuff"; // TODO
