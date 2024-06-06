let n = Number(prompt("Enter n number"));

for (let i = 0; i <= n; i++) {
    if (i % 5 == 0) {
        continue
    }
    console.log(`${i}`);
    document.write(`<p>${i}</p>`);
}