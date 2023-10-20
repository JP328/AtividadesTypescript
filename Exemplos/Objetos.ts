interface TurmaModelo {
  nome : string, 
  qtd : Number,
  materia : string,
  pessoaInstrutora : string
}

const Turma: TurmaModelo = {
  nome: "Turma .NET",
  qtd: 20,
  materia: "FullStack C#",
  pessoaInstrutora: "Rafael"
}

console.log(Turma);

const Turma2: TurmaModelo = {
  nome: "Turma Javascript",
  qtd: 40,
  materia: "React/Node",
  pessoaInstrutora: "Jacque"
}

console.log(Turma2);