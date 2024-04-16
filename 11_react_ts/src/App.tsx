import './App.css'
import BarraFerramentas from './components/BarraFerramentas'
import Contador from './components/Contador'
import ContadorInterval from './components/ContadorInterval'
import Counter from './components/Counter'
import Exercicios from './components/Exercicios'
import ExibirPostagens from './components/ExibirPostagens'
import Greeting from './components/Greeting'
import TextInputs from './components/TextInputs'
import { TemaProvider } from './contexts/TemaContext'

function App() {
  return (
    <>
      <h1>React com TS</h1>
      {/* 1 - Componente funcional com TS */}
      <Greeting name={"enzo"} />
      {/* 2 - Hooks com tipos */}
      <Counter />
      {/* 3 - Manipulação de eventos com tipos */}
      <TextInputs />
      {/* 4 - Custom hooks com TS */}
      <ContadorInterval />
      {/* 5 - Exercicios */}
      <Exercicios />
      {/* 6 - useReducer com TS */}
      <Contador />
      {/* 7 - ContextApi com TS */}
      <TemaProvider>
        <BarraFerramentas />
      </TemaProvider>
      {/* 8 - Requisição de APIs com Axios e TS */}
      <ExibirPostagens />
    </>
  )
}

export default App
