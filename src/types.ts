export type TTask = {
	id: string;
	title: string;
	description: string;
	dueDate: string;
	isCompleted: boolean;
	priority: "High" | "Medium" | "Low";
};

export type TTaskProps = {
	task: TTask;
};
