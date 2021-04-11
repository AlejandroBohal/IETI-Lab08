import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
    Grid, TextField, Select, FormControl, InputLabel,
    MenuItem, Modal,Button
} from '@material-ui/core';
import { MuiPickersUtilsProvider, KeyboardDatePicker } from '@material-ui/pickers'
import DateFnsUtils from '@date-io/date-fns';
import 'date-fns';

const useStyles = makeStyles((theme) => ({
    paper: {
        backgroundColor: theme.palette.background.paper,
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3)
    },
    textField:{
        "@media (max-width: 400px)":{
            width: "40%",
            paddingRight: theme.spacing(5)
        },
        "@media (min-width: 600px)":{
            paddingRight: theme.spacing(2),
            width: '15%',
        },   
        
    },
    button:{
        marginRight: theme.spacing(2),
        marginTop: theme.spacing(1)
    }
}));



export const FilterModal = ({ open, handleClose, tasks, setTasks }) => {

    const classes = useStyles();
    const [description, setDescription] = useState('');
    const [responsible, setResponsible] = useState('');
    const [status, setStatus] = useState('');
    const [dueDate, setDueDate] = useState(null);
    //TODO: Fix filter xD
    const handleFilter = () =>{
        setTasks( (tasksFiltered) =>{
            console.log(tasksFiltered);
            const lastTasks = tasks.filter( 
                ({description:desc, responsible:res,status:stat,dueDate:date}) => 
                {
                    const taskFiltered = (desc.includes(description) && description !== "")
                    || (res.name.includes(responsible) && responsible !== "")
                    || (stat === status && status !== "")
                    || (date === dueDate && dueDate !== null)
                    return taskFiltered;  
                }
            );
            console.log(lastTasks);
            return lastTasks;
        });
        handleClose();
    }
    const handleDeleteFilters = () =>{
        setTasks( () => tasks)
        handleClose();
    }
    return (
        <div>
            <Modal
                open={open}
                onClose={handleClose}

            >
                <div className={classes.paper}>
                    <Grid container direction="row" justify="center" alignItems="flex-start" spacing={2}>
                        <form>
                            <TextField
                                className={classes.textField}
                                label="Description"
                                value = {description}
                                color="primary"
                                variant="outlined"
                                margin="dense"
                                onChange={({target}) => setDescription(target.value)}
                            />
                            <TextField
                                className={classes.textField}
                                label="Responsible"
                                value={responsible}
                                color="primary"
                                variant="outlined"
                                margin="dense"
                                onChange={({target}) => setResponsible(target.value)}
                            />

                            <FormControl variant="outlined" className={classes.textField} margin="dense">
                                <InputLabel id="demo-simple-select-outlined-label">Status</InputLabel>
                                <Select
                                    labelId="demo-simple-select-outlined-label"
                                    id="demo-simple-select-outlined"
                                    label="Status"
                                    value ={status}
                                    style={{paddingRight:'40px'}}
                                    onChange={({target}) => setStatus(target.value)}
                                >
                                    <MenuItem value="ready">Ready</MenuItem>
                                    <MenuItem value="in progress">In progress</MenuItem>
                                    <MenuItem value="completed">Completed</MenuItem>
                                </Select>
                            </FormControl>
                            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                <KeyboardDatePicker
                                    disableToolbar
                                    className={classes.textField} 
                                    format="MM-dd-yyyy"
                                    value = {dueDate}
                                    showTodayButton={true}
                                    label="Due date"
                                    margin="dense"
                                    onChange = {(date) => setDueDate(date) }
                                >
                                </KeyboardDatePicker>
                            </MuiPickersUtilsProvider>
                            <Button 
                                variant="contained" 
                                color="primary" 
                                className={classes.button}
                                onClick={handleFilter}
                            > 
                                Apply
                            </Button>
                            <Button 
                                variant="contained" 
                                color="primary" 
                                className={classes.button} 
                                onClick={handleDeleteFilters}
                            > 
                                Clear
                            </Button>
                        </form>
                    </Grid>
                </div>
            </Modal>
        </div>
    )
}
