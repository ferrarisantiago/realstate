import { Paper, Typography } from '@material-ui/core'
import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import accounting from 'accounting';

const Results = ({src,title,description,price,stock}) => {
    const classes = useStyles()
  return (
    <Paper className={classes.root}>
        <div className={classes.left}>
            <img src={src} className={classes.image} alt={title}/>
        </div>
        <div className={classes.right}>
            <Typography variant='h6'> {title} </Typography>
            <Typography variant='body1'> {description} </Typography>
            <Typography variant='body1'> Price per night:  <span className={classes.number}> {accounting.formatMoney(price,'AUD ') }</span> </Typography>
            <Typography variant='body1'>Rooms Available <span className={classes.number}>{stock}</span>  </Typography>
        </div>
    </Paper>
  )
}

const useStyles = makeStyles((theme) => ({
    root:{
        display:'flex',
        justifyContent: 'flexStart',
        margin:theme.spacing(1),
        [theme.breakpoints.down('xs')]:{
            display: 'block'
          },
    },
    image:{
        maxWidth:'400px',
        height: 'auto',
        borderRadius:'10px',
        [theme.breakpoints.down('xs')]:{
            height:'200px'
          },
    },
    left:{
        margin: theme.spacing(2,5,5,5)
    },
    number:{
        fontWeight: '1000',
        marginLeft: theme.spacing(2),
        fontSize: '1.1rem'
    }
}))

export default Results
