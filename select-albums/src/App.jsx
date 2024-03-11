import { useState } from 'react'
import SelectAlbums from './components/SelectAlbum'
import Galeria from './components/Galeria'
import './App.css'

function App() {
  const [indice, setIndice] = useState(1)

  return (
    <>
      <SelectAlbums/>
      <Galeria/>
    </>
  )
}

export default App
