import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import {useStyles} from './Styles.js'

function Header(props) {
  const classes = useStyles();

  return (
			<AppBar position="fixed" className={classes.appBar}>
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
						Tropical Fruit &amp; Vegetable Info
					</Typography>
				</Toolbar>
			</AppBar>
  );
}

export default Header;
