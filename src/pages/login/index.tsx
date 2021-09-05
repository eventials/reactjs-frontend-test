import React, { useContext, useState } from 'react';
import {
  LoginContainer,
  Container,
  Title,
  Text,
  ErrorMessage,
  InputLogin,
} from './styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { Context } from '../../Context/AuthContext';
import jwt from 'jsonwebtoken'
import Cookies from 'universal-cookie';
 


const Login = () => {
  const {authenticated, handleLogin} = useContext(Context);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isEmailInvalid, setIsEmailInvalid] = useState(false)
  const [isPasswordInvalid, setIsPasswordInvalid] = useState(false)

  const handleLoginClick = () => {
    if (email === "") {
      setIsEmailInvalid(true)
    }

    if (password === "") {
      setIsPasswordInvalid(true)
    }

    var token = jwt.sign({ email }, '0xfbtqn73b582b162v39n31819123626fs165152fs52b');
    const cookies = new Cookies();
    cookies.set('token', token, { path: '/' });
    handleLogin()
    // window.location.assign('/webnar');  
  }

  const onChangeEmail = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    setIsEmailInvalid(false)
    setEmail(e.target.value)
  }

  return (
    <LoginContainer>
      <Container>
        <Title>Login</Title>
        <Text>Adicione suas credenciais para acessar sua conta</Text>
        {(isEmailInvalid || isPasswordInvalid) && 
        <ErrorMessage>Preenchimento obrigatório</ErrorMessage>
        }
        <InputLogin>
          <TextField
            className="textInput"
            error={isEmailInvalid}
            label="Email"
            variant="outlined"
            size="small"
            value={email}
            onChange={(e) => onChangeEmail(e)}
          />
          <TextField
            className="textInput"
            error={isPasswordInvalid}
            label="Senha"
            variant="outlined"
            type="password"
            size="small"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </InputLogin>

        <Button onClick={handleLoginClick} variant="contained" color="primary" className="enterBtn">
          Entrar
        </Button>
      </Container>
    </LoginContainer>
  );
}

export default Login;
