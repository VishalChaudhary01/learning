export function sum(a: number, b: number) {
  return a + b;
}

export function calculate(
  a: number,
  b: number,
  fn: (a: number, b: number) => number
) {
  return fn(a, b);
}
