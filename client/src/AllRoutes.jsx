import React from 'react'

import {Route, Routes} from 'react-router-dom'


import Home from './Pages/Home/Home'

import Auth from './Pages/Auth/Auth'
import Questions from './Pages/Questions/Questions'
import AskQuestion from './Pages/AskQuestion/AskQuestion'
import DisplayQuestion from './Pages/Questions/DisplayQuestion'
import QuestionDetails from './Pages/Questions/QuestionDetails'
import Tags from './Pages/Tags/Tags'
import Users from './Pages/Users/Users'


function RoutesComponent ({slidein,handleslidein}) {
  return (
    <Routes>
        
          <Route path="/" element={<Home />} />
          <Route path="/Auth" element={<Auth />} />
          <Route path ='/Questions' element={<Questions/>} />
          <Route path ='AskQuestion'element={<AskQuestion/>}/>
          <Route path ='Questions/:id'element={<QuestionDetails/>}/>
          <Route path = '/Tags' element = {<Tags slidein={slidein} handleslidein={handleslidein}/>}/>
          <Route path = '/Users' element = {<Users slidein={slidein} handleslidein={handleslidein}/>}/>

          


          
        
        </Routes>
  )
}

export default RoutesComponent
