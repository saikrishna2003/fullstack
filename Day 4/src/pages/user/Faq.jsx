import React from 'react';
import Navbar from'../../components/Navbar'
import Footer from '../../components/Footer';
const Faq = () => {
  return (
    <div className="p-5">

      <h2 className="mt-20 text-3xl font-bold">Frequently Asked Questions</h2>
      
      <div className="mt-20">
        <p className="text-lg mb-5">Are you an event organizing company?</p>
        <p className="text-lg mb-10">We are an birthday bash organizer who list verified Artists which makes your search simpler for any birthday occasion. We are a one stop platform to connect you with the right kind of service provider.</p>
      </div>
      
      <div className="mt-40">
        <p className="text-lg mb-5 text-green-600 font-bold">SERVICE PRICE: Is this price fixed or will it vary?</p>
        <p className="text-lg mb-10">The price listed is for the standard package. Based on the customer needs, the effort may vary in terms of duration and scope of work. Accordingly, the artist will quote the price which may be different from the standard price listed.</p>
      </div>
      
      <div className="mt-40">
        <p className="text-lg mb-5 text-green-600 font-bold">SERVICE BOOKING: What is the booking process?</p>
        <p className="text-lg mb-10">Once you have submitted the form, our MomentousEndeavours.in Representative will schedule a call between you and an available vendor.Only after you are convinced, you can book the service by paying 15% of booking amount to MomentousEndeavours.in</p>
      </div>
      
      <div className="mt-40">
        <p className="text-lg mb-5 text-green-600 font-bold">SERVICE PRICE: Why are the prices different with different designs for the same service?</p>
        <p className="text-lg mb-10">The prices of the design services vary based on the quantity of the design. In certain activities like Balloon decoration, the scope of the work and material used may also be different.</p>
      </div>
      
      <div className="mt-40">
        <p className="text-lg mb-5">How to contact us</p>
        <p className="text-lg mb-10">We encourage you to contact us through an email, please send in your queries to birthdaybash@gmail.com</p>
      </div>

    </div>
  );
}

export default Faq;
