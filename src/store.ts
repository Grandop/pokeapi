import { configureStore } from '@reduxjs/toolkit'
import { PokemonService } from './services/PokemonService/index'
import { PaginateSlice } from './features/PaginateSlice/index'
import { SearchSlice } from './features/SearchSlice'

export const store = configureStore({
  reducer: {
    [PokemonService.reducerPath]: PokemonService.reducer,
    paginate: PaginateSlice.reducer,
    search: SearchSlice.reducer,
  },
  middleware: (getDefaultMiddleware)  =>
  getDefaultMiddleware().concat(PokemonService.middleware),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch