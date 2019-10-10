import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { useTheme } from '@material-ui/core/styles';
import {useStyles} from './Styles.js'


function Sidebar(props) {
  const { container } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
		<div>
			<div className={classes.toolbar} />
			<List>
				{[
					'Adzuki',
					'Almond',
					'Avocado',
					'Bora Jujube',
					'Breadfruit',
					'Carambola',
					'Cashew',
					'Cassava',
					'Chickpea',
					'Chili Pepper',
					'Clove',
          'Coconut',
          'Coriander',
          'Dill',
          'Durian',
          'Fennel',
          'Fenugreek',
          'Fig',
          'Ginger',
          'Guava',
          'Hazelnut',
          'Jackfruit',
          'Jambolan',
          'Lentil',
          'Lime',
          'Longan',
          'Loquat',
          'Lychee',
          'Macadamia',
          'Mango',
          'Moringa',
          'Mung',
          'Mustard',
          'Naranjilla',
          'Nutmeg',
          'Okra',
          'Olive',
          'Oregano',
          'Papaya',
          'Peanut',
          'Pecan',
          'Pepper',
          'Persimmon',
          'Pineapple',
          'Pistachio',
          'Pomegranate',
          'Pommelo',
          'Prickly Pear',
          'Rosemary',
          'Sapodilla',
          'Sesame',
          'Sittu',
          'Star Anise',
          'Strawberry Guava',
          'Sugar Apple',
          'Tamarind',
          'Turmeric',
				].map((text, index) => (
					<ListItem onClick={props.handleClick} button key={text}>
						<ListItemText primary={text} />
					</ListItem>
				))}
			</List>
		</div>
	)

  return (
    <div className={classes.root}>
			<CssBaseline />
			<AppBar position='fixed' className={classes.appBar}>
				<Toolbar>
					<IconButton
						color='inherit'
						aria-label='open drawer'
						edge='start'
						onClick={handleDrawerToggle}
						className={classes.menuButton}
					>
						<MenuIcon />
					</IconButton>
					<Typography className={classes.banana} variant='h6' noWrap>
						Tropical Fruit Info
					</Typography>
				</Toolbar>
			</AppBar>
			<nav className={classes.drawer} aria-label='mailbox folders'>
				{/* The implementation can be swapped with js to avoid SEO duplication of links. */}
				<Hidden smUp implementation='css'>
					<Drawer
						container={container}
						variant='temporary'
						anchor={theme.direction === 'rtl' ? 'right' : 'left'}
						open={mobileOpen}
						onClose={handleDrawerToggle}
						classes={{
							paper: classes.drawerPaper
						}}
						ModalProps={{
							keepMounted: true // Better open performance on mobile.
						}}
					>
						{drawer}
					</Drawer>
				</Hidden>
				<Hidden xsDown implementation='css'>
					<Drawer
						classes={{
							paper: classes.drawerPaper
						}}
						variant='permanent'
						open
					>
						{drawer}
					</Drawer>
				</Hidden>
			</nav>
      </div>
  );
}

export default Sidebar;
