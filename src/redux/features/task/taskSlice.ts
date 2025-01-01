import { TInitialState, TTask } from "@/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: TInitialState = {
	task: [
		{
			id: "1514554165489489",
			title: "Initialize frontend",
			description: "Initialize the frontend of the project",
			dueDate: "2025-01-12",
			isCompleted: false,
			priority: "High",
		},
		{
			id: "1514554165489479",
			title: "Create github repo",
			description: "Initialize the github repo for the project",
			dueDate: "2025-01-13",
			isCompleted: false,
			priority: "High",
		},
	],
};

export const taskSlice = createSlice({
	name: "task",
	initialState,
	reducers: {
		addTodo: (state, action: PayloadAction<TTask>) => {
			state.task.push(action.payload);
		},
	},
});

export const { addTodo } = taskSlice.actions;
export default taskSlice.reducer;
