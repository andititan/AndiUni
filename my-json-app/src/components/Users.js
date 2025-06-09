import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Users() {
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
      <h1>Users</h1>
      <div className="flex justify-center">
        <table className="border border-black border-collapse bg-black text-white">
          <thead>
            <tr>
              <th className="border border-white p-2">Name</th>
              <th className="border border-white p-2">Email</th>
            </tr>
          </thead>
          <tbody>
            {users.map(user => (
              <tr key={user.id}>
                <td className="border border-white p-2">{user.name}</td>
                <td className="border border-white p-2">{user.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Users; 