import {
	Button,
	Container,
	FormControl,
	InputGroup,
	Alert,
} from 'react-bootstrap';
import React, { useState } from 'react';
import Meta from '../../components/Meta';
import TypesList from '../../components/TypesList';
import { InferGetStaticPropsType } from 'next';

export default function pokedex({
	types,
}: InferGetStaticPropsType<typeof getStaticProps>) {
	return (
		<>
			<Meta title="Types" />
			<Container className="mt-3 text-center">
				<h1 className="m-5 mb-1">Types</h1>

				<TypesList types={types} />

				<div style={{ height: '10vh', width: '100%' }} />
			</Container>
		</>
	);
}

// Get all moves
export const getStaticProps = async () => {
	const res = await fetch(`https://pokeapi.co/api/v2/type`);
	const typesjson = await res.json();
	const types: pokeShort[] = typesjson.results;

	return {
		props: {
			types,
		},
	};
};
