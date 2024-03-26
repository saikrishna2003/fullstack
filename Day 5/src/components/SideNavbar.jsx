import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import DashboardIcon from '@mui/icons-material/Dashboard';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import LocationCityIcon from '@mui/icons-material/LocationCity';
import ContrastIcon from '@mui/icons-material/Contrast';
import LogoutIcon from '@mui/icons-material/Logout';
import { Link, useNavigate } from 'react-router-dom';
import Popup from './Popup';
import { useState } from 'react';
import Dashboard  from '../pages/admin/Dashboard';
import Cities from '../pages/admin/Cities';
import Themes from '../pages/admin/Themes';
const SideNavbar = () => {
    const [openLogoutPopup,setOpenLogoutPopup]=useState(false)
    const navigate=useNavigate();
    
    const handleLogout =()=>{
        setOpenLogoutPopup(true);
    }


    const handleLogoutConfirmation = () =>{
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
          <Menu>
              <MenuItem icon={<DashboardIcon />} component={<Link to="dashboard" />} onClick={<Dashboard/>}> Dashboard </MenuItem>
              <MenuItem icon={<AccountBoxIcon />} component={<Link to="dashboard" />} onClick={<Dashboard/>}> User Information </MenuItem>
              <MenuItem icon={<LocationCityIcon/>} component={<Link to="cities" />} onClick={<Cities/>}> Cities</MenuItem>
              <MenuItem icon={<ContrastIcon/>} component={<Link to="themes" />} onClick={<Themes/>}> Themes</MenuItem>
              
              <MenuItem icon={<LogoutIcon />} onClick={handleLogout}> Logout </MenuItem>
          </Menu>
      </Sidebar>
      <Popup title="Are you sure you want to logout!" 
      disagree="Cancel" 
      agree="Logout" open={openLogoutPopup}
      onClose={() => setOpenLogoutPopup(false)}
      onAgree={handleLogoutConfirmation} />
      </>
  )
}

export default SideNavbar