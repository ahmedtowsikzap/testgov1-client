import React, { useEffect, useState } from 'react';
import API from '../services/api';

const AdminDashboard = () => {
  const [users, setUsers] = useState([]);
  const [sheets, setSheets] = useState([]);

  useEffect(() => {
    // Fetch all users and sheets
    API.get('/sheet/allSheets')
      .then(response => setSheets(response.data))
      .catch(error => console.error('Error fetching sheets:', error));

    // Fetch all users
    API.get('/user/allUsers')
      .then(response => setUsers(response.data))
      .catch(error => console.error('Error fetching users:', error));
  }, []);

  return (
    <div>
      <h1>Admin Dashboard</h1>
      <h2>Users</h2>
      {users.length > 0 ? (
        <ul>
          {users.map((user, index) => (
            <li key={index}>{user.email}</li>
          ))}
        </ul>
      ) : (
        <p>No users found</p>
      )}
      
      <h2>Sheets</h2>
      {sheets.length > 0 ? (
        <ul>
          {sheets.map((sheet, index) => (
            <li key={index}>{sheet.name}</li>
          ))}
        </ul>
      ) : (
        <p>No sheets found</p>
      )}
    </div>
  );
};

export default AdminDashboard;
