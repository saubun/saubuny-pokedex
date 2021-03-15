import Link from 'next/link';
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
				<Link href="/">
					<Navbar.Brand as="a">Saubuny Pokédex</Navbar.Brand>
				</Link>

				<Navbar.Toggle aria-controls="responsive-navbar-nav" />
				<Navbar.Collapse id="responsive-navbar-nav">
					<Nav className="mr-auto">
						<Link href="/">
							<Nav.Link as="a">Home</Nav.Link>
						</Link>
						<Link href="/pokedex">
							<Nav.Link as="a">Pokédex</Nav.Link>
						</Link>
						<Link href="/moves">
							<Nav.Link as="a">Moves</Nav.Link>
						</Link>
						<Nav.Link href="https://github.com/saubun/saubuny-pokedex">
							GitHub Repository
						</Nav.Link>
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
