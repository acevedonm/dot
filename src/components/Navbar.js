import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import logo from "../assets/logo.jpg"
import { Badge, Button } from "@material-ui/core";
import { ShoppingCart } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginBottom: "7rem",
  },
  appBar: {
    backgroundColor: "#FBF4EC",
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
    grow: {
    flexGrow: 1,
  },
  img:{
    marginRight: "0",
    marginLeft: "0",
      height: "2rem",
      padding: 0,
      margin: 0
  }
}));

export default function Navbar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar className={classes.appBar} position="fixed"/*poniendo static la barra queda arriba*/>
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <IconButton>
              <img src={logo} className={classes.img}></img>
          </IconButton>
          <div className={classes.grow} />

          <Typography variant="h6" >
            ¡Bienvenidos!
          </Typography>
          <Button color="inherit" variant="outlined">Login</Button>
          <IconButton aria-label='show cart items' color='inherit'>
                <Badge badgeContent={20} color='secondary'>
                  <ShoppingCart fontSize='large' color='primary' />
                </Badge>
              </IconButton>
        </Toolbar>
      </AppBar>
    </div>
  );
}
