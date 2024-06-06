let n = Number(prompt("Enter n number"));
let multiplication = 1;

for (let i = 1; i <= n; i++) {
    multiplication = multiplication * i;
}

console.log(`Multiplication = ${multiplication}`);
document.write(`<p>Multiplication = ${multiplication}</p>`);