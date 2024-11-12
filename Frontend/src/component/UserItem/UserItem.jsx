import { FaEdit, FaTrashAlt, FaUser, FaEnvelope, FaCalendarAlt } from 'react-icons/fa'; // Import the necessary icons

import './UserItem.css';

const UserItem = ({ user, onEdit, onDelete }) => {
  return (
    <div className="user-item">
      <div className="user-info">
        <h3><FaUser /> Name: {user.name}</h3>
        <p><FaEnvelope /> E-Mail: {user.email}</p>
        <p><FaCalendarAlt /> DOB: {user.dob}</p>
      </div>
      <div className="user-actions">
        <button onClick={() => onEdit(user)}>
          <FaEdit /> Edit
        </button>
        <button className="delete-btn" onClick={() => onDelete(user.id)}>
          <FaTrashAlt /> Delete
        </button>
      </div>
    </div>
  );
};

export default UserItem;
