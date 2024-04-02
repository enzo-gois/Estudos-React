import { useState } from 'react'

const Counter = () => {
  // [consultar, alterar]
  const [count, setCount] = useState(1)

  return (
    <div>
      <p>Você clicou {count} vezes </p>
      <button onClick={() => setCount(count +1)}>Clique</button>
    </div>
  )
}

export default Counter
