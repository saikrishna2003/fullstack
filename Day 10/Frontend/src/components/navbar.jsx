import React, { useState } from 'react';
import Logo from '../assets/images/cake.gif';
import Popup from './Popup';
import { useNavigate } from 'react-router-dom';

function Navbar() {
  const [openLogoutPopup, setOpenLogoutPopup] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    setOpenLogoutPopup(true);
  }

  const handleClosePopup = () => {
    setOpenLogoutPopup(false);
  }

  const handleLogoutConfirmation = () => {
    
    setOpenLogoutPopup(false);
    localStorage.clear();
    navigate("/");

  }

  return (
    <>
      <div className='bg-black h-20 w-full top-0 z-20 mx-auto flex items-center justify-between text-white sticky shadow-lg'>
        <div className='logo pl-5 h-22 w-16 flex items-center'>
          <img src={Logo} alt="Cake Logo" className="mr-2" />
          <p className='font-serif italic font-semibold'>Birthday</p>
          <p className='ml-1 font-serif italic font-semibold'>Bash</p> 
        </div>
        <div>
          <ul className='p-10 justify-between text-s3 flex font-medium'>
            <li className='p-2 flex'><a href="home">Home</a></li>
            <li className='p-2 flex'><a href="about">About Us</a></li>
            <li className='p-2 flex'><a href="myorder">My Orders</a></li>
            <li className='p-2 flex'><a href="gallery">Gallery</a></li>
            <li className='p-2 flex'><a href="contactus">Contact Us</a></li>
            <li className='p-2 flex'><button onClick={handleLogout}>Logout</button></li> 
          </ul>
        </div>
      </div>
      <Popup 
        title="Are you sure you want to logout!" 
        disagree="Cancel" 
        agree="Logout" 
        open={openLogoutPopup} 
        onClose={handleClosePopup} 
        onAgree={handleLogoutConfirmation} 
      />
    </>
  );
}

export default Navbar;
