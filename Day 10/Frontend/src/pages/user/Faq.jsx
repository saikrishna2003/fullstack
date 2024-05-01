import React from 'react';

const FAQ = () => {
  return (
    <div className="faq p-5 lg:px-20 xl:pl-32"> {/* Adjusted padding on the left side */}
      <h2 className="faq_header text-3xl lg:text-4xl xl:text-5xl font-bold mt-8 mb-6">Frequently Asked Questions</h2>
      <div className="mb-8">
        <h3 className="faq_caps_size text-lg font-semibold mb-2">Are you an event organizing company?</h3>
        <p className="faq_letter_size text-lg">
          We are an birthday bash organizer who list verified Artists which makes your search simpler for any birthday occasion. We are a one stop platform to connect you with the right kind of service provider.
        </p>
        {/* Add more content here */}
      </div>
      <div className="mb-8">
        <h3 className="faq_caps_size text-lg font-semibold mb-2">SERVICE PRICE: Is this price fixed or will it vary?</h3>
        <p className="faq_letter_size text-lg">
          The price listed is for the standard package. Based on the customer needs, the effort may vary in terms of duration and scope of work. Accordingly, the artist will quote the price which may be different from the standard price listed.
        </p>
        {/* Add more content here */}
      </div>
      <div className="mb-8">
        <h3 className="faq_caps_size text-lg font-semibold mb-2">SERVICE BOOKING: What is the booking process?</h3>
        <p className="faq_letter_size text-lg">
          Once you have submitted the form, our MomentousEndeavours.in Representative will schedule a call between you and an available vendor.Only after you are convinced, you can book the service by paying 15% of booking amount to MomentousEndeavours.in
        </p>
        {/* Add more content here */}
      </div>
      {/* Add more sections */}
    </div>
  )
}

export default FAQ;
