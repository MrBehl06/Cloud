import React from 'react'
import Main from './components/Main'
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { AppContext } from './context/contextApi'

import Dashboard from './components/Dashboard';

const App = () => {



  return (
   <AppContext>
    <BrowserRouter>
    <Routes>
      <Route path='/Cloud/' element={<Main/>} />
      <Route path='/dashboard' element={<Dashboard/>}/>
    </Routes>
    </BrowserRouter>
    </AppContext>
  )
}

export default App