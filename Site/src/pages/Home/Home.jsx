import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from "@material-ui/core/styles";
import { Container, Box, Typography, Grid } from '@material-ui/core';
import api from '../../services/api';
import {Link} from 'react-router-dom';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';


const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiFilledInput-root": {
      background: "#fff"
    }
  }
}));

function Home(){

    const [token, setToken] = useState('');  
    const client_id = 'e9fbd2df63c94ea68644daac5783b7d5';
    const client_secret = '3c635278395d46fe89d747c0a160d68b';
    const [change, setChange] = useState(true); 
    const [pesquisa, setPesquisa] = useState ("");
    const [musicas, setMusicas] = useState([]);

    function Pesquisa(){
      axios('https://accounts.spotify.com/api/token', {
        headers: {
          'Content-Type' : 'application/x-www-form-urlencoded',
          'Authorization' : 'Basic ' + (new Buffer(client_id + ':' + client_secret).toString('base64'))    
        },
        data: 'grant_type=client_credentials',
        method: 'POST'
      })
      .then(tokenResponse => {      
        setToken(tokenResponse.data.access_token);
  
        axios(`https://api.spotify.com/v1/search?q=${pesquisa.replace(' ', '+')}&type=track&limit=5`, {
          method: 'GET',
          headers: { 
              'Authorization' : 'Bearer ' + tokenResponse.data.access_token,
              'Content-Type': 'application/json'
          },
        })
        .then ( response => {        
          setMusicas(response.data.tracks.items)
          console.log(response.data.tracks.items)

        });
      });
    }

    return (
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        //justifyContent="center"
        style={{ minHeight: '100vh' }}
      >
        <Typography variant="h3" align="center">Searchfy</Typography> <br/><br/>

        <Paper
            component="form"
            sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400 }}
            >
            <InputBase
                onChange={(event) => {
                  setPesquisa(event.target.value)
                }} 
                sx={{ ml: 1, flex: 1 }}
                placeholder="Buscar Artistas"
            />
  

            <IconButton 
             onClick={ (e) => {
              e.preventDefault()
              Pesquisa()
            } }
              type="submit" 
              sx={{ p: '10px' }} 
              aria-label="search">
              <SearchIcon />
            </IconButton>
            <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />

        
            </Paper>

        { musicas && musicas.map(musica => (
              <><p>{musica.name}</p><p>{musica.album.name}</p></>
            ))}
        
    </Grid>

    )
}

export default Home;