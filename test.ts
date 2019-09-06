/* eslint-disable no-magic-numbers */
import greaterThan from "./index";

test("works", () => {
  expect(greaterThan(1)(0)).toEqual(true);
});

test("works", () => {
  expect(greaterThan(0)(1)).toEqual(false);
});
