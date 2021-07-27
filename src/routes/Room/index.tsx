import { useCallback, useContext, useEffect, useState } from 'react';
import { Redirect } from 'react-router-dom';
import Cookies from 'universal-cookie';
import ReactPlayer from 'react-player';

import { PlayersContext } from '../../PlayersContext';

import { FaPowerOff } from 'react-icons/fa';
import { Container, LayoutsLayer, Players } from './styles';

import ImgLayout1 from '../../assets/layout1.svg';
import ImgLayout2 from '../../assets/layout2.svg';
import ImgLayout3 from '../../assets/layout3.svg';
import ImgLayout4 from '../../assets/layout4.svg';
import ImgLayout5 from '../../assets/layout5.svg';
import ImgLayout6 from '../../assets/layout6.svg';
import ImgLayout7 from '../../assets/layout7.svg';
import ImgLayout8 from '../../assets/layout8.svg';

const cookies = new Cookies();

interface RoomProps {
  onOpenNewPlayerModal: () => void;
}

interface LayoutProps {
  id: number;
  image: string;
  active: boolean;
  className: string;
}

export function Room({ onOpenNewPlayerModal }: RoomProps) {

  const { players, cleanSession, handleRemovePlayer } = useContext(PlayersContext)

  const [redirect, setRedirect] = useState(false);

  const [layouts, setLayouts] = useState<LayoutProps[]>([])
  const [activeLayout, setActiveLayout] = useState('layout-1')

  useEffect(() => {
    setLayouts([
      {
        id: 1,
        image: ImgLayout1,
        active: true,
        className: 'layout-1',
      },
      {
        id: 2,
        image: ImgLayout2,
        active: false,
        className: 'layout-2',
      },
      {
        id: 3,
        image: ImgLayout3,
        active: false,
        className: 'layout-3',
      },
      {
        id: 4,
        image: ImgLayout4,
        active: false,
        className: 'layout-4',
      },
      {
        id: 5,
        image: ImgLayout5,
        active: false,
        className: 'layout-5',
      },
      {
        id: 6,
        image: ImgLayout6,
        active: false,
        className: 'layout-6',
      },
      {
        id: 7,
        image: ImgLayout7,
        active: false,
        className: 'layout-7',
      },
      {
        id: 8,
        image: ImgLayout8,
        active: false,
        className: 'layout-8',
      },
    ])
  }, [])

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

  function selectLayout(id: number) {
    const newLayouts = [...layouts]

    const selectedLayout = newLayouts.findIndex(layout => layout.id === id)
    
    newLayouts.map(layout => layout.active = false)
    newLayouts[selectedLayout].active = true
    
    const newActiveLayout = newLayouts[selectedLayout].className

    setLayouts(newLayouts)
    setActiveLayout(newActiveLayout)
  }

  if (!isAuthenticated || redirect) {
    return <Redirect to="/" />
  }

  return (
    <Container>
      <header>
        <h2>Chamada de {ownerName}</h2>
      </header>

      <Players 
        className={activeLayout}
        quantity={players.length}
      >
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

      <LayoutsLayer>
        {layouts.map(layout => (
          <li key={layout.id}>
            <button
              onClick={() => selectLayout(layout.id)}
              className={layout.active ? 'active' : ''}
            >
              <img src={layout.image} alt="" />
            </button>
          </li>
        ))}
      </LayoutsLayer>

      <footer>
        <button onClick={handleEndMeeting}>
          <FaPowerOff size={30} />
        </button>
      </footer>
    </Container>
  );
}