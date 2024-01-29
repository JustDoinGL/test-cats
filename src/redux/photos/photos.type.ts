import { Cat } from '../../@types/cats'
import { Status } from '../@types/enum'

type PhotosState = {
	status: Status
	favoritesPhoto: Cat[]
	openPhotos: Cat[]
}

export const initialState: PhotosState = {
	status: Status.pending,
	favoritesPhoto: [],
	openPhotos: [],
}
