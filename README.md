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

### `map`
does  a map thing
