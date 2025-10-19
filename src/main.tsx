import React from 'react'
import ReactDOM from 'react-dom/client'
import { HashRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import App from './App'
import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'
import Skills from './pages/Skills'
import Education from './pages/Education'
import Contact from './pages/Contact'
import { ThemeProvider } from './contexts/ThemeContext'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider>
      <HashRouter>
        <Routes>
          <Route path="/" element={<App />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="projects" element={<Projects />} />
            <Route path="skills" element={<Skills />} />
            <Route path="education" element={<Education />} />
            <Route path="contact" element={<Contact />} />
          </Route>
        </Routes>
      </HashRouter>
    </ThemeProvider>
  </React.StrictMode>,
)
