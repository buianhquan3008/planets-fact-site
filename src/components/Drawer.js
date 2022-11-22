import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import { IconButton } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import data from '../data.json';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';

const useStyles = makeStyles((theme) => ({
    list: {
        marginTop: 20,
        width: '100vw',
        color: 'white',
        background: 'transparent',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    listWrap: {
        width: '90vw',
    },
    item: {
        padding: 20,
        width: '100%',
        borderBottom: '1px solid rgba(255, 255, 255, 0.2)',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    paper: {
        background: '#070724',
        display: 'block',
        // height: 'calc(100% - 60px)',
        top: 50,
        [theme.breakpoints.up('md')]: {
            display: 'none',
        },
    },
    slide: {
        // background: 'transparent',
        display: 'block',
        [theme.breakpoints.up('md')]: {
            display: 'none',
        },
    },
    menuButton: {
        color: 'white',
    },
    circleColor: {
        width: 20,
        height: 20,
        background: 'red',
        marginRight: 15,
        borderRadius: '50%',
    },
    text: {
        fontFamily: 'League Spartan',
        fontStyle: 'normal',
        fontWeight: 700,
        fontSize: '20px',
        lineHeight: '25px',
        letterSpacing: '1.36364px',
        textTransform: 'uppercase',
        color: 'white',
    },
    itemText: {
        display: 'flex',
    },
    icon: {
        color: 'rgba(255, 255, 255, 0.2)',
    },
    drawer: {
        display: 'block',
        [theme.breakpoints.up('md')]: {
            display: 'none',
        },
    },
}));

export default function TemporaryDrawer({ planetId, setPlanetId }) {
    const classes = useStyles({ data });
    const [state, setState] = React.useState({
        left: false,
    });

    const toggleDrawer = (anchor, open) => (event) => {
        if (
            event.type === 'keydown' &&
            (event.key === 'Tab' || event.key === 'Shift')
        ) {
            return;
        }

        setState({ ...state, [anchor]: open });
    };

    const list = (anchor) => (
        <div
            className={classes.list}
            role='presentation'
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >
            <List className={classes.listWrap}>
                {data.map((item, index) => (
                    <ListItem
                        button
                        key={item.name}
                        className={classes.item}
                        onClick={() => setPlanetId(item.id)}
                    >
                        <div className={classes.itemText}>
                            <div
                                className={classes.circleColor}
                                style={{ background: item.color }}
                            ></div>
                            <div className={classes.text}>{item.name}</div>
                        </div>
                        <ChevronRightIcon className={classes.icon} />
                    </ListItem>
                ))}
            </List>
        </div>
    );

    return (
        <div className={classes.drawer}>
            <React.Fragment key='left'>
                <IconButton
                    edge='start'
                    className={classes.menuButton}
                    color='inherit'
                    aria-label='menu'
                    onClick={toggleDrawer('left', true)}
                >
                    <MenuIcon />
                </IconButton>

                <Drawer
                    anchor='left'
                    open={state['left']}
                    onClose={toggleDrawer('left', false)}
                    classes={{ paper: classes.paper }}
                >
                    {list('left')}
                </Drawer>
            </React.Fragment>
        </div>
    );
}
