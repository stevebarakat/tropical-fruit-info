import React from 'react';
import { HorizontalBar } from 'react-chartjs-2'

export default function Nutrients(props){
  console.log(props.nutrientData);
  let nutrients = props.nutrientData;
  return(
    <div className='chart-container'>
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
				</div>
    )
}