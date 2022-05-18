import { BaseInput } from "components";
import { Button, Container, LoginWrapper } from "./styles";
import { MdArrowForwardIos } from "react-icons/md";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "context/AuthContext";

interface loginFormProps {
  username: string;
  password: string;
}
const FAKE_JWT =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c";

export default function Login() {
  const { token, setToken } = useContext(AuthContext);

  const [loginForm, setLoginForm] = useState<loginFormProps>({
    username: "",
    password: "",
  });

  const navigate = useNavigate();

  function onClickLogin() {
    if (!loginForm.username || !loginForm.password) return;
    setToken(FAKE_JWT);
  }

  useEffect(() => {
    if (token) {
      navigate("/home");
    }
  }, [token, navigate]);

  return (
    <Container>
      <LoginWrapper>
        <BaseInput
          label="Usuário*"
          onChange={(event) =>
            setLoginForm((prev) => ({ ...prev, username: event.target.value }))
          }
          value={loginForm.username}
          sx={{ marginBottom: "16px" }}
        />
        <BaseInput
          label="Senha*"
          onChange={(event) =>
            setLoginForm((prev) => ({ ...prev, password: event.target.value }))
          }
          type="password"
          value={loginForm.password}
          sx={{ marginBottom: "32px" }}
        />
        <Button
          text="Entrar"
          onClick={() => onClickLogin()}
          endIcon={<MdArrowForwardIos />}
        />
      </LoginWrapper>
    </Container>
  );
}
