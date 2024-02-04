import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import { Button, Typography } from '@material-ui/core';
import viewRoom from '../components/images/baner.jpg';

const Banner = () => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <div className={classes.info}>
        <Typography variant='h2'>
          Plan your get away...
        </Typography>
        <Button variant='contained'> Check our rooms </Button>
      </div>
    </div>
  )
}

const useStyles = makeStyles((theme) => ({
  root:{
    height:'50vh',
    position: 'relative',
    backgroundImage: `url(${viewRoom})`,
    backgroundPosition:'center',
    backgroundSize:'cover',
  },
  info:{
    backgroundColor:'#000',
    color: '#fff',
    width:'350px',
    padding: theme.spacing(2),
    "& h2":{
      marginBotton: theme.spacing(4),
    },
    "& button":{
      backgroundColor: 'rgba(45, 85, 255,2)',
      color:'#fff',
      textTransform:'inherit',
      fontSize:'1.1rem',
      fontWeight:'bold',
    },
    "& button:hover":{
      backgroundColor: '#fff',
      color:'rgba(45, 85, 255,2)',
    }
  }
}))

export default Banner
