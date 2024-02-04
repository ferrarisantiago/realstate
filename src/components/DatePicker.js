import React,{ useState } from 'react'
import { makeStyles } from "@material-ui/core/styles";
import {Button, InputBase, Typography } from '@material-ui/core';
import { People } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import Calendar from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useDispatch } from 'react-redux';
import { setStart} from '../features/startSlice';
import { setEnd} from '../features/endSlice';
import { enAU } from 'date-fns/locale';

const DatePicker = () => {

    const classes = useStyles()
    const dispatch = useDispatch();

    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());


    const onChange = (dates) => {
        console.log('Fechas recibidas en onChange:', dates);
        const [start, end] = dates;

        setStartDate(start);
        setEndDate(end); 

        console.log(start);
        console.log(end);

        if (start && (!startDate || start.toISOString() !== startDate.toISOString())) {
            setStartDate(start);
            console.log('despachando start:' + start);
            dispatch(setStart(start.toISOString()));
        }
        if (end) {
            setEndDate(end);
            console.log('despachando end:' + end);
            dispatch(setEnd(end.toISOString()));
        }
    }

      return (
             <div className={classes.root}>
                <Calendar
                    selected={startDate}
                    onChange={onChange}
                    startDate={startDate}
                    endDate={endDate}
                    selectsRange
                    inline
                    showDisabledMonthNavigation
                    locale={enAU}
                />
                <div className={classes.inputSection}>
                    <Typography variant='h6'> Number of guests</Typography>
                    <div className={classes.guest}>
                        <InputBase placeholder='2pax' 
                            inputProps={{className:classes.input, type: 'number'}}
                        />
                        <People/>
                    </div>
                    <Button component={Link} to="/search" variant="contained">
                        Search rooms
                    </Button>
                </div>
            </div>  
      )
}

const useStyles = makeStyles((theme) => ({
    root:{
        position: 'absolute',
        top:'18vh',
        left:'39vh',
        zIndex:'50',
    },
    inputSection:{
        display:'Flex',
        flexDirection: 'column',
        backgroundColor: '#fff',
        "& h6":{
            textAlign:'center'
        },
        
        "& button:hover":{
            background:'#1D5DEC',
            color:'#fff'
        }
    },
    guest:{
        display:'Flex',
        justifyContent:'center'
    },
    input:{
        width: '5vw',
        border: '1px solid #ccc',
        margin: theme.spacing(0,2,2,0),
        padding: theme.spacing(1,0,0,2)
    }
}))

export default DatePicker

