import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import DashboardIcon from '@mui/icons-material/Dashboard';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import LocationCityIcon from '@mui/icons-material/LocationCity';
import ContrastIcon from '@mui/icons-material/Contrast';
import LogoutIcon from '@mui/icons-material/Logout';
import { Link, useNavigate } from 'react-router-dom';
import Popup from './Popup';
import { useState } from 'react';
import logo from '../assets/images/cake.gif'; // Import your logo image

const SideNavbar = () => {
    const [openLogoutPopup, setOpenLogoutPopup] = useState(false);
    const navigate = useNavigate();
    
    const handleLogout = () => {
        setOpenLogoutPopup(true);
    }

    const handleLogoutConfirmation = () => {
        setOpenLogoutPopup(false);
        navigate("/");
    }

    return (  
        <>
            <Sidebar rootStyles={{
                "& .ps-sidebar-container": {
                    backgroundColor: '#000 !important'
                },

                "& .ps-menuitem-root": {
                    color: 'white'
                },

                "& .ps-menuitem-root:hover": {
                    backgroundColor: 'white !important',
                    color: 'black'
                }
            }}>
                <div className='font-serif italic font-semibold' style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px', marginRight: '40px' }}>
                    <img className='mt-2' src={logo} alt="Logo" style={{ width: '35%', height: 'auto' }} /> 
                    <span style={{ color: 'white', marginLeft: '10px' }}>Birthday Bash</span>
                </div>
                <Menu>
                    <MenuItem icon={<DashboardIcon />} component={<Link to="dashboard" />}> Dashboard </MenuItem>
                    <MenuItem icon={<AccountBoxIcon />} component={<Link to="user-info" />}> User Information </MenuItem>
                    <MenuItem icon={<LocationCityIcon/>} component={<Link to="cities" />}> Cities</MenuItem>
                    <MenuItem icon={<ContrastIcon />} component={<Link to="themes" />}> Themes</MenuItem>
                    <MenuItem icon={<LogoutIcon />} onClick={handleLogout}> Logout </MenuItem>
                </Menu>
            </Sidebar>
            <Popup title="Are you sure you want to logout!" 
                disagree="Cancel" 
                agree="Logout" 
                open={openLogoutPopup}
                onClose={() => setOpenLogoutPopup(false)}
                onAgree={handleLogoutConfirmation} 
            />
        </>
    )
}

export default SideNavbar;
