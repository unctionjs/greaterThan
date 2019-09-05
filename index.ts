export default function greaterThan (left: number) {
  return function greaterThanRight (right: number): boolean {
    return left > right;
  };
}
