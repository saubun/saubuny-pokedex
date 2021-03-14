// Pokemon
type poke = {
	name: string;
	height: number;
	weight: number;
	moves: pokeShortMoves[];
	species: pokeShort;
	types: pokeShortTypes[];
	id: number;
};

// Lots of objects have just a name and URL
type pokeShort = {
	name: string;
	url: string;
};

type pokeShortTypes = {
	type: pokeShort;
};

type pokeShortMoves = {
	move: pokeShort;
};
