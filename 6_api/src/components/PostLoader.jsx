import {useState, useEffect} from 'react'
import axios from 'axios'
import {useParams} from "react-router-dom"

const PostLoader = () => {

  const [post, setPost] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")
  const [success, setSuccess] = useState("")
  const {postId} = useParams()

  useEffect(() => {
    const fetchPost = async() => {
      setLoading(true)

      try {
        const response = await axios.get(
          `https://jsonplaceholder.typicode.com/posts/${postId}`
        )
        
        setPost(response.data)
      } catch (error) {
          setError("Falha ao carregar post: ", error.message)
          setSuccess("Post carregado com sucesso")
      } finally {
        setLoading(false)
      }

    }
    fetchPost()
  }, [postId])

  return (
    <div>
      <h1>Post: {postId}</h1>
      {loading && <p>Carregando...</p> }
      {error && <p style={{color: "red"}}>{error}</p> }
      {success && <p style={{color: "green"}}>{success}</p> }
      {post && (
        <div>
          <h2>{post.title}</h2>
          <p>{post.body}</p>
        </div>
      )}
    </div>
  )
}

export default PostLoader
