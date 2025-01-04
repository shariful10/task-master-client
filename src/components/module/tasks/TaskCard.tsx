import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { cn } from "@/lib/utils";
import {
	deleteTask,
	toggleCompleteState,
} from "@/redux/features/task/taskSlice";
import { selectUsers } from "@/redux/features/user/userSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { TTaskProps } from "@/types";
import { Trash2 } from "lucide-react";
import UpdateTaskModal from "./UpdateTaskModal";

const TaskCard = ({ task }: TTaskProps) => {
	const dispatch = useAppDispatch();
	const users = useAppSelector(selectUsers);

	const assignedUser = users.find((user) => user.id === task.assignedTo);

	return (
		<div className="border border-primary px-5 py-3 rounded-xl">
			<div className="flex justify-between items-center mb-3">
				<div className="flex gap-2 items-center">
					<div
						className={cn("size-3 rounded-full", {
							"bg-green-500": task.priority === "Low",
							"bg-yellow-500": task.priority === "Medium",
							"bg-red-500": task.priority === "High",
						})}
					/>
					<h1 className={cn({ "line-through": task.isCompleted })}>
						{task.title}
					</h1>
				</div>
				<div className="flex gap-3 items-center">
					<UpdateTaskModal task={task} />
					<Checkbox
						checked={task.isCompleted}
						onClick={() => dispatch(toggleCompleteState(task.id))}
					/>
				</div>
			</div>
			<p className="w-[90%] mb-2">
				<span className="font-semibold">Assigned To - </span>
				{assignedUser ? assignedUser.name : "Unknown"}
			</p>
			<div className="flex justify-between">
				<div className="flex flex-col justify-between">
					<p className="w-[90%]">{task.description}</p>
				</div>
				<Button
					onClick={() => dispatch(deleteTask(task.id))}
					variant="link"
					className="p-0 text-red-500"
				>
					<Trash2 />
				</Button>
			</div>
		</div>
	);
};

export default TaskCard;
