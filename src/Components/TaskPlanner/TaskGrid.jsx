import React, {useState,useEffect} from 'react'
import taskPlannerStyles from './taskPlannerStyles';
import {Grid,Container} from '@material-ui/core';
import {TaskCard} from './TaskCard'
import axios from 'axios';
export const TaskGrid = () => {
    const classes = taskPlannerStyles();
    const token = localStorage.getItem("token")
    const axiosClient = axios.create({
        baseURL: 'https://task-ieti-hfs.herokuapp.com/api/',
        timeout: 1000,
        headers: {'Authorization': 'Bearer ' + token}
    });
    let [tasks,setTasks] = useState([]);
    useEffect(() => {
        axiosClient.get().then(response =>{
            setTasks(response.data.body.tasks.map(({description,email,name,dueDate,status}) => {
                    return {
                        description,
                        responsible: {
                            name, 
                            email
                        },
                        status: status,
                        dueDate: new Date(dueDate)
                    }
                })
            );
        })
        .catch(e => {
            console.log(e);
        });     
    }, [tasks]);
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
