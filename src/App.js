import './globals.css';
import './App.css';
import { BrowserRouter , Routes , Route } from 'react-router-dom';
import Home from './pages/Home';
import Register from './pages/Register';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';

import cors from 'cors';


function App() {
  
//   const express = require('express');
//   const app = express();
//   const corsOptions = {
//     origin: 'http://localhost:3000',
//     methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
//     credentials: true,
//     optionsSuccessStatus: 204,
//  };
 
//  app.use(cors(corsOptions));

  return (
  <main className='flex  h-screen'> 
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/Register' element={<Register/>}></Route>
        <Route path='/Login' element={<Login/>}></Route>
        <Route path='/Dashboard' element={<Dashboard/>}></Route>
      </Routes>
    </BrowserRouter>
  </main> 
  );
}

export default App;
