import React, { useState } from 'react'
import Grid from '@material-ui/core/Grid';
import { Avatar, Typography, TextField, Button } from '@material-ui/core'
import loggingStyles from '../Login/loggingStyles';
import 'fontsource-roboto';
import { useHistory,Redirect } from 'react-router-dom';
import Swal from 'sweetalert2'



export const UserProfile = () => {
    const classes = loggingStyles();
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const history = useHistory();
    const setUsers = (users) =>{
        localStorage.setItem("users",JSON.stringify(users));
    }
    const repeated = (newUser) => {
        const repeated = JSON.parse(localStorage.getItem("users")) === null;
        if(repeated){
            return false;
        }else{
            return JSON.parse(localStorage.getItem("users"))
                    .find((user) => user.userName === newUser.userName)
        }
    }
    const register = () => {
        const isRepeated = repeated(username);
        if (username && password && email && !isRepeated) {
            localStorage.setItem("user", JSON.stringify(
                { loggingStatus: "loggedIn", username, password, email }
            ));
            const newUser = {
                userName: username,
                password,
                email
            }
            setUsers([...users,newUser]);
            Swal.fire({
                icon: 'success',
                title: 'Registrado Correctamente',
                showConfirmButton: false,
                timer: 3000
            })
            history.replace("/taskPlanner");
        }
        else {
            isRepeated ? alert("User already exists"): alert("All fields are required");
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
                            src="https://media.discordapp.net/attachments/400395275673272342/817569796476502116/registration-icon-png-6.png?width=473&height=473"
                            className={classes.large} />

                        <Grid item xs={5} className={classes.form}>
                            <form>
                                <TextField
                                    className={classes.textField}
                                    label="username"
                                    color="primary"
                                    name="username"
                                    value={username}
                                    variant="outlined"
                                    onChange={({ target }) => setUsername(target.value)}
                                    error={!username}
                                    helperText={!username && "User cannot be empty or repeated"}
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
                                    error={!password}
                                    helperText={!password && "Password cannot be empty"}
                                />
                                <TextField
                                    className={classes.textField}
                                    label="Email"
                                    type="email"
                                    color="primary"
                                    name="email"
                                    value={email}
                                    variant="outlined"
                                    onChange={({ target }) => setEmail(target.value)}
                                    error={!email}
                                    helperText={!email && "Email cannot be empty"}
                                />
                                <Button
                                    fulldWidth
                                    variant="contained"
                                    color="primary"
                                    className={classes.btn}
                                    onClick={register}
                                >
                                    Register
                                </Button>
                            </form>
                        </Grid>

                    </Grid>
                </Grid>
            </Grid>
        )
    }

}