import {
	Button,
	Card,
	CardColumns,
	CardDeck,
	Container,
} from 'react-bootstrap';
import { useRouter } from 'next/dist/client/router';
import React, { useState } from 'react';
import axios from 'axios';

// TODO: Add Pages for viewing moves and types
// TODO: A lot of refactoring here and splitting into different components

type pokeProps = {
	poke: poke;
};

export default function pokemon({ poke }: pokeProps) {
	const [moreMoves, setMoreMoves] = useState(false);
	const [movesDisplay, setMovesDisplay] = useState(<></>);
	const router = useRouter();
	const { name } = router.query;

	const showMoreMoves = () => {
		setMovesDisplay(
			<CardColumns>
				{poke.moves.map((obj) => (
					<Card id="pkmn-card" key={obj.move.name}>
						<Card.Body>
							{obj.move.name.charAt(0).toUpperCase() + obj.move.name.slice(1)}
						</Card.Body>
					</Card>
				))}
			</CardColumns>
		);
		setMoreMoves(true);
	};

	const showLessMoves = () => {
		setMovesDisplay(
			<CardColumns>
				{poke.moves.slice(0, 12).map((obj) => (
					<Card id="pkmn-card" key={obj.move.name}>
						<Card.Body>
							{obj.move.name.charAt(0).toUpperCase() + obj.move.name.slice(1)}
						</Card.Body>
					</Card>
				))}
			</CardColumns>
		);
		setMoreMoves(false);
	};

	return (
		<Container className="my-3">
			<Card>
				<div className="d-flex flex-column">
					<Card.Body>
						<Card.Title>
							<h1>Information</h1>
						</Card.Title>
						<img
							src={poke.sprites.front_default}
							width="200"
							alt="Pokemon Sprite"
						/>

						<p>
							Species: {poke.name.charAt(0).toUpperCase() + poke.name.slice(1)}
						</p>

						<p>Id: {poke.id}</p>
						<p>Height: {poke.height}</p>
						<p>Weight: {poke.weight}</p>

						<p>Types:</p>
						<CardDeck className="my-3">
							{poke.types.map((obj) => (
								<Card id="pkmn-card" key={obj.type.name}>
									<Card.Body>
										{obj.type.name.charAt(0).toUpperCase() +
											obj.type.name.slice(1)}
									</Card.Body>
								</Card>
							))}
						</CardDeck>

						<p>Moves:</p>

						<Button
							variant="primary"
							onClick={() => (moreMoves ? showLessMoves() : showMoreMoves())}
							className="mb-4"
						>
							{moreMoves ? 'Show Less Moves' : 'Show More Moves'}
						</Button>

						{movesDisplay}
					</Card.Body>
				</div>
			</Card>
		</Container>
	);
}

export const getStaticProps = async (context: any) => {
	const res = await fetch(
		`https://pokeapi.co/api/v2/pokemon/${context.params.name}`
	);
	const poke = await res.json();

	return {
		props: {
			poke,
		},
	};
};

export const getStaticPaths = async () => {
	const res = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=1118`);
	const pokemon = await res.json();

	const pokenames = pokemon.results.map((obj: any) => obj.name);

	const paths = pokenames.map((pokename: string) => ({
		params: {
			name: pokename,
		},
	}));

	return { paths, fallback: false };
};
