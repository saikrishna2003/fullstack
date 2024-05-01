import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Register = () => {
  const navigate = useNavigate(); 

  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleRegistration = () => {
    if (!email || !username || !mobileNumber || !password || !confirmPassword) {
      setErrorMessage('Please fill in all fields.');
      return;
    }

    if (password !== confirmPassword) {
      setErrorMessage('Passwords do not match.');
      return;
    }

    axios.post("http://localhost:8181/bdayparty/api/v1/authentication/register", {
      "name": username,
      "email": email,
      "password": password
    })
    .then((response) => {
      console.log(response.data);
      navigate("/login");
    })
    .catch((error) => {
      console.log(error);
    });
  };

  return (
    <div className="w-screen h-screen flex bg-white">
      <div className="w-35% h-full">
        <img className="w-full h-full bg-contain" src='https://img.freepik.com/free-photo/group-screaming-friends-celebrating-birthday_23-2147720368.jpg?size=626&ext=jpg&ga=GA1.1.69025442.1710477098&semt=ais' alt="Sample image" />
      </div>
      <div className="w-1/2 h-full ">
        <div className="font-serif text-black mt-5 ml-16">
          <h1 className="font-bold text-5xl">Register</h1>
          <p className="font-medium">Register to do your bookings seamlessly...</p>
        </div>
        <div className="flex flex-col h-1/3 justify-around items-center text-black padding ">
          <div className="mt-37"></div>
          <input 
            placeholder="Email" 
            className="pr- 36 mt-9 pr-28 pb-5 bg-transparent border-b border-black outline-none focus:outline-none " 
            type='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <div className="mt-37"></div>
          <input 
            placeholder="Username" 
            className="pr- 36 mt-9 pr-28 pb-5 bg-transparent border-b border-black outline-none focus:outline-none " 
            type='text'
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <div className="mt-37"></div>
          <input 
            placeholder="Mobile number" 
            className="pr- 36 mt-9 pr-28 pb-5 bg-transparent border-b border-black outline-none focus:outline-none " 
            type='number'
            value={mobileNumber}
            onChange={(e) => setMobileNumber(e.target.value)}
          />
          <input 
            placeholder="Password" 
            className="bg-transparent border-b border-black outline-none focus:outline-none mt-10 pr-28 pb-5  " 
            type='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <input 
            placeholder="Confirm Password" 
            className="bg-transparent border-b border-black outline-none focus:outline-none mt-10 pr-28 pb-5  " 
            type='password'
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          {errorMessage && <p className="text-red-500">{errorMessage}</p>}
          <p className="pl-32 pt-3">
            <a href="/" className="text-black">Already have an account ?</a>
          </p>
          <button onClick={handleRegistration} className=" text-white mt-5 w-44 bg-black rounded-full px-4 py-2" disabled={!email || !username || !mobileNumber || !password || !confirmPassword}>
            Register
          </button>
        </div>
      </div>
    </div>
  );
};

export default Register;
