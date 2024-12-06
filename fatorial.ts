function fatorial(x: number): number {
    if (x === 1)
        return 1;
    else 
        return x * fatorial(x - 1);
}

export default fatorial;

