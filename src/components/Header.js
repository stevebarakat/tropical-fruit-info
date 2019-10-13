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


function Header(props) {
  const { container } = props;
  const classes = useStyles();
  const theme = useTheme();

  return (
    <div className={classes.root}>
			<CssBaseline />
			<AppBar position='fixed' className={classes.appBar}>
				<Toolbar>
					<IconButton
						color='inherit'
						aria-label='open drawer'
						edge='start'
						onClick={props.handleDrawerToggle}
						className={classes.menuButton}
					>
						<MenuIcon />
					</IconButton>
					<Typography className={classes.banana} variant='h6' noWrap>
						Tropical Fruit Info
					</Typography>
				</Toolbar>
			</AppBar>
      </div>
  );
}

export default Header;
