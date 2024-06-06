let n = Number(prompt("Enter n number"));
let sum = 0;
let result = 1;

for (let i = 1; i <= n; i++) {
    result *= i;
    sum = sum + result;
}

console.log(`Sum = ${sum}`);
document.write(`<p>Sum = ${sum}</p>`);