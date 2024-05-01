import React from "react";
import { useNavigate, useLocation } from "react-router-dom";

const PaymentPage = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const totalCost = queryParams.get('totalCost');

    const handlePayment = (e) => {
      e.preventDefault();
      // Add logic to handle payment here
      alert(`Payment successful! Total amount: ${totalCost}`);
      // Navigate to the payment successful page
      navigate('/user/paymentsuc');
    };

    return (
        <div className="container mx-auto mt-8">
            <h3 className="text-center text-2xl font-bold mb-4">Payment Page</h3>
            <div className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-md">
                <p>Total Cost: {totalCost}</p>
                <form onSubmit={handlePayment}>
                    <div className="mb-4">
                        <label htmlFor="cardNumber" className="block text-sm font-semibold text-gray-600">
                            Card Number
                        </label>
                        <input
                            type="text"
                            id="cardNumber"
                            name="cardNumber"
                            className="input"
                            placeholder="Enter your card number..."
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="expiryDate" className="block text-sm font-semibold text-gray-600">
                            Expiry Date
                        </label>
                        <input
                            type="text"
                            id="expiryDate"
                            name="expiryDate"
                            className="input"
                            placeholder="MM/YY"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="cvv" className="block text-sm font-semibold text-gray-600">
                            CVV
                        </label>
                        <input
                            type="text"
                            id="cvv"
                            name="cvv"
                            className="input"
                            placeholder="Enter CVV..."
                        />
                    </div>
                    <button type="submit" className="btn bg-black text-white px-4 py-2 rounded hover:bg-black">
                        Pay Now
                    </button>
                </form>
            </div>
        </div>
    );
};

export default PaymentPage;
