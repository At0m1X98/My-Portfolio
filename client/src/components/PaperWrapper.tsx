import { motion } from 'framer-motion';
import React from 'react';

const pageVariants = {
  	initial: { opacity: 0, y: 20 },
  	animate: { opacity: 1, y: 0 },
  	exit: { opacity: 0, y: -20 },
};

const PageWrapper = ({ children }: { children: React.ReactNode }) => {
  	return (
    	<motion.div
      		variants={pageVariants}
      		initial="initial"
      		animate="animate"
      		exit="exit"
      		transition={{ duration: 0.4 }}
    	>
      		{children}
    	</motion.div>
  	);
};

export default PageWrapper;