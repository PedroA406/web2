
const alunos = [
    { id: 1, nome: "Ana", nota: 8.5 },
    { id: 2, nome: "Bruno", nota: 7.2 },
    { id: 3, nome: "Carla", nota: 9.0 }
  ];


function consultarNotaPromise(id) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const aluno = alunos.find(a => a.id === id); // Procurando o aluno pelo ID
        if (aluno) {
          resolve(aluno.nota); // Resolve a Promise com a nota
        } else {
          reject(`Aluno com ID ${id} não encontrado`); // Rejeita a Promise se não encontrar o aluno
        }
      }, 1000);
    });
  }
  
  // Testando com Promise
  consultarNotaPromise(2)
    .then(nota => {
      console.log(`Nota do Bruno: ${nota}`);
    })
    .catch(erro => {
      console.log(erro);
    });
  
  consultarNotaPromise(4)
    .then(nota => {
      console.log(`Nota do aluno 4: ${nota}`);
    })
    .catch(erro => {
      console.log(erro);
    });