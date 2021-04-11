import React from 'react';
import {
    Drawer,
    Divider,
    Button
} from '@material-ui/core';
import drawerStyles from './drawerStyles';
import 'fontsource-roboto';
import {UserInfo} from './UserInfo';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import {useHistory} from 'react-router-dom';

export const Box = ({ variant, open, onClose = null}) => {
    const classes = drawerStyles();
    const history = useHistory();
    const logOut = () =>{
        localStorage.removeItem('user');
        history.push("/");
    }
    return (
        <Drawer
            className={classes.drawer}
            classes={{
                paper: classes.drawerPapper
            }}
            anchor="left"
            variant={variant}
            open={open}
            onClose={onClose ? onClose : null}
        >
            <div className={classes.toolbar}>
                <UserInfo/>
            </div>
            <Divider />
            <Button variant="contained" color="primary" startIcon={<ExitToAppIcon/>} 
                onClick={logOut}> 
                Log out
            </Button>
        </Drawer>
    )
}
