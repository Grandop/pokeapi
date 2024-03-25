export type PokemonResults = {
  results: Pokemon[];
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
