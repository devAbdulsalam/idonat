import { useState } from 'react';
import { idonat_backend } from '../../../declarations/idonat_backend';
import { Link } from 'react-router-dom';

function App() {
	const [greeting, setGreeting] = useState('');

	function handleSubmit(event: any) {
		event.preventDefault();
		const name = event.target.elements.name.value;
		idonat_backend.greet(name).then((greeting) => {
			setGreeting(greeting);
		});
		return false;
	}

	return (
		<main className="debug">
			<h1 className="text-3xl font-bold underline">Hello world!</h1>
			<img src="/logo2.svg" alt="DFINITY logo" />
			<br />
			<br />
			<form action="#" onSubmit={handleSubmit}>
				<label htmlFor="name">Enter your name: &nbsp;</label>
				<input id="name" alt="Name" type="text" />
				<button type="submit">Click Me!</button>
			</form>
			<section id="greeting">{greeting}</section>

			<Link to="/">Settings</Link>
		</main>
	);
}

export default App;
