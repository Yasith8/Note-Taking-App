import {BrowserRouter,Routes,Route} from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import AddNote from './pages/AddNote'
import UpdateNote from './pages/UpdateNote'

function App() {
 

  return (
<BrowserRouter>
<Routes>
  <Route path='/' element={<Home/>}/>
  <Route path='/addnote' element={<AddNote/>}/>
  <Route path='/addnote' element={<UpdateNote/>}/>
</Routes>
</BrowserRouter>
  )
}

export default App
