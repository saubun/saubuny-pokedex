// Pokemon
type poke = {
	name: string;
	height: number;
	weight: number;
	moves: pokeShortMoves[];
	types: pokeShortTypes[];
	id: number;
	sprites: spritesObject;
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

type spritesObject = {
	back_default: string;
	back_female: string;
	back_shiny: string;
	back_shiny_female: string;
	front_default: string;
	front_female: string;
	front_shiny: string;
	front_shiny_female: string;
};

// ----------------------------------------------------- //

type moveURL = {
	effect_entries: effectObject;
};

type effectObject = {
	effect: string;
	short_effect: string;
};
