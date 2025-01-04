import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
	Dialog,
	DialogClose,
	DialogContent,
	DialogFooter,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from "@/components/ui/popover";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { priorityOptions, TPriorityOption } from "@/constants/priorityOptions";
import { cn } from "@/lib/utils";
import { updateTask } from "@/redux/features/task/taskSlice";
import { useAppDispatch } from "@/redux/hooks";
import { TTask, TTaskProps } from "@/types";
import { format } from "date-fns";
import { CalendarIcon, Pencil } from "lucide-react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";

const UpdateTaskModal = ({ task }: TTaskProps) => {
	const form = useForm<TTask>();
	const dispatch = useAppDispatch();

	const onSubmit: SubmitHandler<FieldValues> = (data) => {
		data.id = task.id;
		dispatch(updateTask(data as TTask));
	};

	return (
		<Dialog>
			<DialogTrigger asChild>
				<Pencil className="text-[#20B256] size-4 cursor-pointer" />
			</DialogTrigger>
			<DialogContent className="sm:max-w-[425px]">
				<DialogHeader>
					<DialogTitle>Update Task</DialogTitle>
				</DialogHeader>
				<Form {...form}>
					<form className="space-y-3" onSubmit={form.handleSubmit(onSubmit)}>
						<FormField
							control={form.control}
							name="title"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Title</FormLabel>
									<FormControl>
										<Input {...field} value={field.value || task.title} />
									</FormControl>
								</FormItem>
							)}
						/>
						<FormField
							control={form.control}
							name="description"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Description</FormLabel>
									<FormControl>
										<Textarea
											{...field}
											value={field.value || task.description}
										/>
									</FormControl>
								</FormItem>
							)}
						/>
						<FormField
							control={form.control}
							name="priority"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Priority</FormLabel>
									<Select
										onValueChange={field.onChange}
										defaultValue={field.value || task.priority}
									>
										<FormControl>
											<SelectTrigger>
												<SelectValue placeholder="Select a priority to set" />
											</SelectTrigger>
										</FormControl>
										<SelectContent>
											{priorityOptions.map(
												(priority: TPriorityOption, idx: number) => {
													return (
														<SelectItem value={priority} key={idx}>
															{priority}
														</SelectItem>
													);
												}
											)}
										</SelectContent>
									</Select>
								</FormItem>
							)}
						/>
						<FormField
							control={form.control}
							name="dueDate"
							render={({ field }) => (
								<FormItem className="flex flex-col">
									<FormLabel>Due Date</FormLabel>
									<Popover>
										<PopoverTrigger asChild>
											<FormControl>
												<Button
													variant={"outline"}
													className={cn(
														"pl-3 text-left font-normal",
														!field.value && "text-muted-foreground"
													)}
												>
													{field.value ? (
														format(field.value, "PPP")
													) : (
														<span>Pick a date</span>
													)}
													<CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
												</Button>
											</FormControl>
										</PopoverTrigger>
										<PopoverContent className="w-auto p-0" align="start">
											<Calendar
												mode="single"
												selected={
													field.value
														? new Date(field.value)
														: new Date(task.dueDate)
												}
												onSelect={field.onChange}
												initialFocus
											/>
										</PopoverContent>
									</Popover>
								</FormItem>
							)}
						/>
						<DialogFooter>
							<DialogClose asChild>
								<Button className="mt-5" type="submit">
									Save changes
								</Button>
							</DialogClose>
						</DialogFooter>
					</form>
				</Form>
			</DialogContent>
		</Dialog>
	);
};

export default UpdateTaskModal;
