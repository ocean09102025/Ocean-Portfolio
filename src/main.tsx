import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import App from './App'
import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'
import Skills from './pages/Skills'
import Education from './pages/Education'
import Contact from './pages/Contact'
import { ThemeProvider } from './contexts/ThemeContext'

const router = createBrowserRouter([
  { path: '/', element: <App />, children: [
    { index: true, element: <Home /> },
    { path: 'about', element: <About /> },
    { path: 'projects', element: <Projects /> },
    { path: 'skills', element: <Skills /> },
    { path: 'education', element: <Education /> },
    { path: 'contact', element: <Contact /> },
  ]},
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>,
)
