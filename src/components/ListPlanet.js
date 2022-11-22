import { makeStyles } from '@material-ui/core';
import data from '../data.json';

const useStyles = makeStyles((theme) => ({
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
        borderBottom: '3px solid transparent',
        marginRight: 20,
        fontFamily: 'League Spartan',
        fontStyle: 'normal',
        fontWeight: 700,
        fontSize: '14px',
        letterSpacing: '1px',
        textTransform: 'uppercase',
        color: '#FFFFFF',
        mixBlendMode: 'normal',
        opacity: 0.75,
        cursor: 'pointer',
        [theme.breakpoints.up('md')]: {
            '&:hover, &:focus': {
                borderBottom: 'var(--custom_color)',
                opacity: 1,
            },
        },
        [theme.breakpoints.up('lg')]: {
            '&:hover, &:focus': {
                borderBottom: '3px solid transparent',
                borderTop: 'var(--custom_color)',
                opacity: 1,
            },
        },
        display: 'flex',
        justifyContent: 'center',
    },
}));

export default function ListPlanet({ planetId, setPlanetId }) {
    const classes = useStyles();

    return (
        <ul className={classes.ul}>
            {data.map((planet) => {
                return (
                    <li
                        key={planet.name}
                        className={classes.li}
                        style={{
                            '--custom_color': `3px solid ${planet.color}`,
                        }}
                        onClick={() => setPlanetId(planet.id)}
                    >
                        {planet.name}
                    </li>
                );
            })}
        </ul>
    );
}
