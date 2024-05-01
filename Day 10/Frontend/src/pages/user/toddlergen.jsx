import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from React Router
import BoyIcon from '@mui/icons-material/Boy';
import GirlIcon from '@mui/icons-material/Girl';

const toddlergen = () => {
  const data = [
    {
      id: 1,
      icon: <BoyIcon style={{ fontSize: 60 }} />, // Adjust the font size here
      title: "BOY",
      desc: "Birthday party for Boy's",
      cover: "https://i0.wp.com/mlovesm.com/wp-content/uploads/2018/10/toddler-boy-fall-outfit.jpg?w=1280&ssl=1",
      link: "/user/places" // Add a link for each item
    },
    {
      id: 2,
      icon: <GirlIcon style={{ fontSize: 60 }} />,
      title: "GIRL",
      desc: "Birthday party for Girl's",
      cover: "https://images.pexels.com/photos/3662874/pexels-photo-3662874.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      link: "/user/places" // Add a link for each item
    }
    // Add more data items as needed
  ];

  return (
    <div className="menu bg-white mt-10 mx-auto">
      <h1 className='font-bold text-5xl ml-96 mt-7 mb-6 font-serif'>Choose the Gender of the child</h1>
      <div className="container mx-auto">
        <div className="grid grid-cols-3 gap-7 ml-96">
          {data.map((item, index) => (
            <Link to={item.link} key={index}> {/* Wrap each container with Link */}
              <div className="box bg-white border border-gray-200 p-6 relative z-10 transition duration-300 hover:bg-black hover:text-white">
                <div className="id flex justify-between items-center mb-4">
                  <span className="text-orange-500 text-3xl">{item.icon}</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
                <img src={item.cover} alt="cover" className="mt-4" style={{ maxWidth: '100%' }} />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default toddlergen;
