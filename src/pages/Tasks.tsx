import { selectTasks } from "@/redux/features/task/taskSlice";
import { useAppSelector } from "@/redux/hooks";

const Tasks = () => {
	const tasks = useAppSelector(selectTasks);
	console.log(tasks);

	return <div className="">Tasks</div>;
};

export default Tasks;
