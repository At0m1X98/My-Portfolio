import { motion } from 'framer-motion';
import PageWrapper from '../components/PaperWrapper';

const technologies = [
  'TypeScript',
  'JavaScript',
  'React',
  'Tailwind CSS',
  'CSS',
  'HTML',
  'Node.js',
  'Express',
  'MongoDB',
  'PostgreSQL',
  'MySql',
  'Git',
  'PHP',
];

const About = () => {
  return (
    <PageWrapper>
      <section className="min-h-[80vh] px-4 py-12 max-w-4xl mx-auto">
        {/* Header */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-gray-800 mb-6 text-center"
        >
          About Me
        </motion.h2>

        {/* Bio */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-lg text-gray-600 leading-relaxed mb-8 text-center"
        >
          I'm a full-stack developer passionate about building modern, performant web applications.
          I enjoy working with both front-end and back-end technologies, especially React and Node.js.
          I'm constantly learning and love bringing ideas to life through clean, maintainable code.
        </motion.p>

        {/* Tech stack */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4"
        >
          {technologies.map((tech) => (
            <div
              key={tech}
              className="px-4 py-2 text-sm font-medium text-center text-blue-700 bg-blue-100 rounded-lg shadow hover:scale-105 transition-transform"
            >
              {tech}
            </div>
          ))}
        </motion.div>
      </section>
    </PageWrapper>
  );
};

export default About;
