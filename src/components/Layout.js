import React, { useEffect, useState } from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Header from './Header'
import Sidebar from './Sidebar'
import TropicalFruit from './TropicalFruit';
import Nutrients from './Nutrients'
import { useTheme } from '@material-ui/core/styles';
import {useStyles} from './Styles.js'
import CssBaseline from '@material-ui/core/CssBaseline';
import { Link } from "@reach/router";
import CircularProgress from '@material-ui/core/CircularProgress';

function Layout(props) {
  const theme = useTheme();
  const classes = useStyles();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [fruitData, setFruitData] = useState('');
  const [nutrientData, setNutrientData] = useState([]);
  const [fetching, setFetching] = useState([]);
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleClick = e => {
    let fruitNum = '09089';
		const fruit = e.target.innerText

    switch (fruit) {
      case 'Almond':
        fruitNum = '12061';
        break;
      case 'Adzuki':
        fruitNum = '16001';
        break;
      case 'Avocado':
        fruitNum = '09038';
        break;     
      case 'Bora Jujube':
        fruitNum = '09146';
        break;
      case 'Breadfruit':
          fruitNum = '09059';
          break
      case 'Carambola':
          fruitNum = '09060';
          break
      case 'Cashew':
          fruitNum = '12087';
          break
      case 'Cassava':
          fruitNum = '11134';
          break          
      case 'Chickpea':
          fruitNum = '16056';
          break          
      case 'Chili Pepper':
          fruitNum = '11819';
          break
      case 'Clove':
          fruitNum = '02011';
          break
      case 'Coconut':
          fruitNum = '12104';
          break
      case 'Coriander':
          fruitNum = '02012';
          break      
      case 'Dill':
          fruitNum = '02016';
          break            
      case 'Durian':
          fruitNum = '09422';
          break  
      case 'Fennel':
          fruitNum = '11957';
          break  
      case 'Fenugreek':
          fruitNum = '02019';
          break  
      case 'Fig':
          fruitNum = '09089';
          break  
      case 'Ginger':
          fruitNum = '11216';
          break  
      case 'Guava':
          fruitNum = '09139';
          break  
      case 'Hazelnut':
          fruitNum = '12120';
          break 
      case 'Jackfruit':
          fruitNum = '09144';
          break 
      case 'Jambolan':
          fruitNum = '09145';
          break 
      case 'Lentil':
          fruitNum = '16069';
          break 
      case 'Lime':
          fruitNum = '09159';
          break
      case 'Longan':
          fruitNum = '09172';
          break
      case 'Loquat':
          fruitNum = '09174';
          break
      case 'Lychee':
          fruitNum = '09164';
          break          
      case 'Macadamia':
          fruitNum = '12131';
          break   
      case 'Mango':
          fruitNum = '09176';
          break   
      case 'Moringa':
          fruitNum = '11222';
          break   
      case 'Mung':
          fruitNum = '16080';
          break   
      case 'Mustard':
          fruitNum = '11270';
          break   
      case 'Naranjilla':
          fruitNum = '09450';
          break   
      case 'Nutmeg':
          fruitNum = '02025';
          break   
      case 'Okra':
          fruitNum = '11278';
          break   
      case 'Olive':
          fruitNum = '09193';
          break   
      case 'Oregano':
          fruitNum = '02027';
          break  
      case 'Papaya':
          fruitNum = '09226';
          break  
      case 'Peanut':
          fruitNum = '16087';
          break  
      case 'Pecan':
          fruitNum = '12142';
          break  
      case 'Pepper':
          fruitNum = '11333';
          break  
      case 'Persimmon':
          fruitNum = '09265';
          break  
      case 'Pineapple':
          fruitNum = '09266';
          break 
      case 'Pistachio':
          fruitNum = '12151';
          break 
      case 'Pomegranate':
          fruitNum = '09286';
          break 
      case 'Pommelo':
          fruitNum = '09295';
          break 
      case 'Prickly Pear':
          fruitNum = '09287';
          break 
      case 'Rosemary':
          fruitNum = '02063';
          break 
      case 'Sapodilla':
          fruitNum = '09313';
          break
      case 'Sesame':
          fruitNum = '12023';
          break
      case 'Star Anise':
          fruitNum = '02002';
          break
      case 'Strawberry Guava':
          fruitNum = '09140';
          break
      case 'Sugar Apple':
          fruitNum = '09321';
          break          
      case 'Tamarind':
          fruitNum = '09322';
          break     
      case 'Turmeric':
          fruitNum = '02043';
          break 
          default:
        console.log('no info');
    }

    const urls = [
      'https://cors-anywhere.herokuapp.com/http://www.tropicalfruitandveg.com/api/tfvjsonapi.php?tfvitem=' + fruit,
      'https://api.nal.usda.gov/ndb/V2/reports?ndbno=' + fruitNum + '&type=b&format=json&api_key=VEXk4M7U4EvgfugX5L0QtdbtnoLO6szde9XWqMGi'
    ]
    async function getAllUrls(urls) {
      setFetching(true);
			try {
				var data = await Promise.all(
          urls.map(url => fetch(url).then(response => response.json()))
        )
        setFetching(false)

				const [fruitData, nutrientData] = data
				setFruitData(fruitData.results[0])
				const fruit = nutrientData.foods[0].food

				let nutrientName = []
				let nutrientVal = []
				let nutrientGroup = []

				for (let i = 0; i < fruit.nutrients.length; i++) {
					nutrientName.push(fruit.nutrients[i].name)
					nutrientVal.push(fruit.nutrients[i].value)
					nutrientGroup.push(fruit.nutrients[i].group)
				}
				setNutrientData({
					data: {
						labels: nutrientName,
						datasets: [
							{
								label: 'Value per 100 g',
								backgroundColor: [
									'rgba(54, 162, 235, 0.2)',
								],
								borderColor: [
									'rgba(54, 162, 235, 1)',
								],
								borderWidth: 1,
								hoverBackgroundColor: 'rgba(255,99,132,0.4)',
								hoverBorderColor: 'rgba(255,99,132,1)',
								data: nutrientVal
							}
						]
					},
					nutrientGroup: nutrientGroup[0],
					fruitName: nutrientData.foods[0].food.desc.name
				})
			} catch (error) {
        setFetching(false)
				throw error
			}
		}
		getAllUrls(urls)
  }
  
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
					<ListItem onClick={handleClick} button key={text}>
          <Link to={text.replace(/\s+/g, '-').toLowerCase()}>
						<ListItemText primary={text} />
          </Link>
					</ListItem>
				))}
			</List>
		</div>
  )
  
  
	useEffect(() => {
    const urls = [
      'https://cors-anywhere.herokuapp.com/http://www.tropicalfruitandveg.com/api/tfvjsonapi.php?tfvitem=Adzuki',
      'https://api.nal.usda.gov/ndb/V2/reports?ndbno=09089&type=b&format=json&api_key=VEXk4M7U4EvgfugX5L0QtdbtnoLO6szde9XWqMGi'
    ]
		async function getAllUrls(urls) {
      setFetching(true)
			try {
				var data = await Promise.all(
					urls.map(url => fetch(url).then(response => response.json()))
        )
        setFetching(false)
				const [fruitData, nutrientData] = data
				setFruitData(fruitData.results[0])
				const fruit = nutrientData.foods[0].food
        console.log(Array.isArray(nutrientData))
				let nutrientName = []
				let nutrientVal = []
				let nutrientGroup = '' 

				for (let i = 0; i < fruit.nutrients.length; i++) {
					nutrientName.push(fruit.nutrients[i].name)
					nutrientVal.push(fruit.nutrients[i].value)
					nutrientGroup = fruit.nutrients[i].group
				}
				setNutrientData({
					data: {
						labels: nutrientName,
						datasets: [
							{
								label: 'Value per 100 g',
								backgroundColor: [
									'rgba(255, 99, 132, 0.2)',
									'rgba(54, 162, 235, 0.2)',
									'rgba(255, 206, 86, 0.2)',
									'rgba(75, 192, 192, 0.2)',
									'rgba(153, 102, 255, 0.2)',
									'rgba(255, 159, 64, 0.2)'
								],
								borderColor: [
									'rgba(255, 99, 132, 1)',
									'rgba(54, 162, 235, 1)',
									'rgba(255, 206, 86, 1)',
									'rgba(75, 192, 192, 1)',
									'rgba(153, 102, 255, 1)',
									'rgba(255, 159, 64, 1)'
								],
								borderWidth: 1,
								hoverBackgroundColor: 'rgba(255,99,132,0.4)',
								hoverBorderColor: 'rgba(255,99,132,1)',
								data: nutrientVal
							}
						]
					},
					nutrientGroup: nutrientGroup,
					fruitName: nutrientData.foods[0].food.desc.name
				})
			} catch (error) {
				console.log(error)

				throw error
			}
		}
		getAllUrls(urls)
  }, [])
  
  return (
    <>
    <div className={classes.root}>
    <CssBaseline />
    <Header drawer={drawer} mobileOpen={mobileOpen} handleDrawerToggle={handleDrawerToggle} />
    <Sidebar drawer={drawer} mobileOpen={mobileOpen} handleDrawerToggle={handleDrawerToggle} theme={theme}/>
    <main className={classes.mainWrap}>
    <div className={classes.toolbar} />
    <div className={classes.twoCol} >
    {fetching ? 
    <CircularProgress 
    size='400px'
    className={classes.spinner}
    disableShrink 
    /> :
    <>
    <TropicalFruit fruitData={fruitData} handleClick={handleClick} />
    <Nutrients nutrientData={nutrientData} nutrientGroup={nutrientData.nutrientGroup}/>
    </>
    }
    </div>
    </main>
    </div>
    </>
  );
}

export default Layout;
