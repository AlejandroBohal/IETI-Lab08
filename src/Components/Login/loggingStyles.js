import {makeStyles} from '@material-ui/core/styles'
const loggingStyles = makeStyles((theme) => ({
    large: {
      width: '80px',
      height: '80px',
      textAlign: 'center'
    },
    header:{
        paddingTop: "3rem",
        paddingBottom: "1rem"
    },
    form:{
        paddingTop: "2rem",
    },
    textField:{
        paddingBottom: "1rem",
        width:"100%"
    },
    btn:{
        width:"100%"
    },
    text:{
        paddingTop: "1rem",
        fontSize: "16px",
        cursor: "pointer"
    },
    
}));

export default loggingStyles;