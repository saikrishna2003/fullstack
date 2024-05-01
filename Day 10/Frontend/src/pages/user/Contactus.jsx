import React from 'react';


const ContactUs = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col justify-center items-center">
 
      <h1 className="text-3xl font-bold mb-8 mt-16">Contact Us</h1> {/* Added mt-16 for top margin */}
      <div className="bg-white p-8 rounded-lg shadow-md w-96">
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">Name</label>
          <input type="text" id="name" className="w-full border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-indigo-500" placeholder="Your Name" />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">Email</label>
          <input type="email" id="email" className="w-full border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-indigo-500" placeholder="Your Email" />
        </div>
        <div className="mb-4">
          <label htmlFor="message" className="block text-gray-700 font-semibold mb-2">Message</label>
          <textarea id="message" rows="5" className="w-full border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-indigo-500" placeholder="Your Message"></textarea>
        </div>
        <button className="bg-black text-white py-2 px-4 rounded-md hover:bg-black focus:outline-none focus:bg-black">Send</button>
      </div>
    </div>
  );
}

export default ContactUs;