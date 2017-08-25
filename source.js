export default function greaterThan (left: number): Function {
  return function greaterThanRight (right: number): boolean {
    return left > right
  }
}
