import { Button } from "@/components/ui/button";
import { removeUser } from "@/redux/features/user/userSlice";
import { useAppDispatch } from "@/redux/hooks";
import { TUserProps } from "@/types";
import { Trash2 } from "lucide-react";

const UserCard = ({ user }: TUserProps) => {
	const dispatch = useAppDispatch();
	return (
		<div className="flex justify-between items-center border border-primary p-10 rounded-xl">
			<h1 className="">{user.name}</h1>
			<Button
				onClick={() => dispatch(removeUser(user.id))}
				variant="link"
				className="p-0 text-red-500"
			>
				<Trash2 />
			</Button>
		</div>
	);
};

export default UserCard;
