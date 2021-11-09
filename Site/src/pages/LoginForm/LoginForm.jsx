import React, {useState} from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from "@material-ui/core/styles";
import { Container, Box, Typography, Grid } from '@material-ui/core';
import api from '../../services/api';
import {Link} from 'react-router-dom';


const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiFilledInput-root": {
      background: "#fff"
    }
  }
}));

function LoginForm(){
    const classes = useStyles();
    const [email, setEmail] = useState ("");
    const [senha, setSenha] = useState ("");

    async function handleLogin(){
      await api.post('users/acess', {
        email: email,
        senha: senha
      })
      .then(result => console.log(result))
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
        <Typography variant="h3" align="center">Searchfy</Typography> <br/><br/>
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