
import {makeStyles} from '@material-ui/core/styles'

const drawerStyles = makeStyles(theme =>({
    menuButton: {
        marginRight: theme.spacing(2),
        "theme.breakpoints.up('sm')":{
            display: 'none'
        }
    },
    title:{
        flexGrow: 1
    },
    appBar: {
        "theme.breakpoints.up('sm')":{
            width: `calc(100% - ${240}px)`,
            marginLeft: 240
        }    
    },
    avatar:{
        margin: '0.6rem',
        width: '48px',
        height: '48px'
    },
    drawer:{
        width: 240,
        flexShrink:0,
        overflowX:'hidden'
    },
    drawerPapper:{
        width: 240,
        overflowX:'hidden'
    },
    header:{
        fontWeight:600
    },
    toolbar: theme.mixins.toolbar
}));
export default drawerStyles;