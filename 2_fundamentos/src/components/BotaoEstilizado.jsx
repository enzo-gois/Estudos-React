import React from 'react'

const BotaoEstilizado = () => {

  // class => className
  // for = htmlFor

  const estiloDoBotao = {
    backgroundColor: "green",
    color: "#FFF",
    padding: "15px 32px",
    cursor: 'pointer'
  }

  return (
    <div>
      <button style={estiloDoBotao}>Clique em mim</button>
    </div>
  )
}

export default BotaoEstilizado
