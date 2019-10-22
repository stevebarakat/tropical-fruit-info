import React from 'react';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import {useStyles} from './Styles.js'
import { Router, Link } from "@reach/router";

function Sidebar(props) {
  const { container } = props;
  const classes = useStyles();

  return (
    <>
			<nav className={classes.drawer} aria-label='mailbox folders'>
				{/* The implementation can be swapped with js to avoid SEO duplication of links. */}
				<Hidden smUp implementation='css'>
					<Drawer
						container={container}
						variant='temporary'
						anchor={props.theme.direction === 'rtl' ? 'right' : 'left'}
						open={props.mobileOpen}
						onClose={props.handleDrawerToggle}
						classes={{
							paper: classes.drawerPaper
						}}
						ModalProps={{
							keepMounted: true // Better open performance on mobile.
						}}
					>
						{props.drawer}
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
						{props.drawer}
					</Drawer>
				</Hidden>
			</nav>
      </>
  );
}

export default Sidebar;
