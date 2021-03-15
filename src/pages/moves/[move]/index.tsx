import React, { useState } from 'react';
import {
	Container,
	Card,
	CardColumns,
	CardDeck,
	Button,
} from 'react-bootstrap';
import Link from 'next/link';

type moveProps = {
	move: moveURL;
};

// TODO: Lots of refactoring to do here too

export default function move({ move }: moveProps) {
	const [morePoke, setMorePoke] = useState(false);
	const [pokeDisplay, setPokeDisplay] = useState(
		<>
			<CardColumns>
				{move.learned_by_pokemon.slice(0, 12).map((obj) => (
					<Card id="pkmn-card" key={obj.name}>
						<Link href="pokedex/[name]" as={`pokedex/${obj.name}`}>
							<Card.Body>
								{obj.name.charAt(0).toUpperCase() + obj.name.slice(1)}
							</Card.Body>
						</Link>
					</Card>
				))}
			</CardColumns>
		</>
	);

	const showMorePoke = () => {
		setPokeDisplay(
			<>
				<CardColumns>
					{move.learned_by_pokemon.map((obj) => (
						<Card id="pkmn-card" key={obj.name}>
							<Link href="moves/[move]" as={`moves/${obj.name}`}>
								<Card.Body>
									{obj.name.charAt(0).toUpperCase() + obj.name.slice(1)}
								</Card.Body>
							</Link>
						</Card>
					))}
				</CardColumns>
			</>
		);
		setMorePoke(true);
	};

	const showLessPoke = () => {
		setPokeDisplay(
			<>
				<CardColumns>
					{move.learned_by_pokemon.slice(0, 12).map((obj) => (
						<Card id="pkmn-card" key={obj.name}>
							<Link href="moves/[move]" as={`moves/${obj.name}`}>
								<Card.Body>
									{obj.name.charAt(0).toUpperCase() + obj.name.slice(1)}
								</Card.Body>
							</Link>
						</Card>
					))}
				</CardColumns>
			</>
		);
		setMorePoke(false);
	};

	return (
		<Container className="my-3">
			<Card>
				<div className="d-flex flex-column">
					<Card.Body>
						<Card.Title>
							<h1>Information</h1>
						</Card.Title>

						<p>
							Name: {move.name.charAt(0).toUpperCase() + move.name.slice(1)}
						</p>
						<p>Type: {move.type}</p>
						<p>Accuracy: {move.accuracy}</p>
						<p>Power: {move.power}</p>
						<p>PP: {move.pp}</p>
						<p>Id: {move.id}</p>
						{move.effect_chance && <p>Effect Chance: {move.effect_chance}</p>}

						<p>Effects:</p>
						<CardDeck className="my-3">
							{move.effect_entries.map((obj) => (
								<Card id="pkmn-card" key={obj.effect}>
									<Card.Body>{obj.effect}</Card.Body>
								</Card>
							))}
						</CardDeck>

						<p>Pokemon with this move:</p>
						{move.learned_by_pokemon.length > 0 ? (
							<Button
								variant="primary"
								onClick={() => (morePoke ? showLessPoke() : showMorePoke())}
								className="mb-4"
							>
								{morePoke ? 'Show Less Pokemon' : 'Show More Pokemon'}
							</Button>
						) : (
							<p>There are no moves listed for this pokemon</p>
						)}
						{pokeDisplay}
					</Card.Body>

					<Link href="/moves">
						<Button className="mx-3 mb-4" variant="primary">
							Go back
						</Button>
					</Link>
				</div>
			</Card>
		</Container>
	);
}

export const getStaticProps = async (context: any) => {
	const res = await fetch(
		`https://pokeapi.co/api/v2/move/${context.params.move}`
	);
	const move = await res.json();

	return {
		props: {
			move,
		},
	};
};

export const getStaticPaths = async () => {
	const res = await fetch(`https://pokeapi.co/api/v2/move?limit=843`);
	const moves = await res.json();

	const movenames = moves.results.map((obj: pokeShort) => obj.name);

	const paths = movenames.map((movename: string) => ({
		params: {
			move: movename,
		},
	}));

	return { paths, fallback: false };
};
