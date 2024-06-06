let n = Number(prompt("Enter n number"));
let x = Number(prompt("Enter x number"));
let sum1 = 0;
let sum2 = 0;

for (let i = 1; i <= n; i++) {
    sum1 = sum1 + i;
}

console.log(`Sum: ${sum1}`);
document.write(`<p>Sum: ${sum1}</p>`);

for (let i = 1; i <= x; i++) {
    sum2 = sum2 + i;
}

console.log(`Sum: ${sum2}`);
document.write(`<p>Sum: ${sum2}</p>`);

let result = sum1 * sum2;

console.log(`Result = ${result}`);
document.write(`Result = ${result}`);