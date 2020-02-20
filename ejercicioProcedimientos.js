export const isPrime = (num) => {
    if (num <= 1 || num % 1) {
        return false;
    }
    let m = Math.sqrt(num);
    for (let i = 2; i <= m; i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}

export const getPrimes = (start, end) => {
    let arrayPrimes = [];
    for (let i = start; i < end; i++) {
        if (isPrime(i)) {
            arrayPrimes.push(i);

        }
    }
    return arrayPrimes;
}