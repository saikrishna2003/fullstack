import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx';
import { Cursor, useTypewriter } from 'react-simple-typewriter';

import { data } from "../../components/data";
import Testimonials from '../../components/Testimonials';

function Home() {
  const [text] = useTypewriter({
    words: [' BIRTHDAY BASH!!!!'],
    loop: {},
    delay: 50, // Adjust delay for smoother typing
  });

  const slides = [
    {
      url: 'https://i.pinimg.com/originals/4b/c4/96/4bc4966effa54683f0ffeabbe5bb73a1.jpg',
    },
    {
      url: 'https://img.freepik.com/premium-photo/rabbit-child-happy_163305-217909.jpg?size=626&ext=jpg&ga=GA1.1.69025442.1710477098&semt=ais',
    },
    {
      url: 'https://img.freepik.com/premium-photo/first-birthday-baby_108930-3555.jpg?size=626&ext=jpg&ga=GA1.1.69025442.1710477098&semt=ais',
    },
    {
      url: 'https://img.freepik.com/free-photo/happy-multi-generation-family-surprising-senior-woman-with-party-her-birthday_637285-10326.jpg?w=996&t=st=1710693480~exp=1710694080~hmac=b11dbe29f24a480815e381a8d6c06bc999bb057647027a01843b5b9a409591c6',
    },
    {
      url: 'https://img.freepik.com/free-photo/children-celebrating-birthday_23-2148155321.jpg?w=996&t=st=1710693515~exp=1710694115~hmac=ea0409f082f94a2b16d5d4b6b5d672e2aeb2347e41125a8a57801ea590b6afd4',
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <div className=''>
      <div className='text-center font-bold mt-7 text-4xl font-sans '>WELCOME TO 
      <span className='text-orange-500'>
        {text}
        </span>
        <span className='text-orange-500'>
          <Cursor/>
        </span>
        </div>
      <div className='text-center font-semibold mt-3 text-extralight  '>YOUR'S TRULY BIRTHDAY PARTY ORGANIZER</div>

      <div className='max-w-[1150px] h-[680px] w-full m-auto py-16 px-4 relative group'>
        <div
          style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
          className='w-full h-full rounded-2xl bg-center bg-cover duration-500'
        ></div>
        {/* Left Arrow */}
        <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
          <BsChevronCompactLeft onClick={prevSlide} size={30} />
        </div>
        {/* Right Arrow */}
        <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
          <BsChevronCompactRight onClick={nextSlide} size={30} />
        </div>
        <div className='flex top-4 justify-center py-2'>
          {slides.map((slide, slideIndex) => (
            <div
              key={slideIndex}
              onClick={() => goToSlide(slideIndex)}
              className='text-2xl cursor-pointer'
            >
              <RxDotFilled />
            </div>
          ))}
        </div>
      </div>

      <div className="menu bg-gray-100 mt-10 mx-auto">
        <div className="container mx-auto">
          <div className="grid grid-cols-3 gap-3">
            {data.map((item, index) => (
              <Link to={item.url} key={index}>
                <div className="box bg-white border border-gray-200 p-6 relative z-10 transition duration-300 hover:bg-black hover:text-white">
                  <div className="id flex justify-between items-center mb-4">
                    <span className="text-orange-500 text-3xl">{item.icon}</span>
                    <h1 className="text-white text-3xl">{item.id}</h1>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.desc}</p>
                  <img src={item.cover} alt="cover" className="mt-4" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
      <Testimonials/>
    </div>
  );
}

export default Home;
