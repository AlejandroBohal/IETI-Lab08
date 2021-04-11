import React from 'react'
import { Card, CardContent, Grid, Typography } from '@material-ui/core';
import taskPlannerStyles from '../TaskPlanner/taskPlannerStyles'
import FaceIcon from '@material-ui/icons/Face';

export const UserCard = ({user}) => {
    const classes = taskPlannerStyles();
    const { userId,userName,email } = user;
    return (
        <Card className={classes.card}>
            <CardContent >
                <Grid container direction="column" justify="flex-start" alignItems="flex-start" spacing={2}>
                    <Grid container direction="row" justify="flex-start" alignItems="flex-start">
                        <Grid item xs={10}>
                            <Typography variant="h6" color="primary">
                                User
                            </Typography>
                            <Typography variant="body1" color="primary">
                                {userName}
                            </Typography>
                        </Grid>
                        <Grid item >
                            <FaceIcon/>
                        </Grid>
                        <Grid item xs={4}>
                            <Typography variant="body1" >
                                .
                            </Typography>
                        </Grid>
                        
                        <Grid item xs={12} style={{paddingTop:"1rem"}}>
                            <Typography variant="h6" color="primary">
                                Information
                            </Typography>
                            <Typography variant="body1">
                                Id: {userId}
                            </Typography>
                        </Grid>
                        <Grid item xs={8}>
                            <Typography variant="body1">
                                Email: {email}
                            </Typography>
                        </Grid>

                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    )
}
