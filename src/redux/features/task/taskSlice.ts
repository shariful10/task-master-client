import { RootState } from "@/redux/store";
import { TTask } from "@/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type TInitialState = {
	tasks: TTask[];
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
			title: "Create GitHub repo",
			description: "Initialize the GitHub repo for the project",
			dueDate: "2025-01-13",
			isCompleted: false,
			priority: "Medium",
		},
	],
	filter: "All",
};

export const taskSlice = createSlice({
	name: "task",
	initialState,
	reducers: {
		addTodo: (state, action: PayloadAction<TTask>) => {
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
