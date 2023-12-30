

import { BrowserRouter , Routes , Route } from 'react-router-dom';
import Home from './pages/Home';
import Register from './pages/Register';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import UpdateNote from './pages/UpdateNote';
import Verify from './pages/Verify';


function App() {
  
  return (
  <main className='flex  h-screen'> 
    <BrowserRouter>
      <Routes>
        <Route path='/Verify' element={<Verify/>}></Route>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/Register' element={<Register/>}></Route>
        <Route path='/Login' element={<Login/>}></Route>
        <Route path='/Dashboard' element={<Dashboard/>}></Route>
        <Route path="/updatenote" element={<UpdateNote />}></Route>  
      </Routes>
    </BrowserRouter>
  </main> 
  );
}

export default App;
