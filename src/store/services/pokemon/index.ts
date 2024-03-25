import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { PokemonResults, PokemonDetailResults } from "./types";

type GetPokemonsNameParams = {
  limit?: number;
  offset?: number;
  id?: string;
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
    getPokemonsNames: builder.query<PokemonResults, GetPokemonsNameParams>({
      query: ({ limit, offset }) => ({
        url: `pokemon?limit=${limit}&offset=${offset}`
      })
    }),
    getPokemonDetail: builder.query<
      PokemonDetailResults,
      GetPokemonsNameParams
    >({
      query: ({ id }) => ({
        url: `pokemon/${id}`
      })
    })
  })
});

export const {
  useGetPokemonsTypesQuery,
  useGetPokemonsNamesQuery,
  useGetPokemonDetailQuery
} = PokemonService;
