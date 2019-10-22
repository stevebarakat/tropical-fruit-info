import React from 'react';
import { Chart, HorizontalBar } from 'react-chartjs-2'
import {Paper, Divider} from '@material-ui/core'
import {useStyles} from './Styles.js'

Chart.defaults.global.defaultFontColor = '#222';
Chart.defaults.global.defaultFontFamily = 'Raleway';

export default function Nutrients(props){
  const classes = useStyles()

  console.log(props.nutrientData);
  let nutrients = props.nutrientData;
  
  return(
    <>
    <Paper className={classes.content, classes.paper} elevation='10'>
					<h2>Nutrients</h2>
          <Divider />
          <h4>{nutrients.fruitName}</h4>
					<HorizontalBar
						data={nutrients.data}
						width={1}
						height={4}
						options={{
							maintainAspectRatio: true
						}}
					/>
        </Paper>
        </>
    )
}