import { useState } from 'react'
import './App.css'
import Theme from './components/Theme'

// App-komponenten är "root" (parent) till alla andra komponenter
const App = () => (
	<div className="app">
		<Theme />
	</div>
)

export default App
