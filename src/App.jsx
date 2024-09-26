import React from 'react'
import {BrowserRouter,Routes,Route,NavLink} from "react-router-dom";
import Home from './pages/Home';
import Success from './pages/Success';
import Error from './pages/Error';
import ProtectedRoutes from './Cpmponents/ProtectedRoutes';

function App() {
  return (
    <>
    <BrowserRouter basename='/Food-website/'>
    {/* <div>Appeed</div> 
     <NavLink to= "/" >Home</NavLink>
    <NavLink to= "/success" >Success</NavLink> */}

    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/success' element={<ProtectedRoutes element={<Success />}/>} />
      <Route path="/*" element={<Error />} />
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App