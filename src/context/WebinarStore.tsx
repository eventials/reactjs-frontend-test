import { createContext, Dispatch, useCallback, useEffect, useState } from 'react';
import faker  from '@faker-js/faker';
import createJWK, { JWKKey } from "../utils/createJWK";

export interface Participant {
  name: string;
  photo: string;
  key: JWKKey
}

export interface WebinarContextData {
  currentUser: Participant;
  setCurrentUser: Dispatch<React.SetStateAction<Participant>>;
  participants: Participant[];
  addParticipant: (name: string) => Promise<void>;
  removeParticipant: (participant: Participant) => void;
  logOut: () => void;
  login: (name: string) => Promise<void>;
}

const WebinarContext = createContext({} as WebinarContextData);

const WebinarProvider: React.FC = ({ children }) => {

  const [participants, setParticipants] = useState<Participant[]>([]);
  const [currentUser, setCurrentUser] = useState<Participant>({} as Participant);
  const addParticipant =  async (name: string): Promise<void> => {
    const key = await createJWK(name);
    const newParticipant: Participant = {
      name,
      photo: faker.image.avatar(),
      key,
    }
    const updatedParticipants = [...participants];
    updatedParticipants.push(newParticipant);
    localStorage.setItem('webinarParticipants', JSON.stringify(updatedParticipants));
    setParticipants(updatedParticipants);
  };

  const removeParticipant = (participant: Participant): void => {
    const filteredParticipants = participants.filter(p => p.key.id !== participant.key.id); 
    localStorage.setItem('webinarParticipants', JSON.stringify(filteredParticipants));
    setParticipants(filteredParticipants);
  }

  const logOut = () => {
    const confirmation = window.confirm('Certeza de que deseja sair?');
    if(confirmation) {
      localStorage.removeItem('currUser');
      setCurrentUser({} as Participant);
    }
  } 

  const login = async (name: string) => {
    const token = await createJWK(name);
      console.log({ token })
      const currLogin = {
        name,
        photo: faker.image.avatar(),
        key: token,
      }
      setCurrentUser(currLogin);
      localStorage.setItem('currUser', JSON.stringify(currLogin));
  }

  useEffect(() => {
    const currUser = localStorage.getItem('currUser');
    if(currUser) { 
      const parsedUser: Participant = JSON.parse(currUser);
      setCurrentUser(parsedUser);
    }
    const currParticipants = localStorage.getItem('webinarParticipants');
    if(currParticipants) {
      const parsedParticipants: Participant[] = JSON.parse(currParticipants);
      setParticipants(parsedParticipants);
    }
  }, [])

  return (
    <WebinarContext.Provider value={{ 
      currentUser,
      addParticipant, 
      participants, 
      removeParticipant,
      setCurrentUser, 
      logOut,
      login,
    }}>
      {children}
    </WebinarContext.Provider>
  );
}

export { WebinarContext as WebinarStore, WebinarProvider };
