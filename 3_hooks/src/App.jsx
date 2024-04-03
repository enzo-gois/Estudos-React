import './App.css'
import ExemploUseEffect from './components/ExemploUseEffect'
import Timer from './components/Timer'
import ComponenteFilho from './components/ComponenteFilho'
import { MeuContextoProvider } from './contexts/MeuContexto'
import ValorDoContexto from './components/ValorDoContexto'
import Contador from './components/Contador'
import DisplayWindowSize from './components/DisplayWindowSize'
import Container from './components/Container'
import PerfilDeUsuario from './components/PerfilDeUsuario'
import CalculoPesado from './components/CalculoPesado'
import ContandoCallback from './components/ContandoCallback'

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
      {/* Sincronizar o esatdo com props */}
      {/* prop => componete => chamada de API => resulta em um dado */}
      <PerfilDeUsuario usuarioId={1} />
      <PerfilDeUsuario usuarioId={2} />
      {/* useMemo e useCallback */}
      <CalculoPesado numero={5} />
      <ContandoCallback />
    </>
  )
}

export default App
