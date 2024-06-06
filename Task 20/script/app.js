let n = Number(prompt("Enter n number"));
let x = Number(prompt("Enter x number"));

for (let i = 0; i <= n; i++) {
    if (i % x == 0) {
        console.log(`Number: ${i}`);
        document.write(`<p>Number: ${i}</p>`);
    }
}