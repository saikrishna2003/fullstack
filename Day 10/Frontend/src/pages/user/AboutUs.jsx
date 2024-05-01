import React from 'react';



function AboutUs() {
  return (
    <div className="bg-gray-100 min-h-screen py-12">
 
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-gray-800 mb-16">ABOUT US</h1>
        <div className="flex flex-col md:flex-row items-center justify-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <img src={"https://images.pexels.com/photos/2399097/pexels-photo-2399097.jpeg?auto=compress&cs=tinysrgb&w=600"} alt="Event" className="w-full rounded-lg shadow-md mb-4 hover:scale-105 transition duration-300" />
            <img src={"https://media.istockphoto.com/id/1643692455/photo/cheerful-indian-asian-generational-family-celebrate-indoor-birthday-party.jpg?b=1&s=612x612&w=0&k=20&c=a-Cj-dYRCKc3EtQaDMxqqne3gjSkxEZmu4xya1-z_AU="} alt="Event" className="w-full rounded-lg shadow-md mb-4 hover:scale-105 transition duration-300" />
            <img src={'https://images.pexels.com/photos/433527/pexels-photo-433527.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'} alt="Event" className="w-full rounded-lg shadow-md hover:scale-105 transition duration-300" />
          </div>
          <div className="md:w-1/2 md:ml-8">
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              We are passionate about creating unforgettable birthday experiences. Our team is dedicated to crafting personalized celebrations tailored to your unique preferences.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              At Birthday Bliss, we believe every birthday is special and deserves to be celebrated in style. Whether you're planning a small family gathering or a grand event, we're here to turn your dreams into reality.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              Our experienced team of event planners, decorators, and entertainers will work closely with you to design a custom celebration that reflects your personality and exceeds your expectations.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              From selecting the perfect venue to coordinating entertainment and décor, we'll handle every detail so you can relax and enjoy the party. Let us take the stress out of planning and create a birthday experience you'll cherish forever.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              With our commitment to excellence and attention to detail, we ensure that every birthday celebration is a seamless and memorable experience for you and your loved ones.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Contact us today to start planning your next birthday bash!
            </p>
    
          </div>
        </div>
      </div>
     
    </div>
  );
}

export default AboutUs;