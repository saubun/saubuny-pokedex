import {
	Button,
	Container,
	FormControl,
	InputGroup,
	Alert,
} from 'react-bootstrap';
import React, { useState } from 'react';
import Meta from '../../components/Meta';
import MovesList from '../../components/MovesList';

export default function pokedex() {
	const [currentPage, setCurrentPage] = useState(1); // TODO: update these to use local storage
	const [offset, setOffset] = useState(0);
	const [pageToGoTo, setPageToGoTo] = useState(1);

	const movesPerPage = 21;

	// ----------------------------------------------------- //

	const gotoPageBefore = () => {
		if (currentPage > 1 && offset > 0) {
			setCurrentPage(currentPage - 1);
			setOffset(offset - movesPerPage);
		}
	};

	const gotoPageNext = () => {
		if (currentPage >= 1 && offset >= 0) {
			setCurrentPage(currentPage + 1);
			setOffset(offset + movesPerPage);
		}
	};

	const gotoPageFirst = () => {
		setCurrentPage(1);
		setOffset(0);
	};

	const gotoPageLast = () => {
		setCurrentPage(40);
		setOffset(movesPerPage * 40);
	};

	// ----------------------------------------------------- //

	const gotoPage = () => {
		if (!isNaN(pageToGoTo) && pageToGoTo >= 1 && pageToGoTo <= 40) {
			setCurrentPage(pageToGoTo);
			setOffset(pageToGoTo * movesPerPage - movesPerPage);
		}
	};

	const handleChange = (e: any) => {
		if (isNaN(e.target.value)) e.target.value = pageToGoTo;
		setPageToGoTo(e.target.value);
	};

	// ----------------------------------------------------- //

	// ----------------------------------------------------- //

	return (
		<>
			<Meta title="Moves" />
			<Container className="mt-3 text-center">
				<h1 className="m-5 mb-1">Moves</h1>

				<div className="row d-flex justify-content-center flex-row">
					<Button onClick={gotoPageBefore} className="px-5 m-3 mb-5">
						Back
					</Button>
					<Button onClick={gotoPageNext} className="px-5 m-3 mb-5">
						Forward
					</Button>
				</div>

				<MovesList offset={offset} />

				<div className="row d-flex justify-content-center flex-row">
					<Button onClick={gotoPageFirst} className="px-5 m-3 my-5">
						First Page
					</Button>
					<Button onClick={gotoPageLast} className="px-5 m-3 my-5">
						Last Page
					</Button>

					<Container>
						<FormControl
							type="range"
							value={pageToGoTo}
							onChange={handleChange}
							min="1"
							max="40"
							className="my-3"
							custom
						/>
						<Button onClick={gotoPage}>Go To Page {pageToGoTo}</Button>
					</Container>
				</div>

				<div style={{ height: '10vh', width: '100%' }} />
			</Container>
		</>
	);
}
