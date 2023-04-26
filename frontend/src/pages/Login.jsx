import React, { useState } from 'react';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = ({ target }) => {
    if (target.name === 'email') {
      setEmail(target.value);
    } else {
      setPassword(target.value)
    }
  }

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
      <button>Entrar</button>
    </form>
  );
}

export default Login;