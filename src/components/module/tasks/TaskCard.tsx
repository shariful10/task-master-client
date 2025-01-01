import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { cn } from "@/lib/utils";
import { TTask } from "@/types";

type TTaskProps = {
	task: TTask;
};

const TaskCard = ({ task }: TTaskProps) => {
	return (
		<div className="border px-5 py-3 rounded-xl">
			<div className="flex justify-between items-center">
				<div className="flex gap-2 items-center">
					<div
						className={cn("size-3 rounded-full", {
							"bg-green-500": task.priority === "Low",
							"bg-yellow-500": task.priority === "Medium",
							"bg-red-500": task.priority === "High",
						})}
					/>
					<h1>{task.title}</h1>
				</div>
				<div className="flex gap-3 items-center">
					<Button variant="link" className="p-0 text-red-500">
						Trust
					</Button>
					<Checkbox />
				</div>
			</div>
			<p>{task.description}</p>
		</div>
	);
};

export default TaskCard;