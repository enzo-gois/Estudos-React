import {useEffect, useState} from 'react'
import axios from 'axios'

const PostForm = ({post, onSuccess}) => {
  const [title, setTitle] = useState(post?.title || "")
  const [body, setBody] = useState(post?.body || "")

  useEffect(() => {

    if(post) {
      setTitle(post.title)
    setBody(post.body)
    }

  }, [post])

  const handleSubmit = async (e) => {
    e.preventDefault()

    const newPost = {title, body, userId: 1}

    try {
      if(post) {
        const response = await axios.put(
          `https://jsonplaceholder.typicode.com/posts/${post.id}`, 
          newPost
        )

        onSuccess(response.data, "update")
      } else {
        const response = await axios.post(
          "https://jsonplaceholder.typicode.com/posts", 
          newPost
        )

        onSuccess(response.data, "add")
      }

      setTitle("")
      setBody("")
    } catch (error) {
      console.log("erro ao enviar postagem: ", error)
    }
  }

  const handleDelete = async() => {
    try {
      await axios.delete(
        `https://jsonplaceholder.typicode.com/posts/${post.id}`
      )

      onSuccess(post, "delete")
      
      setTitle("")
      setBody("")
    } catch (error) {
      console.log("erro ao deletar postagem: ", error)
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <input 
        type="text"
        value={title}
        placeholder="Digite o título"
        onChange={(e) => setTitle(e.target.value)} 
        />
      </div>
      <div>
        <textarea 
          value={body} 
          onChange={(e) => setBody(e.target.value)}
          placeholder='Digite o conteudo...'
        ></textarea>
      </div>
      <button type='submit'>Enviar</button>
      {post && (
        <button type='button' onClick={handleDelete} >Excluir</button>
      )}
    </form>
  )
}

export default PostForm
