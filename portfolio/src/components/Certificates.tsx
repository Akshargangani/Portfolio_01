import React from 'react';
import { Award, ExternalLink, Calendar } from 'lucide-react';

const Certificates: React.FC = () => {
  const certificates = [
    {
      title: 'React Advanced Certification',
      issuer: 'Meta (Facebook)',
      date: '2024',
      image: 'https://images.pexels.com/photos/5905709/pexels-photo-5905709.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Advanced React concepts including performance optimization, testing, and scalable architecture patterns.',
      skills: ['React', 'Redux', 'Testing', 'Performance']
    },
    {
      title: 'Full Stack Web Development',
      issuer: 'FreeCodeCamp',
      date: '2023',
      image: 'https://images.pexels.com/photos/4348401/pexels-photo-4348401.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Comprehensive full-stack development covering frontend, backend, databases, and deployment.',
      skills: ['HTML/CSS', 'JavaScript', 'Node.js', 'MongoDB']
    },
    {
      title: 'TypeScript Fundamentals',
      issuer: 'Microsoft',
      date: '2023',
      image: 'https://images.pexels.com/photos/943096/pexels-photo-943096.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Deep dive into TypeScript features, advanced types, and integration with React applications.',
      skills: ['TypeScript', 'JavaScript', 'React', 'Node.js']
    },
    {
      title: 'AWS Cloud Practitioner',
      issuer: 'Amazon Web Services',
      date: '2023',
      image: 'https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Foundational knowledge of AWS cloud services, architecture, and best practices.',
      skills: ['AWS', 'Cloud Computing', 'DevOps', 'Security']
    },
    {
      title: 'JavaScript Algorithms',
      issuer: 'FreeCodeCamp',
      date: '2022',
      image: 'https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Data structures and algorithms implementation using JavaScript with problem-solving focus.',
      skills: ['JavaScript', 'Algorithms', 'Data Structures', 'Problem Solving']
    },
    {
      title: 'Responsive Web Design',
      issuer: 'FreeCodeCamp',
      date: '2022',
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Modern CSS techniques, flexbox, grid, and responsive design principles.',
      skills: ['HTML5', 'CSS3', 'Responsive Design', 'Flexbox']
    }
  ];

  return (
    <section id="certificates" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Certificates & Achievements
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Continuous learning and professional development milestones
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificates.map((cert, index) => (
            <div key={index} className="group bg-gray-50 dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="relative h-48 overflow-hidden">
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 bg-blue-600 text-white p-2 rounded-lg">
                  <Award size={20} />
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm text-blue-600 dark:text-blue-400 font-semibold">
                    {cert.issuer}
                  </span>
                  <div className="flex items-center text-gray-500 dark:text-gray-400 text-sm">
                    <Calendar size={14} className="mr-1" />
                    {cert.date}
                  </div>
                </div>

                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                  {cert.title}
                </h3>

                <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 leading-relaxed">
                  {cert.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {cert.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 rounded-full text-xs font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                <button className="flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium text-sm group-hover:translate-x-2 transition-transform duration-300">
                  View Certificate
                  <ExternalLink size={16} className="ml-1" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Achievement Summary */}
        {/* <div className="mt-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-8 text-center text-white">
          <h3 className="text-2xl font-bold mb-4">Commitment to Excellence</h3>
          <p className="text-lg opacity-90 max-w-3xl mx-auto leading-relaxed">
            These certifications represent my dedication to staying current with industry best practices 
            and continuously improving my technical skills. Each certificate has contributed to my 
            expertise in building robust, scalable web applications.
          </p>
        </div> */}
      </div>
    </section>
  );
};

export default Certificates;