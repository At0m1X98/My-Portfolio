import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';
import PageWrapper from '../components/PaperWrapper';

const Home = () => {
  	return (
	<PageWrapper>
		<section className="min-h-[80vh] flex flex-col justify-center items-center text-center px-4 bg-gray-50">
      		{/* Animated heading */}
      		<motion.h1
        		initial={{ opacity: 0, y: -30 }}
        		animate={{ opacity: 1, y: 0 }}
        		transition={{ duration: 0.6 }}
        		className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-4"
      		>
        		Hi, I'm <span className="text-blue-600">Tomas Handzel</span>
      		</motion.h1>

      		{/* Animated subtitle */}
      		<motion.p
        		initial={{ opacity: 0, y: 20 }}
        		animate={{ opacity: 1, y: 0 }}
        		transition={{ delay: 0.3, duration: 0.6 }}
        		className="text-lg md:text-xl text-gray-600 mb-6 max-w-xl"
      		>
        		I'm a full-stack developer who’s passionate about building web applications with modern technologies like React and Node.js. I'm still learning, but I'm highly motivated and eager to grow into a professional development role.
      		</motion.p>

      		{/* Social Icons */}
      		<motion.div
        		initial={{ opacity: 0 }}
        		animate={{ opacity: 1 }}
        		transition={{ delay: 0.6 }}
        		className="flex gap-4 mb-6"
      		>
        		<a href="https://github.com/At0m1X98" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
          			<Github className="w-6 h-6 text-gray-700 hover:text-blue-600 transition" />
        		</a>
        		<a href="https://linkedin.com/in/tomáš-handzel-088973174/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
          			<Linkedin className="w-6 h-6 text-gray-700 hover:text-blue-600 transition" />
        		</a>
        		<a href="mailto:TomasHandzel98@gmail.com" aria-label="Email">
          			<Mail className="w-6 h-6 text-gray-700 hover:text-blue-600 transition" />
        		</a>
      		</motion.div>
    	</section>
	</PageWrapper>
  	)
}

export default Home
