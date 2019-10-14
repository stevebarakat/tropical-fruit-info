import React from 'react'
import Paper from '@material-ui/core/Paper'
import 'typeface-cookie'
import {useStyles} from './Styles.js'

function TropicalFruit(props) {
	const classes = useStyles()

  
	return (
    <>
							<Paper className={classes.content}>
								<h2>{props.fruitData.tfvname}</h2>
								<img className={classes.media}
									src={props.fruitData.imageurl}
                  alt={props.fruitData.tfvname}
								/>
									<p>{props.fruitData.description}</p>
                  <p>{props.fruitData.uses}</p>
                  <p>{props.fruitData.propagation}</p>
                  <p>{props.fruitData.soil}</p>
                  <p>{props.fruitData.climate}</p>
                  <p>{props.fruitData.health}</p>
							</Paper>
      </>
	)
}

export default TropicalFruit
