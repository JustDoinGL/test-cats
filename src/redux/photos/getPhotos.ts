import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { Cat } from '../../@types/cats'
import { key } from '../../utils/key'

export const fetchPhotos = createAsyncThunk<Cat[]>(
	'photos/fetchPhotos',
	async function (_, { rejectWithValue }) {
		try {
			const response = await axios.get(`https://api.thecatapi.com/v1/images/search?limit=15&api_key=${key}`)
			return response.data
		} catch (error) {
			return rejectWithValue('Server error.')
		}
	}
)
