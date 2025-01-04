import { Button } from "@/components/ui/button";
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
import { addUser } from "@/redux/features/user/userSlice";
import { useAppDispatch } from "@/redux/hooks";
import { TUser } from "@/types";
import { PlusIcon } from "lucide-react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";

const AddUserModal = () => {
	const form = useForm<TUser>();
	const dispatch = useAppDispatch();

	const onSubmit: SubmitHandler<FieldValues> = (data) => {
		dispatch(addUser(data as TUser));
	};

	return (
		<Dialog>
			<DialogTrigger asChild>
				<Button>
					Add User <PlusIcon />
				</Button>
			</DialogTrigger>
			<DialogContent className="sm:max-w-[425px]">
				<DialogHeader>
					<DialogTitle>Add User</DialogTitle>
				</DialogHeader>
				<Form {...form}>
					<form className="space-y-3" onSubmit={form.handleSubmit(onSubmit)}>
						<FormField
							control={form.control}
							name="name"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Title</FormLabel>
									<FormControl>
										<Input {...field} value={field.value || ""} />
									</FormControl>
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

export default AddUserModal;
