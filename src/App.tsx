import { useState } from 'react'
import './App.css'
import Theme from './components/Theme'
import Blogger from './components/blog/Blogger'

// App-komponenten är "root" (parent) till alla andra komponenter
const App = () => (
	<div className="app">
		<Theme />
		<Blogger />
	</div>
)

export default App
