import React, { useState } from "react";
import DatePicker from "react-datepicker";
import { useNavigate } from "react-router-dom";
import "react-datepicker/dist/react-datepicker.css";
import OrderBackground from "../../assets/images/orders.jpg"
import useRazorpay from "react-razorpay";
import axios from 'axios'
import BASE_URL from '../../Config'
const Form = () => {
    const nav = useNavigate();

    const [formData, setFormData] = useState({
        studName: '',
        emailId: '',
        dob: null,
        gender: 'select',
        phoneNumber: '',
        city: 'select',
        addon: 'select',
        addonCost: 0,
        theme: 'select',
        themeCost: 0,
        textarea: '',
        formErrors: {}
    });

    const handleFormValidation = () => {
        
        const { studName, emailId, dob, gender, phoneNumber, city, textarea, theme, addon } = formData;

        let formErrors = {};
        let formIsValid = true;
       


        if (!studName) {
            formIsValid = false;
            formErrors["studNameErr"] = "Name is required.";
        }

        if (!emailId) {
            formIsValid = false;
            formErrors["emailIdErr"] = "Email id is required.";
        } else if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(emailId))) {
            formIsValid = false;
            formErrors["emailIdErr"] = "Invalid email id.";
        }

        if (!dob) {
            formIsValid = false;
            formErrors["dobErr"] = "Date of birth is required.";
        }

        if (gender === '' || gender === "select") {
            formIsValid = false;
            formErrors["genderErr"] = "Select gender.";
        }

        if (!phoneNumber) {
            formIsValid = false;
            formErrors["phoneNumberErr"] = "Phone number is required.";
        }

        if (city === '' || city === "select") {
            formIsValid = false;
            formErrors["cityErr"] = "Select city.";
        }

        if (addon === '' || addon === "select") {
            formIsValid = false;
            formErrors["addonErr"] = "Select an addon.";
        }

        if (!textarea) {
            formIsValid = false;
            formErrors["textareaErr"] = "Writing something here...";
        }

        if (theme === '' || theme === "select") {
            formIsValid = false;
            formErrors["themeErr"] = "Select a theme.";
        }

        setFormData({ ...formData, formErrors });
        return formIsValid;
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        if (name === "addon") {
            setFormData({ ...formData, [name]: value, addonCost: parseInt(value.split('-')[1]) || 0 });
        } else if (name === "theme") {
            setFormData({ ...formData, [name]: value, themeCost: parseInt(value.split('-')[1]) || 0 });
        } else {
            setFormData({ ...formData, [name]: value });
        }
    }

    const handleDateChange = (date) => {
        setFormData({ ...formData, dob: date });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (handleFormValidation()) {
            
            const url = `${BASE_URL}/order`;
            const token = localStorage.getItem('token')
            const headers = {
                'Authorization' : `Bearer ${token}`
            }
            console.log(token,url,headers);
            axios.post("http://localhost:8181/bdayparty/api/v1/order" ,
            {
                "orderTheme": formData.theme,
                "ordergender": formData.gender,
                "orderusername": formData.studName,
                "orderemail": formData.emailId,
                "ordermobileno": formData.phoneNumber,
                "orderAddon": formData.addon, 
                "orderaddress": formData.city

            }
        ,{headers})
            .then((res)=>{
                console.log(res.data);
                handlePayment(totalCost)
            })
            .catch((error)=>{
                console.log(error);
            })
            
            // Pass totalCost as URL parameter
            // nav(`/user/payment?totalCost=${formData.addonCost + formData.themeCost}`);
            // Reset the form
            setFormData({
                ...formData,
                studName: '',
                emailId: '',
                dob: null,
                gender: 'select',
                phoneNumber: '',
                city: 'select',
                addon: 'select',
                addonCost: 0,
                theme: 'select',
                themeCost: 0,
                textarea: '',
                formErrors: {}
            });
        }
    }

    const { studNameErr, emailIdErr, genderErr, phoneNumberErr, cityErr, textareaErr, addonErr, themeErr, dobErr } = formData.formErrors;
    const { addonCost, themeCost } = formData;
    const totalCost = addonCost + themeCost;

 
  const [Razorpay] = useRazorpay();

  const handlePayment = (amount) => {
    const options = {
        key: "rzp_test_7CP7Bn1wx5RNKG",
        amount: amount*100,
        currency: "INR",
        name: "Acme Corp",
        description: "Test Transaction",
        image: "https://example.com/your_logo", 
        handler: (res) => {
            //axios
          console.log(res);
        },
        prefill: {
          name: "Piyush Garg",
          email: "youremail@example.com",
          contact: "9999999999",
        },
        notes: {
          address: "Razorpay Corporate Office",
        },
        theme: {
          color: "#3399cc",
        },
      };
    const rzpay = new Razorpay(options);
    rzpay.open();
  };


  return (
    <div className="flex">
        {/* Left Image */}
        <div className="w-1/2 h-screen bg-cover bg-center" style={{ backgroundImage: `url(${OrderBackground})` }}></div>
        {/* Right Side Form */}
        <div className="w-1/2 bg-white p-8 rounded-lg shadow-md">
            <div className="ultra">
            <h3 className="text-center text-2xl font-bold mb-4">Your Order</h3></div>
            <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-2 place-content-center place-items-center">
                <div className="col-span-1 space-y-12">
                <div className="mb-4">
                    <label htmlFor="studName" className="block text-sm font-semibold text-gray-600">Name</label>
                    <input type="text" name="studName"
                        value={formData.studName}
                        onChange={handleChange}
                        placeholder="Your name.."
                        className={`input ${studNameErr ? 'border-red-500' : ''}`} />
                    {studNameErr &&
                        <div className="text-red-500 text-sm mt-1">{studNameErr}</div>
                    }
                </div>
                {/* Other form fields */}
                {/* Email */}
                <div className="mb-4">
                    <label htmlFor="emailId" className="block text-sm font-semibold text-gray-600">Email</label>
                    <input type="text" name="emailId"
                        value={formData.emailId}
                        onChange={handleChange}
                        placeholder="Your email id.."
                        className={`input ${emailIdErr ? 'border-red-500' : ''}`} />
                    {emailIdErr &&
                        <div className="text-red-500 text-sm mt-1">{emailIdErr}</div>
                    }
                </div>
                {/* Date of Birth */}
                <div className="mb-4">
                    <label htmlFor="dob" className="block text-sm font-semibold text-gray-600">Date of Birth</label>
                    <DatePicker
                        selected={formData.dob}
                        onChange={handleDateChange}
                        dateFormat="dd/MM/yyyy"
                        placeholderText="DD/MM/YYYY.."
                        className={`input ${dobErr ? 'border-red-500' : ''}`}
                    />
                    {dobErr &&
                        <div className="text-red-500 text-sm mt-1">{dobErr}</div>
                    }
                </div>
                {/* Gender */}
                <div className="mb-4">
                    <label htmlFor="gender" className="block text-sm font-semibold text-gray-600">Gender</label>
                    <select name="gender"
                        value={formData.gender}
                        onChange={handleChange}
                        className={`input ${genderErr ? 'border-red-500' : ''}`}>
                        <option value="select">--Select--</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="other">Other</option>
                    </select>
                    {genderErr &&
                        <div className="text-red-500 text-sm mt-1">{genderErr}</div>
                    }
                </div>
                {/* Phone Number */}
                <div className="mb-4">
                    <label htmlFor="phoneNumber" className="block text-sm font-semibold text-gray-600">Phone Number</label>
                    <input type="text" name="phoneNumber"
                        value={formData.phoneNumber}
                        onChange={handleChange}
                        placeholder="Your phone number.."
                        className={`input ${phoneNumberErr ? 'border-red-500' : ''}`} />
                    {phoneNumberErr &&
                        <div className="text-red-500 text-sm mt-1">{phoneNumberErr}</div>
                    }
                </div>
                </div>
                {/* City */}


                <div className="col-span-1 space-y-12">
                <div className="mb-4">
                    <label htmlFor="city" className="block text-sm font-semibold text-gray-600">City</label>
                    <select name="city"
                        value={formData.city}
                        onChange={handleChange}
                        className={`input ${cityErr ? 'border-red-500' : ''}`}>
                        <option value="select">--Select--</option>
                        <option value="Pune">Pune</option>
                        <option value="Mumbai">Mumbai</option>
                        <option value="Hyderabad">Hyderabad</option>
                    </select>
                    {cityErr &&
                        <div className="text-red-500 text-sm mt-1">{cityErr}</div>
                    }
                </div>
                {/* AddOn's */}
                <div className="mb-4">
                    <label htmlFor="addon" className="block text-sm font-semibold text-gray-600">AddOn's</label>
                    <select name="addon"
                        value={formData.addon}
                        onChange={handleChange}
                        className={`input ${addonErr ? 'border-red-500' : ''}`}>
                        <option value="select">--Select--</option>
                        <option value="Addon1-500">Cake - $500</option>
                        <option value="Addon2-600">Ice Cream - $600</option>
                        <option value="Addon3-400">Balloon - $400</option>
                    </select>
                    {addonErr &&
                        <div className="text-red-500 text-sm mt-1">{addonErr}</div>
                    }
                </div>
                {/* Themes */}
                <div className="mb-4">
                    <label htmlFor="theme" className="block text-sm font-semibold text-gray-600">Themes</label>
                    <select name="theme"
                        value={formData.theme}
                        onChange={handleChange}
                        className={`input ${themeErr ? 'border-red-500' : ''}`}>
                        <option value="select">--Select--</option>
                        <option value="Theme1-1000">Iron Man - $1000</option>
                        <option value="Theme2-800">Batman - $800</option>
                        <option value="Theme3-1200">Barbie - $1200</option>
                    </select>
                    {themeErr &&
                        <div className="text-red-500 text-sm mt-1">{themeErr}</div>
                    }
                </div>
                {/* Address */}
                <div className="mb-4">
                    <label htmlFor="textarea" className="block text-sm font-semibold text-gray-600">Address</label>
                    <textarea name="textarea"
                        value={formData.textarea}
                        onChange={handleChange}
                        placeholder="Write your address here.."
                        className={`input ${textareaErr ? 'border-red-500' : ''}`}
                        style={{ resize: 'none', minHeight: '100px' }} />
                    {textareaErr &&
                        <div className="text-red-500 text-sm mt-1">{textareaErr}</div>
                    }
                </div>
                </div>
                </div>
                {/* Submit Button */}
                <button type="submit" className="btn bg-black text-white px-4 py-2 rounded hover:bg-black flex justify-center items-center w-full mt-10">Submit</button>
            <div className="mt-4">Total Cost: {totalCost}</div>
            </form>
            {/* Total Cost */}
        </div>
    </div>
);

}

export default Form;
