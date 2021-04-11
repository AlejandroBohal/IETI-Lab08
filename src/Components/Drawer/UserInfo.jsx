import React from 'react'

import {
    Grid,
    Avatar,
    Typography,
    IconButton
} from '@material-ui/core';
import drawerStyles from './drawerStyles';
import 'fontsource-roboto';
import AccountBoxIcon from '@material-ui/icons/AccountBox';

export const UserInfo = () => {
    const user = JSON.parse(localStorage.getItem("user")) || {};
    const classes = drawerStyles();
    const emptyAvatar = "https://media.discordapp.net/attachments/400395275673272342/815589574743031838/user.png?width=473&height=473";
    return (
        <Grid container direction="column" justify="center" alignItems="stretch">
            <Grid container direction="row" justify="flex-start" alignItems="center" spacing={2}>
                <Grid item xs={4}>
                    <Avatar variant="square" className={classes.avatar} src={emptyAvatar}/>
                </Grid>
                <Grid item >
                    <Typography variant="body2" color="primary" className={classes.header}>{user.username}</Typography>
                    <Typography variant="body2">{user.email}</Typography>
                </Grid>
            </Grid>
            <Grid item className={classes.edit}>
                <Grid container direction="row" justify="flex-end">
                    <IconButton color="inherit" aria-label="menu" className={classes.menuButton}>
                        <AccountBoxIcon />
                    </IconButton>
                </Grid>
            </Grid>
        </Grid>
    )
}
