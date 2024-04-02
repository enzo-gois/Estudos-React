function Descricao(props) {

  // props
  // propriedades -> chaves dos valores
  return <div>
    <p>Seu nome é: {props.nome}</p>
    <p>E você tem {props.idade} de idade</p>
  </div>
}

export default Descricao
