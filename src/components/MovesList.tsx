import React, { useState } from 'react';
import { Button, Card, CardColumns } from 'react-bootstrap';
import axios from 'axios';
import Link from 'next/link';

export default function PokemonList({ offset }: any) {
	const [moves, setMoves] = useState([]);

	// Axios is used because i need the offset prop :(
	axios
		.get(`https://pokeapi.co/api/v2/move?offset=${offset}&limit=21`)
		.then((res) => setMoves(res.data.results));

	return (
		<CardColumns>
			{moves.map((move: pokeShort) => (
				<Card id="pkmn-card" key={move.name}>
					<Card.Body>
						<Card.Title>
							{move.name.charAt(0).toUpperCase() + move.name.slice(1)}
						</Card.Title>
						<hr />
						<Link href="moves/[move]" as={`moves/${move.name}`}>
							<Button variant="primary" block>
								Data
							</Button>
						</Link>
					</Card.Body>
				</Card>
			))}
		</CardColumns>
	);
}
