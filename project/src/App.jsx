import React from 'react';
import Qs from './Qs'
import Landing from './Landing'
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom'
import './App.css'

function App () {
  return (
    <BrowserRouter>
      <Routes>
          <Route path='/questions' element={<Qs />}/>
          <Route path='/' element={<Landing />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
