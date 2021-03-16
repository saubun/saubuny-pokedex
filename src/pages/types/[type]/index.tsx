import {
	Button,
	Card,
	CardColumns,
	CardDeck,
	Container,
} from 'react-bootstrap';
import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { InferGetStaticPropsType } from 'next';

// TODO: A lot of refactoring here and splitting into different components

export default function type({
	type,
}: InferGetStaticPropsType<typeof getStaticProps>) {
	const [moreMoves, setMoreMoves] = useState(false);
	const [morePoke, setMorePoke] = useState(false);

	const router = useRouter();

	// ----------------------------------------------------- //

	const handleCardClickMoves = (obj: pokeShort) => {
		router.push('/moves/[move]', `/moves/${obj.name}`);
	};

	const handleCardClickPoke = (obj: pokeShort) => {
		router.push('/pokedex/[name]', `/pokedex/${obj.name}`);
	};

	// ----------------------------------------------------- //

	const [movesDisplay, setMovesDisplay] = useState(
		<>
			<CardColumns>
				{type.moves.slice(0, 6).map((obj: pokeShort) => (
					<Card
						id="pkmn-card"
						key={obj.name}
						onClick={() => handleCardClickMoves(obj)}
					>
						<Card.Body>
							{obj.name.charAt(0).toUpperCase() + obj.name.slice(1)}
						</Card.Body>
					</Card>
				))}
			</CardColumns>
		</>
	);

	const showMoreMoves = () => {
		setMovesDisplay(
			<>
				<CardColumns>
					{type.moves.map((obj: pokeShort) => (
						<Card
							id="pkmn-card"
							key={obj.name}
							onClick={() => handleCardClickMoves(obj)}
						>
							<Card.Body>
								{obj.name.charAt(0).toUpperCase() + obj.name.slice(1)}
							</Card.Body>
						</Card>
					))}
				</CardColumns>
			</>
		);
		setMoreMoves(true);
	};

	const showLessMoves = () => {
		setMovesDisplay(
			<CardColumns>
				{type.moves.slice(0, 6).map((obj: pokeShort) => (
					<Card
						id="pkmn-card"
						key={obj.name}
						onClick={() => handleCardClickMoves(obj)}
					>
						<Card.Body>
							{obj.name.charAt(0).toUpperCase() + obj.name.slice(1)}
						</Card.Body>
					</Card>
				))}
			</CardColumns>
		);
		setMoreMoves(false);
	};

	// ----------------------------------------------------- //

	const [pokeDisplay, setPokeDisplay] = useState(
		<>
			<CardColumns>
				{type.pokemon.slice(0, 6).map((obj: typePokeShort) => (
					<Card
						id="pkmn-card"
						key={obj.pokemon.name}
						onClick={() => handleCardClickPoke(obj.pokemon)}
					>
						<Card.Body>
							{obj.pokemon.name.charAt(0).toUpperCase() +
								obj.pokemon.name.slice(1)}
						</Card.Body>
					</Card>
				))}
			</CardColumns>
		</>
	);

	const showMorePoke = () => {
		setPokeDisplay(
			<>
				<CardColumns>
					{type.pokemon.map((obj: typePokeShort) => (
						<Card
							id="pkmn-card"
							key={obj.pokemon.name}
							onClick={() => handleCardClickPoke(obj.pokemon)}
						>
							<Card.Body>
								{obj.pokemon.name.charAt(0).toUpperCase() +
									obj.pokemon.name.slice(1)}
							</Card.Body>
						</Card>
					))}
				</CardColumns>
			</>
		);
		setMorePoke(true);
	};

	const showLessPoke = () => {
		setPokeDisplay(
			<CardColumns>
				{type.pokemon.slice(0, 6).map((obj: typePokeShort) => (
					<Card
						id="pkmn-card"
						key={obj.pokemon.name}
						onClick={() => handleCardClickPoke(obj.pokemon)}
					>
						<Card.Body>
							{obj.pokemon.name.charAt(0).toUpperCase() +
								obj.pokemon.name.slice(1)}
						</Card.Body>
					</Card>
				))}
			</CardColumns>
		);
		setMorePoke(false);
	};

	// ----------------------------------------------------- //

	return (
		<Container className="my-3">
			<Card>
				<div className="d-flex flex-column">
					<Card.Body>
						<Card.Title>
							<h1>Information</h1>
						</Card.Title>

						<p>
							Name: {type.name.charAt(0).toUpperCase() + type.name.slice(1)}
						</p>

						<p>Id: {type.id}</p>
						<p>Damage Relations: </p>
						<ul>
							<li>
								Double damage taken from:{' '}
								{type.damage_relations.double_damage_from.length > 0
									? type.damage_relations.double_damage_from.map(
											(x) =>
												x.name.charAt(0).toUpperCase() + x.name.slice(1) + ' '
									  )
									: 'None'}
							</li>
							<li>
								Double damage dealt to:{' '}
								{type.damage_relations.double_damage_to.length > 0
									? type.damage_relations.double_damage_to.map(
											(x) =>
												x.name.charAt(0).toUpperCase() + x.name.slice(1) + ' '
									  )
									: 'None'}
							</li>
							<li>
								Half damage taken from:{' '}
								{type.damage_relations.half_damage_from.length > 0
									? type.damage_relations.half_damage_from.map(
											(x) =>
												x.name.charAt(0).toUpperCase() + x.name.slice(1) + ' '
									  )
									: 'None'}
							</li>
							<li>
								Half damage dealt to:{' '}
								{type.damage_relations.half_damage_to.length > 0
									? type.damage_relations.half_damage_to.map(
											(x) =>
												x.name.charAt(0).toUpperCase() + x.name.slice(1) + ' '
									  )
									: 'None'}
							</li>
							<li>
								No damage taken from:{' '}
								{type.damage_relations.no_damage_from.length > 0
									? type.damage_relations.no_damage_from.map(
											(x) =>
												x.name.charAt(0).toUpperCase() + x.name.slice(1) + ' '
									  )
									: 'None'}
							</li>
							<li>
								No damage dealt to:{' '}
								{type.damage_relations.no_damage_to.length > 0
									? type.damage_relations.no_damage_to.map(
											(x) =>
												x.name.charAt(0).toUpperCase() + x.name.slice(1) + ' '
									  )
									: 'None'}
							</li>
						</ul>

						{/* Moves with type */}

						{type.moves.length > 0 ? (
							<div
								className="d-flex flex-row align-items-center mt-3"
								style={{ width: '100%' }}
							>
								<p>Moves with this Type:</p>
								<Button
									variant="primary"
									onClick={() =>
										moreMoves ? showLessMoves() : showMoreMoves()
									}
									className="mb-4"
									style={{
										order: 2,
										marginLeft: 'auto',
									}}
									size="sm"
								>
									{moreMoves ? 'Show Less Moves' : 'Show More Moves'}
								</Button>
							</div>
						) : (
							<p>Moves with this Type: Unkown</p>
						)}
						{movesDisplay}

						{/* Pokemon with Type */}

						{type.pokemon.length > 0 ? (
							<div
								className="d-flex flex-row align-items-center mt-3"
								style={{ width: '100%' }}
							>
								<p>Pokemon with this Type:</p>
								<Button
									variant="primary"
									onClick={() => (morePoke ? showLessPoke() : showMorePoke())}
									className="mb-4"
									style={{
										order: 2,
										marginLeft: 'auto',
									}}
									size="sm"
								>
									{morePoke ? 'Show Less Pokemon' : 'Show More Pokemon'}
								</Button>
							</div>
						) : (
							<p>Pokemon with this type: Unkown</p>
						)}
						{pokeDisplay}
					</Card.Body>

					<Link href="/types">
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
		`https://pokeapi.co/api/v2/type/${context.params.type}`
	);
	const type: typeURL = await res.json();

	return {
		props: {
			type,
		},
	};
};

export const getStaticPaths = async () => {
	const res = await fetch(`https://pokeapi.co/api/v2/type`);
	const types = await res.json();

	const typenames = types.results.map((obj: any) => obj.name);

	const paths = typenames.map((typename: string) => ({
		params: {
			type: typename,
		},
	}));

	return { paths, fallback: false };
};
