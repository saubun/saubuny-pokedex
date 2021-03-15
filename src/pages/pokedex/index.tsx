import {
	Button,
	Container,
	FormControl,
	InputGroup,
	Alert,
} from 'react-bootstrap';
import React, { useState } from 'react';
import Meta from '../../components/Meta';
import PokemonList from '../../components/PokemonList';

export default function pokedex() {
	const [currentPage, setCurrentPage] = useState(1); // TODO: update these to use local storage
	const [offset, setOffset] = useState(0);
	const [pageToGoTo, setPageToGoTo] = useState(1);
	const [alertDisplay, setAlertDisplay] = useState(false);

	const pkmnPerPage = 21;

	// ----------------------------------------------------- //

	const gotoPageBefore = () => {
		if (currentPage > 1 && offset > 0) {
			setCurrentPage(currentPage - 1);
			setOffset(offset - pkmnPerPage);
		}
	};

	const gotoPageNext = () => {
		if (currentPage >= 1 && offset >= 0) {
			setCurrentPage(currentPage + 1);
			setOffset(offset + pkmnPerPage);
		}
	};

	const gotoPageFirst = () => {
		setCurrentPage(1);
		setOffset(0);
	};

	const gotoPageLast = () => {
		setCurrentPage(53);
		setOffset(pkmnPerPage * 53);
	};

	// ----------------------------------------------------- //

	const gotoPage = () => {
		if (!isNaN(pageToGoTo) && pageToGoTo >= 1 && pageToGoTo <= 53) {
			setAlertDisplay(false);
			setCurrentPage(pageToGoTo);
			setOffset(pageToGoTo * pkmnPerPage - pkmnPerPage);
		} else {
			setAlertDisplay(true);
		}
	};

	const handleChange = (e: any) => {
		if (isNaN(e.target.value)) e.target.value = pageToGoTo;
		setPageToGoTo(e.target.value);
	};

	// ----------------------------------------------------- //

	const AlertComponent = () => {
		if (alertDisplay) {
			return (
				<Alert variant="danger">
					<Alert.Heading>Thats not a valid input!</Alert.Heading>
					<p>Please try again with a different value.</p>
				</Alert>
			);
		} else {
			return <></>;
		}
	};

	// ----------------------------------------------------- //

	return (
		<>
			<Meta title="Pokédex" />
			<Container className="mt-3 text-center">
				<h1 className="m-5 mb-1">Pokémon</h1>

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
					<Button onClick={gotoPageFirst} className="px-5 m-3 my-5">
						First Page
					</Button>
					<Button onClick={gotoPageLast} className="px-5 m-3 my-5">
						Last Page
					</Button>

					<Container>
						<AlertComponent />

						<InputGroup className="mt-3">
							<FormControl
								as="input"
								type="text"
								placeholder="Go to page..."
								value={pageToGoTo}
								onChange={handleChange}
							/>
							<InputGroup.Append>
								<Button onClick={gotoPage}>Go</Button>
							</InputGroup.Append>
						</InputGroup>
					</Container>
				</div>

				<div style={{ height: '10vh', width: '100%' }} />
			</Container>
		</>
	);
}
