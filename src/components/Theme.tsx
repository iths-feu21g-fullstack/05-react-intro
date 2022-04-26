import { useState } from 'react'

// En komponent som kan ändra tema mellan ljust och mörkt.
// React kör komponentens funktion för att få JSX, när komponenten behöver uppdateras.
// En komponent behöver uppdateras (renderas) när antingen state eller props ändrats.
const Theme = () => {
	// i Vue hade vi använt en data property
	// i React använder vi state variabler
	// set-funktionen talar om för React att komponenten behöver uppdateras
	const [theme, setTheme] = useState<string>('light')

	// Funktionen kan skrivas antingen här eller i JSX - båda sätten går lika bra
	const clickDark = () => setTheme('dark')
	// const clickLight = () => setTheme('light')

	return (
		<div className={"theme " + theme}>
			Välj tema: 
			<button onClick={() => setTheme('light')}> ljust tema </button>
			<button onClick={clickDark}> mörkt tema </button>
		</div>
	)
}

export default Theme
