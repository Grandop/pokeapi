import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { PokemonResults, PokemonDetailResults } from "./types";

type GetPokemonsParams = {
  limit?: number;
  offset?: number;
  id?: string;
  typeName?: string;
};

export const PokemonService = createApi({
  reducerPath: "pokemon",
  baseQuery: fetchBaseQuery({ baseUrl: "https://pokeapi.co/api/v2/" }),
  endpoints: (builder) => ({
    getPokemonsTypes: builder.query<PokemonResults, void>({
      query: () => ({
        url: "type"
      })
    }),
    getPokemonsNames: builder.query<PokemonResults, GetPokemonsParams>({
      query: ({ limit, offset }) => ({
        url: `pokemon?limit=${limit}&offset=${offset}`
      })
    }),
    getPokemonDetail: builder.query<PokemonDetailResults, GetPokemonsParams>({
      query: ({ id }) => ({
        url: `pokemon/${id}`
      })
    }),
    getPokemonsTypeDetail: builder.query<PokemonResults, GetPokemonsParams>({
      query: ({ typeName }) => ({
        url: `type/${typeName}`
      })
    })
  })
});

export const {
  useGetPokemonsTypesQuery,
  useGetPokemonsNamesQuery,
  useGetPokemonDetailQuery,
  useGetPokemonsTypeDetailQuery
} = PokemonService;
