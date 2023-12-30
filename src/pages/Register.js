import React, { useState } from 'react';
import { account } from '../appwrite/config';
import { useNavigate } from 'react-router-dom';


function Register() {
  const Navigate = useNavigate()
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('')
  

  // You can add your form submission logic here

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name === "" || email === "" || password === "") {
      alert('please enter valid details')
    }
    else {
      register()
    }
  };

  const register = async () => {
    try {
      var x = await account.create('unique()', email, password, name)
      var session = await account.createEmailSession(email,password);
      var emaillink = await account.createVerification('https://newproject-tau-brown.vercel.app/Verify')
      alert('A verification link as been sent to this email address, click the link to verify your account.')
      // console.log(x)
      // Navigate('/Login')
    }
    catch (e) {
      if(e.type === 'user_already_exists'){
        alert('User already exists')
      }
    }
  }

  return (
    <div className="Register">
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label  className="form-label">Name</label>
          <input type="text" className="form-control" name='name' placeholder='Enter name...' value={name} onChange={(e) => setName(e.target.value)} required />
        </div>
        <div className="mb-3">
          <label className="form-label">Email</label>
          <input type="email" className="form-control" name='email' placeholder='Enter mail...' value={email}  onChange={(e) => setEmail(e.target.value)} required/>
        </div>
        <div className="mb-3">
          <label className="form-label">Password</label>
          <input type="password" className="form-control" name='password' placeholder='Enter password...' value={password} onChange={(e) => setPassword(e.target.value)} required />
        </div>
        <button type="submit" className="btn btn-primary">Register</button>
      </form>
    </div>
  );
}

export default Register;

