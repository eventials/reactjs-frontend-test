import { Redirect } from 'react-router-dom';
import Cookies from 'universal-cookie';

import { Container } from './styles';

const cookies = new Cookies();

export function Room() {

  const isAuthenticated = cookies.get("auth_token") !== undefined;

  if (!isAuthenticated) {
    return <Redirect to="/" />
  }

  return (
    <Container>
      <h1>Room</h1>
    </Container>
  );
}