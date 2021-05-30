import { Redirect } from 'react-router-dom';
import Cookies from 'universal-cookie';

import { Container, Footer } from './styles';

import { FaPowerOff } from 'react-icons/fa';

const cookies = new Cookies();

export function Room() {

  const isAuthenticated = cookies.get("auth_token") !== undefined;

  if (!isAuthenticated) {
    return <Redirect to="/" />
  }

  return (
    <Container>
      <h1>Room</h1>
      <Footer>
        <button>
          <FaPowerOff size={30} />
        </button>
      </Footer>
    </Container>
  );
}