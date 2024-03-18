import './App.css'
import Login from './pages/login/login.jsx'
import Signup from './pages/signup/signup.jsx'
import Home from './pages/home/home.jsx'
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/home' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />

      </Routes>

    </BrowserRouter>
  )
}
export default App

