import React, { SyntheticEvent, useState } from 'react';
import { Redirect } from 'react-router-dom';
import Cookies from 'universal-cookie';

const cookies = new Cookies();

export function Login() {
  const [name, setName] = useState('');
  const [redirect, setRedirect] = useState(false);

  function handleLogin(event: SyntheticEvent) {
    event.preventDefault();

    cookies.set("auth_token", name, { path: '/' });

    setRedirect(true);
  }

  if (redirect){
    return <Redirect to="/room" />
  }
  
  return (
    <form onSubmit={handleLogin}>
      <h1>Login</h1>
      <input 
        type="text"
        placeholder="Seu nome"
        required
        onChange={event => setName(event.target.value)}
      />

      <button type="submit">Entrar na sala</button>
    </form>
  );
}