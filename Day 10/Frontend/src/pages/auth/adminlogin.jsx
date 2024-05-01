import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Logo from '../../assets/images/logo.png'

const AdminLogin = () => {
  const navigate = useNavigate(); // Initializing navigate function from useNavigate hook

  // State to track admin authentication status
  const [authenticated, setAuthenticated] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  // Function to handle admin login
  const handleAdminLogin = () => {
    // Hardcoded admin username and password
    const validUsername = 'admin';
    const validPassword = 'password';

    if (username === validUsername && password === validPassword) {
      setAuthenticated(true);
      navigate("/admin/dashboard"); // Navigate to the admin dashboard upon successful authentication
    } else {
      alert('Invalid username or password. Please try again.');
    }
  };

  // Function to navigate to the user login page
  const goToUserLogin = () => {
    navigate("/");
  };

  if (authenticated) {
    return (
      <div className="w-screen h-screen flex bg-white">
        <p>Admin is already authenticated. You can render your admin dashboard content here.</p>
      </div>
    );
  }

  // If admin is not authenticated, render admin login form
  return (
    <div className="w-screen h-screen flex bg-white">
      <div className="w-1/2 h-full">
        <img className="w-full h-full object-cover" src="https://images.pexels.com/photos/8014699/pexels-photo-8014699.jpeg" alt="Admin Side Image" />
      </div>
      <div className="w-1/2 h-full flex flex-col  items-center">
        <img src={Logo} alt="Admin Logo" className="mt-9 " />
        <div className="font-serif text-black  ml-16 justify-center items-center  ">
          <h1 className="font-bold text-5xl mr-96 ">ADMIN LOGIN</h1>
          <p className="font-medium mb-9">Login to access the admin dashboard...</p>
        </div>
        <div className="flex flex-col justify-around items-center text-black padding">
          <input  
            placeholder="Username" 
            className="mt-9 pr-28 pb-5 bg-transparent border-b border-black outline-none focus:outline-none" 
            type='text' 
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input  
            placeholder="Password" 
            className="bg-transparent border-b border-black outline-none focus:outline-none mt-10 pr-28 pb-5" 
            type='password' 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {/* <p className="pl-32 pt-3"><a href="/admin/forgotpass" className="text-black">Forgot Your password ?</a></p> */}
          <button onClick={handleAdminLogin} className="text-white mt-5 w-44 bg-black rounded-full px-4 py-2 ">Sign In</button>
          <p className="pl-22 pt-3"><button onClick={goToUserLogin} className="text-black">User Login</button></p>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
