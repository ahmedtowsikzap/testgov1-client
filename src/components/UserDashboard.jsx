import React, { useEffect, useState } from 'react';
import API from '../services/api';

const UserDashboard = () => {
  const [sheets, setSheets] = useState([]);

  useEffect(() => {
    // Fetch the sheets assigned to the user
    API.get('/user/userSheets')
      .then(response => setSheets(response.data.sheets))
      .catch(error => console.error('Error fetching sheets:', error));
  }, []);

  return (
    <div>
      <h1>Your Google Sheets</h1>
      {sheets.length > 0 ? (
        <ul>
          {sheets.map((sheet, index) => (
            <li key={index}>{sheet.name}</li>
          ))}
        </ul>
      ) : (
        <p>No sheets assigned to you</p>
      )}
    </div>
  );
};

export default UserDashboard;
