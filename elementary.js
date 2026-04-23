function multiply(a, b) {
  let result = 0;
  for (let i = 0; i < b; i++) {
    result += a;
  }
  return result;
}

function divide(a, b) {
  if (b === 0) return Infinity;
  let count = 0;
  let remaining = a;
  
  while (remaining >= b) {
    remaining -= b;
    count++;
  }
  return count;
}

function modulo(a, b) {
  if (b === 0) return NaN;
  
  let remaining = a;
  
  while (remaining >= b) {
    remaining -= b;
  }
  return remaining;
}