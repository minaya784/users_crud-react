import React, { useEffect, useState } from 'react';
import axios from 'axios';
import UserList from './components/UserList';
import UserCard from './components/UserCard';
import './components/App.css';
import AlertForm from './components/AlertForm';

const App = () => {
  const [users, setUsers] = useState([]);
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [editedUser, setEditedUser] = useState(null);
  const [alertform, setAlertform] = useState(false);
  const [userToDelete, setUserToDelete] = useState(null);

  const getUsers = async () => {
    try {
      const res = await axios.get(`https://users-crud-5log.onrender.com/users/`);
      setUsers(res.data);
    } catch (error) {
      console.error(error);
    }
  };

  const deleteUser = async (userToDelete) => {
    try {
      await axios.delete(`https://users-crud-5log.onrender.com/users/${userToDelete?.id}/`);
      getUsers();
      setAlertform(false);
      setUserToDelete(null);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getUsers();
  }, []);

  const editUser = (user) => {
    setIsFormVisible(true);
    setEditedUser(user);
  };

  const getAlertForm = (user) => {
    setAlertform(true);
    setUserToDelete(user);
  };

  const cancelDelete = () => {
    setAlertform(false);
    setUserToDelete(null);
  };

  return (
    <div className="App">
      {isFormVisible && (
        <UserCard
          isFormVisible={setIsFormVisible}
          getUsers={getUsers}
          editedUser={editedUser}
          setEditedUser={setEditedUser}
        />
      )}
      <UserList
        users={users}
        isVisible={setIsFormVisible}
        editUser={editUser}
        getUsers={getUsers}
        getAlertForm={getAlertForm}
      />
      {alertform && (
        <AlertForm
          userToDelete={userToDelete}
          cancelDelete={cancelDelete}
          deleteUser={deleteUser}
        />
      )}
    </div>
  );
};

export default App;
