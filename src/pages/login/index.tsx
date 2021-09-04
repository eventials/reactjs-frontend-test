import React, { useContext, useState } from 'react';
import { LoginContainer, Title } from './styles';
import {  createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { Context } from '../../Context/AuthContext';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: '25ch',
      },
    },
  }),
);

const Login = () => {
  const {authenticated, handleLogin} = useContext(Context);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleClick = () => {
    console.log("handle click")
    handleLogin()
    console.log(authenticated)
    window.location.assign('/webnar');  
  }

  return (
    <LoginContainer>
      <div className="container">
        <Title>Login</Title>
        <p className="text">Adicione suas credenciais para acessar sua conta</p>
        <div className="inputLogin">
          <TextField id="outlined-basic" label="Email" variant="outlined" size="small" value={email} onChange={(e) => setEmail(e.target.value)}/>
          <TextField id="outlined-basic" label="Senha" variant="outlined" type="password" size="small" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>

        <Button onClick={handleClick} variant="contained" color="primary" className="enterBtn">
          Entrar
        </Button>
      </div>
    </LoginContainer>
  );
}

export default Login;
