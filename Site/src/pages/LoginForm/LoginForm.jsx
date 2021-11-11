import React, {useState} from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from "@material-ui/core/styles";
import { Container, Box, Typography, Grid } from '@material-ui/core';
import api from '../../services/api';
import {Link} from 'react-router-dom';
import { useAuth } from '../../contexts/auth';

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiFilledInput-root": {
      background: "#fff"
    }
  }
}));


function LoginForm(){
    const classes = useStyles();
    const {setUser, setEmail, setSenha, email, senha} = useAuth()

    async function handleLogin(){
      await api.post('users/access', {
        email: email,
        senha: senha
      })
      .then(result => {
        if(result.data != ""){
         setUser(result.data)
        } else {
          alert("Usuário ou senha inválido")
        }
      })
      .catch(erro => console.log(erro))
    }

    return (
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justifyContent="center"
        style={{ minHeight: '100vh' }}
      >
        <h1>Searchfy</h1><br/><br/>
          <form> 
            <TextField 
              value={email}
              onChange={(event) => {
                setEmail(event.target.value)
              }} 
              className={classes.root} 
              id="email" 
              label="Email" 
              variant="filled" 
              margin="normal" 
              fullWidth/>

            <TextField
              value={senha}
              onChange={(event) => {
                setSenha(event.target.value)
              }}  
              className={classes.root} 
              id="senha" 
              label="Senha" 
              type="password" 
              variant="filled" 
              margin="normal" fullWidth/>

            <br/> <br/>
            <Box display="flex" justifyContent="space-between">
            <Button onClick={() => handleLogin()} variant="contained" color="primary">Entrar</Button>
            <Button component={Link} to={'/register'} type="submit" variant="contained" color="primary">Crie uma Conta</Button> 
            </Box>
         </form>
    </Grid>
    )
}

export default LoginForm;