import { useState } from 'react'

// En komponent som kan ändra tema mellan ljust och mörkt.
const Theme = () => {
	// i Vue hade vi använt en data property
	// i React använder vi state variabler
	const [theme, setTheme] = useState<string>('light')

	const clickDark = () => setTheme('dark')
	const clickLight = () => setTheme('light')

	return (
		<div className={"theme " + theme}>
			Välj tema: 
			<button onClick={clickLight}> ljust tema </button>
			<button onClick={clickDark}> mörkt tema </button>
		</div>
	)
}

export default Theme
