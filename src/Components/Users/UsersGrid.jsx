import React, { useState, useEffect } from 'react';
import { UserCard } from './UserCard';
import { getUsers } from './usersService';
import taskPlannerStyles from '../TaskPlanner/taskPlannerStyles';
import {Grid,Container} from '@material-ui/core';

export const UsersGrid = () => {
    const classes = taskPlannerStyles();
    const [users, setUsers] = useState([]);
    useEffect(() => {
        getUsers().then(res =>{
            setUsers(res)
        })
    }, [users]);
    return (
        <Container className={classes.cardGrid}>
            <Grid container spacing={2} justify="flex-start" alignItems="flex-end">
                {
                    users.map( (user) =>(
                        <Grid item xs={12} sm={6} md={4}>
                            <UserCard user={user}/>
                        </Grid>
                    )) 
                }
            </Grid>
        </Container>
    )
}
