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
import { GoogleOAuthProvider } from '@react-oauth/google'

function App() {

    return (
        <>
            <GoogleOAuthProvider clientId='953184223073-db35vht1n0e9k9frc7doja35grum9a71.apps.googleusercontent.com'>
                <BrowserRouter>
                    <ThemeProvider>
                        <AllRoutes />
                    </ThemeProvider>
                </BrowserRouter>
            </GoogleOAuthProvider>
        </>
    )
}

export default App
