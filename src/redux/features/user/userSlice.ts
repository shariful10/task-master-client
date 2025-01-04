import { RootState } from "@/redux/store";
import { TUser } from "@/types";
import { createSlice, nanoid, PayloadAction } from "@reduxjs/toolkit";

type TInitialState = {
	users: TUser[];
};

const initialState: TInitialState = {
	users: [],
};

type DraftTask = Pick<TUser, "name">;

const createUser = (userData: DraftTask): TUser => {
	return {
		id: nanoid(),
		...userData,
	};
};

export const userSlice = createSlice({
	name: "user",
	initialState,
	reducers: {
		addUser: (state, action: PayloadAction<TUser>) => {
			const userData = createUser(action.payload);
			state.users.push(userData);
		},
		removeUser: (state, action: PayloadAction<string>) => {
			state.users = state.users.filter((user) => user.id !== action.payload);
		},
	},
});

export const selectUsers = (state: RootState) => {
	return state.user.users;
};

export const { addUser, removeUser } = userSlice.actions;

export default userSlice.reducer;
