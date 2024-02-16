import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './components/Home/Home'
import Layout from './components/Layout/Layout'
import Swap from './components/Swap/Swap'
import Two from './components/Two'

function App() {
 

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout><Home/></Layout>}></Route>
        {/* <Route path='swap' element={<Swap/>}/> */}
        <Route path='swap' element={<Swap/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
