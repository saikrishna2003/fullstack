import React from 'react'
import PropTypes from 'prop-types';
import SideNavbar from '../../components/SideNavbar';
import { useNavigate } from 'react-router-dom';
 const AdminLayout = ({children}) => {
  
  return (
    <div className='h-screen flex'>
      <aside className='bg-black'>
      <SideNavbar/> 
      </aside>
        <main className=''>
            {children}
        </main>
    </div>
  )
}


AdminLayout.propTypes={
    children: PropTypes.node.isRequired
}
export default AdminLayout