import Meta from '../components/Meta';
import React from 'react';
import { Container } from 'react-bootstrap';

export default function index() {
	return (
		<>
			<Meta title="Home" />
			<Container className="mt-3">
				<h1>Home Page</h1>
			</Container>
		</>
	);
}
