import React from 'react';
import { Bar } from 'react-chartjs-2'

export default function Nutrients(props){
  console.log(props.nutrientData);
  let nutrients = props.nutrientData;
  return(
    <div className='chart-container'>
					<h2>{nutrients.fruitName}</h2>
          <p>{props.nutrientGroup}</p>
					<Bar
						data={nutrients.data}
						width={4}
						height={3}
						options={{
							maintainAspectRatio: true
						}}
					/>
				</div>
    )
}