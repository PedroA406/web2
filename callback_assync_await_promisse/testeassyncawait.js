
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
        resolve(aluno.nota); // Resolve a Promise com a nota do aluno
      } else {
        reject(`Aluno com ID ${id} não encontrado`); // Rejeita a Promise se não encontrar o aluno
      }
    }, 1000); // Simulando um tempo de resposta
  });
}

// Função que utiliza async/await para consultar a nota do aluno
async function consultarNotaAsync(id) {
  try {
    const nota = await consultarNotaPromise(id); // Espera a Promise ser resolvida
    console.log(`Nota do aluno ${id}: ${nota}`);
  } catch (erro) {
    console.log(erro); // Se ocorrer um erro, exibe a mensagem
  }
}

// Testando com async/await para os IDs fornecidos
consultarNotaAsync(1); // Deveria retornar: Nota do aluno 1: 8.5
consultarNotaAsync(2); // Deveria retornar: Nota do aluno 2: 7.2
consultarNotaAsync(3); // Deveria retornar: Nota do aluno 3: 9.0
consultarNotaAsync(4); // Deveria retornar: Aluno com ID 4 não encontrado