import React, { useState } from 'react';
import AuthForm from './AuthForm';
import Input from './Input';
import { Link, useNavigate } from 'react-router-dom';
import *as authentication from '../utils/authentication.js';

function Register({ onChange, onTooltipSuccess, onRegisterFailure }) {
  const [data, setData] = useState({
    email: '',
    password: '',
  });
  const [isLoading, setLoading] = useState(false);
  const navigate = useNavigate();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const handleSubmit = (evt) => {
    evt.preventDefault();
    setLoading(true);
    const { email, password } = data;
    authentication.register(email, password)
      .then(() => {
        onTooltipSuccess();
        navigate('/sign-in');
      })
      .catch(() => {
        onRegisterFailure();
      })
      .catch((err) => console.log(err))
      .finally(() => {
        setLoading(false);
      });
  };

  const buttonLabelText = isLoading ? "Идет регистрация" : "Зарегистрироваться";
  return (
    <>
      <AuthForm
        title="Регистрация"
        name="register"
        isLoading={isLoading}
        buttonLabel={buttonLabelText}
        onSubmit={handleSubmit}
        ariaLabel="Зарегистрироваться"
      >
        <Input
          id='email'
          name='email'
          className='popup__text popup__text_type_email'
          type='email'
          placeholder='Email'
          required={true}
          value={data.email}
          onChange={handleChange}
        />
        <Input
          id='password'
          className='popup__text popup__text_type_password'
          type='text'
          name='password'
          minlength='8'
          maxlength='20'
          placeholder='Пароль'
          required={true}
          value={data.password}
          onChange={handleChange}
        />
      </AuthForm>
      <Link className='register__link' to="/sign-in">Уже зарегистрированы? Войти</Link>
    </>
  )
}

export default Register;