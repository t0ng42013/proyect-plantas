export function generateFourRandomInRange(min:number, max:number) {
    return Array.from({ length: 4 }, () =>
        Math.floor(Math.random() * (max - min + 1)) + min
    );
}
