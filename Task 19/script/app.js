let n = Number(prompt("Enter n number"));
let x = Number(prompt("Enter x number"));
let sum = 1;
let result = 1;

for (let i = 1; i <= n; i++) {
    result *= i;
    sum = sum + Math.pow(x, i)/result;
}

console.log(`Sum = ${sum}`);
document.write(`<p>Sum = ${sum}</p>`);