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
import { addTodo } from "@/redux/features/task/taskSlice";
import { selectUsers } from "@/redux/features/user/userSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { TTask, TUser } from "@/types";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";

const AddTaskModal = () => {
	const form = useForm<TTask>();
	const dispatch = useAppDispatch();
	const users = useAppSelector(selectUsers);

	const onSubmit: SubmitHandler<FieldValues> = (data) => {
		dispatch(addTodo(data as TTask));
	};

	return (
		<Dialog>
			<DialogTrigger asChild>
				<Button>Add Task</Button>
			</DialogTrigger>
			<DialogContent className="sm:max-w-[425px]">
				<DialogHeader>
					<DialogTitle>Add Task</DialogTitle>
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
										<Input {...field} value={field.value || ""} />
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
										<Textarea {...field} value={field.value || ""} />
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
										defaultValue={field.value}
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
							name="assignedTo"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Assigned To</FormLabel>
									<Select
										onValueChange={field.onChange}
										defaultValue={field.value}
									>
										<FormControl>
											<SelectTrigger>
												<SelectValue placeholder="Select a priority to set" />
											</SelectTrigger>
										</FormControl>
										<SelectContent>
											{users?.map((user: TUser) => {
												return (
													<SelectItem value={user.id} key={user.id}>
														{user.name}
													</SelectItem>
												);
											})}
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
													field.value ? new Date(field.value) : undefined
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

export default AddTaskModal;
