import { makeStyles } from '@material-ui/core';
import React from 'react';
import data from '../data.json';

const useStyles = makeStyles((theme)=>(console.log('dfdf', theme),{
  ul: {
    margin: 0,
    color: 'white',
    listStyle: 'none',
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  li: {
    padding: 16,
    height: 20,
    width: 54,
    borderTop: '3px solid transparent',
    marginRight: 20,
    fontFamily: 'League Spartan',
    fontStyle: 'normal',
    fontWeight: 700,
    fontSize: '14px',
    // lineHeight: '25px',
    letterSpacing: '1px',
    textTransform: 'uppercase',
    color: '#FFFFFF',
    mixBlendMode: 'normal',
    opacity: 0.75,
    cursor: 'pointer',
    "&:hover, &:focus": {
      borderTop: '3px solid white',
    },
    // textAlign: 'center',
    display: 'flex',
    justifyContent: 'center'
  },
}));


export default function ListPlanet() {
  const classes = useStyles({color: 'red'});
  return (
      <ul className={classes.ul}>
        { data.map(planet=>{
          console.log('------------', classes.li);
          // classes.li['&:hover, &:focus']['borderTop'] = '3px solid red'
          return <li key={planet.name} className={classes.li} id={planet.color}>{planet.name}</li>}
        )}
      </ul>
  )
}
