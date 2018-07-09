import {
  func,
  pipe,
  compose,
  flip,
  map,
  foldl,
  foldr,
  reverse,
  cons
} from "../func";

test("func() makes functions curried", () => {
  expect(
    func((x, y) => `${x}, ${y}`)(1)(2)
  ).toStrictEqual(
    "1, 2"
  );
});

test("pipe() pipes the output of functions together", () => {
  expect(
    pipe(
      (x) => x * 3,
      (x) => x + "",
      (x) => typeof x
    )(3)
  ).toStrictEqual(
    typeof ((3 * 3) + "")
  );
});

test("compose() composes functions together", () => {
  expect(
    compose(
      (x) => x / 4,
      (x) => x ** 3,
    )(2)
  ).toStrictEqual(
    (2 ** 3) / 4
  );
});

test("flip() reverses the first two arguments", () => {
  expect(
    flip((x, y) => `${x}, ${y}`)(4, 5)
  ).toStrictEqual(
    "5, 4"
  );
});

test('map() maps an array of values to a function', () => {
  expect(
    map(x => 2 * x / 3)([1, 2, 3, 4, 5])
  ).toStrictEqual(
    [2/3, 4/3, 2, 8/3, 10/3]
  )
});

test('foldl() folds (reduces) a list from the left', () => {
  expect(
    foldl((acc, x) => acc * x, 1)([1, 2, 3, 4, 5])
  ).toStrictEqual(
    120
  )
});

test('foldr() folds (reduces) a list from the right', () => {
  expect(
    foldr((x, acc) => x / acc, 1)([1, 2, 3, 4, 5])
  ).toStrictEqual(
    1/(2/(3/(4/5)))
  )
});

test('reverse() reverses a list', () => {
  expect(
    reverse([1, 2, 3, 4, 5])
  ).toStrictEqual(
    [5, 4, 3, 2, 1]
  );
});

test('cons() prepends an item to an array', () => {
  expect(
    cons(1, [2, 3, 4, 5])
  ).toStrictEqual(
    [1, 2, 3, 4, 5]
  );
});
