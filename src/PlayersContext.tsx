import { createContext, useState, ReactNode, useEffect } from 'react';
import { v4 as uuid } from 'uuid';
import Cookies from 'universal-cookie';

const cookies = new Cookies();

interface Player {
  id: string;
  name: string; 
}

interface PlayersProviderProps {
  children: ReactNode;
}

interface PlayersContextData {
  players: Player[];
  addPlayer: () => void;
  cleanSession: () => void;
}

export const PlayersContext = createContext<PlayersContextData>(
  {} as PlayersContextData
);

export function PlayersProvider({ children }: PlayersProviderProps) {
  const [players, setPlayers] = useState<Player[]>(() => {
    const storagedRepositories = localStorage.getItem('@EventialsMeeting:players');

    if(storagedRepositories) {
      return JSON.parse(storagedRepositories);
    } else {
      return [{
        id: uuid(),
        name: 'Administrador',
      }]
    }
  });

  useEffect(() => {
    localStorage.setItem(
      '@EventialsMeeting:players', 
      JSON.stringify(players),
    );
  }, [players])

  function addPlayer() {
    const player = {
      id: uuid(),
      name: 'Novo participante',
    }
    setPlayers([...players, player]);
  }

  function cleanSession() {
    cookies.remove("auth_token");
    localStorage.removeItem('@EventialsMeeting:players');
    setPlayers([{
      id: uuid(),
      name: 'Administrador',
    }]);
  }

  return (
    <PlayersContext.Provider value={{ players, addPlayer, cleanSession }}>
      {children}
    </PlayersContext.Provider>
  );
}