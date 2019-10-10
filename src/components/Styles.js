import { makeStyles, useTheme } from '@material-ui/core/styles'
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
    maxWidth: '100%'
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
	appBar: {
		marginLeft: drawerWidth,
		[theme.breakpoints.up('sm')]: {
			width: `calc(100% - ${drawerWidth}px)`
		}
	},
	menuButton: {
		marginRight: theme.spacing(2),
		[theme.breakpoints.up('sm')]: {
			display: 'none'
		}
	},
	toolbar: theme.mixins.toolbar,
	twoCol: {
		display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gridGap: '32px'
	},
	drawerPaper: {
		width: drawerWidth
	},
	content: {
		flexGrow: 1,
    padding: theme.spacing(3),
	}
}))

export {useStyles}