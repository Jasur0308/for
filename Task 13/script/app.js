let n = Number(prompt("Enter n"));
let nonPrimes = [];

for (let num = 2; num <= n; num++) {
    let isPrime = true;

    if (num <= 1) {
        isPrime = false;
    } else {
        for (let i = 2; i * i <= num; i++) {
            if (num % i === 0) {
                isPrime = false;
                break;
            }
        }
    }

    if (!isPrime) {
        nonPrimes.push(num);
    }
}

console.log(nonPrimes);
document.write(`<p>Non prime numbers: ${nonPrimes}</p>`);