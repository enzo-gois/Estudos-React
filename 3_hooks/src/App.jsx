import './App.css'
import ExemploUseEffect from './components/ExemploUseEffect'
import Timer from './components/Timer'
import ComponenteFilho from './components/ComponenteFilho'
import { MeuContextoProvider } from './contexts/MeuContexto'
import ValorDoContexto from './components/ValorDoContexto'
import Contador from './components/Contador'
import DisplayWindowSize from './components/DisplayWindowSize'
import Container from './components/Container'

function App() {
  return (
    <>
      {/* useEffect */}
      <ExemploUseEffect />
      <Timer />
      {/* useContext */}
      {/* aplicações de pequeno e médio porte, que precisam transferir o estado entre componentes */}
      <MeuContextoProvider>
        <ComponenteFilho />
        <ValorDoContexto />
      </MeuContextoProvider>
      {/* useReducer */}
      {/* estados mais complexos */}
      <Contador />
      {/* Custom hook */}
      <DisplayWindowSize />
      {/* Sltos e children props */}
      <Container>
        <h1>Titulo da seção</h1>
        <p>Este é o meu subtitulo</p>
      </Container>
    </>
  )
}

export default App
