import React, { useState, useEffect } from 'react';
import axios from 'axios';
import BASE_URL from '../../Config.js';

const Dashboard = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const url = `${BASE_URL}/users`;
        const token = localStorage.getItem('token');
        const headers = {
          'Authorization': `Bearer ${token}`
        };

        const response = await axios.get(url, { headers });
        console.log(response.data)
        setUsers(response.data); 
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="container mx-auto">
      <h1 className="text-2xl font-semibold mb-4">All Users</h1>
      <table className="w-full border-collapse border border-gray-400">
        <thead>
          <tr className="bg-gray-200">
            <th className="border border-gray-400 py-2 px-4">ID</th>
            <th className="border border-gray-400 py-2 px-4">Name</th>
            <th className="border border-gray-400 py-2 px-4">Email</th>
            <th className="border border-gray-400 py-2 px-4">Role</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user.id} className="border border-gray-400">
              <td className="border border-gray-400 py-2 px-4">{user.id}</td>
              <td className="border border-gray-400 py-2 px-4">{user.name}</td>
              <td className="border border-gray-400 py-2 px-4">{user.email}</td>
              <td className="border border-gray-400 py-2 px-4">{user.role}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Dashboard;
