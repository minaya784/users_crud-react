import React from 'react';

const UserList = ({ users, isVisible, editUser, getAlertForm }) => {
  return (
    <div className="UserList">
      <nav className="Navbar__container">
        <h1>Users</h1>
        <button onClick={() => isVisible(true)}> +New User</button>
      </nav>
      <div className="card__container">
        {users.map((user) => (
          <div key={user.id} className="card">
            <h3>
              {user.first_name} {user.last_name}
            </h3>
            <div className="user__container"></div>
            <p>
              <strong>Mail: </strong>
              {user.email}
            </p>
            <p>
              <strong>Birthday: </strong>
              {user.birthday}
            </p>
            <div className="btn__container">
              <button onClick={() => getAlertForm(user)}>
                <i className="bx bx-trash"></i>
              </button>

              <button className="edit" onClick={() => editUser(user)}>
                <i className="bx bxs-edit"></i>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserList;
