const countPrimeNumbers = () => {
  let num = 100;
  let arr = [2];
  for (let p = 3; p < num; p++) {
    for (let i = 2; i < p; i++) {
      if (p % i === 0) break;
      if (i === p - 1) arr.push(p);
    }
  }
  return arr.length;
}

const t1 = performance.now()
for (let i = 0; i < 100; i++) {
  setTimeout(countPrimeNumbers, 0);
}
const t2 = performance.now()
console.log(`Execution time of calculating prime numbers 100 times was ${t2 - t1} milliseconds.`);