let n = Number(prompt("Enter n number"));

for (let i = 1; i <= n; i++) {
    if (i % 2 == 0) {
        console.log(`Even number' square ${i}: ${Math.pow(i, 2)}`);
        document.write(`<p>Even number' square ${i}: ${Math.pow(i, 2)}<p>`);
    }

    else {
        console.log(`Odd number' square ${i}: ${Math.pow(i, 2)}`);
        document.write(`<p>Odd number' square ${i}: ${Math.pow(i, 2)}<p>`);
    }
}