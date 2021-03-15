import React, { useState } from 'react';
import { Button, Card, CardColumns } from 'react-bootstrap';
import axios from 'axios';
import Link from 'next/link';

interface pokemonListProps {
	pkmnPerPage: number;
	offset: number;
	pokemon: pokeShort[];
}

export default function PokemonList({
	pkmnPerPage,
	offset,
	pokemon,
}: pokemonListProps) {
	return (
		<CardColumns>
			{pokemon.slice(offset, offset + pkmnPerPage).map((poke: pokeShort) => (
				<Card id="pkmn-card" key={poke.name}>
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
