import AddUserModal from "@/components/module/users/AddUserModal";
import UserCard from "@/components/module/users/UserCard";
import { selectUsers } from "@/redux/features/user/userSlice";
import { useAppSelector } from "@/redux/hooks";
import { TUser } from "@/types";

const Users = () => {
	const users = useAppSelector(selectUsers);

	return (
		<div className="mx-auto max-w-7xl px-5 mt-20">
			<div className="text-2xl flex justify-between items-center gap-5">
				<h1>Users</h1>
				<AddUserModal />
			</div>
			<div className="grid grid-cols-3 gap-6 mt-5">
				{users?.map((user: TUser) => {
					return <UserCard key={user.id} user={user} />;
				})}
			</div>
		</div>
	);
};

export default Users;
