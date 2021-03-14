import { useState } from 'react';
import {
	Form,
	FormControl,
	Nav,
	Navbar,
	Button,
	InputGroup,
} from 'react-bootstrap';

export default function TopNavBar() {
	const [pokemon, setPokemon] = useState('');

	// Get pokemon to be searched
	const handleChange = (e: any) => {
		setPokemon(e.target.value);
	};

	// Search pokemon
	const handleSubmit = (e: any) => {
		e.preventDefault();
	};

	return (
		<>
			<Navbar bg="primary" expand="lg" variant="dark" fixed="top">
				<Navbar.Brand href="/">Saubuny Pokedex</Navbar.Brand>
				<Navbar.Toggle aria-controls="responsive-navbar-nav" />
				<Navbar.Collapse id="responsive-navbar-nav">
					<Nav className="mr-auto">
						<Nav.Link href="/">Home</Nav.Link>
						<Nav.Link href="/pokedex">Pokedex</Nav.Link>
					</Nav>

					<Form inline onSubmit={handleSubmit}>
						<InputGroup>
							<FormControl
								type="text"
								placeholder="Search Pokemon..."
								value={pokemon}
								onChange={handleChange}
							/>
							<InputGroup.Append>
								<Button variant="secondary">Search</Button>
							</InputGroup.Append>
						</InputGroup>
					</Form>
				</Navbar.Collapse>
			</Navbar>
			<Navbar>
				<Navbar.Brand>:3</Navbar.Brand>
			</Navbar>
		</>
	);
}
