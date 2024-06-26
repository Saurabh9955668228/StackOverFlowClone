import React from 'react'

import {Route, Routes} from 'react-router-dom'

import Home from './Pages/Home/Home'

import Auth from './Pages/Auth/Auth'
import Questions from './Pages/Questions/Questions'
import AskQuestion from './components/HomeMainbar/AskQuestion/AskQuestion'
import DisplayQuestion from './Pages/Questions/DisplayQuestion'


const AllRoutes = () => {
  return (
    <Routes>
        
          <Route path="/" element={<Home />} />
          <Route path="/Auth" element={<Auth />} />
          <Route path ='/Questions' element={<Questions/>} />
          <Route path ='AskQuestion'element={<AskQuestion/>}/>
          <Route path ='Questions/:id'element={<DisplayQuestion/>}/>


          
        
        </Routes>
  )
}

export default AllRoutes
