import React from 'react';
import './Footer.css';

//Icons
import PlayCircleOutlineOutlinedIcon from '@material-ui/icons/PlayCircleOutlineOutlined';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import ShuffleOutlinedIcon from '@material-ui/icons/ShuffleOutlined';
import RepeatIcon from '@material-ui/icons/Repeat';
import VolumeDownIcon from '@material-ui/icons/VolumeDown';
import PlaylistPlayIcon from '@material-ui/icons/PlaylistPlay';

import { Grid, Slider } from '@material-ui/core';


function Footer() {
  return (
    <div className='footer'>
        <div className='footer__left'>
            <img className='footer__albumLogo' src='https://upload.wikimedia.org/wikipedia/en/7/74/Usher_-_Confessions_album_cover.jpg' alt='Album-Cover' />
            <div className='footer__songInfo'>
              <h4>Yeah!</h4>
              <p>Usher</p>
            </div>
        </div>

        <div className='footer__center'>
            <ShuffleOutlinedIcon className='footer__green' />
            <SkipPreviousIcon className='footer__icon' />
            <PlayCircleOutlineOutlinedIcon fontSize='large' className='footer__icon' />
            <SkipNextIcon className='footer__icon' />
            <RepeatIcon className='footer__green' />
        </div>

        <div className='footer__right'>
            <Grid container spacing={2} >
              <Grid item>
                <PlaylistPlayIcon />
              </Grid>
              <Grid item>
                <VolumeDownIcon />
              </Grid>
              <Grid item xs>
                <Slider />
              </Grid>
            </Grid>

        </div>
    </div>
  )
}

export default Footer