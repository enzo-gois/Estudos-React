import './App.css'

import {BrowserRouter ,Routes, Route, Link } from 'react-router-dom'
import FetchPost from './components/FetchPost'
import PostManager from './components/PostManager'
import PostLoader from './components/PostLoader'
import PostViewer from './components/PostViewer'

function App() {
  return (
    <BrowserRouter>
      <h1>GET com Fetch e Axios</h1>
      <div>
        <Link to="/fetch-posts">Fetch Posts</Link>
        <Link to="/axios-posts">Axios Posts</Link>
      </div>
      {/* 2- continuando requisições - POSTS e UPDATE/PUT */}
      <div>
        <Link to="posts">Gerenciar posts</Link>
      </div>
      {/* 3 - Tratameneto de erros */}
      <div>
        <Link to="/posts/1">Carregar Post 1</Link>
      </div>
      {/* 4 - Custom hook */}
      <div>
        <Link to="/posts/view/2">Carregar Post 2</Link>
      </div>
      <Routes>
      {/* 1 - GET com Fetch e Axios */}
        <Route path="/fetch-posts" element={<FetchPost />} />
        <Route path="/axios-posts" element={<FetchPost />} />
        {/* 2- continuando requisições - POSTS e UPDATE/PUT */}
        <Route path="/posts" element={<PostManager />} />
        {/* 3 - Tratameneto de erros */}
        <Route path="/posts/:postId" element={<PostLoader />}/>
        {/* 4 - Custom hook */}
        <Route path='/posts/view/:postId' element={<PostViewer />} />

      </Routes>
    </BrowserRouter>
  )
}

export default App
