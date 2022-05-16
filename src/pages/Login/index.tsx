import { BaseInput } from "components";
import { Button, Container, LoginWrapper } from "./styles";
import { MdArrowForwardIos } from "react-icons/md";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

interface loginFormProps {
  email: string;
  password: string;
}

export default function Login() {
  const [loginForm, setLoginForm] = useState<loginFormProps>({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  return (
    <Container>
      <LoginWrapper>
        <BaseInput
          label="Usuário*"
          onChange={(event) =>
            setLoginForm((prev) => ({ ...prev, email: event.target.value }))
          }
          value={loginForm.email}
          sx={{ marginBottom: "16px" }}
        />
        <BaseInput
          label="Senha*"
          onChange={(event) =>
            setLoginForm((prev) => ({ ...prev, password: event.target.value }))
          }
          value={loginForm.password}
          sx={{ marginBottom: "32px" }}
        />
        <Button
          text="Entrar"
          onClick={() => navigate("/home")}
          endIcon={<MdArrowForwardIos />}
        />
      </LoginWrapper>
    </Container>
  );
}
