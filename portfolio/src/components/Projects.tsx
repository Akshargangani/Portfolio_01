import React from 'react';
import { ExternalLink, Github, Calendar, Code, Users, Star } from 'lucide-react';

const Projects: React.FC = () => {
  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'A full-featured e-commerce platform with React, Node.js, and MongoDB. Includes user authentication, payment processing, and admin dashboard.',
      image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=600',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe', 'Tailwind CSS'],
      liveUrl: '#',
      githubUrl: '#',
      featured: true,
      stats: {
        users: '1.2K+',
        stars: '45',
        commits: '120+'
      }
    },
    {
      title: 'Task Management App',
      description: 'A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.',
      image: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=600',
      technologies: ['React', 'TypeScript', 'Firebase', 'Material-UI'],
      liveUrl: '#',
      githubUrl: '#',
      featured: true,
      stats: {
        users: '800+',
        stars: '32',
        commits: '85+'
      }
    },
    {
      title: 'Weather Dashboard',
      description: 'A responsive weather dashboard with location-based forecasts, interactive maps, and detailed weather analytics.',
      image: 'https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=600',
      technologies: ['React', 'Chart.js', 'OpenWeather API', 'CSS3'],
      liveUrl: '#',
      githubUrl: '#',
      featured: false,
      stats: {
        users: '500+',
        stars: '28',
        commits: '60+'
      }
    },
    {
      title: 'Social Media Dashboard',
      description: 'Analytics dashboard for social media management with data visualization, scheduling, and performance tracking.',
      image: 'https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=600',
      technologies: ['React', 'D3.js', 'Express.js', 'PostgreSQL'],
      liveUrl: '#',
      githubUrl: '#',
      featured: false,
      stats: {
        users: '300+',
        stars: '22',
        commits: '75+'
      }
    },
    {
      title: 'Portfolio Website',
      description: 'A modern, responsive portfolio website with dark/light mode, smooth animations, and optimized performance.',
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=600',
      technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Vite'],
      liveUrl: '#',
      githubUrl: '#',
      featured: false,
      stats: {
        users: '200+',
        stars: '18',
        commits: '40+'
      }
    },
    {
      title: 'Learning Management System',
      description: 'Educational platform with course management, progress tracking, video streaming, and interactive quizzes.',
      image: 'https://images.pexels.com/photos/5905709/pexels-photo-5905709.jpeg?auto=compress&cs=tinysrgb&w=600',
      technologies: ['React', 'Node.js', 'MongoDB', 'Socket.io', 'AWS'],
      liveUrl: '#',
      githubUrl: '#',
      featured: true,
      stats: {
        users: '2K+',
        stars: '67',
        commits: '200+'
      }
    }
  ];

  const featuredProjects = projects.filter(project => project.featured);
  const otherProjects = projects.filter(project => !project.featured);

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Projects
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            A showcase of my recent work and technical expertise
          </p>
        </div>

        {/* Projects */}
        <div className="mb-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project, index) => (
              <div key={index} className="group bg-white dark:bg-gray-900 rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                <div className="p-6">
                  <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                    {project.title}
                  </h4>

                  <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Project Stats */}
                  <div className="flex items-center justify-between mb-4 text-sm text-gray-500 dark:text-gray-400">
                    <div className="flex items-center">
                      <Users size={14} className="mr-1" />
                      {project.stats.users}
                    </div>
                    <div className="flex items-center">
                      <Star size={14} className="mr-1" />
                      {project.stats.stars}
                    </div>
                    <div className="flex items-center">
                      <Code size={14} className="mr-1" />
                      {project.stats.commits}
                    </div>
                  </div>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 rounded-full text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex justify-center">
                    {/* <a
                      href={project.githubUrl}
                      className="flex items-center justify-center px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors duration-300 text-sm"
                    >
                      <Github size={16} className="mr-2" />
                      View Code
                    </a> */}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          {/* <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-8 text-white"> */}
            {/* <h3 className="text-2xl font-bold mb-4">Interested in Working Together?</h3> */}
            {/* <p className="text-lg opacity-90 mb-6 max-w-2xl mx-auto">
              I'm always open to discussing new opportunities and exciting projects. 
              Let's create something amazing together!
            </p> */}
            {/* <button 
              onClick={() => {
                const element = document.getElementById('contact');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors duration-300"
            >
              Get In Touch
            </button> */}
          {/* </div> */}
        </div>
      </div>
    </section>
  );
};

export default Projects;