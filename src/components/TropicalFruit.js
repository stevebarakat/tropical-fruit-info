import React, { useEffect, useState } from 'react'
import AppBar from '@material-ui/core/AppBar'
import CssBaseline from '@material-ui/core/CssBaseline'
import Drawer from '@material-ui/core/Drawer'
import Hidden from '@material-ui/core/Hidden'
import IconButton from '@material-ui/core/IconButton'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import MenuIcon from '@material-ui/icons/Menu'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Paper from '@material-ui/core/Paper'
import 'typeface-cookie'
import Nutrients from './Nutrients'
const drawerWidth = 150

const useStyles = makeStyles(theme => ({
	root: {
		display: 'flex'
	},
	card: {
		maxWidth: 345
	},
	cardHeader: {
		color: '#FFF',
		fontFamily: 'Raleway'
	},
	banana: {
		fontFamily: 'cookie',
		fontSize: '2em',
		color: '#FFF'
	},
	media: {
		height: 345
	},
	drawer: {
		[theme.breakpoints.up('sm')]: {
			width: drawerWidth,
			flexShrink: 0
		}
	},
	paper: {
		backgroundColor: '#FFd0bb',
		padding: '32px'
	},
	appBar: {
		marginLeft: drawerWidth,
		[theme.breakpoints.up('sm')]: {
			width: `calc(100% - ${drawerWidth}px)`
		}
	},
	menuButton: {
		marginRight: theme.spacing(2),
		[theme.breakpoints.up('sm')]: {
			display: 'none'
		}
	},
	toolbar: theme.mixins.toolbar,
	twoCol: {
		display: 'grid',
		gridTemplateColumns: '2fr 1fr'
	},
	drawerPaper: {
		width: drawerWidth
	},
	content: {
		flexGrow: 1,
		padding: theme.spacing(3)
	}
}))

function TropicalFruit(props) {
	const theme = useTheme()
	const { container } = props
	const classes = useStyles()
	const [mobileOpen, setMobileOpen] = React.useState(false)
	const [fruitData, setFruitData] = useState('')
	const [nutrientData, setNutrientData] = useState([])
	// const [fruitNum, setFruitNum] = useState(null)

	const handleDrawerToggle = () => {
		setMobileOpen(!mobileOpen)
	}

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
      case 'Cherries':
        console.log('Cherries are $3.00 a pound.');
        break;
      case 'Mangoes':
      case 'Papayas':
        console.log('Mangoes and papayas are $2.79 a pound.');
        break;
      default:
        console.log('Sorry, we are out of ');
    }

    const urls = [
      'https://cors-anywhere.herokuapp.com/http://www.tropicalfruitandveg.com/api/tfvjsonapi.php?tfvitem=' + fruit,
      'https://api.nal.usda.gov/ndb/V2/reports?ndbno=' + fruitNum + '&type=b&format=json&api_key=VEXk4M7U4EvgfugX5L0QtdbtnoLO6szde9XWqMGi'
    ]
    async function getAllUrls(urls) {
			try {
				var data = await Promise.all(
					urls.map(url => fetch(url).then(response => response.json()))
				)
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
				console.log(error)

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
					'Bael Fruit',
					'Betelnut',
					'Bora Berry',
					'Bora Jujube',
					'Breadfruit',
					'Cacao',
					'Calamondin',
					'Carambola',
					'Cashew',
					'Cashew Apple',
					'Cassava',
					'Chickpea',
					'Chili Pepper',
					'Clove'
				].map((text, index) => (
					<ListItem onClick={handleClick} button key={text}>
						<ListItemText primary={text} />
					</ListItem>
				))}
			</List>
		</div>
	)

	useEffect(() => {
    const urls = [
      'https://cors-anywhere.herokuapp.com/http://www.tropicalfruitandveg.com/api/tfvjsonapi.php?tfvitem=Fig',
      'https://api.nal.usda.gov/ndb/V2/reports?ndbno=09089&type=b&format=json&api_key=VEXk4M7U4EvgfugX5L0QtdbtnoLO6szde9XWqMGi'
    ]
		async function getAllUrls(urls) {
			try {
				var data = await Promise.all(
					urls.map(url => fetch(url).then(response => response.json()))
				)
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
		<div className={classes.root}>
			<CssBaseline />
			<AppBar position='fixed' className={classes.appBar}>
				<Toolbar>
					<IconButton
						color='inherit'
						aria-label='open drawer'
						edge='start'
						onClick={handleDrawerToggle}
						className={classes.menuButton}
					>
						<MenuIcon />
					</IconButton>
					<Typography className={classes.banana} variant='h6' noWrap>
						Tropical Fruit Info
					</Typography>
				</Toolbar>
			</AppBar>
			<nav className={classes.drawer} aria-label='mailbox folders'>
				{/* The implementation can be swapped with js to avoid SEO duplication of links. */}
				<Hidden smUp implementation='css'>
					<Drawer
						container={container}
						variant='temporary'
						anchor={theme.direction === 'rtl' ? 'right' : 'left'}
						open={mobileOpen}
						onClose={handleDrawerToggle}
						classes={{
							paper: classes.drawerPaper
						}}
						ModalProps={{
							keepMounted: true // Better open performance on mobile.
						}}
					>
						{drawer}
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
						{drawer}
					</Drawer>
				</Hidden>
			</nav>
			<main className={classes.content}>
				<div className={classes.toolbar} />
				<div className={classes.twoCol}>
					<Paper className={classes.paper} elevation={12}>
						<div>
							<Card>
								<CardHeader title={fruitData.tfvname} />
								<CardMedia
									className={classes.media}
									image={fruitData.imageurl}
									title={fruitData.tfvname}
								/>
								<CardContent>
									<p>{fruitData.description}</p>
								</CardContent>
							</Card>

							<p>{fruitData.uses}</p>
							<p>{fruitData.propagation}</p>
							<p>{fruitData.soil}</p>
							<p>{fruitData.climate}</p>
							<p>{fruitData.health}</p>
						</div>
					</Paper>
				</div>
				<Nutrients nutrientData={nutrientData} nutrientGroup={nutrientData.nutrientGroup}/>
			</main>
		</div>
	)
}

export default TropicalFruit
