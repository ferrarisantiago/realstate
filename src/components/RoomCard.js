import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from '@material-ui/core';

const RoomCard = ({src,title,description}) => {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <Typography variant='h5' color='textPrimary'>{title}</Typography>
      <Typography variant='h6' color='textSecondary'>{description}</Typography>
      <figure className={classes.figure}>
        <img className={classes.media} src={src} alt={title}/>
      </figure>
    </div>
  )
}

const useStyles = makeStyles((theme) => ({
  root:{
    margin: theme.spacing(4,0,2,0),
    [theme.breakpoints.down('xs')]:{
      '& h6':{
        wordWrap:'break-word'
      }
    },
  },
  figure:{
    overflow:'hidden',
  },
  media:{
    height:'400px',
    width:'600px',
    objectFit:'cover',
    [theme.breakpoints.down('xs')]:{
      height:'200px'
    },
    transform: 'scale(1.1)',
    WebkitTransform: 'scale(1.1)',
    transition: '.4s ease-in-out',
    WebkitTransition: '.4s ease-in-out',
    '&:hover':{
      transform: 'scale(1)',
      WebkitTransform: 'scale(1)',
    }
  }
}))

export default RoomCard
