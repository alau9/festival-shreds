import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';

import HomePage from './pages/homepage/homepage.component';

const AccessoriesPage = () => (
  <div>
    <h1>Accessories</h1>
  </div>
)

function App() {
  return (
    <div >
       <Routes>
         <Route exact path='/' element={<HomePage/>} />
         <Route exact path='/accessories' element={<AccessoriesPage/>} />

       </Routes>
    </div>
  );
}

export default App;
