import { useContext } from 'react';
import Modal from "react-modal";
import { PlayersContext } from '../../PlayersContext';
import { Container } from "./styles";

interface NewPlayerModalProps {
  isOpen: boolean;
  handleCloseNewPlayerModal: () => void;
}

export function NewPlayerModal({ 
  isOpen, 
  handleCloseNewPlayerModal, 
}: NewPlayerModalProps) {

  const { addPlayer, players } = useContext(PlayersContext);

  const playersLimitRoom = players.length < 12;

  function handleAddPlayer() {
    addPlayer();
    handleCloseNewPlayerModal();
  }
    
  return (
    <Modal
      isOpen={isOpen}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <Container>
        <p>
          {playersLimitRoom 
            ? 'Um novo participante gostaria de entrar.' 
            : 'A sala esta cheia.' 
          }
        </p>
        <div>
            <button 
              onClick={handleAddPlayer}
              hidden={!playersLimitRoom}
            >
              Permitir
            </button>
            <button
              onClick={handleCloseNewPlayerModal}
            >
              {playersLimitRoom ? 'Não Permitir' : 'Ok' }
            </button>
        </div>
      </Container>
    </Modal>
  );
}