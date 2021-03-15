import React, { useState } from 'react';
import { Button, Card, CardColumns } from 'react-bootstrap';
import axios from 'axios';
import Link from 'next/link';

interface movesListProps {
	movesPerPage: number;
	offset: number;
	moves: pokeShort;
}

export default function PokemonList({ movesPerPage, offset, moves }: any) {
	return (
		<CardColumns>
			{moves.slice(offset, offset + movesPerPage).map((move: pokeShort) => (
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
