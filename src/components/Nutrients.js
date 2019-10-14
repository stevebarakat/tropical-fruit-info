import React from 'react';
import { HorizontalBar } from 'react-chartjs-2'
import Paper from '@material-ui/core/Paper'
import {useStyles} from './Styles.js'

export default function Nutrients(props){
  const classes = useStyles()

  console.log(props.nutrientData);
  let nutrients = props.nutrientData;
  return(
    <>
    <Paper className={classes.content}>
					<h2>Nutrients</h2>
          <p>{nutrients.fruitName}</p>
					<HorizontalBar
						data={nutrients.data}
						width={1}
						height={2}
						options={{
							maintainAspectRatio: true
						}}
					/>
        </Paper>
        </>
    )
}