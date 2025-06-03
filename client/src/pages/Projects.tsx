import React from 'react'
import {motion} from 'framer-motion'
import PageWrapper from '../components/PaperWrapper'
import { TextSearch } from 'lucide-react';

type Project = {
	id: number;
	title: string;
	description: string;
	techStack: string[];
	repoLink?: string;
	liveLink?: string;
}

const projects: Project[] = [
	{
		id: 1,
		title: 'Protfolio Website',
		description: 'A personal portfolio built with React, TypeScript and Tailwind CSS',
		techStack: ['React', 'TypeScript', 'Tailwind'],
		repoLink: '',
		liveLink: '',
	},
	{
		id: 2,
		title: 'Public Advisors',
		description: 'Informative website created for Public Advisors company',
		techStack: ['React', 'TypeScript', 'Tailwind'],
		repoLink: 'https://github.com/At0m1X98/public-advisors',
		liveLink: 'public-advisors.netlify.app',
	},
	{
		id: 3,
		title: 'MoLev',
		description: "Tool for creating manual orders for Levi's company",
		techStack: ['React', 'JavaScript', 'CSS'],
		repoLink: 'https://github.com/At0m1X98/manualorder-levis',
		liveLink: 'https://molev.netlify.app',
	},
	{
		id: 4,
		title: 'E-Com (Work in progress)',
		description: 'Testing full stack e-com application',
		techStack: ['React', 'JavaScript', 'CSS'],
		repoLink: 'https://github.com/At0m1X98/ecom',
		liveLink: '',
	},
	{
		id: 5,
		title: 'Recipe Finder',
		description: 'Web application for searching recipes by ingredient using themealdb API',
		techStack: ['React', 'JavaScript', 'CSS'],
		repoLink: 'https://github.com/At0m1X98/recipe-finder',
		liveLink: 'recipes-finder-th.netlify.app',
	}
]

const Projects = () => {
  	return (
		<PageWrapper>
			<section className='max-w-6xl mx-auto px-4 py-12'>
				<motion.h2
					initial={{opacity: 0, y: -20}}
					animate={{opacity: 1, y: 0}}
					transition={{duration: 0.5}}
					className='text-3xl font-bold text-gray-800 mb-8 text-center'
				>
					My Projects
				</motion.h2>
				<motion.div
					initial='hidden'
					animate='visible'
					variants={{
						hidden: {},
						visible: {
							transition: {
								staggerChildren: 0.15
							},
						},
					}}
					className='grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'
				>
					{projects.map(({id, title, description, techStack, repoLink, liveLink}) => (
						<motion.div
							key={id}
							variants={{
								hidden: {opacity: 0, y: 20},
								visible: {opacity: 1, y: 0},
							}}
							className='bg-white rounded-lg shadow-md p-6 flex flex-col justify-between hover:shadow-xl transition-shadow'
						>
							<div>
								<h3 className='text-xl font-semibold text-gray-800 mb-2'>{title}</h3>
								<p className='text-gray-600 mb-4'>{description}</p>
								<div className='flex flex-wrap gap-2'>
									{techStack.map((tech) => (
										<span
											key={tech}
											className='bg-blue-100 text-blue-800 text-xs font-semibold px-2 py-1 rounded'
										>
											{tech}
										</span>
									))}
								</div>
							</div>

							<div className='mt-4 flex space-x-4'>
								{repoLink && (
									<a 
										href={repoLink}
										target='_blank'
										rel='noopener noreferrer'
										className='txt-blue-600 hover:underline'
									>
										Code
									</a>
								)}
								{liveLink && (
									<a
										href={liveLink}
										target='_blank'
										rel='noopener noreferrer'
										className='text-blue-600 hover:underline'
									>
										Live Demo
									</a>
								)}
							</div>
						</motion.div>
					))}
				</motion.div>
			</section>
		</PageWrapper>
  	)
}

export default Projects
