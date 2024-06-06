let a = prompt("Enter a number");
let b = prompt("Enter b number");
let sum = 0;

for (let i = a; i <= b; i++) {
    sum = sum + Number(Math.pow(i, 2));
}

console.log(`${sum}`);
document.write(`<p>Sum = ${sum}</p>`);