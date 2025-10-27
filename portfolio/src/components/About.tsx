import React from 'react';
import { Code2, Rocket, Users, Award } from 'lucide-react';

const About: React.FC = () => {
  const stats = [
    { icon: Code2, label: 'Projects Completed', value: '' },
    { icon: Rocket, label: 'Technologies Used', value: '' },
    { icon: Users, label: 'Happy Clients', value: '' },
    { icon: Award, label: 'Certifications', value: '' }
  ];

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            About Me
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Dedicated to crafting exceptional digital experiences with modern technologies and a strong focus on clean, maintainable code.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Professional Journey
            </h3>
            <div className="space-y-6 text-gray-600 dark:text-gray-300">
              <p className="text-lg leading-relaxed">
                I’m a passionate Full Stack Developer in the making, currently focusing on building modern, responsive web applications.
              </p>
              <p className="text-lg leading-relaxed">
               I enjoy working with the React ecosystem and exploring both frontend and backend development.
              </p>
              <p className="text-lg leading-relaxed">
                My goal is to create digital solutions that not only look great but also deliver smooth and user-friendly experiences.
              </p>
              <p className="text-lg leading-relaxed">
                I love learning new technologies, experimenting with projects, and constantly improving my skills.    
          </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 text-center hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-300">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg mb-4">
                    <Icon className="text-blue-600 dark:text-blue-400" size={24} />
                  </div>
                  <div className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                    {stat.value}
                  </div>
                  <div className="text-gray-600 dark:text-gray-300 font-medium">
                    {stat.label}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;