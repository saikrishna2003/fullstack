import React from 'react'
import PropTypes from 'prop-types';
import Navbar from '../../components/navbar.jsx'
import Footer from '../../components/footer.jsx'
 const UserLayout = ({children}) => {
  return (
      <div className='w-full'>
        <header className='w-full'>
        <Navbar/>
        </header>
        <main className=''>
            {children}
        </main>
        <Footer/>
    </div>
  )
}


UserLayout.propTypes={
    children: PropTypes.node.isRequired
}
export default UserLayout