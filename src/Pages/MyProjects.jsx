// components/MyProjects.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const projects = [
  {
    id: 'amar-city-fix',
    title: 'Amar City Fix',
    description: 'A platform for reporting and fixing city issues like potholes, street lights, waste management, etc. Users can submit problems with photos and track fixes.',
    tech: ['React', 'Node.js', 'MongoDB', 'Mapbox'],
    image: 'https://thumbs.dreamstime.com/b/pothole-street-road-damage-urban-infrastructure-issue-observe-highlighting-issues-representing-need-repair-366604053.jpg',
  },
  {
    id: 'r-zap',
    title: 'R Zap',
    description: 'A real-time chat application with modern UI, file sharing, and group chats. Fast and responsive messaging experience.',
    tech: ['Next.js', 'Socket.io', 'Tailwind', 'Prisma'],
    image: 'https://cdn.dribbble.com/userupload/35973859/file/original-d895e0cfd52dee4afe6ec44560fab73a.png',
  },
  {
    id: 'shif-project',
    title: 'Shif Project',
    description: 'An employee shift management system for businesses. Schedule shifts, track attendance, and notify employees automatically.',
    tech: ['React', 'Express', 'PostgreSQL', 'Calendar API'],
    image: 'https://www.hyrestaff.com/wp-content/uploads/2020/08/shift-scheduling-calendar-image.svg',
  },
];

const ProjectCard = ({ project }) => {
  return (
    <motion.div
      className="relative bg-gray-900 border border-gray-800 rounded-2xl overflow-hidden shadow-2xl"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      whileHover={{ y: -12, transition: { duration: 0.3 } }}
    >
      <div className="relative h-64 overflow-hidden">
        <motion.img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.8 }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-70" />
      </div>

      <div className="p-8">
        <h3 className="text-2xl font-bold text-white mb-3">{project.title}</h3>
        <p className="text-gray-400 mb-6 leading-relaxed">{project.description}</p>

        <div className="flex flex-wrap gap-2 mb-8">
          {project.tech.map((tech) => (
            <span
              key={tech}
              className="px-4 py-2 bg-gray-800 text-gray-300 text-sm rounded-full border border-gray-700"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="text-center">
          <Link to={`/details-page/${project.id}`}>
            <motion.button
              className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-full hover:from-indigo-700 hover:to-purple-700 transition shadow-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View Details
              <ArrowRight size={20} />
            </motion.button>
          </Link>
        </div>
      </div>

      <motion.div
        className="pointer-events-none absolute inset-0 opacity-0"
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-indigo-500/20 to-transparent" />
      </motion.div>
    </motion.div>
  );
};

const MyProjects = () => {
  return (
    <div className="min-h-screen bg-black py-20 px-8">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          className="text-5xl font-bold text-center text-white mb-16"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          My Projects
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MyProjects;