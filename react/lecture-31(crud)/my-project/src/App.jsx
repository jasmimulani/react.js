import './App.css'
import Home from './Pages/Home'
import About from'./Pages/About'
import Contact from'./Pages/Contact'
import { BrowserRouter ,Routes,Route } from 'react-router-dom'
import Add from'./Pages/Add'
import Error from './Pages/Error'
import EditUser from './Pages/EditUser'



function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}/>   
         <Route path="/about" element={<About/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/*" element={<Error/>}/>
      <Route path="add" element={<Add/>}/>
      <Route path="/EditUser" element={<EditUser/>}/>
      
    </Routes>
    </BrowserRouter> 

    </>
  )
}

export default App
