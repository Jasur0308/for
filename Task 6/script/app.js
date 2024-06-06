let n = 10000;

for (let i = 10; i <= 20; i++) {
    if (i % 2 == 0) {
        console.log(`${i/10*10000}`);
        document.write(`<p>${i/10} kg sweet: ${i/10*10000} kg</p>`);
    }
}