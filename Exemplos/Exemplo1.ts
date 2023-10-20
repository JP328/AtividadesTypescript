// let variavel: any = 'qualquer coisa'
// console.log("Valor da varíavel any:", variavel)

// variavel = 22
// console.log("Valor da varíavel any:", variavel)

// variavel = true
// console.log("Valor da varíavel any:", variavel)

// let valor: boolean = true
// console.log("Valor da varíavel boolean:", variavel)

// const tupla: [string, number] = ['Márcia da Silva', 30];
// console.log(tupla);

const array01 = [1, 2, 3];
const array02 = [4, 5, 6];
const arrayCombinado = [...array01, ...array02];

console.log(arrayCombinado);


function somar(...numbers: number[]) : number {
  let total = 0
  numbers.forEach((num) => total += num);
  return total;
}

console.log(somar(5,150,150));
