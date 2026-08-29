import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { Layout } from './components/Layout'
import { Blog } from './pages/Blog'
import { BlogPost } from './pages/BlogPost'
import { Home } from './pages/Home'
import { NotFound } from './pages/NotFound'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="blog" element={<Blog />} />
          <Route path="blog/:slug" element={<BlogPost />} />
          <Route path="writing" element={<Navigate to="/blog" replace />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
