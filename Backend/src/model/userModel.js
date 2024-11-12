
let users = []; 


const getAllUsers = () => {
  return users;
};

const getUserById = (id) => {
  return users.find(user => user.id === id);
};

const addUser = (newUser) => {
  users.push(newUser);
};

const updateUser = (id, updatedUser) => {
  const index = users.findIndex(user => user.id === id);
  if (index !== -1) {
    users[index] = { ...users[index], ...updatedUser };
  }
};

const deleteUser = (id) => {
  users = users.filter(user => user.id !== id);
};

module.exports = {
  getAllUsers,
  getUserById,
  addUser,
  updateUser,
  deleteUser,
};
