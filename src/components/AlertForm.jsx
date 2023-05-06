import React from 'react';

const AlertForm = ({ userToDelete, cancelDelete, deleteUser }) => {
  return (
    <div className="alert__container">
      <div className="alert">
        <h3> Do you want to delete the user?: {userToDelete?.first_name} </h3>
        <button onClick={() => deleteUser(userToDelete)}>Delete</button>
        <button onClick={() => cancelDelete()}>Cancel</button>
      </div>
    </div>
  );
};

export default AlertForm;
