import { createSlice } from "@reduxjs/toolkit";

type TCounterState = {
	count: number;
};

const initialState: TCounterState = {
	count: 0,
};

export const counterSlice = createSlice({
	name: "counter",
	initialState,
	reducers: {
		increment: (state, actions) => {
			state.count += actions.payload;
		},
		decrement: (state, actions) => {
			state.count -= actions.payload;
		},
	},
});

export const { increment, decrement } = counterSlice.actions;

export default counterSlice.reducer;
