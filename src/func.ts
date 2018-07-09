export const func =
  (fn: Function, numArgs = fn.length): Function =>
    (...args: any[]): any =>
      args.length >= numArgs
        ? Function.prototype.apply.call(fn, null, args)
        : func(
            Function.prototype.bind.call(
              fn,
              null,
              ...args),
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
  <A, B, C>(fn: (b: B, a: A, ...x) => C): ((a: A, b: B, ...x) => C) =>
  (a: A, b: B, ...rest) => fn(b, a, ...rest);

export const map =
  func(<A, B>(fn: (x: A) => B, array: A[]): B[] =>
    Array.prototype.map.call(array, fn));

export const foldl =
  func(<A, B>(fn: (acc: B, i: A) => B, init: B, array: A[]): B[] =>
    Array.prototype.reduce.call(array, fn, init));

export const foldr =
  func(<A, B>(fn: (i:A, acc:B) => B, init: B, array: A[]): B[] =>
    Array.prototype.reduceRight.call(array, flip(fn), init));

export const reverse = <A>([x, ...xs]: A[]): A[] =>
  x
  ? [...reverse(xs), x]
  : [];

export const cons = <A>(x: A, xs: A[]): A[] => [x, ...xs];

export const listc = () => "lots of list comprehension-y stuff"; // TODO
