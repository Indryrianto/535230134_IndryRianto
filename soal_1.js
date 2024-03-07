console.log("Bilangan prima dari 1 sampai 1.000 :" )

for (let l = 2; l <= 1000; l++) {
    let isPrime = true;

    for (let k = 2; k <= Math.sqrt(i); k++) {
        if (l % k == 0) {
            isPrime = false;
            break;
        }
    }

    if (isPrime) {
        console.log(l);
    }
}