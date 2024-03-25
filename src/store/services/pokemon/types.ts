export type PokemonResults = {
  results: Pokemon[];
  pokemon: PokemonType[];
};

export type PokemonType = {
  pokemon: Pokemon;
};

export type Pokemon = {
  name: string;
  url: string;
};

export type PokemonDetailResults = {
  types: PokemonDetail[];
};

export type PokemonDetail = {
  type: {
    name: string;
  };
};