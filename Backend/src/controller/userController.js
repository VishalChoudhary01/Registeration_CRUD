
const userModel = require('./../model/userModel');

const getUsers = (req, res) => {
  const users = userModel.getAllUsers();
  res.status(200).json(users);
};

const getUser = (req, res) => {
  const { id } = req.params;
  const user = userModel.getUserById(id);
  if (!user) {
    return res.status(404).json({ error: 'User not found' });
  }
  res.status(200).json(user);
};

const createUser = (req, res) => {
  const { name, email, dob } = req.body;

  if (!name || !email || !dob) {
    return res.status(400).json({ error: 'All fields are required' });
  }

  const newUser = {
    id: Date.now(),  
    name,
    email,
    dob,
  };

  userModel.addUser(newUser);
  res.status(201).json(newUser);
};

const updateUser = (req, res) => {
  const { id } = req.params;
  const { name, email, dob } = req.body;

  if (!name || !email || !dob) {
    return res.status(400).json({ error: 'All fields are required' });
  }

  const updatedUser = {
    name,
    email,
    dob,
  };

  userModel.updateUser(id, updatedUser);
  res.status(200).json({ id, ...updatedUser });
};

const deleteUser = (req, res) => {
  const { id } = req.params;
  userModel.deleteUser(id);
  res.status(200).json({ message: 'User deleted successfully' });
};

module.exports = {
  getUsers,
  getUser,
  createUser,
  updateUser,
  deleteUser,
};
