import Box from "@mui/material/Box";
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
  borderRadius: 6,
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
      <Box sx={ style }>{children}</Box>
    </Modal>
  );
}