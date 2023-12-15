// Login.js

import React, { useState } from 'react';
import { account } from '../appwrite/config';
import { useNavigate } from 'react-router-dom'


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
    if (email === "" || password === "") {
      alert('enter valid details')
    }
    else {
      login()
    }
  };

  const login = async () => {
    try {
      const x = await account.createEmailSession(email, password)
      console.log(x)
      navigate('/Dashboard')
    }
    catch (e) {
      console.log(e)
    }
  }

  return (
    <div className='login'>
      <form onSubmit={handleLogin}>
        <div className="mb-3">
          <label className="form-label">Email address</label>
          <input type="email"
            className="form-control"
            placeholder='Enter email...'
            value={email}
            onChange={handleEmailChange}
          />
          <div className="form-text">We'll never share your email with anyone else.</div>
        </div>
        <div className="mb-3">
          <label className="form-label">Password</label>
          <input type="password"
            className="form-control"
            placeholder='Enter password...'
            value={password}
            onChange={handlePasswordChange}
          />
        </div>
        <button type="submit" className="btn btn-primary">Login</button>
        <p className='text-white fs-5'>Ooops, your account is not opening, please<a href='/Register'>Register</a></p>
      </form>
    </div>
  );
};

export default Login;

