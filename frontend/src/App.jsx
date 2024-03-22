import {BrowserRouter,Routes,Route} from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import AddNote from './pages/AddNote'
import UpdateNote from './pages/UpdateNote'
import DeletedNote from './pages/DeletedNote'

function App() {
 

  return (
<BrowserRouter>
<Routes>
  <Route path='/' element={<Home/>}/>
  <Route path='/addnote' element={<AddNote/>}/>
  <Route path='/updatenote' element={<UpdateNote/>}/>
  <Route path='/deletednote' element={<DeletedNote/>}/>
</Routes>
</BrowserRouter>
  )
}

export default App
