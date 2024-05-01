import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div className="policy p-5 lg:px-20 xl:pl-32"> {/* Adjusted padding on the left side */}
      <h2 className="policy_header text-3xl lg:text-4xl xl:text-5xl font-bold mt-8 mb-6">Privacy Policy</h2>
      <div className="mb-8">
        <h3 className="policy_caps_size text-lg font-semibold mb-2">COLLECTION OF PERSONALLY IDENTIFIABLE INFORMATION AND OTHER INFORMATION</h3>
        <p className="policy_letter_size text-lg">
          We value the trust you place in us. That's why we insist upon the highest standards for secure transactions and customer information privacy. Please read the following statement to learn about our information gathering and dissemination practices.
        </p>
        {/* Add more content here */}
      </div>
      <div className="mb-8">
        <h3 className="policy_caps_size text-lg font-semibold mb-2">COOKIES</h3>
        <p className="policy_letter_size text-lg">
          A "cookie" is a small piece of information stored by a web server on a web browser so it can be later read back from that browser. Cookies are useful for enabling the browser to remember information specific to a given user. We place both permanent and temporary cookies in your computer's hard drive. The cookies do not contain any of your personally identifiable information.
        </p>
        {/* Add more content here */}
      </div>
      <div className="mb-8">
        <h3 className="policy_caps_size text-lg font-semibold mb-2">SHARING OF PERSONAL INFORMATION</h3>
        <p className="policy_letter_size text-lg">
          We may share personal information with our other corporate entities and affiliates to help detect and prevent identity theft, fraud and other potentially illegal acts; correlate related or multiple accounts to prevent abuse of our services; and to facilitate joint or co-branded services that you request where such services are provided by more than one corporate entity. Those entities and affiliates may not market to you as a result of such sharing unless you explicitly opt-in.
        </p>
        {/* Add more content here */}
      </div>
      {/* Add more sections */}
    </div>
  )
}

export default PrivacyPolicy;
