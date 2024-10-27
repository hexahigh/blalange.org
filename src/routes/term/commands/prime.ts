import type { StdlibType } from "../types";

const defaultOptions = {
    number: 100,
};

async function isPrime(n: number): Promise<boolean> {
    if (n <= 1) return false;
    if (n === 2) return true;
    if (n % 2 === 0) return false;
    let sqrtN = Math.sqrt(n);
    for (let i = 3; i <= sqrtN; i += 2) {
        if (n % i === 0) return false;
    }
    return true;
}

async function printPrimesUpToN(print: StdlibType["print"], N: number): Promise<void> {
    for (let i = 2; i <= N; i++) {
        if (await isPrime(i)) {
            print(i);

            await new Promise(resolve => setTimeout(resolve, 1)); // We need a delay, otherwise they are all printed at once
        }
    }
}

export default function main(stdlib: StdlibType, inOptions = {}) {
    let lib = stdlib;
    const options = { ...defaultOptions, ...inOptions };

    printPrimesUpToN(lib.print, options.number);
}