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
  const [started, setStarted] = React.useState(false)
  const [page, setPage] = React.useState('landing')
  return (
    <BrowserRouter>
      <Routes>
        {started
          ? <>
            <Route path='/questions' element={<Qs />}/>
          </>
          : page === 'landing'?
            <>
              <Route path='/' element={<Landing />}/>
            </>
            : <>
            
            </>
        }
      </Routes>
    </BrowserRouter>
  );
}

export default App;
