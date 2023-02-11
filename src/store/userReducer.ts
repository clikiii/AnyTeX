import { createSlice } from '@reduxjs/toolkit';

export const initialState = {
    seed: null,
    addr: null,
};

const userReducer = createSlice({
    name: 'User',
    initialState,
    reducers: {
        setSeed: (state, action) => {
            state.seed = action.payload;
        },
        setAddr: (state, action) => {
            state.addr = action.payload;
        },
    },
});

export const { setSeed, setAddr } = userReducer.actions;
export default userReducer.reducer;