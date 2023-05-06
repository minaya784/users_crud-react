import axios from 'axios';
import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';

const UserCard = ({ isFormVisible, getUsers, editedUser, setEditedUser }) => {
  const { register, handleSubmit, reset } = useForm();
  const inputNull = {
    first_name: '',
    last_name: '',
    email: '',
    password: '',
    birthday: '',
  };

  const submit = async (data) => {
    try {
      if (editedUser) {
        await axios.put(`https://users-crud-5log.onrender.com/users/${editedUser.id}/`, data);
        getUsers();
        closeForm();
      } else {
        await axios.post(`https://users-crud-5log.onrender.com/users/`, data);
        getUsers();
        closeForm();
      }
    } catch (error) {
      console.error(error);
    }
  };

  const closeForm = () => {
    isFormVisible(false);
    setEditedUser(null);
  };

  useEffect(() => {
    if (editedUser) {
      reset(editedUser);
    } else {
      reset(inputNull);
    }
  },[]);

  return (
    <div className="form__container">
      <div className="form">
        <p onClick={() => closeForm()}>
          <i class="bx bx-window-close"></i>
        </p>
        <h2>Register</h2>
        <form className="form__input" onSubmit={handleSubmit(submit)}>
          <div className="input__container">
            <h3 className="form__text">Name: </h3>
            <input
              placeholder="Juanito"
              className="container__text"
              type="text"
              id="first_name"
              {...register('first_name')}
            />
          </div>
          <div className="input__container">
            <h3 className="form__text">Last name: </h3>
            <input
              placeholder="El de la esquina"
              className="container__text"
              type="text"
              id="last_name"
              {...register('last_name')}
            />
          </div>
          <div className="input__container">
            <h3 className="form__text">Mail: </h3>
            <input
              placeholder="email@email.com"
              className="container__text"
              type="email"
              id="email"
              {...register('email')}
            />
          </div>
          <div className="input__container">
            <h3 className="form__text">Password:</h3>
            <input
              placeholder="*******"
              className="container__text"
              type="password"
              id="password"
              {...register('password')}
            />
          </div>
          <div className="input__container">
            <h3 className="form__text">Birthday:</h3>
            <input
              className="container__text"
              type="date"
              id="birthday"
              {...register('birthday')}
            />
          </div>
          <button type="submit"> {editedUser ? 'Update' : 'Create User'}</button>
        </form>
      </div>
    </div>
  );
};

export default UserCard;
