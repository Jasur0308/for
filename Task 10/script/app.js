let n = prompt("Enter n number");
let sum = 0;

for (let i = 1; i <= n; i++) {
    sum = sum + 1/i;
}

console.log(`${sum}`);
document.write(`<p>Sum = ${sum}</p>`);