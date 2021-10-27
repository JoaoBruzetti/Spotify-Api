import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from "@material-ui/core/styles";
import { Container, Box, Typography, Grid } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiFilledInput-root": {
      background: "#fff"
    }
  }
}));

function RegisterForm(){
    const classes = useStyles();
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
            <TextField className={classes.root} id="email" label="Email" variant="filled" margin="normal" fullWidth/>
            <TextField className={classes.root} id="senha" label="Senha" type="password" variant="filled" margin="normal" fullWidth/>
            <br/> <br/>
            <Box display="flex" justifyContent="space-between">
            <Button type="submit" variant="contained" color="primary">Entrar</Button>
            <Button type="submit" variant="contained" color="primary">Registrar</Button>
            </Box>
         </form>
    </Grid>
    )
}

export default RegisterForm