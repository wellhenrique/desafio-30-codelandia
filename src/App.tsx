import { useState } from 'react'
import { ImagePresentation } from './components/ImagePresentation/ImagePresentation'
import { MainBar } from './components/MainBar'
import "./index.css"

function App() {

  return (
    <>
      <MainBar
        menuOptions={["Loja", "Biblioteca", "Comunidade", "Ajuda"]}
      />

      <ImagePresentation />
    </>
  )
}

export default App
