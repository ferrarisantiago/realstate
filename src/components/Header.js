import { AppBar, Avatar, Drawer, IconButton, InputBase, List, ListItem, Toolbar, Typography} from '@mui/material'
import { makeStyles } from "@material-ui/core/styles";
import React, { useEffect, useState } from 'react'
import logo from '../components/images/logo.jpg'
import icon from '../components/images/search.png'
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';

const Header = () => {
    const classes = useStyles()
    const [tablet, setTablet] = useState(true)
    const [draweropen,setDraweropen] = useState(false)
    const headerData = ['My account','Previous bookings', 'log out']

    useEffect(()=>{
        const responsiveness =() => window.innerWidth < 900 ? setTablet(true): setTablet(false)
        responsiveness();
        window.addEventListener('resize',()=> responsiveness())
    })

    const displayTablet = ()=> {

        const handleDrawerOpen = () => {
            setDraweropen(true)
        }
        const handleDrawerClose = () => {
            setDraweropen(false)
        }
        const getDrawerChoices =() => {
            return headerData.map((data)=>{
                return(
                    <List>
                        <ListItem>{data}</ListItem>
                    </List>
                )
            })
        }

        return(
        <Toolbar className={classes.toolbar}>
            <IconButton {...{
                edge:'start',
                color:'#ccc',
                'aria-label': 'menu',
                'aria-hhaspopup': 'true',
                onClick: handleDrawerOpen,
            }}>
                <MenuIcon fontSize='large'/>
            </IconButton>
            <Drawer {...{
                anchor: 'left',
                open: draweropen,
                onClose:handleDrawerClose,
            }}>
                <div>{getDrawerChoices()}</div>
            </Drawer>
            <Link to='/'>
            <img src={logo} alt='logo' className={classes.logo}/>
            </Link>
            <div className={classes.center}>
                <InputBase fullWidth placeholder='Search...' className={classes.inputBase}/>
                <img src={icon} alt='Search' className={classes.search}/>
            </div>
            <div className={classes.right}>
                <Typography color="#000">
                    Login
                    <Avatar/>
                </Typography>
            </div>
        </Toolbar>)
    }

    const displayDesktop = ()=> (
        <Toolbar className={classes.toolbar}>
            <Link to='/'>
                <img src={logo} alt='logo' className={classes.logo}/>
            </Link>
            <div className={classes.center}>
                <InputBase fullWidth placeholder='Search...' className={classes.inputBase}/>
                <img src={icon} alt='Search' className={classes.search}/>
            </div>
            <div className={classes.right}>
                <Typography color="#000">
                    Login
                    <Avatar/>
                </Typography>
            </div>
        </Toolbar>
    )

  return (
    <AppBar position='sticky' className={classes.root}>
        {
            tablet ? displayTablet(): displayDesktop()
        }
    </AppBar>
  )
}

const useStyles = makeStyles((theme) => ({
    root:{
        "&.MuiPaper-root":{
            backgroundColor:"#fafafa" 
          },
        top:0,
        zIndex:99,
        width:"100vw"
    },
    toolbar:{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems:'center',
    },
    logo:{
        width: '150px',
        height: 'auto',
        margin: theme.spacing(1,0,0,0),
        objectFit:'contain',
        borderRadius:'99px',
    },
    search:{
        width: '50px',
        height: 'auto',
    },
    inputBase:{
        fontSize:"1.2rem",
        padding: theme.spacing(1,5,1,5)
    },
    center:{
         display:'flex',
         alignItems:'center',
         padding: theme.spacing(1),
         margin: theme.spacing(1),
         border:'1px solid lightgrey',
         borderRadius:'999px',
         minWidth:'220px'
    },
    right:{
        display:'flex',
        alignItems:'center',
        marginLeft:theme.spacing(3)
    },
}))

export default Header
