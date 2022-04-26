/*
6 Gör en cookie-val-komponent. Komponenten ska fråga användaren om man vill acceptera cookies. Det ska vara i en stylad ruta, så som vi brukar se på webbsidor. Användaren ska kunna välja att Acceptera alla eller Välja vilka cookies som accepteras. När användaren har gjort ett val ska rutan med valet försvinna. Komponenten ska i stället visa antingen texten "Du valde alla" eller "Du valde vissa cookies".
*/
import './CookieDialog.css'
import { useState } from 'react'

// Om man vill använda "enum" i stället för konstanter:
// enum CookieChoice { Undecided, All, Choose }
// if( cookieChoice === CookieChoice.Undecided ) ...

const CookieDialog = () => {
	const UNDECIDED = 1, ALL_COOKIES = 2, CHOOSE_COOKIES = 3
	const [cookieChoice, setCookieChoice] = useState<number>(UNDECIDED)

	// fungerar som computed property i Vue
	const showDialog: boolean = cookieChoice === UNDECIDED

	let cookieChoiceMessage: string = ''
	if( cookieChoice === ALL_COOKIES ) {
		cookieChoiceMessage = 'alla cookies'
	} else if( cookieChoice === CHOOSE_COOKIES ) {
		cookieChoiceMessage = 'vissa cookies'
	}

	// JSX
	return (
		<div className="cookie-container">
			{showDialog ? (
				<div className="cookie-dialog">
					<p>Vill du tillåta cookies?</p>
					<button onClick={() => setCookieChoice(ALL_COOKIES)}> Acceptera alla </button>
					<button onClick={() => setCookieChoice(CHOOSE_COOKIES)}> Välj cookies </button>
				</div>
			) : (
				<p> Du valde {cookieChoiceMessage}. </p>
			)}
		</div>
	)
}

export default CookieDialog
