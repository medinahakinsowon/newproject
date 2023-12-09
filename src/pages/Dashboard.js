import React, { useState, useEffect } from 'react';
import { account } from '../appwrite/config';
import { useNavigate } from 'react-router-dom';


const Dashboard = () => {
  const Navigate = useNavigate();
  const [email, setEmail] = useState();
  const [name, setName] = useState();

  // const handleLogout = () => {
  //   // Implement your logout logic here
  //   logout()
  //   alert('Logout button clicked!');
  // };

  useEffect(()=>{
     isLogin();
  })

  const isLogin = async ()=>{
    try{
      var x = await account.get('current')
      setEmail(x.email);
      setName(x.name);
      console.log(x)
    }
   catch(e){
     Navigate('/Login')
   }
  }
   
  const logout = async () =>{
    try{
      var x = await account.deleteSession('current')
      Navigate('/Login')
    }
    catch(e){
      console.log(e)
    }
  }

  return (
    
    <div className="dashboard">
      {email && name ? <>
        <h1>Welcome, {name}</h1>
        <p>{email}</p>
      <button className="logout-button" onClick={logout}>
        Logout
      </button></>:<>
        <h1>Loading...</h1>
        </> }
    
    </div>
  );
};

export default Dashboard;

