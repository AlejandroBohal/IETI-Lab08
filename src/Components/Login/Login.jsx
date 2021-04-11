import React, { useState } from 'react'
import Grid from '@material-ui/core/Grid';
import { Avatar, Typography, TextField, Button } from '@material-ui/core'
import loggingStyles from './loggingStyles';
import 'fontsource-roboto';
import { useHistory,Redirect } from 'react-router-dom';
import exampleUsers from './exampleUsers';
import axios from 'axios';

export const Login = () => {
    const classes = loggingStyles();
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const history = useHistory();
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const login = () => {
        const userFound = users.find((user) => userName === user.userName && password === user.password);
        const exampleUsersFound = exampleUsers.find((user) => userName === user.userName && password === user.password);
        if (userFound || exampleUsersFound) {
            const user = exampleUsersFound || exampleUsersFound;
            localStorage.setItem("user", JSON.stringify(
                { loggingStatus: "loggedIn", username: userName, password, email: user.email}
            ));
            axios.post('https://task-ieti-hfs.herokuapp.com/user/login', {
                email: user.email,
                password: user.password
               },
               {headers:{"Content-type":"application/json"}})
                .then(response => {
                    localStorage.setItem('token',response.data.accessToken);
                    history.replace("/taskPlanner");
                    return;
                })
                .catch( error => {
                    console.log(error)
                }); 

        }
        else {
            alert("Incorrect logging check your credentials")
        }
    }

    if (JSON.parse(localStorage.getItem("user"))) {
        return <Redirect to={{ pathname: '/taskPlanner' }} />
    }
    else {
        return (
            <Grid container direction="row" justify="center" alignItems="center">
                <Grid item xs={7}>
                    <Grid container direction="column" justify="center" alignItems="center" className={classes.container}>
                        <Typography variant="h4" color="primary" className={classes.header}>
                            Task planner
                        </Typography>
                        <Avatar alt="Example"
                            src="https://www.pngkey.com/png/full/114-1149878_setting-user-avatar-in-specific-size-without-breaking.png"
                            className={classes.large} />

                        <Grid item xs={5} className={classes.form}>
                            <form>
                                <TextField
                                    className={classes.textField}
                                    label="Username"
                                    color="primary"
                                    name="userName"
                                    value={userName}
                                    variant="outlined"
                                    onChange={({ target }) => setUserName(target.value)}
                                />
                                <TextField
                                    className={classes.textField}
                                    label="Password"
                                    type="password"
                                    color="primary"
                                    name="password"
                                    value={password}
                                    variant="outlined"
                                    onChange={({ target }) => setPassword(target.value)}
                                />
                                <Button
                                    fulldWidth
                                    variant="contained"
                                    color="primary"
                                    className={classes.btn}
                                    onClick={login}
                                >
                                    Login
                                </Button>
                                <Typography variant="body1"
                                    color="primary"
                                    align="center"
                                    className={classes.text}
                                    onClick={() => history.push("/register")}>
                                    Create Account
                                </Typography>
                            </form>
                        </Grid>

                    </Grid>
                </Grid>
            </Grid>
        )
    }

}