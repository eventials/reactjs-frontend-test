import React from 'react';
import { LoginContainer, Title } from './styles';
import {  createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

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

  return (
    <LoginContainer>
      <div className="container">
        <Title>Login</Title>
        <p className="text">Adicione suas credenciais para acessar sua conta</p>
        <div className="inputLogin">
          <TextField id="outlined-basic" label="Email" variant="outlined" size="small" />
          <TextField id="outlined-basic" label="Senha" variant="outlined" type="password" size="small"/>
        </div>
        <Button variant="contained" color="primary" className="enterBtn">
          Entrar
        </Button>
      </div>
    </LoginContainer>
  );
}

export default Login;
