const students = [
  {
    name: "Camila",
    n1: 10,
    n2: 9,
  },
  
  {
    name: "Juliana",
    n1: 6,
    n2: 5,
  },

  {
    name: "Vitor",
    n1: 8,
    n2: 6,
  }
]

let media = function(n1, n2) {
  return ((n1 + n2) / 2);
  }

function printResult(student) {
  if (media(student.n1, student.n2) >= 7) {
    return `A média do(a) aluno(a) ${student.name} foi de: ${media(student.n1, student.n2)}. 
    Parabéns ${student.name}, você foi aprovado(a) no concurso!`
  } 
  else {
    return `A média do(a) aluno(a) ${student.name} foi de: ${media(student.n1, student.n2)}. 
    Infelizmente, não foi dessa vez ${student.name}! Você foi reprovado.`
  };
}

for (let student of students) {
    let mediaMsg = printResult(student)
    alert(mediaMsg)
}
