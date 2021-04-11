import React from 'react'
import taskPlannerStyles from './taskPlannerStyles';
import {Grid,Container} from '@material-ui/core';
import {TaskCard} from './TaskCard'
export const TaskGrid = ({tasks}) => {
    const classes = taskPlannerStyles();
    return (
        <Container className={classes.cardGrid}>
            <Grid container spacing={2} justify="flex-start" alignItems="flex-end">
                {
                    tasks.map( (task) =>(
                        <Grid item xs={12} sm={6} md={4}>
                            <TaskCard task={task}/>
                        </Grid>
                    )) 
                }
            </Grid>
        </Container>
    )
}
