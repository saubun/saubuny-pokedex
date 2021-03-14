import { Button, Container } from 'react-bootstrap';
import { useRouter } from 'next/dist/client/router';
import React, { useState } from 'react';

type nameProps = {
	poke: poke;
};

export default function pokemon({ poke }: nameProps) {
	const [moreMoves, setMoreMoves] = useState(false);
	const [movesDisplay, setMovesDisplay] = useState(
		<ul>
			{poke.moves.slice(0, 10).map((obj) => (
				<li key={obj.move.name}>
					{' '}
					{obj.move.name.charAt(0).toUpperCase() + obj.move.name.slice(1)}{' '}
				</li>
			))}
		</ul>
	);

	const showMoreMoves = () => {
		setMovesDisplay(
			<ul>
				{poke.moves.map((obj) => (
					<li key={obj.move.name}>
						{' '}
						{obj.move.name.charAt(0).toUpperCase() +
							obj.move.name.slice(1)}{' '}
					</li>
				))}
			</ul>
		);
		setMoreMoves(true);
	};

	const showLessMoves = () => {
		setMovesDisplay(
			<ul>
				{poke.moves.slice(0, 10).map((obj) => (
					<li key={obj.move.name}>
						{' '}
						{obj.move.name.charAt(0).toUpperCase() +
							obj.move.name.slice(1)}{' '}
					</li>
				))}
			</ul>
		);
		setMoreMoves(false);
	};

	const router = useRouter();
	const { name } = router.query;

	return (
		<Container className="my-3">
			<h1>Information</h1>
			<img src={poke.sprites.front_default} alt="Pokemon Sprite" />
			<p>
				Species:{' '}
				{poke.species.name.charAt(0).toUpperCase() + poke.species.name.slice(1)}
			</p>

			<p>Id: {poke.id}</p>
			<p>Height: {poke.height}</p>
			<p>Weight: {poke.weight}</p>

			<p>Types:</p>
			<ul>
				{poke.types.map((obj) => (
					<li key={obj.type.name}>
						{obj.type.name.charAt(0).toUpperCase() + obj.type.name.slice(1)}
					</li>
				))}
			</ul>

			<p>Moves:</p>
			{movesDisplay}

			<Button
				variant="primary"
				onClick={() => (moreMoves ? showLessMoves() : showMoreMoves())}
			>
				{moreMoves ? 'Show Less Moves' : 'Show More Moves'}
			</Button>
		</Container>
	);
}

// Fetch individaul pokemon data
export const getServerSideProps = async (context: any) => {
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
