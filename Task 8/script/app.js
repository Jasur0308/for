let a = prompt("Enter a number");
let b = prompt("Enter b number");
let multiplication = 1;

for (let i = a; i <= b; i++) {
    multiplication = multiplication * Number(i);
}

console.log(`${multiplication}`);
document.write(`<p>Multiplication = ${multiplication}</p>`);