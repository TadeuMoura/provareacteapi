import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route} from '../node_modules/react-router-dom'
import Home from './pages/home'
 


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path = '/' element={<Home/>} />
    </Routes>
    </BrowserRouter>
  </React.StrictMode>
);


