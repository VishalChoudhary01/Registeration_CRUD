import UserItem from './../UserItem/UserItem';
import './usersList.css'
const UserList = ({ users, onEdit, onDelete }) => {
  return (
    <div className="user-list">
      <h2>List of Registered User&apos;s</h2>
      {users.length === 0 ? (
        <p className='not-found-error'>No users found.</p>
      ) : (
        users.map((user) => (
          <UserItem
            key={user.id}
            user={user}
            onEdit={onEdit}
            onDelete={onDelete}
          />
        ))
      )}
    </div>
  );
};

export default UserList;
