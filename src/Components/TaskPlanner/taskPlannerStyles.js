import {makeStyles} from '@material-ui/core/styles'

const taskPlannerStyles = makeStyles((theme) =>({

    card : {
        maxWidth : '360px',
        minWidth: '260px',
        height: '200px',
    },
    cardGrid: {
        paddingTop: theme.spacing(7),
        paddingBottom: theme.spacing(7),
        "@media (min-width:480px)": {
            paddingLeft: theme.spacing(7)
        }
    },
    container:{
        display: 'flex'
    },
    toolbar: theme.mixins.toolbar,
    content: {
        flexGrow: 1,
        backgroudColor: theme.palette.background.default,
        padding: theme.spacing(1),
    },
    button:{
        position: 'fixed',
        bottom: "15px",
        right:"20px",
        margin: theme.spacing(1)
    },
    buttonTop:{
        position: 'fixed',
        top: "70px",
        right:"20px",
        margin: theme.spacing(1)
    }

}));

export default taskPlannerStyles;