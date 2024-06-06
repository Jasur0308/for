let n = prompt("Enter n number");

for (let i = 1; i <= n; i++) {
    if (i % 2 == 1) {
        console.log(`${i}`);
        document.write(`<p>${i}</p>`);
    }
}