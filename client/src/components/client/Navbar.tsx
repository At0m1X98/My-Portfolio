import React, { useState } from 'react'
import {NavLink} from 'react-router-dom'
import {Menu, X} from 'lucide-react'

const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false);

	const navItems = [
		{name: "Home", path: "/"},
		{name: "About", path: "/about"},
		{name: "Projects", path: "/projects"},
		{name: "Contact", path: "/contact"},
	];

	const linkClasses = ({isActive}: {isActive: boolean}) => {
		return `px-3 py-2 rounded-md text-sm font-medium ${
			isActive ? "text-blue-600 underline" : "text-gray-700 hover:text-blue-500"
		}`;
	};

  	return (
		<nav className='bg-white shadow'>
			<div className='container mx-auto px-4 py-4 flex justify-between items-center'>
				<div className='text-xl font-bold text-blue-600'>MyPortfolio</div>
				
				{/* Mobile Menu Button */}
        		<button 
          			className='md:hidden focus:outline-none'
          			onClick={() => setIsOpen(!isOpen)}
          			aria-label="Toggle menu"
        		>
          			{isOpen ? (
            			<X className='w-6 h-6 transition-transform duration-300 transform rotate-180'/>
          			) : (
            			<Menu className='w-6 h-6 transition-transform duration-300 transform'/>
          			)}
        		</button>

				{/* Desktop Nav */}
        		<div className='hidden md:flex space-x-4'>
        		  	{navItems.map((item) => (
        		    	<NavLink key={item.path} to={item.path} className={linkClasses}>
        		    {item.name} 
        		    	</NavLink>
        		  	))}
        		</div>
      		</div>

			{/* Mobile Menu */}
      		<div
        		className={`md:hidden transform transition-transform duration-300 ease-in-out origin-top ${
          		isOpen ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0 pointer-events-none"
        		} bg-white shadow-md px-4 pb-4 space-y-2`}
      		>
				{navItems.map((item) => (
					<NavLink
						key={item.path}
						to={item.path}
						className={linkClasses}
						onClick={() => setIsOpen(false)}
					>
						{item.name}
					</NavLink>
				))}
			</div>
    	</nav>
  	)
}

export default Navbar
