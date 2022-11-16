import { makeStyles } from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles((theme) => ({
    detailContentWrap: {
        padding: 30,
        [theme.breakpoints.up('lg')]: {
            padding: '50px 165px',
        },
    },
    imgWrap: {
        width: '100%',
        height: '350px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        [theme.breakpoints.up('lg')]: {
            height: 550,
        },
    },
    backgroundImage: {
        width: '30%',
        height: 'auto',
        [theme.breakpoints.up('md')]: {
            width: '20%',
        },
        [theme.breakpoints.up('lg')]: {
            width: '40%',
        },
    },
    // backgroundImage: {
    //     background: `url(../assets/planet-earth.svg)`,
    //     backgroundRepeat: 'no-repeat',
    //     backgroundSize: 'cover',
    //     height: 173,
    //     width: 173,
    //     [theme.breakpoints.up('md')]: {
    //         height: 285,
    //         width: 285,
    //     },

    //     [theme.breakpoints.up('lg')]: {
    //         height: 450,
    //         width: 450,
    //     },
    // },
    planetName: {
        fontFamily: 'Antonio',
        fontStyle: 'normal',
        fontWeight: 400,
        fontSize: '40px',
        lineHeight: '52px',
        textAlign: 'center',
        textTransform: 'uppercase',
        color: '#FFFFFF',
        [theme.breakpoints.up('md')]: {
            textAlign: 'left',
        },
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
        [theme.breakpoints.up('md')]: {
            textAlign: 'left',
        },
        [theme.breakpoints.up('lg')]: {
            width: 350,
        },
    },
    source: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        [theme.breakpoints.up('md')]: {
            justifyContent: 'start',
        },
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
        [theme.breakpoints.up('md')]: {
            flexDirection: 'row',
            justifyContent: 'space-between',
        },
    },
    paramWrap: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        border: '1px solid rgba(255,255,255, 0.2)',
        padding: 10,
        [theme.breakpoints.up('md')]: {
            flexDirection: 'column',
            width: '25%',
            height: 88,
            justifyContent: 'space-evenly',
            alignItems: 'start',
        },
    },
    param: {
        fontFamily: 'League Spartan',
        fontWeight: 700,
        fontSize: '12px',
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
    detailContents: {
        display: 'none',
        [theme.breakpoints.up('md')]: {
            display: 'block',
        },
    },
    detailContent: {
        fontFamily: 'League Spartan',
        fontStyle: 'normal',
        fontWeight: 700,
        fontSize: '13px',
        lineHeight: '25px',
        letterSpacing: '1.92857px',
        textTransform: 'uppercase',
        color: '#FFFFFF',
        width: 350,
        height: 60,
        border: '1px solid rgba(255,255,255, 0.2)',
        margin: '20px 0px',
        paddingLeft: 20,
        display: 'flex',
        alignItems: 'center',
        cursor: 'pointer',
        '&:hover': {
            background: 'rgba(216, 216, 216, 0.2)',
        },
    },
    number: {
        mixBlendMode: 'normal',
        opacity: 0.5,
    },
    contentWithListContent: {
        display: 'flex',
        alignItems: 'center',
        gap: 60,
        [theme.breakpoints.up('lg')]: {
            flexDirection: 'column',
            alignItems: 'start',
            gap: 20,
        },
    },
    contentImgWrap: {
        display: 'block',
        [theme.breakpoints.up('lg')]: {
            display: 'flex',
            justifyContent: 'space-between',
        },
    },
    // contentWithListContent: {
    //     display
    // }
}));

export default function DetailContent() {
    const classes = useStyles();
    return (
        <div className={classes.detailContentWrap}>
            <div className={classes.contentImgWrap}>
                <div className={classes.imgWrap}>
                    <img
                        className={classes.backgroundImage}
                        src='../assets/planet-earth.svg'
                        alt='source'
                    />
                </div>
                <div className={classes.contentWithListContent}>
                    <div className={classes.contentWrap}>
                        <div className={classes.planetName}>EARTH</div>
                        <div className={classes.desc}>
                            Third planet from the Sun and the only known planet
                            to harbor life. About 29.2% of Earth's surface is
                            land with remaining 70.8% is covered with water.
                            Earth's distance from the Sun, physical properties
                            and geological history have allowed life to evolve
                            and thrive.
                        </div>
                        <div className={classes.source}>
                            <p className={classes.p}>Source&nbsp;:&nbsp;</p>
                            <span className={classes.span}>
                                Wikipedia&nbsp;&nbsp;
                            </span>
                            <img
                                className={classes.img}
                                src='../assets/icon-source.svg'
                                alt='source'
                            />
                        </div>
                    </div>
                    <div className={classes.detailContents}>
                        {[
                            ['01', 'OVERVIEW'],
                            ['02', 'STRUCTURE'],
                            ['03', 'SURFACE'],
                        ].map((item) => (
                            <div className={classes.detailContent}>
                                <span className={classes.number}>
                                    {item[0]}&nbsp;&nbsp;
                                </span>
                                <span className={classes.text}>{item[1]}</span>
                            </div>
                        ))}
                    </div>
                </div>
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
