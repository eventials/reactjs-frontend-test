import { BaseModal } from "components";
import { Container, Text } from "./styles";

export default function ModalAlertOwner({ toggleModal, setToggleModal }) {
  return (
    <BaseModal toggleModal={toggleModal} setToggleModal={setToggleModal}>
      <Container>
        <Text>Para adicionar um novo usuário aperte a tecla "u"</Text>
      </Container>
    </BaseModal>
  );
}
