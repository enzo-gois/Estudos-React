import {useState, useEffect} from 'react'

const PerfilDeUsuario = ({usuarioId}) => {
  const [usuario, setUsuario] = useState(null)

  useEffect(() => {

    //FUnção para buscar dados
    const buscarUsuario = async() => {

      const resposta = await fetch(
        `https://jsonplaceholder.typicode.com/users/${usuarioId}`)

      const dadosUsuario = await resposta.json()

      setUsuario(dadosUsuario)
    }

    if(usuarioId) {
      buscarUsuario()
    }

  }, [usuarioId])

  return<div>{usuario ? (
  <div> 
    <h1>{usuario.name}</h1> 
    <p>{usuario.email}</p>
  </div>
    ) : ( <p>Carregado perfil de usuário</p> ) 
  }</div>

}

export default PerfilDeUsuario
