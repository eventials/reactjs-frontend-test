import React from 'react';
import { Redirect } from 'react-router-dom';
import Cookies from 'universal-cookie';

const cookies = new Cookies();

export function Room() {

  const isAuthenticated = cookies.get("auth_token") !== undefined;

  if (!isAuthenticated) {
    return <Redirect to="/" />
  }

  return (
    <h1>Room</h1>
  );
}