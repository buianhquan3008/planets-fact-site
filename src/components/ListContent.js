import { makeStyles } from '@material-ui/core';
import React from 'react';
import data from '../data.json';

const useStyles = makeStyles((theme) => ({
    ul: {
        margin: 0,
        color: 'white',
        listStyle: 'none',
        display: 'flex',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        [theme.breakpoints.up('md')]: {
            display: 'none',
        },
    },
    li: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 16,
        height: 16,
        width: 70,
        background: 'transparent',
        fontFamily: 'League Spartan',
        fontStyle: 'normal',
        fontWeight: 700,
        fontSize: '13px',
        lineHeight: '10px',
        textAlign: 'center',
        letterSpacing: '1.92857px',
        textTransform: 'uppercase',
        color: '#FFFFFF',
        cursor: 'pointer',
        opacity: 0.75,
        borderBottom: '3px solid transparent',
        // [theme.breakpoints.up('md')]: {
        '&:hover, &:focus': {
            borderBottom: 'var(--custom_color)',
            opacity: 1,
        },
        // },
    },
    line: {
        background: '#FFFFFF',
        mixBlendMode: 'normal',
        opacity: 0.2,
        height: '1px',
        width: '100%',
    },
}));

export default function ListContent({ planetId, content, setContent }) {
    const classes = useStyles();
    return (
        <>
            <ul className={classes.ul}>
                {['OVERVIEW', 'STRUCTURE', 'SURFACE'].map((item) => {
                    return (
                        <li
                            key={item}
                            className={classes.li}
                            style={{
                                '--custom_color': `3px solid ${data[planetId].color}`,
                            }}
                            onClick={() =>
                                setContent(
                                    item !== 'SURFACE'
                                        ? item.toLowerCase()
                                        : 'geology'
                                )
                            }
                        >
                            {item}
                        </li>
                    );
                })}
            </ul>
            <div className={classes.line}></div>
        </>
    );
}
