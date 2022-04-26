import { useState } from 'react'
import './App.css'
import Theme from './components/Theme'
import Blogger from './components/blog/Blogger'
import Visibility from './components/conditional/Visibility'
import CookieDialog from './components/cookie/CookieDialog'

// App-komponenten är "root" (parent) till alla andra komponenter
const App = () => (
	<div className="app">
		<Theme />
		<CookieDialog />
		<Visibility />
		<Blogger />
	</div>
)

export default App
