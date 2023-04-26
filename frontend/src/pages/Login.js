import React, { useState } from 'react';
import { requestLogin, setToken } from '../services/storeAPI';
import { Navigate } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLogged, setIsLogged] = useState(false);

  const handleChange = ({ target }) => {
    if (target.name === 'email') {
      setEmail(target.value);
    } else {
      setPassword(target.value)
    }
  }

  const login = async (event) => {
    event.preventDefault();

    try {
      const { token, userId } = await requestLogin('/login', { email, password });
      setIsLogged(true);
      setToken(token);
    } catch (error) {
      console.log(error);
    }
  }

  if (isLogged) return <Navigate to="/home" />;

  return (
    <form>
      <label htmlFor="email">
        <input
          type="text"
          name="email"
          value={ email }
          onChange={ handleChange }
          placeholder='email'
        />
      </label>
      <label htmlFor="password">
        <input
          type="password"
          name="password"
          value={ password }
          onChange={ handleChange }
          placeholder='password'
        />
      </label>
      <button onSubmit={ login }>Entrar</button>
    </form>
  );
}

export default Login;