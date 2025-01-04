import { RootState } from "@/redux/store";
import { TTask } from "@/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

type TInitialState = {
	tasks: TTask[];
	filter: "All" | "High" | "Medium" | "Low";
};

const initialState: TInitialState = {
	tasks: [],
	filter: "All",
};

export const taskSlice = createSlice({
	name: "task",
	initialState,
	reducers: {
		addTodo: (state, action: PayloadAction<TTask>) => {
			const tasksData = {
				...action.payload,
				id: `task-${uuidv4()}`,
				isComplete: false,
			};
			state.tasks.push(tasksData);
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
