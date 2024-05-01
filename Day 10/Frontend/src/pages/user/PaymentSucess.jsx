import React from "react";
import { Link } from "react-router-dom";
import payment from '../../assets/images/payment.gif';

const PaymentSuccessfulPage = () => {
    return (
        <div className="container mx-auto mt-8 flex justify-center items-center">
            <div className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-md text-center">
                <h3 className="text-3xl font-bold mb-4">Payment Successful!</h3>
                <img src={payment} alt="Payment Successful GIF" className="mx-auto mb-8" style={{ maxWidth: '300px' }} />
                <p className="mb-4">Your payment was successful. Thank you for your purchase!</p>
                <Link to="/user/home" className="btn bg-black text-white px-4 py-2 rounded hover:bg-black mt-4">Back to Home</Link>
            </div>
        </div>
    );
};

export default PaymentSuccessfulPage;
