import { BaseButton, BaseInput, BaseModal } from "components";
import { useState } from "react";
import { Container } from "./styles";

export default function ModalAddUser({
  toggleModal,
  setToggleModal,
  onAddUser,
}) {
  const [name, setName] = useState("");

  return (
    <BaseModal toggleModal={toggleModal} setToggleModal={setToggleModal}>
      <Container>
        <BaseInput
          label="Digite o nome do usuário"
          onChange={(event) => setName(event.target.value)}
          sx={{ mb: "16px" }}
        />
        <BaseButton
          text="Adicionar"
          onClick={() => onAddUser(name)}
          sx={{ width: "fit-content" }}
        />
      </Container>
    </BaseModal>
  );
}
