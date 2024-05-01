import React, { useState, useEffect } from 'react';
import axios from 'axios';
import BASE_URL from '../../Config.js';

const UserInfo = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

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
        setLoading(false); // Set loading to false once data is fetched
      } catch (error) {
        console.log(error);
        setLoading(false); // Set loading to false in case of error
      }
    };

    fetchData();
  }, []);

  return (
    <div className="container mx-auto mt-8">
      <h1 className="ultra text-3xl font-semibold mb-4 text-center">All Users</h1>
      {loading ? (
        <div className="text-center">Loading...</div>
      ) : (
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
      )}
    </div>
  );
};

export default UserInfo;
