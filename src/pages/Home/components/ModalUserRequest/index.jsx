import { BaseButton, BaseModal } from "components";
import { Container, Text, ButtonContainer } from "./styles";

export default function ModalUserRequest({
  toggleModal,
  setToggleModal,
  requestedUser,
  onAcceptUser,
  onRejectUser,
}) {
  return (
    <BaseModal toggleModal={toggleModal} setToggleModal={setToggleModal}>
      <Container>
        <Text>{requestedUser} está requisitando entrar na chamada</Text>

        <ButtonContainer>
          <BaseButton
            text="Recusar"
            onClick={() => onRejectUser()}
            variant="secondary"
            sx={{ width: "fit-content", color: "red" }}
          />
          <BaseButton
            text="Aceitar"
            onClick={() => onAcceptUser(requestedUser)}
            sx={{ width: "fit-content" }}
          />
        </ButtonContainer>
      </Container>
    </BaseModal>
  );
}
