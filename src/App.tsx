import { useState } from 'react'
import { MainBar } from './components/MainBar'
import "./index.css"

function App() {

  return (
    <MainBar
      menuOptions={["Loja", "Biblioteca", "Comunidade", "Ajuda"]}
    />
  )
}

export default App
