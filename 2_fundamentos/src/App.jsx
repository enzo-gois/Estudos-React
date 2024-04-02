import './App.css'
import BomDia from './components/BomDia'
import BotaoAzul from './components/BotaoAzul'
import BotaoEstilizado from './components/BotaoEstilizado'
import Button from './components/Button'
import Cachorro from './components/Cachorro'
import Counter from './components/Counter'
import Descricao from './components/Descricao'
import Exercises from './components/Exercises'
import Form from './components/Form'
import LoginButton from './components/LoginButton'
import NumberList from './components/NumberList'
import Pai from './components/Pai'
import PaiFunction from './components/PaiFunction'
import RenderCondicional from './components/RenderCondicional'
import UserInfoForm from './components/UserInfoForm'
import Warning from './components/Warning'
import Welcome from './components/Welcome'

function App() {
  return (
    <>
    {/* criação de componente */}
      <Welcome />
    {/* Expressões do JSX */}
      <BomDia />
    {/* Componente dentro de componente */}
      <Pai />
    {/* Props */}
      <Descricao nome='enzo' idade = {20} />
    {/* Desestruturação de props */}
      <Cachorro nome='Elvis' raca='Husky Siberiano' />
    {/* useState -> hook */}
      <Counter />
    {/* múltiplos estados */}
      <UserInfoForm />
    {/* Eventos */}
      <Button />
    {/* Passando funcções de manipulação de eventos como props */}
      <PaiFunction />
    {/* Eventos de form */}
      <Form />
    {/* Renderização condicional */}
      <RenderCondicional user='Enzo' />
    {/* Expressão Ternária */}
      <LoginButton loggedIn={true} />
    {/* Render nulo */}
      <Warning warning='warning' />
    {/* Listas Chaves */}
      <NumberList numbers={[1,2,3,4,5]} />
    {/* Estilos por atributo */}
      <BotaoEstilizado />
    {/* Estilos globais */}
      <BotaoAzul />
    {/* Exercicios */}
      <Exercises />
    </>
  )
}

export default App
