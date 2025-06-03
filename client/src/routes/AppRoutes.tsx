import React from 'react'
import { AnimatePresence } from 'framer-motion';
import { useLocation } from 'react-router-dom';
import {Routes, Route} from 'react-router-dom'
import Root from '../components/layout/Root'
import Home from '../pages/Home'
import About from '../pages/About'
import Projects from '../pages/Projects'
import Contact from '../pages/Contact'
import NotFound from '../pages/NotFound'


const AppRoutes = () => {
  	const location = useLocation();

  	return (
    	<AnimatePresence mode="wait">
			<Routes location={location} key={location.pathname}>
				<Route path='/' element={<Root/>}>
					<Route index element={<Home/>}/>
					<Route path='about' element={<About/>}/>
					<Route path='projects' element={<Projects/>}/>
					<Route path='contact' element={<Contact/>}/>
					<Route path='*' element={<NotFound/>}/>
				</Route>
			</Routes>
		</AnimatePresence>
  	)
}

export default AppRoutes
