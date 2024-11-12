import  { useState, useEffect } from 'react';
import './UpdateUser.css'
import { AiOutlineUser, AiOutlineMail, AiOutlineCalendar } from 'react-icons/ai';
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
        <div className="input-container">
        <AiOutlineUser className="input-icon" />
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        </div>
        
        <div className="input-container">
          <AiOutlineMail className="input-icon" />
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
          />
        </div>
        <div className="input-container">
          <AiOutlineCalendar className="input-icon" />
          <input
            type="date"
            value={dob}
            onChange={(e) => setDob(e.target.value)}
          />
        </div>
        <div className="modal-actions">
          <button type="submit" className="update-btn">Update User</button>
          <button className="cancel-btn" type="button" onClick={onCancel}>Cancel</button>
        </div>
      </form>
    </div>
  );
};

export default UpdateUser;
