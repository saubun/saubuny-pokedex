import React, { useState } from 'react';
import { Button, Card, CardColumns } from 'react-bootstrap';
import Link from 'next/link';

export default function TypesList({ types }: typesListProps) {
	return (
		<CardColumns>
			{types.map((type: pokeShort) => (
				<Card id="pkmn-card" key={type.name}>
					<Card.Body>
						<Card.Title>
							{type.name.charAt(0).toUpperCase() + type.name.slice(1)}
						</Card.Title>
						<hr />
						<Link href="types/[type]" as={`types/${type.name}`}>
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
