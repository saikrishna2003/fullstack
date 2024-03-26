import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import loginBackground from '../../assets/images/login2.jpeg'; // Import the background image

const ForgotPassword = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate('/birthdaybash/login')
   
  };

  const handleForgotPassword = () => {
    navigate("/birthdaybash/forgot-password");
  };

  const handleRegister = () => {
    navigate("/birthdaybash/register");
  };

  return (
    <div
      className="flex justify-center items-center h-screen"
      style={{ backgroundImage: `url(${loginBackground})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
      <div className="w-96 p-6 shadow-lg bg-white rounded-md">
        <h1 className="text-3xl block text-center font-semibold"><i className="fa-solid fa-user"></i> Forgot Password</h1>
        <hr className="mt-3" />
        <div className="mt-3">
          <div>
            <label htmlFor="username" className="block text-base mb-2">Username</label>
            <input type="text" id="username" className="border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600" placeholder="Enter Username..." />
          </div>
          <div>
            <label htmlFor="password" className="block text-base mb-2">Enter the new Password</label>
            <input type="text" id="username" className="border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600" placeholder="Enter Username..." />
          </div>
          <div>
            <label htmlFor="password" className="block text-base mb-2">Re-Enter the new Password</label>
            <input type="text" id="username" className="border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600" placeholder="Enter Username..." />
          </div>
        </div>
        <div className="mt-5">
          <button onClick={handleLogin} type="submit" className="border-2 border-indigo-700 bg-indigo-700 text-white py-1 w-full rounded-md hover:bg-transparent hover:text-indigo-700 font-semibold"><i className="fa-solid fa-right-to-bracket"></i>&nbsp;&nbsp;Login</button>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
