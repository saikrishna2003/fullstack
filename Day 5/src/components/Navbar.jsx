import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../assets/images/logo.gif';
import userPhoto from '../assets/images/logo.jpg';
import Popup from './Popup'; // Assuming Popup handles modal dialog

function Navbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [showProfileDialog, setShowProfileDialog] = useState(false);
  const navigate = useNavigate();
  const [openLogoutPopup, setOpenLogoutPopup] = useState(false);
  

  const handleLogout = () => {
    setOpenLogoutPopup(true);
  }

  const handleClosePopup = () => {
    setOpenLogoutPopup(false);
  }

  const handleLogoutConfirmation = () => {
    
    setOpenLogoutPopup(false);
    navigate("/");

  }
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleSignOut = () => {
    // Perform sign-out action
    console.log("User signed out");
    navigate("/");
  };

  const handleUserProfile = () => {
    // Show user profile dialog
    setShowProfileDialog(true);
  };

  return (
    <>
    <div className='bg-[#CCEEBC] h-20 w-full top-0 z-20 mx-auto flex items-center justify-between text-black sticky'>
      <div className='flex items-center'>
        <img src={logo} alt="Logo" className="w-20 h-10 cursor-pointer mr-4" />
        <p className='font-serif font-bold ml-4'>BIRTHDAY BASH</p>
      </div>
      <div className="flex items-center">
        <ul className='p-10 justify-between text-sm flex font-medium'>
          <li className='p-2 flex'><Link to="home">Home</Link></li> 
          <li className='p-2 flex'><Link to="aboutus">About Us</Link></li> 
          <li className='p-2 flex'><Link to="contactus">Contact Us</Link></li> 
          <li className='p-2 flex'><Link to="gallery">Gallery</Link></li> 
        </ul>
        <div className="relative">
          <button onClick={toggleDropdown} className="flex items-center p-2 rounded-md">
            <img src={userPhoto} alt="User" className="w-8 h-8 rounded-full mr-2" />
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 14a4 4 0 100-8 4 4 0 000 8zm0 1a5 5 0 100-10 5 5 0 000 10zm5-5a1 1 0 11-2 0 1 1 0 012 0z" clipRule="evenodd" />
            </svg>
          </button>
          {isDropdownOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg">
              <div className="py-1">
                <button onClick={handleUserProfile} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">User Profile</button>
                <button onClick={handleSignOut} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Sign out</button>
              </div>
            </div>
          )}
        </div>
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
