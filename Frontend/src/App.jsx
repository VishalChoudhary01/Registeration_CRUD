import './App.css';
import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './component/Navbar/Navbar';
import Registeration from './component/RegistrationForm/Registeration';
import UpdateUser from './component/UpdateUser/UpdateUser';
import UserList from './component/UserList/UsersList';
import { getUsers, createUser, updateUser, deleteUser } from './../service/api.js';
import Modal from './component/Modal/Modal';  

function App() {
  const [users, setUsers] = useState([]); 
  const [editingUser, setEditingUser] = useState(null);
  const [modalOpen, setModalOpen] = useState(false); 

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await getUsers();
        setUsers(response.data); 
      } catch (err) {
        console.error('Error fetching users:', err);
      }
    };

    fetchUsers();
  }, []); 

  const handleAddUser = async (newUser) => {
    try {
      const response = await createUser(newUser);
      setUsers([...users, response.data]); 
    } catch (err) {
      console.error('Error adding user:', err);
    }
  };

  const handleEditUser = (user) => {
    setEditingUser(user);  
    setModalOpen(true);     
  };

  const handleUpdateUser = async (updatedUser) => {
    try {
      const response = await updateUser(updatedUser.id, updatedUser);
      setUsers(users.map((user) => (user.id === updatedUser.id ? response.data : user))); // Update user in state
      setModalOpen(false);  
      setEditingUser(null);  
    } catch (err) {
      console.error('Error updating user:', err);
    }
  };

  // Delete a user from the list
  const handleDeleteUser = async (id) => {
    try {
      await deleteUser(id);
      setUsers(users.filter((user) => user.id !== id)); 
    } catch (err) {
      console.error('Error deleting user:', err);
    }
  };

  return (
    <Router>
      <Navbar />
      <div className="content">
        <Routes>
          <Route
            path="/"
            element={<UserList users={users} onEdit={handleEditUser} onDelete={handleDeleteUser} />}
          />
          <Route
            path="/add-user"
            element={<Registeration onAdd={handleAddUser} />}
          />
        </Routes>

        <Modal isOpen={modalOpen} onClose={() => setModalOpen(false)}>
          <UpdateUser
            user={editingUser}
            onUpdate={handleUpdateUser}
            onCancel={() => setModalOpen(false)} // Close modal
          />
        </Modal>
      </div>
    </Router>
  );
}

export default App;
