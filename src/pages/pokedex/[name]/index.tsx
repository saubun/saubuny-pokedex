import {
	Button,
	Card,
	CardColumns,
	CardDeck,
	Container,
} from 'react-bootstrap';
import { useRouter } from 'next/dist/client/router';
import React, { useState } from 'react';

type nameProps = {
	poke: poke;
};

// TODO: Add Pages for viewing moves and types
// TODO: A lot of refactoring here and splitting into different components

export default function pokemon({ poke }: nameProps) {
	const [moreMoves, setMoreMoves] = useState(false);
	const [movesDisplay, setMovesDisplay] = useState(
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

	const router = useRouter();
	const { name } = router.query;

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
							Species:{' '}
							{poke.species.name.charAt(0).toUpperCase() +
								poke.species.name.slice(1)}
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

// Fetch individaul pokemon data (The only errory is trying to read the favicon.ico as json)
export const getServerSideProps = async (context: any) => {
	const res = await fetch(
		`https://pokeapi.co/api/v2/pokemon/${context.params.name}`
	);
	const poke = await res.json().catch();

	return {
		props: {
			poke,
		},
	};
};
