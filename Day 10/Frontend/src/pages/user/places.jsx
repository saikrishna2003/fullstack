// Places.js
import React from 'react';
import { Link } from 'react-router-dom';
import LocationOnIcon from '@mui/icons-material/LocationOn';

const Places = () => {
  const data = [
    {
      id: 1,
      icon: <LocationOnIcon style={{ fontSize: 60 }} />,
      title: "Coimbatore",
      cover: "https://c0.wallpaperflare.com/preview/711/623/696/india-coimbatore-building-apartment.jpg",
      path: "/user/form"
    },
    {
      id: 2,
      icon: <LocationOnIcon style={{ fontSize: 60 }} />,
      title: "Chennai",
      cover: "https://c1.wallpaperflare.com/preview/470/764/917/street-city-bridge-chennai.jpg",
      path: "/user/form"
    },
    {
      id: 3,
      icon: <LocationOnIcon style={{ fontSize: 60 }} />,
      title: "Mumbai",
      cover: "https://c4.wallpaperflare.com/wallpaper/113/868/982/chhatrapati-shivaji-maharaj-terminus-mumbai-india-wallpaper-preview.jpg",
      path: "/user/form"
    },
    {
      id: 4,
      icon: <LocationOnIcon style={{ fontSize: 60 }} />,
      title: "Kochi",
      cover: "https://c1.wallpaperflare.com/preview/656/390/435/kochi-india-kerala-backwaters.jpg",
      path: "/user/form"
    },
    {
      id: 5,
      icon: <LocationOnIcon style={{ fontSize: 60 }} />,
      title: "Banglore",
      cover: "https://c0.wallpaperflare.com/preview/868/998/428/bengaluru-india-yeshwanathapura-new-railway-station-nightview.jpg",
      path: "/user/form"
    },
    {
      id: 6,
      icon: <LocationOnIcon style={{ fontSize: 60 }} />,
      title: "Delhi",
      cover: "https://c4.wallpaperflare.com/wallpaper/718/409/81/street-india-arch-parade-wallpaper-preview.jpg",
      path: "/user/form"
    }
  ];

  return (
    <div className="menu bg-white mt-10 mx-auto mb-9">
      <h1 className='font-bold text-5xl text-center mt-7 mb-6 font-serif '>Choose a Place</h1>
      <div className="container mx-auto">
        <div className="grid grid-cols-3 gap-7 ml-48 mr-48">
          {data.map((place, index) => (
            <Link to={place.path} key={index}>
              <div className="box bg-white border border-gray-200 p-6 relative z-10 transition duration-300 hover:bg-black hover:text-white">
                <div className="id flex justify-between items-center mb-4">
                  <span className="text-orange-500 text-3xl">{place.icon}</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">{place.title}</h3>
                <img src={place.cover} alt="cover" className="mt-4" style={{ maxWidth: '100%' }} />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Places;
