import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from '@material-ui/core';

const Footer = () => {
    const classes = useStyles()
  return (
    <div className={classes.root}>
      <Typography variant='subtitle1' gutterBottom>
        2019 Copyright by Ferrari Santiago - Software Developer
      </Typography>
      <Typography variant='subtitle1' gutterBottom>
        Privacy . Terms. SiteMap
      </Typography>
    </div>
  )
}

const useStyles = makeStyles((theme) => ({
    root:{
        borderTop: '1px solid #ccc',
        textAlign: 'center',
        fontSize: 'italic',
        marginTop: theme.spacing(2),
        background: 'whitesmoke'
    }
}
))

export default Footer
