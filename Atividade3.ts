interface IProduto {
  nome : string,
  valor : number,
  dataDeValidade : Date
}

const produto1 : IProduto = {
  nome: "Atum Enlatado",
  valor: 40.20,
  dataDeValidade: new Date("2023-12-20")
} 

const produto2 : IProduto = {
  nome: "Pasta de Amendoim",
  valor: 19.50,
  dataDeValidade: new Date("2024-01-30")
} 

const listaProdutos = [produto1, produto2]

console.log(...listaProdutos);