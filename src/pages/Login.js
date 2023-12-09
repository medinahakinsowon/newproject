// Login.js

import React, { useState } from 'react';
import { account } from '../appwrite/config';
import {useNavigate} from 'react-router-dom'


const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    if(email===""||password===""){
      alert('enter valid details')
    }
    else{
      login()
    }
  };

  const login = async() =>{
    try{
      const x = await account.createEmailSession(email,password)
      navigate('/Dashboard')
    }
    catch(e){
      console.log(e)
    }
  }

  return (
    <div className="login-container">
      <div className="login-form">
        <h2 className='login_text'>Welcome, Login...</h2>
        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            placeholder="Enter your email..."
            value={email}
            onChange={handleEmailChange}
          />
        </div>
        <div className="form-group">
          <label>Password:</label>
          <input
            type="password"
            placeholder="Enter your password..."
            value={password}
            onChange={handlePasswordChange}
          />
        </div>
        <button onClick={handleLogin}>Login</button>
      </div>
    </div>
  );
};

export default Login;

