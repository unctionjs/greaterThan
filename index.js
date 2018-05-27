export default function greaterThan(left) {
  return function greaterThanRight(right) {
    return left > right;
  };
}
