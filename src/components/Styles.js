import { makeStyles } from '@material-ui/core/styles'
const drawerWidth = 150

const useStyles = makeStyles(theme => ({
	root: {
		display: 'flex'
	},
	banana: {
		fontFamily: 'cookie',
		fontSize: '2em',
		color: '#FFF'
	},
	media: {
    height: 'auto',
    maxWidth: '100%',
    minWidth: '100%'
	},
	drawer: {
		[theme.breakpoints.up('sm')]: {
			width: drawerWidth,
			flexShrink: 0
		}
	},
	paper: {
		backgroundColor: 'yellow',
  },
  spinner: {
    margin: '0 auto',
    position: 'relative',
    left: '25vw',
    top: '25vh'
  },
	appBar: {
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
    [theme.breakpoints.down('sm')]: {
      gridTemplateColumns: '1fr',
		}
  },
	drawerPaper: {
		width: drawerWidth
	},
	content: {
		flexGrow: 1,
    padding: theme.spacing(3),
  },
  loader: {
    position: 'absolute',
    top: 'calc(50% - 4em)',
    left: 'calc(50% - 4em)',
    width: '6em',
    height: '6em',
    border: '1.1em solid rgba(0, 0, 0, 0.2)',
    borderLeft: '1.1em solid #000000',
    borderRadius: '50%',
    animation: 'load8 1.1s infinite linear',
    transition: 'opacity 0.3s',
  },
  
  loaderHide: {
    opacity: 0,
  },
  
}))

export {useStyles}