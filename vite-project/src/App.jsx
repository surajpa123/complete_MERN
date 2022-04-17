import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import Home from './Components/Home'

import {Routes,Route} from "react-router-dom"
import {Login} from './Components/Login'
import Admin_page from './Components/Admin_page'
import Update from './Components/Update'
import Add_Teachers from "./Components/Add_Teachers"
import Description from './Components/Description'


function App() {  
  return (
    <div className="App">
      <Routes>
        <Route path='/admin/login' element={<Login/>}></Route>
        <Route path='/add/teacher' element={<Add_Teachers/>}></Route>
        <Route path='/update/:id' element={<Update/>}></Route>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/adminpage' element={<Admin_page/>}></Route>
        <Route path='/decription/:id' element={<Description/>}></Route>
      </Routes>
 
    </div>
  )
}

export default App
