import { useCallback, useContext, useEffect, useState } from 'react';
import { Redirect } from 'react-router-dom';
import Cookies from 'universal-cookie';

import { PlayersContext } from '../../PlayersContext';

import { FaPowerOff } from 'react-icons/fa';
import { Container, Players } from './styles';
import avatarImg from '../../assets/avatar.jpg';

const cookies = new Cookies();

interface RoomProps {
  onOpenNewPlayerModal: () => void;
}

export function Room({ onOpenNewPlayerModal }: RoomProps) {

  const isAuthenticated = cookies.get("auth_token") !== undefined;
  const ownerName = cookies.get("auth_token");

  const { players, cleanSession } = useContext(PlayersContext)

  const [redirect, setRedirect] = useState(false);

  const handleUserKeyPress = useCallback(event => {
    const { key } = event;

    if (key === 'i') {

      onOpenNewPlayerModal();

    }
  }, [players]);

  useEffect(() => {
    window.addEventListener('keydown', handleUserKeyPress);

    return () => {
      window.removeEventListener('keydown', handleUserKeyPress);
    };
  }, [handleUserKeyPress]);

  useEffect(() => {
    localStorage.setItem(
      '@EventialsMeeting:players', 
      JSON.stringify(players),
    );
  }, [players])

  function handleEndMeeting() {
    cleanSession();
    setRedirect(true);
  }

  if (!isAuthenticated || redirect) {
    return <Redirect to="/" />
  }

  return (
    <Container>
      <header>
        <h2>Chamada de {ownerName}</h2>
      </header>

      <Players>
        {players.map(player => (
          <li key={player.id}>
            <img src={avatarImg} alt={player.name}/>
          </li>
        ))}
      </Players>

      <footer>
        <button onClick={handleEndMeeting}>
          <FaPowerOff size={30} />
        </button>
      </footer>
    </Container>
  );
}