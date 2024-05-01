import React from 'react'
import PropTypes from 'prop-types';
import SideNavbar from '../../components/SideNavbar';
 const AdminLayout = ({children}) => {
  return (
    <div className='h-screen flex'>
      <aside className='bg-black font-serif italic font-semibold rounded-t-full'>
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