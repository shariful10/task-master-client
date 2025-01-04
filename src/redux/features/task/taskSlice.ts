import { RootState } from "@/redux/store";
import { TTask } from "@/types";
import { createSlice, nanoid, PayloadAction } from "@reduxjs/toolkit";

type TInitialState = {
	tasks: TTask[];
	filter: "All" | "High" | "Medium" | "Low";
};

const initialState: TInitialState = {
	tasks: [],
	filter: "All",
};

type DraftTask = Pick<TTask, "title" | "description" | "priority" | "dueDate">;

const createTask = (taskData: DraftTask): TTask => {
	return {
		id: nanoid(),
		isCompleted: false,
		...taskData,
	};
};

export const taskSlice = createSlice({
	name: "task",
	initialState,
	reducers: {
		addTodo: (state, action: PayloadAction<DraftTask>) => {
			const tasksData = createTask(action.payload);
			state.tasks.push(tasksData);
		},
		toggleCompleteState: (state, action: PayloadAction<string>) => {
			state.tasks.forEach((task) =>
				task.id === action.payload
					? (task.isCompleted = !task.isCompleted)
					: task
			);
		},
		deleteTask: (state, action: PayloadAction<string>) => {
			state.tasks = state.tasks.filter((task) => task.id !== action.payload);
		},
		updateTask: (state, action: PayloadAction<TTask>) => {
			const task = state.tasks.find((task) => task.id === action.payload.id);

			if (task) {
				const updatedTask = {
					...action.payload,
					id: task.id,
					dueDate: action.payload.dueDate
						? new Date(action.payload.dueDate)
						: task.dueDate,
				};
				Object.assign(task, updatedTask);
			}
		},
	},
});

export const selectTasks = (state: RootState) => {
	return state.todo.tasks;
};

export const selectFilter = (state: RootState) => {
	return state.todo.filter;
};

export const { addTodo, toggleCompleteState, deleteTask, updateTask } =
	taskSlice.actions;
export default taskSlice.reducer;
