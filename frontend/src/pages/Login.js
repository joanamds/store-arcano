import React, { useState } from 'react';
import { requestLogin, setToken } from '../services/storeAPI';
import { Navigate } from 'react-router-dom';
import { FormControl, InputLabel, Input, InputAdornment, Button, TextField, Typography } from '@mui/material';
import AccountCircle from '@mui/icons-material/AccountCircle';
import PasswordIcon from '@mui/icons-material/Password';
import '../styles/Login.css';

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
    <div className="login-page">
    <form onSubmit={ login } className="form-login">
      <FormControl variant="standard" className="input-email">
        <InputLabel htmlFor="email">
          Email
        </InputLabel>
        <Input
          id="input-with-icon-adornment"
          type="text"
          name="email"
          value={ email }
          onChange={ handleChange }
          startAdornment={
            <InputAdornment position="start">
              <AccountCircle />
            </InputAdornment>
          }
        />
      </FormControl>
      <FormControl variant="standard" className="input-password">
        <InputLabel htmlFor="password">
          Senha
        </InputLabel>
        <Input
          id="input-with-icon-adornment"
          type="password"
          name="password"
          value={ password }
          onChange={ handleChange }
          startAdornment={
            <InputAdornment position="start">
              <PasswordIcon />
            </InputAdornment>
          }
        />
      </FormControl>
      {error && (
        <Typography variant="caption" color="error">
          Login inválido.
        </Typography>
      )}
      <Button type="submit">Entrar</Button>
    </form>
    </div>
  );
}

export default Login;