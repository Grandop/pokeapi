import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { PokemonResults } from "../../types";

export const PokemonService = createApi({
  reducerPath: 'pokemonApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://pokeapi.co/api/v2/' }),
  endpoints: (builder) => ({
    getPokemonsTypes: builder.query<PokemonResults, void>({
      query: () => ({
        url: 'type',
        method: 'GET'
      })
    }),
    getPokemonsNames: builder.query<PokemonResults, number>({
      query: (offset: number) => ({
        url: `pokemon?limit=8&offset=${offset}`,
        method: 'GET'
      })
    }),
  })
})

export const { 
  useGetPokemonsTypesQuery,
  useGetPokemonsNamesQuery 
} = PokemonService