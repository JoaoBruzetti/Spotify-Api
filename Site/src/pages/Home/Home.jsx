import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { makeStyles } from "@material-ui/core/styles";
import {  Grid } from '@material-ui/core';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import { AiFillSetting } from "react-icons/ai";
import {useAuth} from "../../contexts/auth"
import api from '../../services/api';


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
    const [pesquisa, setPesquisa] = useState ("");
    const [musicas, setMusicas] = useState([]);
    const {user, setUser, email, senha} = useAuth()

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
  
        axios(`https://api.spotify.com/v1/search?q=${pesquisa.replace(' ', '+')}&type=track&limit=24`, {
          method: 'GET',
          headers: { 
              'Authorization' : 'Bearer ' + tokenResponse.data.access_token,
              'Content-Type': 'application/json'
          },
        })
        .then ( response => {        
          setMusicas(response.data.tracks.items)

        });
      });
    }

    async function deleteUser(){
      await api.post('users/delete', {
        email, senha
      })
      .then(result => {
        if(result.data != ""){
         setUser(null)
        } 
      })
      .catch(erro => console.log(erro))
    }
    
    console.log(email, senha)

    return (
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        style={{ minHeight: '100vh' }}
        xs={12}
      >
  
        <div class="dropdown">
          <AiFillSetting size="5%" class="mainmenubtn"/>
          <div class="dropdown-child">
            <p onClick={() => setUser(null)}>Sair</p>
            <p onClick={() => deleteUser()} >Excluir Conta</p>
          </div>
        </div>

        <div class="cima">
        <h1>Searchfy</h1>
        </div>

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

        
            </Paper>

            <div class="cards">

              { musicas && musicas.map(musica => (
                  <div class="card">

                 
                  <a href={musica.external_urls.spotify} target="_blank">
                  <img 
                  src={musica.album.images[0].url}
                  width= '200rem'
                  />
                
                  <p><bold>{musica.artists[0].name} - {musica.name} </bold></p>

                  <p><bold>Album:</bold> {musica.album.name}</p>
                  </a>
                  </div>

              ))}
            
          </div>

    </Grid>

    )
}

export default Home;