import './App.css';
import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './component/Navbar/Navbar';
import Registeration from './component/RegistrationForm/Registeration';
import UpdateUser from './component/UpdateUser/UpdateUser';
import UserList from './component/UserList/UsersList';
import { getUsers, createUser, updateUser, deleteUser } from './../service/api.js';
import Modal from './component/Modal/Modal';  // Import Modal

function App() {
  const [users, setUsers] = useState([]); // State to store users
  const [editingUser, setEditingUser] = useState(null);
  const [modalOpen, setModalOpen] = useState(false); // State to control modal visibility

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await getUsers();
        setUsers(response.data); // Set the users in state
      } catch (err) {
        console.error('Error fetching users:', err);
      }
    };

    fetchUsers();
  }, []); // Empty array ensures it runs only once, like componentDidMount

  // Add a new user to the list
  const handleAddUser = async (newUser) => {
    try {
      const response = await createUser(newUser);
      setUsers([...users, response.data]); // Add new user to the list
    } catch (err) {
      console.error('Error adding user:', err);
    }
  };

  // Edit an existing user's information
  const handleEditUser = (user) => {
    setEditingUser(user);  // Set the user to be edited
    setModalOpen(true);     // Open the modal
  };

  // Update the user information in the list
  const handleUpdateUser = async (updatedUser) => {
    try {
      const response = await updateUser(updatedUser.id, updatedUser);
      setUsers(users.map((user) => (user.id === updatedUser.id ? response.data : user))); // Update user in state
      setModalOpen(false);  // Close modal after updating
      setEditingUser(null);  // Clear editing mode
    } catch (err) {
      console.error('Error updating user:', err);
    }
  };

  // Delete a user from the list
  const handleDeleteUser = async (id) => {
    try {
      await deleteUser(id);
      setUsers(users.filter((user) => user.id !== id)); // Remove user from state
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

        {/* Modal to update user */}
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
