import React, { useState } from 'react'
import { makeStyles } from "@material-ui/core/styles";
import { Button, CssBaseline, Grid } from '@material-ui/core';
import Banner from './Banner';
import RoomCard from './RoomCard';
import DatePicker from './DatePicker';
import mockData from '../Mockdata';

const Home = () => {
  const classes = useStyles()
  const [showdates,setshowdates] = useState(false)

  return (
    <>
    <CssBaseline/>
    <div className={classes.root}>
      <div className={classes.dates}>
        <Button onClick={() => setshowdates(!showdates)}> 
          {
            showdates ? 'Hide' : 'Search dates'
          } 
        </Button>
        {
          showdates && <DatePicker />
        }
      </div>
      <Banner></Banner>
      <Grid container className={classes.section} spacing={3}>
        {
          mockData.map(({src,title,description},index) => (
            <Grid item sm='6' md='4' lg='3' >
              <RoomCard 
              src={src} 
              title={title}
              description={description}
              key={index}/>
            </Grid>
          ))
        }
      </Grid>
    </div>
    </>
  )
}

const useStyles = makeStyles((theme) => ({
  root:{
    display: 'flex',
    flexDirection:'column',
    margin: theme.spacing(2)
  },
  dates:{
    display: 'flex',
    flexDirection:'column',
    "& button":{
      border:'1px solid #ccc',
      backgroundColor: 'rgba(25, 158, 218,2)',
      color:'#fff',
      textTransform:'inherit',
      fontSize:'1.1rem',
      fontWeight:'bold',
    },
    "& button:hover":{
      backgroundColor: '#fff',
      color:'rgba(25, 158, 218,2)',
    }
  }
}))

export default Home
