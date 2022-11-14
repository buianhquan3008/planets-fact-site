import { makeStyles } from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles((theme) => ({
    detailContentWrap: {
        padding: 30,
    },
    imgWrap: {
        width: '100%',
        height: 350,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    backgroundImage: {
        background: `url(../assets/planet-earth.svg)`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        height: 173,
        width: 173,
    },
    planetName: {
        fontFamily: 'Antonio',
        fontStyle: 'normal',
        fontWeight: 400,
        fontSize: '40px',
        lineHeight: '52px',
        textAlign: 'center',
        textTransform: 'uppercase',
        color: '#FFFFFF',
    },
    desc: {
        marginTop: 30,
        fontFamily: 'League Spartan',
        fontFtyle: 'normal',
        fontWeight: 400,
        fontSize: '13px',
        lineHeight: '22px',
        textAlign: 'center',
        color: '#FFFFFF',
        opacity: 0.75,
    },
    source: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    p: {
        fontFamily: 'League Spartan',
        fontStyle: 'normal',
        fontWeight: 400,
        fontSize: '12px',
        lineHeight: '25px',
        color: '#FFFFFF',
        mixBlendMode: 'normal',
        opacity: 0.5,
    },
    span: {
        fontFamily: 'League Spartan',
        fontStyle: 'normal',
        fontWeight: 700,
        fontSize: '12px',
        lineHeight: '25px',
        color: '#FFFFFF',
        mixBlendMode: 'normal',
        opacity: 0.5,
    },
    params: {
        display: 'flex',
        flexDirection: 'column',
        gap: 10,
    },
    paramWrap: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        border: '1px solid rgba(255,255,255, 0.2)',
        padding: 10,
    },
    param: {
        fontFamily: 'League Spartan',
        fontWeight: 700,
        fontSize: '8px',
        lineHeight: '16px',
        letterSpacing: '0.727273px',
        textTransform: 'uppercase',
        color: '#FFFFFF',
        mixBlendMode: 'normal',
        opacity: 0.5,
    },
    value: {
        fontFamily: 'Antonio',
        fontStyle: 'normal',
        fontWeight: 400,
        fontSize: '20px',
        lineHeight: '26px',
        textAlign: 'right',
        letterSpacing: '-0.75px',
        textTransform: 'uppercase',
        color: '#FFFFFF',
    },
}));

export default function DetailContent() {
    const classes = useStyles();
    return (
        <div className={classes.detailContentWrap}>
            <div className={classes.imgWrap}>
                <div className={classes.backgroundImage}></div>
            </div>
            <div className={classes.planetName}>EARTH</div>
            <div className={classes.desc}>
                Third planet from the Sun and the only known planet to harbor
                life. About 29.2% of Earth's surface is land with remaining
                70.8% is covered with water. Earth's distance from the Sun,
                physical properties and geological history have allowed life to
                evolve and thrive.
            </div>
            <div className={classes.source}>
                <p className={classes.p}>Source&nbsp;:&nbsp;</p>
                <span className={classes.span}>Wikipedia&nbsp;&nbsp;</span>
                <img
                    className={classes.img}
                    src='../assets/icon-source.svg'
                    alt='source'
                />
            </div>
            <div className={classes.params}>
                <div className={classes.paramWrap}>
                    <div className={classes.param}>ROTATION TIME</div>
                    <div className={classes.value}>0.99 DAYS</div>
                </div>
                <div className={classes.paramWrap}>
                    <div className={classes.param}>REVOLUTION TIME</div>
                    <div className={classes.value}>365.26 DAYS</div>
                </div>
                <div className={classes.paramWrap}>
                    <div className={classes.param}>RADIUS</div>
                    <div className={classes.value}>6.371 KM</div>
                </div>
                <div className={classes.paramWrap}>
                    <div className={classes.param}>AVERAGE TEMP.</div>
                    <div className={classes.value}>16°C</div>
                </div>
            </div>
        </div>
    );
}
