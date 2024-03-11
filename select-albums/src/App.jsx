import { useContext } from 'react'
import SelectAlbums from './components/SelectAlbum'
import Galeria from './components/Galeria'
import './App.css'
import { IndiceContext } from './components/IndiceProvider'
import Header from './components/Header'

function App() {
  const {indice} = useContext(IndiceContext)
  console.log(indice)

  return (
    <>
      <div className='container'>
        <Header/>
        <SelectAlbums/>
        <Galeria/>
      </div>
    </>
  )
}

export default App
