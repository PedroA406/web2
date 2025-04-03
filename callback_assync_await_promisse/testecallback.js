

const alunos = [
    { id: 1, nome: "Ana", nota: 8.5 },
    { id: 2, nome: "Bruno", nota: 7.2 },
    { id: 3, nome: "Carla", nota: 9.0 }
  ];


function consultarNota(id, callback) {
    setTimeout(() => {
      const aluno = alunos.find(a => a.id === id); 
      if (aluno) {
        callback(null, aluno.nota); 
      } else {
        callback(`Aluno com ID ${id} não encontrado`, null); 
      }
    }, 2000); 
  }
  

  consultarNota(1, (erro, nota) => {
    if (erro) {
      console.log(erro);
    } else {
      console.log(`Nota da Ana: ${nota}`);
    }
  });
  
  consultarNota(4, (erro, nota) => {
    if (erro) {
      console.log(erro);
    } else {
      console.log(`Nota do aluno 4: ${nota}`);
    }
  });