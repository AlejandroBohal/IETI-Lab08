import React, { useState } from 'react';
import { Hidden } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import { NavBar } from '../Drawer/NavBar';
import { Box } from '../Drawer/Box';
import taskPlannerStyles from './taskPlannerStyles';
import { TaskGrid } from './TaskGrid';
import Fab from '@material-ui/core/Fab';
import SearchIcon from '@material-ui/icons/Search';
import { useHistory, Redirect } from 'react-router-dom';
import { FilterModal } from './FilterModal';

export const TaskPlannerApp = ({ tasks }) => {

    
    const classes = taskPlannerStyles();
    const [open, setOpen] = useState(false);
    const [openModal, setOpenModal] = useState(false);
    const [filteredTasks, setFilteredTasks] = useState(tasks);
    const handleOpen = () => {
        setOpen(!open);
    }
    const handleOpenModal = () => {
        setOpenModal(true);
    }
    const handleCloseModal = () => {
        setOpenModal(false);
    }

    const history = useHistory();
    if (!JSON.parse(localStorage.getItem("user")) || JSON.parse(localStorage.getItem("user")).loggingStatus !== "loggedIn") {
        return <Redirect to={{ pathname: '/' }} />
    }
    else {
        return (
            <div className={classes.container}>
                <NavBar handleOpen={handleOpen} />
                <Hidden xsDown>
                    <Box
                        variant="permanent"
                        open={true}
                    >
                    </Box>
                </Hidden>
                <Hidden smUp>
                    <Box
                        variant="temporary"
                        open={open}
                        onClose={handleOpen}
                    >
                    </Box>
                </Hidden>
                <div className={classes.content}>
                    <div className={classes.toolbar}></div>
                    <TaskGrid tasks={filteredTasks} />
                    <Fab
                        size="medium"
                        color="primary"
                        aria-label="add"
                        className={classes.button}
                        onClick={() => history.push("/createTask")}
                    >
                        <AddIcon />
                    </Fab>
                    <Fab
                        size="medium"
                        color="primary"
                        aria-label="add"
                        className={classes.buttonTop}
                        onClick={handleOpenModal}
                    >
                        <SearchIcon />
                    </Fab>
                    <FilterModal open={openModal} handleClose={handleCloseModal} tasks={tasks} setTasks={setFilteredTasks}/>
                </div>


            </div>

        )
    }


}
