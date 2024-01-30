--->>> Basic calculator <<<---

function claculate(a: number, b: number, type: string): number {
  if (type === "sum"){
    return a + b;
  }
  if (type === "mul"){
    return a * b;
  }
  if (type === "div") {
    return a / b;
  }
  if (type === "sub") {
    return a - b;
  }
  return -1;
}

const ans = claculate(1, 0, "sum");
console.log(ans);
