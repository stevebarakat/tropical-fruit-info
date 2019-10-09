import React from 'react'
import TropicalFruit from './TropicalFruit'
import {theme, ThemeProvider} from './Theme.js'

const App = (props) => (
	<div className="container">
    
    <ThemeProvider theme={theme}>
      <TropicalFruit />
    </ThemeProvider>
	</div>
)

export default App
