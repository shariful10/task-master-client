import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { cn } from "@/lib/utils";
import {
	deleteTask,
	toggleCompleteState,
} from "@/redux/features/task/taskSlice";
import { useAppDispatch } from "@/redux/hooks";
import { TTaskProps } from "@/types";
import { Trash2 } from "lucide-react";
import UpdateTaskModal from "./updateTaskModal";

const TaskCard = ({ task }: TTaskProps) => {
	const dispatch = useAppDispatch();

	return (
		<div className="border px-5 py-3 rounded-xl">
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
			<div className="flex justify-between">
				<p className="w-[90%]">{task.description}</p>
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
