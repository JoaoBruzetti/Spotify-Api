import React, {useState} from 'react';
import axios from 'axios';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from "@material-ui/core/styles";
import { Container, Box, Typography, Grid } from '@material-ui/core';
import {Link} from 'react-router-dom';


import api from '../../services/api';
 
const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiFilledInput-root": {
      background: "#fff"
    }
  }
}));


function RegisterForm(){
    const classes = useStyles();
    const [nome, setNome] = useState("");
    const [email, setEmail] = useState ("");
    const [telefone, setTelefone] = useState ("");
    const [senha, setSenha] = useState ("");
 
    async function handleSubmit(){
      await api.post('users/save', {
        nome: nome,
        email: email,
        telefone: telefone,
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

        <Typography variant="h3" align="center">Crie sua Conta</Typography> <br/><br/>
          <form > 

            <TextField 
              value={nome}
              onChange={(event) => {
                setNome(event.target.value)
              }} 
              className={classes.root} 
              id="nome"
              label="Nome" 
              variant="filled" 
              margin="normal" 
              fullWidth/>

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
              value={telefone}
              onChange={(event) => {
                setTelefone(event.target.value)
              }} 
              className={classes.root}
              id="telefone"
              label="Telefone" 
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
              margin="normal" 
              fullWidth/>

            <br/> <br/>
            <Box display="flex" justifyContent="space-between">
            <Button component={Link} to={'/login'} onClick={() => handleSubmit()} variant="contained" color="primary">Criar Conta</Button>
            <Button component={Link} to={'/login'} type="submit" variant="contained" color="primary">Voltar</Button>
            </Box>
         </form>
    </Grid>
    )
}

export default RegisterForm;