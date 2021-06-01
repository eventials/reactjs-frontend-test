import { useCallback, useContext, useEffect, useState } from 'react';
import { Redirect } from 'react-router-dom';
import Cookies from 'universal-cookie';
import ReactPlayer from 'react-player';

import { PlayersContext } from '../../PlayersContext';

import { FaPowerOff } from 'react-icons/fa';
import { Container, Players } from './styles';

const cookies = new Cookies();

interface RoomProps {
  onOpenNewPlayerModal: () => void;
}

export function Room({ onOpenNewPlayerModal }: RoomProps) {

  const { players, cleanSession, handleRemovePlayer } = useContext(PlayersContext)

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

  const isAuthenticated = cookies.get("auth_token") !== undefined;

  const ownerName = cookies.get("auth_token");

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
            <ReactPlayer 
              url='https://www.youtube.com/watch?v=rG4jSz_2HDY'
              width="100%"
              height="100%"
            />
            <button 
              onClick={() => handleRemovePlayer(player.id)}
              hidden={player.name === 'Administrador'}
            >
              <FaPowerOff size={20} />
            </button>
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