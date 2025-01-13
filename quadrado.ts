// Função para calcular o quadrado de um número
export function quadrado(num: number): number {
  return num * num;
}

// a. Iterando com for simples
export function quadradoArraycomFor(arr: number[]): number[] {
  const result: number[] = [];
  for (let i = 0; i < arr.length; i++) {
    result.push(quadrado(arr[i]));
  }
  return result;
}

// b. Iterando com forEach
export function quadradoArraycomForEach(arr: number[]): number[] {
  const result: number[] = [];
  arr.forEach((num) => {
    result.push(quadrado(num));
  });
  return result;
}

