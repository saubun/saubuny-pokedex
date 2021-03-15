import Meta from '../components/Meta';
import React from 'react';
import { Container } from 'react-bootstrap';

export default function home() {
	return (
		<>
			<Meta title="Home" />
			<Container
				style={{ height: '80vh' }}
				className="text-center d-flex justify-content-center flex-column align-items-center"
			>
				<h1>Saubuny Pokédex</h1>
				<p>Using the power of Next.js, here is a fully functioning Pokédex!</p>
			</Container>
		</>
	);
}
