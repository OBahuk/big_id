import * as React from 'react';
import { Link } from 'react-router-dom';
import { createStyles, makeStyles, Box, Button } from '@material-ui/core';

const useStyles = makeStyles(() =>
    createStyles({
        wrapper: {
            width:      '20em',
            margin:     'auto',
            paddingTop: '5em',
            textAlign:  'center',
            lineHeight: 1.5
        },
        h1: {
            fontSize: '4em'
        },
        h3: {
            fontSize: '1.5em'
        },
        icon: {
            fontSize: '10em'
        },
        link: {
            textDecoration: 'none',
            margin: '8px'
        }
    })
);

export const NotFoundPage = () => {
    const classes = useStyles();

    return (
        <Box className = { classes.wrapper }>
            <h1 className = { classes.h1 }>404</h1>
            <h3 className = { classes.h3 }>Page not found</h3>
            <p>We can`t find page you are looking for. You can either return to previous page or hit the home button</p>
            <Link className = { classes.link } to = { '/' }>
                <Button color = 'primary' variant = 'contained'>
                    Home page
                </Button>
            </Link>
        </Box>
    );
};
