import { Button, Container } from 'react-bootstrap';
import React, { useState } from 'react';
import Meta from '../../components/Meta';
import PokemonList from '../../components/PokemonList';

export default function pokedex() {
	const [currentPage, setCurrentPage] = useState(1);
	const [offset, setOffset] = useState(0);

	const gotoPageBefore = () => {
		if (currentPage > 1 && offset > 0) {
			setCurrentPage(currentPage - 1);
			setOffset(offset - 20);
		}
	};

	const gotoPageNext = () => {
		if (currentPage >= 1 && offset >= 0) {
			setCurrentPage(currentPage + 1);
			setOffset(offset + 20);
		}
	};

	return (
		<>
			<Meta title="Pokedex" />
			<Container className="mt-3 text-center">
				<h1 className="m-5 mb-1">Pokemon</h1>

				<div className="row d-flex justify-content-center flex-row">
					<Button onClick={gotoPageBefore} className="px-5 m-3 mb-5">
						Back
					</Button>
					<Button onClick={gotoPageNext} className="px-5 m-3 mb-5">
						Forward
					</Button>
				</div>

				<PokemonList offset={offset} />

				<div className="row d-flex justify-content-center flex-row">
					<Button onClick={gotoPageBefore} className="px-5 m-3 my-5">
						Back
					</Button>
					<Button onClick={gotoPageNext} className="px-5 m-3 my-5">
						Forward
					</Button>
				</div>

				<div style={{ height: '10vh', width: '100%' }} />
			</Container>
		</>
	);
}
