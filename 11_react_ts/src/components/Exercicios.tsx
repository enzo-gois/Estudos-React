import {useState, useEffect} from 'react'

const Exercicios = () => {

  const [usuario, setUsuario] = useState("")
  const [senha, setSenha] = useState("")

  const handleSubmit = (event: React.FormEvent) => {

    event.preventDefault()

    alert(`Login efetuado para, ${usuario} e ${senha}`)

  }


  //Exercicio 2
  type Item  = {
    id: number;
    nome: String;
  }

  const [itens, setItens] = useState<Item[]>([])

  const [novoItem, setNovoItem] = useState<string>("")

  const adicionarItem = () => {

    const item: Item = {
      id: itens.length + 1,
      nome: novoItem
    }

    setItens([...itens, item])

    setNovoItem("")

  }

  // Exericio 3
  function useLocalStorage<T>(key: string, initialValue: T): [T,(value:T) => void] {
    const [storedValue, setStoredValue] = useState<T>(() => {
      try {
        const item = localStorage.getItem(key)
        return item ? JSON.parse(item) : initialValue
      } catch (error) {
        console.log(error)
      }
    })

    const setValue = (value: T) => {
      try {
        setStoredValue(value)
        localStorage.setItem(key, JSON.stringify(value))
      } catch (error) {
        console.log(error)
      }
    }

    useEffect(() => {
      setValue(storedValue)
    }, [])

    return [storedValue, setValue]
  }

  const [nome, setNome] = useLocalStorage("nome", "")

  return (
    <div>
      {/* Exercicio 1 */}
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="usuario">Nome do usuário:</label>
          <input 
            type="text" 
            value={usuario} 
            onChange={(e) => setUsuario(e.target.value)} 
          />
        </div>
        <div>
          <label htmlFor="senha">Senha:</label>
          <input 
            type="text" 
            value={senha} 
            onChange={(e) => setSenha(e.target.value)} 
          />
        </div>
        <button type='submit'>Enviar</button>
      </form>
      {/* Exericio 2 */}
      <div>
        <input 
          type="text" 
          value={novoItem} 
          onChange={(e) => setNovoItem(e.target.value)} 
        />
        <button onClick={adicionarItem}>Adicionar</button>
      </div>
      <ul>
        {itens.map((item) => (
          <li key={item.id}>{item.nome}</li>
        ))}
      </ul>
      {/* Exercicio 3 */}
      <div>
        <input 
          type="text"  
          value={nome} 
          onChange={(e) => setNome(e.target.value)} 
        />
        <p>O nome armazenado é:{nome}</p>
      </div>
    </div>
  )
}

export default Exercicios
