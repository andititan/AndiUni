import Users from './components/Users';
import { UserCreateButton } from './components/UserCreateButton';
import './App.css';
//import data from './data.json';

function App() {
  const handleCreateUser = (name , email) => {
    const newUser = {
      id: Date.now(), // Generate a unique ID using the current timestamp
      name,
      email
    };

    fetch('http://localhost:3001/addUser', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newUser),
    })
    .then(response => response.json())
    .then(data => {
      console.log('User added successfully:', data);
    })
    .catch(error => {
      console.error('Error adding user:', error);
    });
  };

  const handleRemoveUser = (userId) => {
    fetch('http://localhost:3001/removeUser', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ userId }),
    })
    .then(response => response.json())
    .then(data => {
      console.log('User removed successfully:', data);
    })
    .catch(error => {
      console.error('Error removing user:', error);
    });
  };

  return (
    <div className="App">
      <header className="fixed top-0 left-0 w-full bg-white shadow-md h-[100px] flex items-center">
        <div className="text-3xl font-bold p-4" style={{ margin: '0px', backgroundColor: 'BLACK', height: '100px', fontSize: '55px', color: 'white', fontFamily: 'Arial, Helvetica, sans-serif'}}>
          User Agent
        </div>
      </header>
      <div>
        <Users onRemove={handleRemoveUser} />
        <UserCreateButton onCreate={handleCreateUser} />
      </div>
    </div>
  );
}

export default App;