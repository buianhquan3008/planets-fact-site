import { makeStyles } from '@material-ui/core';
import React from 'react';
import TemporaryDrawer from './Drawer';
import ListPlanet from './ListPlanet';

const useStyles = makeStyles((theme) => ({
    navbar: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingLeft: '10px',
        [theme.breakpoints.up('md')]: {
            flexDirection: 'column',
        },
        [theme.breakpoints.up('lg')]: {
            flexDirection: 'row',
        },
    },
    logo: {
        fontFamily: 'Antonio',
        fontStyle: 'normal',
        fontWeight: '400',
        fontSize: '28px',
        // lineHeight: '36px',
        letterSpacing: '-1.05px',
        textTransform: 'uppercase',
        color: '#FFFFFF',
    },
    menuButton: {
        color: 'white',
    },
    line: {
        background: '#FFFFFF',
        mixBlendMode: 'normal',
        opacity: 0.2,
        height: '1px',
        width: '100%',
    },
}));

export const Navbar = () => {
    const classes = useStyles();
    return (
        <>
            <div className={classes.navbar}>
                <div className={classes.logo}>THE PLANETS</div>
                <TemporaryDrawer />
                <ListPlanet />
            </div>
            <div className={classes.line}></div>
        </>
    );
};
