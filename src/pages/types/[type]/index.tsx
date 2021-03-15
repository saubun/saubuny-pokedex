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

	const router = useRouter();

	const handleCardClickMoves = (obj: pokeShort) => {
		router.push('/moves/[move]', `/moves/${obj.name}`);
	};

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
						<p>
							Damage Type:{' '}
							{type.move_damage_class
								? type.move_damage_class.name.charAt(0).toUpperCase() +
								  type.move_damage_class.name.slice(1)
								: 'Unkown'}
						</p>

						{type.moves.length > 0 ? (
							<div
								className="d-flex flex-row align-items-center"
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
