
import './App.css'

const users = [
  // Cada conteúdo dentro das chaves {} é um índice
  {
    name: 'Carlos' ,
    adress: 'Rua X' ,
    age: 28 ,
    isAdmin: false ,
  },
  {
    name: 'Maria' ,
    adress: 'Rua XX' ,
    age: 31 ,
    isAdmin: true ,
  },
  {
    name: 'Matheus' ,
    adress: 'Rua XI' ,
    age: 22 ,
    isAdmin: false ,
  },
]

function App() {
  
// Básico do Array
  return (
    // Dentro de cada div é pego o nome armazenado no respectivo índice e retornado o nome de cada um
    // A palavra "users" dentro da dive é a variável onde foi armazenado os índices
    // Os números após "users" é o número do índice
    <>
    <div>{users[0].name}</div>
    <div>{users[1].name}</div>
    <div>{users[2].name}</div>
    </>
  )
}

export default App
