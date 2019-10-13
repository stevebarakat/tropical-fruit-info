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
import Header from './Header'
import Sidebar from './Sidebar'


function Layout(props) {
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
    <>
    <Header drawer={drawer} handleDrawerToggle={handleDrawerToggle} />
    <Sidebar drawer={drawer} mobileOpen={mobileOpen} />
    </>
  );
}

export default Layout;
