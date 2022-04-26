import { useState } from 'react'

const Visibility = () => {
	const [isVisible, setIsVisible] = useState<boolean>(true)
	const [doesExist, setDoesExist] = useState<boolean>(true)

	/* Alternativ 1
	let maybe = null   <- computed property
	if( doesExist ) { maybe = <div> Jag är inte alltid här </div>; }
	JSX: {maybe}

	Alternativ 2, JSX
	{doesExist ? <div> Jag är inte alltid här </div> : null } 
	
	Alternativ 3, JSX
	{doesExist && <div> Jag är inte alltid här </div> } 
	*/

	let visibleCss = isVisible ? 'block' : 'none'

	return (
		<div>
			<h2>Synlighet</h2>
			<div>
				<button onClick={() => setIsVisible(!isVisible)}> Gör synlig/osynlig </button>
				<button onClick={() => setDoesExist(!doesExist)}> Ta med/ta bort </button>
			</div>

			<div style={ { display: visibleCss } }> Jag blir osynlig ibland </div>

			{doesExist ? <div> Jag är inte alltid här </div> : null }
		</div>
	)
}

export default Visibility
