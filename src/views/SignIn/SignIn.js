import React, { useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import { Grid, Button, Typography } from '@material-ui/core';
import _ from 'lodash';

import { connect } from 'react-redux';

import { fetchGoogleProfile } from '../../actions/signin';

const schema = {
    email: {
        presence: { allowEmpty: false, message: 'is required' },
        email: true,
        length: {
            maximum: 64,
        },
    },
    password: {
        presence: { allowEmpty: false, message: 'is required' },
        length: {
            maximum: 128,
        },
    },
};

const useStyles = makeStyles(theme => ({
    root: {
        backgroundColor: theme.palette.background.default,
        height: '100%',
    },
    grid: {
        height: '100%',
    },
    quoteContainer: {
        [theme.breakpoints.down('md')]: {
            display: 'none',
        },
    },
    quote: {
        backgroundColor: theme.palette.neutral,
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundImage: 'url(/images/SRE-cover-pic.png)',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
    },
    quoteInner: {
        textAlign: 'center',
        flexBasis: '600px',
    },
    quoteText: {
        color: theme.palette.white,
        fontWeight: 300,
    },
    name: {
        marginTop: theme.spacing(3),
        color: theme.palette.white,
    },
    bio: {
        color: theme.palette.white,
    },
    contentContainer: {},
    content: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
    },
    contentHeader: {
        display: 'flex',
        alignItems: 'center',
        paddingTop: theme.spacing(5),
        paddingBototm: theme.spacing(2),
        paddingLeft: theme.spacing(2),
        paddingRight: theme.spacing(2),
    },
    logoImage: {
        marginLeft: theme.spacing(4),
    },
    contentBody: {
        flexGrow: 1,
        display: 'flex',
        alignItems: 'center',
        [theme.breakpoints.down('md')]: {
            justifyContent: 'center',
        },
    },
    form: {
        paddingLeft: 100,
        paddingRight: 100,
        paddingBottom: 125,
        flexBasis: 700,
        [theme.breakpoints.down('sm')]: {
            paddingLeft: theme.spacing(2),
            paddingRight: theme.spacing(2),
        },
    },
    title: {
        marginTop: theme.spacing(3),
    },
    socialButtons: {
        marginTop: theme.spacing(3),
    },
    socialIcon: {
        marginRight: theme.spacing(1),
    },
    sugestion: {
        marginTop: theme.spacing(2),
    },
    textField: {
        marginTop: theme.spacing(2),
    },
    signInButton: {
        margin: theme.spacing(2, 0),
    },
}));

const SignIn = ({ history, signedIn, fetchGoogleProfile }) => {
    const classes = useStyles();

    useEffect(() => {
        window.gapi.load('auth2', () => {
            window.gapi.auth2
                .init({
                    client_id:
                        '358281530283-bum1up22bs7325ikhklshdt1nefeqvt8.apps.googleusercontent.com',
                })
                .then(() => {
                    window.gapi.signin2.render('sre-signin', {
                        ux_mode: 'redirect',
                        redirectUri: 'http://localhost:3000/sign-in',
                        scope: 'profile email',
                        width: 250,
                        height: 50,
                        longtitle: false,
                        theme: 'dark',
                        cookiepolicy: 'single_host_origin',
                        onsuccess: res => {
                            let baseKey = _.findKey(res, obj => {
                                if (obj.id_token) return obj;
                            });
                            fetchGoogleProfile(
                                _.get(res, `${baseKey}.id_token`)
                            );
                        },
                        onfailure: err => {
                            console.log(err);
                        },
                    });
                });
        });
    }, [fetchGoogleProfile, history]);

    useEffect(() => {
        if (signedIn) {
            history.push('/dashboard');
        }
    }, [history, signedIn]);

    return (
        <div className={classes.root}>
            <Grid className={classes.grid} container>
                <Grid className={classes.quoteContainer} item lg={5}>
                    <div className={classes.quote}>
                        <div className={classes.quoteInner}>
                            <Typography
                                className={classes.quoteText}
                                variant="h1"
                            >
                                SRE Dashboard
                            </Typography>
                            <div className={classes.person}>
                                <Typography
                                    className={classes.name}
                                    variant="body1"
                                >
                                    Site Reliability Engineering
                                </Typography>
                                <Typography
                                    className={classes.bio}
                                    variant="body2"
                                >
                                    Cognite Engineering
                                </Typography>
                            </div>
                        </div>
                    </div>
                </Grid>
                <Grid className={classes.content} item lg={7} xs={12}>
                    <div className={classes.content}>
                        <div className={classes.contentBody}>
                            <form className={classes.form}>
                                <Typography
                                    className={classes.title}
                                    variant="h2"
                                >
                                    Sign in
                                </Typography>
                                <Typography color="textSecondary" gutterBottom>
                                    Sign in with your Cognite Account
                                </Typography>
                                <Grid
                                    className={classes.socialButtons}
                                    container
                                    spacing={2}
                                >
                                    <Grid item>
                                        <div id="sre-signin" />
                                    </Grid>
                                </Grid>
                            </form>
                        </div>
                    </div>
                </Grid>
            </Grid>
        </div>
    );
};

SignIn.propTypes = {
    history: PropTypes.object,
};

function mapStateTorops({ signIn }) {
    return { signedIn: signIn.signedIn };
}

export default connect(mapStateTorops, { fetchGoogleProfile })(
    withRouter(SignIn)
);
