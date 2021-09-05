import React, { useState } from 'react';
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
import jwt from 'jsonwebtoken'
import Cookies from 'universal-cookie';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isEmailInvalid, setIsEmailInvalid] = useState(false)
  const [isPasswordInvalid, setIsPasswordInvalid] = useState(false)

  const login = () => {
    var token = jwt.sign({ email }, '0fbda573b582b162f39n31819123626fs165152fa52b');
    const cookies = new Cookies();
    cookies.set('auth_token', token, { path: '/' });
    localStorage.removeItem('participants')
    window.location.assign('/webinar');
  }
  
  const checkEmailIsInvalid = () => {
    if(email === "") {
      setIsEmailInvalid(true)
      return true
    }
    return false
  }
  
  const checkPasswordIsInvalid = () => {
    if(password === "") {
      setIsPasswordInvalid(true)
      return true
    }
    return false
  }
  
  const handleLoginClick = () => {
    if(checkEmailIsInvalid() && checkPasswordIsInvalid()) {
      return
    } else if(!isEmailInvalid && !isPasswordInvalid) {
      login()
    }
  }

  const onChangeEmail = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    setIsEmailInvalid(false)
    setEmail(e.target.value)
  }

  const onChangePassword = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    setIsPasswordInvalid(false)
    setPassword(e.target.value)
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
            onChange={(e) => onChangePassword(e)}
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
