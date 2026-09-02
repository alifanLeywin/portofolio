import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ProfileLayout from './layouts/ProfileLayout'
import Home from './pages/Home'
import Projects from './pages/Projects'
import Blog from './pages/Blog'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ProfileLayout />}>
          <Route index element={<Home />} />
          <Route path="projects" element={<Projects />} />
          <Route path="blog" element={<Blog />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
