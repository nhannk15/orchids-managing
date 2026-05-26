import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Header from './components/Header'
import LayoutDefault from './components/LayoutDefault'
import { ThemeProvider } from './context/ThemeContext'
import { BrowserRouter, useRoutes } from 'react-router-dom'
import AllRoutes from './components/AllRoutes'

function App() {

  return (
    <>
      <BrowserRouter>
        <ThemeProvider>
          <AllRoutes />
        </ThemeProvider>
      </BrowserRouter>
    </>
  )
}

export default App
