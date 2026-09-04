import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ProfileLayout from './layouts/ProfileLayout'
import Home from './pages/Home'
import Projects from './pages/Projects'
import ProjectPost from './pages/ProjectPost'
import Blog from './pages/Blog'
import NotFoundPage from './pages/404page'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ProfileLayout />}>
          <Route index element={<Home />} />
          <Route path="projects" element={<Projects />} />
          <Route path="projects/:slug" element={<ProjectPost />} />
          <Route path="blog" element={<Blog />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
