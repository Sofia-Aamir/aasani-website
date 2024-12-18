import React  from 'react';
import { useParams } from 'react-router-dom';

const UserProfile = ({ users }) => {
  const { id } = useParams();
  const user = users.find(user => user.id === parseInt(id));

  if (!user) {
    return <div>User not found</div>;
  }

  return (
    <div className="p-5">
      <h1 className="text-3xl font-bold">{user.name}'s Profile</h1>
      <p><strong>Email:</strong> {user.email}</p>
      <p><strong>Role:</strong> {user.role}</p>
      <p><strong>Registration Date:</strong> {user.registrationDate}</p>
      <p><strong>Status:</strong> {user.status}</p>
      <p><strong>CNIC:</strong> {user.cnic}</p>
    </div>
  );
};

export default UserProfile;
