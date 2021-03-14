import React, { useState } from 'react';
import { Button, Card, CardColumns } from 'react-bootstrap';
import axios from 'axios';
import Link from 'next/link';

export default function PokemonList({ offset }: any) {
	const [pokemon, setPokemon] = useState([]);

	axios
		.get(`https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=21`)
		.then((res) => setPokemon(res.data.results));

	return (
		<CardColumns>
			{pokemon.map((poke: pokeShort) => (
				<Card key={poke.name}>
					<Card.Body>
						<Card.Title>
							{poke.name.charAt(0).toUpperCase() + poke.name.slice(1)}
						</Card.Title>
						<hr />
						<Link href="pokedex/[name]" as={`pokedex/${poke.name}`}>
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
