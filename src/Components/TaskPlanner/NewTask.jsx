import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import {
    Grid, TextField, Select, FormControl, InputLabel,
    Typography, Avatar, MenuItem, Fab
} from '@material-ui/core';
import loggingStyles from '../Login/loggingStyles';
import CheckIcon from '@material-ui/icons/Check';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import 'fontsource-roboto';
import { MuiPickersUtilsProvider, KeyboardDatePicker } from '@material-ui/pickers'
import DateFnsUtils from '@date-io/date-fns';
import 'date-fns';
import usersExample from '../Login/exampleUsers';
import { useHistory,Redirect } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    formControl: {
        width: '100%',
        marginBottom: '1rem'
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
    buttonBack: {
        position: 'fixed',
        bottom: "15px",
        left: "20px",
        margin: theme.spacing(1)
    },
    button: {
        position: 'fixed',
        bottom: "15px",
        right: "20px",
        margin: theme.spacing(1)
    }
}));

export const NewTask = ({ addTask }) => {
    const [description, setDescription] = useState("");
    const [responsible, setResponsible] = useState("");
    const [dueDate, setDueDate] = useState(new Date());
    const [status, setStatus] = useState("");
    const classe = loggingStyles();
    const classes = useStyles();
    const history = useHistory();
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const canExecute = (responsible) => {
        const user = users.find(user => user.userName === responsible);
        const userExample = usersExample.find(user => user.userName === responsible);
        if (!user && !userExample) {
            alert("Responsible not registered.");
        }
        return user || userExample;
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        const userFinded = canExecute(responsible); 
        if (!description || !responsible || !status || !dueDate) {
            alert("All fields are required")
        } else if (userFinded) {

            const newTask = {
                description,
                responsible: {
                    name: responsible,
                    email: userFinded.email
                },
                status,
                dueDate
            }
            addTask(newTask);
            history.push("/taskPlanner");
        }
    }
    if (!JSON.parse(localStorage.getItem("user")) || JSON.parse(localStorage.getItem("user")).loggingStatus !== "loggedIn") {
        return <Redirect to={{ pathname: '/' }} />
    }
    else {
        return (
            <Grid container direction="row" justify="center" alignItems="center">
                <Grid item xs={7}>
                    <Grid container direction="column" justify="center" alignItems="center" className={classe.container}>
                        <Typography variant="h4" color="primary" className={classe.header}>
                            Create new Task
                            </Typography>
                        <Avatar alt="todo-list"
                            src="https://media.discordapp.net/attachments/352624122301513730/816148297047474206/to-do-list.png?width=473&height=473"
                            className={classe.large} />

                        <Grid item xs={5} className={classe.form}>
                            <form>
                                <TextField
                                    className={classe.textField}
                                    label="Description"
                                    color="primary"
                                    value={description}
                                    variant="outlined"
                                    onChange={({ target }) => setDescription(target.value)}
                                    error={!description}
                                    helperText={!description && "Description cannot be empty"}
                                />
                                <TextField
                                    className={classe.textField}
                                    label="Responsible"
                                    color="primary"
                                    value={responsible}
                                    variant="outlined"
                                    onChange={({ target }) => setResponsible(target.value)}
                                    error={!responsible}
                                    helperText={!responsible && "Responsible cannot be empty"}
                                />
                                <FormControl variant="outlined" className={classes.formControl}>
                                    <InputLabel id="demo-simple-select-outlined-label">Status</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-outlined-label"
                                        id="demo-simple-select-outlined"
                                        value={status}
                                        onChange={({ target }) => setStatus(target.value)}
                                        label="Status"
                                    >
                                        <MenuItem value="ready">Ready</MenuItem>
                                        <MenuItem value="in progress">In progress</MenuItem>
                                        <MenuItem value="completed">Completed</MenuItem>
                                    </Select>
                                </FormControl>
                                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                    <KeyboardDatePicker
                                        className={classe.textField}
                                        disableToolbar
                                        format="MM-dd-yyyy"
                                        showTodayButton={true}
                                        value={dueDate}
                                        label="Due date"
                                        onChange={(dueDate) => (setDueDate(dueDate))}>
                                    </KeyboardDatePicker>
                                </MuiPickersUtilsProvider>

                                <Fab
                                    size="medium"
                                    color="primary"
                                    aria-label="add"
                                    type="submit"
                                    className={classes.button}
                                    onClick={(e) => handleSubmit(e)}
                                >
                                    <CheckIcon />
                                </Fab>
                                <Fab
                                    size="medium"
                                    color="primary"
                                    aria-label="add"
                                    className={classes.buttonBack}
                                    onClick={() => history.push("/taskPlanner")}
                                >
                                    <ArrowBackIcon />
                                </Fab>
                            </form>
                        </Grid>

                    </Grid>
                </Grid>
            </Grid>
        )
    }



}
