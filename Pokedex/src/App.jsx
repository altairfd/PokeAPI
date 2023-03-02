import { BrowserRouter, Route, Routes } from 'react-router-dom'
import PokePrincipal from './pages/PokePrincipal'
import Regioes from './pages/Regioes'
import Tipos from './pages/Tipos'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Tipos />} />
          <Route path='/regioes' element={<Regioes />} />
          <Route path='/pokemon/:nome' element={<PokePrincipal />}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
