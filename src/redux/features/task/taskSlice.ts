import { RootState } from "@/redux/store";
import { TTasks } from "@/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type TInitialState = {
	tasks: TTasks[];
	filter: "All" | "High" | "Medium" | "Low";
};

const initialState: TInitialState = {
	tasks: [
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
	filter: "All",
};

export const taskSlice = createSlice({
	name: "task",
	initialState,
	reducers: {
		addTodo: (state, action: PayloadAction<TTasks>) => {
			state.tasks.push(action.payload);
		},
	},
});

export const selectTasks = (state: RootState) => {
	return state.todo.tasks;
};

export const selectFilter = (state: RootState) => {
	return state.todo.filter;
};

export const { addTodo } = taskSlice.actions;
export default taskSlice.reducer;
