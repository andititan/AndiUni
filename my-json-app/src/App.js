import Users from './components/Users';
import { UserButtons } from './components/UserButtons';
import './App.css';
//import data from './data.json';

function App() {
  const handleCreateUser = () => {
    //const newUser = { id: Date.now(), name: 'New User', email: 'newuser@example.com' }; // Replace with actual user data
    //const updatedUsers = [...data.users, newUser];
    //data.users = updatedUsers;
    //console.log('User created successfully:', newUser);
  };

  const handleRemoveUser = () => {
    //const userIdToRemove = 1; // Replace with the actual user ID you want to remove
    //const updatedUsers = data.users.filter(user => user.id !== userIdToRemove);
    //data.users = updatedUsers;
    //console.log('User removed successfully:', userIdToRemove);
  };

  return (
    <div className="App">
      <header className="fixed top-0 left-0 w-full bg-white shadow-md h-[100px] flex items-center">
        <div className="text-3xl font-bold p-4" style={{ margin: '0px', backgroundColor: 'BLACK', height: '100px', fontSize: '55px', color: 'white', fontFamily: 'Arial, Helvetica, sans-serif'}}>
          User Agent
        </div>
      </header>
      <div className="flex justify-center items-center h-screen flex-col">
        <Users />
        <UserButtons onCreate={handleCreateUser} onRemove={handleRemoveUser} />
      </div>
    </div>
  );
}

export default App;