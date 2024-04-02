import {useState} from 'react'

//Exercicio 1
const Greeting = ({ name }) => {
  return <h1>Olá, {name} </h1>
}

//Exercicio 2
const Counter = () => {
  const [count, setCount] = useState(0)

  return (
    <div>
      <p>Você clicou {count} vezes no botão</p>
      <button onClick={() => setCount(count + 1)}>Clique Aqui</button>
      <button onClick={() => setCount(count - 1)}>Decrementar</button>
    </div>
  )
}

//Exercicio 3
const TaskList = ({tasks}) => {
  if(tasks.length === 0) {
    return <p>Não há tarefas para mostrar.</p>
  }

  return (
    <ul>
      {tasks.map((task) => (
        <li key={task.id}>{task.text}</li>
      ))}
    </ul>
  )
}

const Exercises = () => {
  const tasks = [
    {id: 1, text: "Comprar leite"},
    {id: 2, text: "Estudar React"},

  ]

  return (
    <div>
      <h2>Exercicio 1</h2>
      <Greeting name='joão' />
      <h2>Exercicio 2</h2>
      <Counter />
      <h2>Exercicio 3</h2>
      <TaskList tasks={tasks} />
    </div>
  )
}

export default Exercises
