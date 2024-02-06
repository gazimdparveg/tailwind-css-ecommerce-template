import './App.css'
import Home from './Pagess/Home'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProduxtDetails from './Pagess/ProduxtDetails';

function App() {
  

  return (
    <>
    
        
      <BrowserRouter>
    <Routes>
    <Route path='/' element={<Home/>}> </Route>
    <Route  path="/Product"  element={<ProduxtDetails/>}> </Route>
    </Routes>
    </BrowserRouter> 
     
    </>
  )
}

export default App
