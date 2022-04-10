import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useOwner } from "../../hooks/useOwner";

import logoImage from "../../assets/logo-eventials.svg";
import {
  Button,
  Container,
  Image,
  Input,
  LoginWrapper,
  Subtitle,
} from "./styles";

export function Home() {
  const [ownerName, setOwnerName] = useState("");
  const { createWebinar } = useOwner();
  const navigate = useNavigate();

  function handleInputChange(value: string) {
    setOwnerName(value);
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    ownerName
      ? createWebinar(ownerName)
          .then(() => {
            navigate("/webinar-room");
          })
          .catch((e) => console.warn(e))
      : alert("Você deve preencher o campo com um nome para continuar.");
  }

  return (
    <Container>
      <LoginWrapper>
        <Image src={logoImage} alt="Logo Eventials" />
        <Subtitle>Comece seu Webinar</Subtitle>
        <form action="submit" onSubmit={(e) => handleSubmit(e)}>
          <Input
            type="text"
            placeholder="Seu nome"
            onChange={(event) => handleInputChange(event.target.value)}
          />
          <Button type="submit">Iniciar webinar</Button>
        </form>
      </LoginWrapper>
    </Container>
  );
}
