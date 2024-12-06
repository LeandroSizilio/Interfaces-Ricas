fatorial(1)

function fatorial(x: number): number {
    if ( x == 0 )
        return 1;

    else if (x == 1)
        return 1;
    else if (x < 0)
        throw new Error("Número negativo não é permitido.");
    else 
        return x * fatorial(x - 1);
}

export default fatorial;

