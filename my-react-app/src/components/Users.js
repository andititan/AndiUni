import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Users({ onRemove }) {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    axios.get('./data.json')
      .then(response => {
        setUsers(response.data.users);
        setIsLoading(false);
      })
      .catch(() => {
        setHasError(true);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) return <div>Loading...</div>;
  if (hasError) return <div>Error fetching data</div>;

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4 text-center">Users</h1>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <table style={{ width: '100%', maxWidth: '42rem', borderRadius: '0.5rem', overflow: 'hidden', boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)', backgroundColor: 'black', color: 'white' }}>
          <thead>
            <tr>
              <th style={{ padding: '0.75rem', fontWeight: '600' }}>Name</th>
              <th style={{ padding: '0.75rem', fontWeight: '600' }}>Email</th>
              <th style={{ padding: '0.75rem', fontWeight: '600' }}>Actions</th>
            </tr>
          </thead>
          <tbody style={{ backgroundColor: 'white', color: 'black' }}>
            {users.map(user => (
              <tr key={user.id} style={{ transition: 'background-color 0.2s', ':hover': { backgroundColor: '#f3f4f6' } }}>
                <td style={{ padding: '0.75rem', borderTop: '1px solid #e5e7eb' }}>{user.name}</td>
                <td style={{ padding: '0.75rem', borderTop: '1px solid #e5e7eb' }}>{user.email}</td>
                <td style={{ padding: '0.75rem', borderTop: '1px solid #e5e7eb' }}>
                  <button
                    onClick={() => onRemove(user.id)}
                    style={{ backgroundColor: '#ef4444', color: 'white', padding: '0.5rem 1rem', borderRadius: '0.375rem', border: 'none', cursor: 'pointer', ':hover': { backgroundColor: '#dc2626' } }}
                  >
                    Remove
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Users; 