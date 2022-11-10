import { IconButton, makeStyles } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import React from 'react';
import ButtonPlanet from './ButtonPlanet' 

const useStyles = makeStyles((theme) => ({
  navbar: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px',
  },
  logo: {
    fontFamily: 'Antonio',
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: '28px',
    lineHeight: '36px',
    letterSpacing: '-1.05px',
    textTransform: 'uppercase',
    color: '#FFFFFF',
  },
  menuButton: {
    color: 'white',
  },
  line: {
    background: "#FFFFFF",
    mixBlendMode: 'normal',
    opacity: 0.2,
    height: '1px',
    width: '100%',
  }
}));

export const Navbar = () => {
  const classes = useStyles();
  return (
    <>
      <div className={ classes.navbar }>
        <div className={ classes.logo }>THE PLANETS</div>
        <IconButton edge="start" className={ classes.menuButton } color="inherit" aria-label="menu">
          <MenuIcon />
        </IconButton>
      </div>
      <div className={ classes.line }></div>
      <ButtonPlanet />
    </>
  )
}
