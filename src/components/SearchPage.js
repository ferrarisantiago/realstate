import React, { useState } from 'react';
import { makeStyles } from "@material-ui/core/styles";
import { Chip, Slider, Typography } from '@material-ui/core';
import mockData, { chips } from '../Mockdata';
import HighlightOffTwoToneIcon from '@mui/icons-material/HighlightOffTwoTone';
import Results from './Results';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { selectorstart } from '../features/startSlice';
import { selectorEnd} from '../features/endSlice';

function SearchPage() {
  const [value,setValue]=useState(400)
  const classes = useStyles()
  const start = useSelector(selectorstart)
  const end = useSelector(selectorEnd)

  console.log('Fecha start:' + start);
  console.log('Fecha end:' + end);
  console.log(mockData);

  const handleChange=(newValue)=>{
    setValue(newValue);
  }

  return (
    <div className={classes.root}>
      <Typography variant='h5' gutterBottom>
        Available Rooms
      </Typography>
      <div className={classes.chips}>
        {
          chips.map(data =>{
            let icon = <HighlightOffTwoToneIcon/>
            return(
              <Chip label={data.lavel}
                    key={data.key}
                    icon={icon}
                    className={classes.chipStyle}/>
            )
          })
        }
      </div>
      <div className={classes.selector}>
        <Typography gutterBottom>Prices</Typography>
        <Slider 
          value={value}
          onChange={handleChange}
          aria-labelledby='continuous-slider'
          defaultValue={400}
          max={400}
          min={100}
          valueLabelDisplay= 'on'
        />
      </div>
      {
        mockData
          .filter((data) => data.cat==='room')
          .filter((data) => data.price < value )
          .filter((data) => end < data.notAvailableStart || start > data.notAvailableEnd)
          .map(({src,title,description,price,stock},index) =>(
          <Results title={title} 
            key={index}
            src={src}
            description={description}
            price={price}
            stock={stock}
          />
        ))
      }
    </div>
  )
}

const useStyles = makeStyles((theme) => ({
  root:{

  },
  chips:{
    padding: theme.spacing(1)
  },
  chipStyle:{
    margin: theme.spacing(1)
  },
  selector:{
    width:'300px',
    marginLeft: theme.spacing(3)
  }
}
))

export default SearchPage
