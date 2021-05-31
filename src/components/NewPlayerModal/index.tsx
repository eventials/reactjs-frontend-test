import Modal from "react-modal";
import { Container } from "./styles";

interface NewPlayerModalProps {
  isOpen: boolean;
  handleCloseNewPlayerModal: () => void;
}

export function NewPlayerModal({ 
  isOpen, 
  handleCloseNewPlayerModal, 
}: NewPlayerModalProps) {
    
  return (
    <Modal
      isOpen={isOpen}
    >
      <Container>
        <p>Um novo player gostaria de entrar</p>
        <div>
          <button>
            Permitir
          </button>
          <button
            onClick={handleCloseNewPlayerModal}
          >
            Não quero que acesse
          </button>
        </div>
      </Container>
    </Modal>
  );
}