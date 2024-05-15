import { configureStore, createSlice } from "@reduxjs/toolkit";

const initialState = {
    path: null,
    previousComponent: null,
};

const appSlice = createSlice({
    name: "app",
    initialState,
    reducers: {
        setPath: (state, action) => {
            state.previousComponent = state.path;
            state.path = action.payload;
        },
    },
});

export const { setPath } = appSlice.actions;

export const store = configureStore({
    reducer: {
        app: appSlice.reducer,
    },
});
