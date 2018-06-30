# func
some haskell-wannabe functions in JS (typescript)

## getting started
1. import the module:
```js
import { func, pipe, compose } from "func";
// OR
const func = require("func");
```
2. use the stuff:
```js
const log = func((a, b, c) => console.log(a, b, c));
log("Wooa")("aaahh")("!");
// Wooa aaahh !
```

## the functions

### `func`
Makes a function curried. Pretty cool stuff.

It takes a function, and optionally the number of args. Use the second parameter if it's a function that takes as many args as you put.

```js
const log1 = func((a, b, c) => console.log(a, b, c));
const log2 = func(console.log, 3);
```

### `pipe`
Pipes the output of each function into the next.

The first function can take as many args as you want, but after that they should only take one. You can do some fun stuff if you use `func()` to make the functions to pass into `pipe()`, but keep in mind you'll be dealing with partially applied functions at that point.

```js
const doSomeStuff = pipe(
  x => x * 2,
  x => x ** 2,
  x => x.toString()
);

console.log(doSomeStuff(3));
// "36"
```

### `compose`
Same thing as pipe, but right to left. Like some fancy math stuff.

```js
const doSomeStuff = compose(
  x => x.toString(),
  x => x ** 2,
  x => x * 2
);

console.log(doSomeStuff(3));
// "36"
```

### `flip`
Takes a function that takes 2 arguments (or more) and flips the first 2 arguments.

```js
const flipped = flip((x, y) => `${x}, ${y}`);

console.log(flipped(1, 2));
// "2, 1"
```

### `map`
Maps an array to a function

```js
const times2 = map(x => x * 2);

console.log(times2([1, 2, 3, 4, 5]));
// [2, 4, 6, 8, 10]
```

### `foldl`
Folds (reduces) an array from the left.

```js
const sum = foldl((acc, x) => acc + x, 0);

console.log(sum([1, 2, 3]));

// 6
```

### `foldr`
Folds (reduces) an array from the right. Note that the reducer takes the item first, then the accumulator, then the index. It's like haskell!!!!!

```js
const div = foldr((x, acc) => x / acc, 1);

console.log(div([1, 2, 3, 4, 5]));
// 1.875
// this is equivalent to 1/(2/(3/(4/(5/1)))), not 1/2/3/4/5/1
```

### `reverse`
Reverses an array.

```js
console.log(reverse([1, 2, 3, 4, 5]));
// [5, 4, 3, 2, 1]
```

### `listc`
List comprehensions. Coming soon. Maybe.
