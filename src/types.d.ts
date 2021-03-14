// Pokemon
type poke = {
	name: string;
	height: number;
	weight: number;
	moves: pokeShort[];
	species: pokeShort;
	types: pokeShort[];
	id: number;
};

// Lots of objects have just a name and URL
type pokeShort = {
	name: string;
	url: string;
};
