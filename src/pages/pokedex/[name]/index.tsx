import { Container } from 'react-bootstrap';
import { useRouter } from 'next/dist/client/router';
import React from 'react';

type nameProps = {
	poke: poke;
};

export default function pokemon({ poke }: nameProps) {
	const router = useRouter();
	const { name } = router.query;

	return (
		<Container className="mt-3">
			<h1>DOes this work</h1>
			<p>
				Species:{' '}
				{poke.species.name.charAt(0).toUpperCase() + poke.species.name.slice(1)}
			</p>
			<p>Id: {poke.id}</p>
			<p>Height: {poke.height}</p>
			<p>Weight: {poke.weight}</p>

			<p>Moves:</p>
			<ul>
				{poke.moves.map((obj) => (
					<li key={obj.move.name}> {obj.move.name} </li>
				))}
			</ul>

			<p>Types:</p>
			<ul>
				{poke.types.map((obj) => (
					<li key={obj.type.name}>{obj.type.name}</li>
				))}
			</ul>
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
