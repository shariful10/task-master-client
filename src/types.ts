export type TTask = {
	id: string;
	title: string;
	description: string;
	assignedTo: string;
	dueDate: string;
	isCompleted: boolean;
	priority: "High" | "Medium" | "Low";
};

export type TTaskProps = {
	task: TTask;
};

export type TUser = {
	id: string;
	name: string;
};

export type TUserProps = {
	user: TUser;
};
