import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { IconButton } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import data from '../data.json';

const useStyles = makeStyles({
    list: {
        marginTop: 70,
        width: 600,
        color: 'white',
    },
    paper: {
        background: 'transparent',
    },
    menuButton: {
        color: 'white',
    },
});

export default function TemporaryDrawer() {
    const classes = useStyles();
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
            <List>
                {data.map((item, index) => (
                    <ListItem button key={item.name}>
                        <ListItemText primary={item.name} />
                    </ListItem>
                ))}
            </List>
        </div>
    );

    return (
        <div>
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
