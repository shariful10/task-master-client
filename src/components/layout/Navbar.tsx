import Logo from "@/assets/logo.jpg";
import { Link } from "react-router-dom";
import { ModeToggle } from "../modeToggle";

const Navbar = () => {
	return (
		<nav className="max-w-7xl mx-auto h-16 flex items-center justify-between gap-3 px-5 py-10">
			<Link to="/" className="flex items-center text-2xl">
				<img src={Logo} className="size-14 rounded-full" alt="Logo" />
				<span className="ml-2">Task</span>
				<span className="font-bold text-[#3AA41E]">Master</span>
			</Link>
			<div className="space-x-3 text-lg">
				<Link to="/">Tasks</Link>
				<Link to="/users">Users</Link>
			</div>
			<ModeToggle />
		</nav>
	);
};

export default Navbar;
