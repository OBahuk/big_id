import React from 'react';
import { NavLink } from 'react-router-dom';
import Divider from '@material-ui/core/Divider';
import { makeStyles } from '@material-ui/core/styles';
import PlaylistAddIcon from '@material-ui/icons/PlaylistAdd';
import PublicIcon from '@material-ui/icons/Public';
import Box from '@material-ui/core/Box';

const drawerWidth = 240;
const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
        backgroundColor: '#00b9ad',
        height: '90vh',
        padding: '1em',
        '@media (max-width: 960px)': {
            padding: '0 0 0 .5em',
            marginRight: '.5em',
            width: 40,
            textAlign: 'center',
            '& span': {
                display: 'none'
            }
        },
    }
}));

export const LeftDrawer = () => {
    const classes = useStyles();

    return (
        <Box className={classes.drawer}>
            <Divider />
            <NavLink to="/">
                <PublicIcon/>
                <span>Home</span>
            </NavLink>
            <Divider />
            <NavLink to="/form" >
                <PlaylistAddIcon/>
                <span>Add users</span>
            </NavLink>
            <Divider />
        </Box>
    );
}