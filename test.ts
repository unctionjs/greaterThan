/* eslint-disable no-magic-numbers */
import greaterThan from "./index.ts";

test(() => {
  expect(greaterThan(1)(0)).toEqual(true);
});

test(() => {
  expect(greaterThan(0)(1)).toEqual(false);
});
