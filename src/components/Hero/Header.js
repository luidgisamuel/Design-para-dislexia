import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {IconButton } from '@material-ui/core';

import Botao from '../Botao/Botao';
import './Hero.css';
import { Howl } from 'howler';
import newSound from '../../public/kaitoReason.mp3';

const useStyles = makeStyles((theme) => ({
  appbar: {
    background: 'none',
  },
  appbarWrapper: {
    width: '80%',
    margin: '0 auto',
  },
  appbarTitle: {
    flexGrow: '1',
  },
  icon: {
    color: '#fff',
    fontSize: '2rem',
  },
  colorText: {
    color: '#5AFF3D',
  },
  container: {
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
  },
  title: {
    color: '#fff',
    fontSize: '2.5rem',
  },
  goDown: {
    color: '#5AFF3D',
    fontSize: '4rem',
  },
}));



export default function Header() {

  const audio = newSound;

  const callMySound = (src) => {
    const sound = new Howl({
      src,
      html5: true,
  });
    sound.play();
  }
  

  return (
    <div id="header">
      
    
      
        <section >
          <div className="hero-group">
            <h2>Bem vindo ao Titulo</h2>
            <h3>Descubra diferentes formas de se expressar</h3>
          </div>

          <button onClick={() => callMySound(audio)}>teste audio</button>        
            <IconButton>
              <Botao titulo="Ver mais" />
            </IconButton>
          
        </section>
     
    </div>
  );
}