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

  const { addPlayer } = useContext(PlayersContext)

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
        <p>Um novo participante gostaria de entrar.</p>
        <div>
          <button onClick={handleAddPlayer}>
            Permitir
          </button>
          <button
            onClick={handleCloseNewPlayerModal}
          >
            Não
          </button>
        </div>
      </Container>
    </Modal>
  );
}