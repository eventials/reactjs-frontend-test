import { BaseButton, BaseInput, BaseModal } from "components";
import { useState } from "react";

export default function ModalAddUser({
  toggleModal,
  setToggleModal,
  onAddUser,
}) {
  const [name, setName] = useState("");

  return (
    <BaseModal toggleModal={toggleModal} setToggleModal={setToggleModal}>
      <div>
        <BaseInput
          label="Digite o nome do usuário"
          onChange={(event) => setName(event.target.value)}
        />
        <BaseButton text="Adicionar" onClick={() => onAddUser(name)} />
      </div>
    </BaseModal>
  );
}
