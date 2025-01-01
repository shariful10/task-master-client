import { Outlet } from "react-router-dom";
import Footer from "./components/layout/Footer";
import Navbar from "./components/layout/Navbar";

const App = () => {
	return (
		<>
			<Navbar />
			<div className="min-h-[calc(100vh-128px)]">
				<Outlet />
			</div>
			<Footer />
		</>
	);
};

export default App;
