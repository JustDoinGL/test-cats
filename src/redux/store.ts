import { configureStore } from '@reduxjs/toolkit'
import headerSlice from './header/headerSlice'
import photosSlice from './photos/photosSlice'

const store = configureStore({
	reducer: {
		headerSlice,
		photosSlice
	}
})

export default store

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
