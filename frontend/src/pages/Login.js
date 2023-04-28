import React, { useState } from 'react';
import { requestLogin, setToken } from '../services/storeAPI';
import { Navigate } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLogged, setIsLogged] = useState(false);
  const [id, setId ] = useState(0);
  const [error, setError] = useState(false);

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
      setToken(token);
      setId(userId);
      setIsLogged(true);
    } catch (error) {
      setError(true);
      setIsLogged(false);
    }
  }

  if (isLogged) {
    return <Navigate to={`/home/${id}`} />;
  }
  
  return (
    <form onSubmit={ login } >
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
      {error && <p>Email ou senha incorretos</p>}
      <button type="submit">Entrar</button>
    </form>
  );
}

export default Login;