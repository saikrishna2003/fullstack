import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../../App.css'
const OrdersTable = ({ orders }) => {
    return (
        
      <div className="overflow-x-auto">

            <h1 className="text-4xl font-bold text-center my-8 ultra">My Orders</h1>
        <table className="table-auto w-full border-collapse border border-gray-800">
          <thead>
            <tr className="bg-gray-200">

              <th className="border border-gray-800 px-4 py-2">Order ID</th>
              <th className="border border-gray-800 px-4 py-2">Username</th>
              <th className="border border-gray-800 px-4 py-2">Email</th>
              <th className="border border-gray-800 px-4 py-2">Gender</th>
              <th className="border border-gray-800 px-4 py-2">Mobile No</th>
              <th className="border border-gray-800 px-4 py-2">Addon</th>
              <th className="border border-gray-800 px-4 py-2">Theme</th>
              <th className="border border-gray-800 px-4 py-2">Address</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order.orderid} className="bg-white">
                <td className="border border-gray-800 px-4 py-2">{order.orderid}</td>
                <td className="border border-gray-800 px-4 py-2">{order.orderusername}</td>
                <td className="border border-gray-800 px-4 py-2">{order.orderemail}</td>
                <td className="border border-gray-800 px-4 py-2">{order.ordergender}</td>
                <td className="border border-gray-800 px-4 py-2">{order.ordermobileno}</td>
                <td className="border border-gray-800 px-4 py-2">{order.orderAddon}</td>
                <td className="border border-gray-800 px-4 py-2">{order.orderTheme}</td>
                <td className="border border-gray-800 px-4 py-2">{order.orderaddress}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const [token, setToken] = useState('');

  useEffect(() => {
    // Fetch token from local storage
    const storedToken = localStorage.getItem('token');
    if (storedToken) {
      setToken(storedToken);

      // Fetch orders by email from local storage
      const email = localStorage.getItem('email');
      axios.get(`http://localhost:8181/bdayparty/api/v1/order/email/${email}`, {
        headers: {
          Authorization: `Bearer ${storedToken}`,
        },
      })
        .then((response) => {
          setOrders(response.data);
        })
        .catch((error) => {
          console.error('Error fetching orders by email:', error);
        });
    }
  }, []);

  return (
    <div>
      <OrdersTable orders={orders} />
    </div>
  );
};

export default Orders;
