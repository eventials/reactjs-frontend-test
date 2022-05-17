import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

interface BaseModalProps {
  toggleModal: boolean;
  setToggleModal: Function;
  children: JSX.Element;
}

export default function BaseModal({
  toggleModal,
  setToggleModal,
  children,
}: BaseModalProps) {
  return (
    <Modal
      open={toggleModal}
      onClose={() => setToggleModal(false)}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      {children}
    </Modal>
  );
}
