import { createSlice } from '@reduxjs/toolkit';

const favSlice = createSlice({
    name: 'favorites',
    initialState: {
        ids: []
    },
    reducers: {
        addFavorite: (state, action) => {
            state.ids.push(action.payload.id)
        },
        removeFavorite: (state, action) => {
            state.ids = state.ids.filter((name) => name !== action.payload.id)
        }
    }
});

export default favSlice.reducer;
export const addFavourite = favSlice.actions.addFavorite;
export const removeFavorite = favSlice.actions.removeFavorite;