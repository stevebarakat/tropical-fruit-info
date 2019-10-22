import React from 'react'
import {Paper, Divider} from '@material-ui/core'
import 'typeface-cookie'
import { useStyles } from './Styles.js'

function TropicalFruit(props) {
	const classes = useStyles()

	return (
		<>
			<Paper className={classes.content, classes.paper} elevation='10'>
				<h2>{props.fruitData.tfvname}</h2>
				<Divider />
        <p><span className={classes.strong}>Botanical Names:</span> {props.fruitData.botname}</p>
				<p><span className={classes.strong}>Other Names:</span> {props.fruitData.othname}</p>
				<img
					className={classes.media}
					src={props.fruitData.imageurl}
					alt={props.fruitData.tfvname}
				/>
        <h4>Description</h4>
				<p>{props.fruitData.description}</p>
        <h4>Uses</h4>
				<p>{props.fruitData.uses}</p>
        <h4>Health</h4>
				<p>{props.fruitData.propagation}</p>
        <h4>Climate</h4>
				<p>{props.fruitData.soil}</p>
        <h4>Propagation</h4>
				<p>{props.fruitData.climate}</p>
				<p>{props.fruitData.health}</p>
			</Paper>
		</>
	)
}

export default TropicalFruit
