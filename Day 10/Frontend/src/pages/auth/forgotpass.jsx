import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Logo from "../../assets/images/logo.png"

const ForgotPassword = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    navigate("/user/home");
  }

  return (
    <div className="w-screen h-screen flex bg-white">
      <div className="w-1/2 h-full">
        <img className="w-full h-full object-cover" src="https://img.freepik.com/free-photo/portrait-young-girls-party-with-balloons_23-2148905133.jpg?w=740&t=st=1710479523~exp=1710480123~hmac=ea5aa52fbc8e92a4238b8c9d475a91414717feba3084bfb6cfc5760ea9002f48" alt="Sample image" />
      </div>
      <div className="w-1/2 h-full flex flex-col justify-center items-center ">
        <div>
        <img src={Logo}></img>
        </div>
        <div>
        <h1 className="font-bold text-5xl  font-serif mr-52">Forgot Password</h1>
        <p className='mb-8 font-serif mt-1'>Set your new details...</p>
        </div>
        <div className="w-96">
          <div className="mt-3">
            <input  
              placeholder="Username" 
              className="border-b border-black outline-none focus:outline-none w-full px-2 py-1" 
              type='text' 
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="mt-3 pt-7">
            <input  
              placeholder="Password" 
              className="border-b border-black outline-none focus:outline-none w-full px-2 py-1" 
              type='password' 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="mt-3 pt-7">
            <input  
              placeholder=" Confirm Password" 
              className="border-b border-black outline-none focus:outline-none w-full px-2 py-1" 
              type='password' 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <p className='ml-24 mt-2'><a href="/" className="text-black">Already know your password ? Login In</a></p>
          <div className="mt-6  flex justify-center">
            <button onClick={handleLogin} className="text-white mt-3 w-44 bg-black rounded-full px-4 py-2  hover:bg-black hover:black font-semibold "><i className="fa-solid fa-right-to-bracket"></i>Login</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ForgotPassword;
