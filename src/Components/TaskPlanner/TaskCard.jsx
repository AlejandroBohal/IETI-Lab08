import React from 'react'
import { Card, CardContent, Grid, Typography } from '@material-ui/core';
import taskPlannerStyles from './taskPlannerStyles'
import { teal,red } from '@material-ui/core/colors';
import { DonutLarge, CheckCircle, AccessAlarm } from '@material-ui/icons';

import 'fontsource-roboto';
export const TaskCard = ({ task }) => {
    const classes = taskPlannerStyles();
    const { description, responsible: { name, email }, status, dueDate } = task;
    const getProgressIcon = () => {
        switch (status.toLowerCase()) {
            case "ready":
                return <AccessAlarm style={{ color: red[500] }} />
            case "in progress":
                return <DonutLarge color="primary" />
            case "completed":
                return <CheckCircle style={{ color: teal['A400'] }} />
            default:
                return <CheckCircle style={{ color: teal['A400'] }} />
        }
    }
    return (
        <Card className={classes.card}>
            <CardContent >
                <Grid container direction="column" justify="flex-start" alignItems="flex-start" spacing={2}>
                    <Grid container direction="row" justify="center" alignItems="center">
                        <Grid item xs={10}>
                            <Typography variant="h6" color="primary">
                                Task
                            </Typography>
                            <Typography variant="body1" color="primary">
                                {description}
                            </Typography>
                        </Grid>
                        <Grid item >
                            {getProgressIcon()}
                        </Grid>
                        <Grid item xs={4}>
                            <Typography variant="body1" >
                                {status}
                            </Typography>
                        </Grid>
                        <Grid item >
                            <Typography variant="body1" >
                                Due date : {new Date(dueDate).toISOString().split('T')[0]}
                            </Typography>
                        </Grid>
                        <Grid item xs={8} style={{paddingTop:"1rem"}}>
                            <Typography variant="h6" color="primary">
                                Author
                            </Typography>
                            <Typography variant="body1">
                                {name}
                            </Typography>
                        </Grid>
                        <Grid item xs={8}>
                            <Typography variant="body1">
                                {email}
                            </Typography>
                        </Grid>

                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    )
}

