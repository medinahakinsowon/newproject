import React, { useState } from 'react';
import { account } from '../appwrite/config';


function Register() {
 const [name, setName] = useState('');
 const [email, setEmail] = useState('');
 const [password, setPassword] = useState('')

 // You can add your form submission logic here

  const handleSubmit = (e) => {
    e.preventDefault();
    if(name===""||email===""||password===""){
      alert('please enter valid details')
    }
    else{
      register()
    }
  };

  const register = async ()=>{
   try{
    var x = await account.create('unique()',email,password,name)
    console.log(x)
   }
   catch(e){
    console.log(e)
   }
  }

  return (
    <div className="Register">
      
      <form onSubmit={handleSubmit}>
      <h2 className='register_text'>Note App Registration</h2>
        <label>
          Name:
          <input
            type="text"
            name="name"
            placeholder='Enter name...'
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </label>

        <label>
          Email:
          <input
            type="email"
            name="email"
            placeholder='Enter email...'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>

        <label>
          Password:
          <input
            type="password"
            name="password"
            placeholder='Enter password...'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </label>

        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default Register;

