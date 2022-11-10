import { Button, makeStyles } from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles((theme) => ({
  button: {
    color: 'white',
    // background: 'white'
  }

}));

export default function ButtonPlanet() {
  const classes = useStyles();

  return (
    <div className={classes.button }>
      <div>Mercury</div>
    </div>
  )
}
