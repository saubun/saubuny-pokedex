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
	name: string;
	accuracy: number;
	effect_entries: effectObject[];
	damage_class: pokeShort;
	id: number;
	type: pokeShort;
	power: number;
	pp: number;
	learned_by_pokemon: pokeShort[];
	effect_chance: number | null;
};

type effectObject = {
	effect: string;
	short_effect: string;
};

// ----------------------------------------------------- //

type typeURL = {
	id: number;
	name: string;
	move_damage_class: pokeShort;
	moves: pokeShort[];
	pokemon: pokeShort[];
	damage_relations: damageRelationsType;
};

type damageRelationsType = {
	double_damage_from?: pokeShort[];
	double_damage_to?: pokeShort[];
	half_damage_from?: pokeShort[];
	half_damage_to?: pokeShort[];
	no_damage_from?: pokeShort[];
	no_damage_to?: pokeShort[];
};

type typesListProps = {
	types: pokeShort[];
};

type typesProps = {
	type: typeURL;
};
