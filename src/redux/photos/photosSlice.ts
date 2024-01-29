import { initialState } from './photos.type'
import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { Status } from '../@types/enum'
import { fetchPhotos } from './getPhotos'
import { Cat } from '../../@types/cats'

const photosSlice = createSlice({
	name: 'photos',
	initialState,
	reducers: {
		isFavoritesPhoto: (state, action: PayloadAction<Cat>) => {
			const { url } = action.payload
			const photoIndex = state.favoritesPhoto.findIndex(
				photo => photo.url === url
			)

			if (photoIndex !== -1) {
				state.favoritesPhoto.splice(photoIndex, 1)
			} else {
				state.favoritesPhoto.push(action.payload)
			}
		},
	},
	extraReducers: builder => {
		builder
			.addCase(fetchPhotos.pending, state => {
				state.status = Status.pending
			})
			.addCase(fetchPhotos.fulfilled, (state, action) => {
				state.openPhotos = [...state.openPhotos, ...action.payload]
				state.status = Status.fulfilled
			})
			.addCase(fetchPhotos.rejected, state => {
				state.status = Status.rejected
			})
	}
})

export default photosSlice.reducer

export const { isFavoritesPhoto } = photosSlice.actions
