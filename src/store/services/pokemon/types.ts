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
  height: number;
  types: PokemonDetail[];
  stats: PokemonStat[];
  weight: number;
};

export type PokemonDetail = {
  type: {
    name: string;
  };
};

export type PokemonStat = {
  base_stat: number;
  stat: {
    name: string;
  };
};
