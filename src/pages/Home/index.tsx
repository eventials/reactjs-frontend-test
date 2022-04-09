import {
  Button,
  Container,
  Image,
  Input,
  LoginWrapper,
  Subtitle,
} from "./styles";

import logoImage from "../../assets/logo-eventials.svg";

export function Home() {
  return (
    <Container>
      <LoginWrapper>
        <Image src={logoImage} alt="Logo Eventials" />
        <Subtitle>Comece seu Webinar</Subtitle>
        <Input type="text" placeholder="Seu nome" />
        <Button>Iniciar webinar</Button>
      </LoginWrapper>
    </Container>
  );
}
