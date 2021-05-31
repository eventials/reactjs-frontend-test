import { Redirect } from 'react-router-dom';
import Cookies from 'universal-cookie';

import { Container, Players } from './styles';

import { FaPowerOff } from 'react-icons/fa';

import avatarImg from '../../assets/avatar.jpg';

const cookies = new Cookies();

export function Room() {

  const isAuthenticated = cookies.get("auth_token") !== undefined;

  if (!isAuthenticated) {
    return <Redirect to="/" />
  }

  const ownerName = cookies.get("auth_token");

  return (
    <Container>
      <header>
        <h2>Chamada de {ownerName}</h2>
      </header>

      <Players>
        <li>
          <img src={avatarImg} alt="Avatar"/>
        </li>
      </Players>

      <footer>
        <button>
          <FaPowerOff size={30} />
        </button>
      </footer>
    </Container>
  );
}