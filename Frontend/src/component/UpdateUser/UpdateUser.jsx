import  { useState, useEffect } from 'react';
import './UpdateUser.css'
const UpdateUser = ({ user, onUpdate, onCancel }) => {
  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [dob, setDob] = useState(user.dob);
  const [error, setError] = useState('');

  useEffect(() => {
    setName(user.name);
    setEmail(user.email);
    setDob(user.dob);
  }, [user]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email || !dob) {
      setError('All fields are required');
      return;
    }

    const updatedUser = { id: user.id, name, email, dob };
    onUpdate(updatedUser);
  };

  return (
    <div className="update-user-form">
      <h2>Update User</h2>
      {error && <div className="error">{error}</div>}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="date"
          value={dob}
          onChange={(e) => setDob(e.target.value)}
        />
        <button  type="submit">Update User</button>
        <button className='cancel-btn' type="button" onClick={onCancel}>Cancel</button>
      </form>
    </div>
  );
};

export default UpdateUser;
