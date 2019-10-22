import { makeStyles } from '@material-ui/core/styles'
const drawerWidth = 150

// font-family: 'Spicy Rice', cursive;
// font-family: 'Rammetto One', cursive;
// font-family: 'Jomhuria', cursive;

const useStyles = makeStyles(theme => ({
	root: {
    display: 'flex',
    backgroundColor: 'darkgreen',
    fontFamily: 'Raleway',
  },
  title: {
		fontSize: '1.5em',
    color: '#222',
    fontFamily: 'Raleway',
    fontWeight: '800'
  },
  strong:{
    fontWeight: '800',
  },
	banana: {
		fontFamily: 'Jomhuria',
		fontSize: '3.5em',
		color: '#222'
	},
	media: {
    height: 'auto',
    maxWidth: '100%',
    minWidth: '100%'
	},
	drawer: {
    backgroundColor: 'hsl(50, 80%, 50%)',
		[theme.breakpoints.up('sm')]: {
			width: drawerWidth,
			flexShrink: 0
		}
  },
 	paper: {
    backgroundColor: 'hsl(50, 80%, 50%)',
    padding: '0 16px 16px',
  },
	appBar: {
    backgroundColor: 'hsl(50, 80%, 50%)',
    color: '#222',
		[theme.breakpoints.up('sm')]: {
      marginLeft: drawerWidth,
			width: `calc(100% - ${drawerWidth}px)`
		}
  },
	menuButton: {
		marginRight: theme.spacing(2),
		[theme.breakpoints.up('sm')]: {
			display: 'none'
		}
  },
  mainWrap: {
    maxWidth: '100%'
  },
	toolbar: theme.mixins.toolbar,
	twoCol: {
		display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gridGap: '32px',
    margin: '32px',
    [theme.breakpoints.down('sm')]: {
      gridTemplateColumns: '1fr',
		}
  },
  sidebarLink: {
    color: '#222',
    textDecoration: 'none',
    fontWeight: '800'
},
	drawerPaper: {
    width: drawerWidth,
    backgroundColor: 'hsl(50, 80%, 50%)'
	},
	content: {
		flexGrow: 1,
    padding: theme.spacing(3),
  },
  spinner: {
    margin: '0 auto',
    position: 'relative',
    left: '25vw',
    top: '25vh',
    width: '100%',
    height: '100%',
    border: '1.1em solid hsl(50, 80%, 50%)',
    borderLeft: '1.1em solid #222',
    borderRadius: '50%',
    animation: 'load8 1.1s infinite linear',
    transition: 'opacity 0.3s',
    [theme.breakpoints.down('sm')]: {
      top: '25vh',
      left: '5vw'
		}
  },
  
  loaderHide: {
    opacity: 0,
  },
  
}))

export {useStyles}