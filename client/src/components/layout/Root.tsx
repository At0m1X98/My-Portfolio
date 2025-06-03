import { Outlet } from "react-router-dom";
import Navbar from '../client/Navbar';
import Footer from '../client/Footer';

const Root = () => {
	return (
		<div className="min-h-screen flex flex-col bg-gray-50 text-gray-900">
			<Navbar/>
			<main className="flex-1 container mx-auto px-4 py-6">
				<Outlet/>
			</main>
			<Footer/>
		</div>
	)
}

export default Root