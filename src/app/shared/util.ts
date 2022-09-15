export interface Item {
  id: number;
  value: number;
  refItem: number; // id to related item
}

export function createItems(amount: number): Item[] {
  return new Array(amount).fill(null).map((i, j) => ({
    id: j,
    value: Math.random(),
    refItem: Math.floor(Math.random() * (amount - 2) + 1)
  }));
}

export function measureOperations(f: Function, duration: number): number {
  let iterations = 0;
  const now = performance.now();
  let elapsed = 0;
  while (elapsed < duration) {
    f();
    elapsed = performance.now() - now;
    iterations++;
  }

  return parseInt(((iterations / elapsed) * 1000).toFixed(4));
}
