import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { PokemonResults } from "../../../types";

type GetPokemonsNameParams = {
  limit: number;
  offset: number;
}

export const PokemonService = createApi({
  reducerPath: 'pokemon',
  baseQuery: fetchBaseQuery({ baseUrl: "https://pokeapi.co/api/v2/" }),
  endpoints: (builder) => ({
    getPokemonsTypes: builder.query<PokemonResults, void>({
      query: () => ({
        url: 'type',
        method: 'GET'
      })
    }),
    getPokemonsNames: builder.query<PokemonResults, GetPokemonsNameParams>({
      query: ({ limit, offset }) => ({
        url: `pokemon?limit=${limit}&offset=${offset}`,
        method: 'GET'
      })
    }),
  })
})

export const { 
  useGetPokemonsTypesQuery,
  useGetPokemonsNamesQuery,
} = PokemonService