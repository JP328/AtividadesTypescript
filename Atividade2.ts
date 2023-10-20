interface IUsuario {
  nome : string,
  cpf : string,
  email : string,
  idade : number,
  postagens : Array<string>
}

const usuario1: IUsuario = {
  nome: "João",
  cpf: "000.000.000-00",
  email: "joao@gmail.com",
  idade: 16,
  postagens: [
    "Minha primeira postagem" 
  ]
}

const usuario2: IUsuario = {
  nome: "Maria",
  cpf: "000.000.000-00",
  email: "maria@gmail.com",
  idade: 20,
  postagens: [
    "Primeira postagem",
    "Segunda postagem" 
  ]
}

console.log(usuario1);
console.log(usuario2);
