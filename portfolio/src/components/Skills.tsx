import React from 'react';

const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: 'Frontend Development',
      skills: [
        { name: 'React', level: '', color: 'bg-blue-500' },
        { name: 'TypeScript', level: '', color: 'bg-blue-600' },
        { name: 'Next.js', level: '', color: 'bg-gray-700' },
        { name: 'Tailwind CSS', level: '', color: 'bg-teal-500' },
        { name: 'HTML5 & CSS', level: '', color: 'bg-orange-500' },
        { name: 'JavaScript ES6+', level: '', color: 'bg-yellow-500' }
      ]
    },
    {
      title: 'Backend Development',
      skills: [
        { name: 'Node.js', level: '', color: 'bg-green-600' },
        { name: 'Express.js', level: '', color: 'bg-gray-600' },
        { name: 'MongoDB', level: '', color: 'bg-green-500' },
        { name: 'REST APIs', level: '', color: 'bg-purple-500' },
        { name: 'MySQL', level: '', color: 'bg-pink-500' }
        
      ]
    },
    {
      title: 'Tools & Technologies',
      skills: [
        { name: 'Git & GitHub', level: '', color: 'bg-gray-800' },
        { name: 'Figma', level: '', color: 'bg-purple-600' },
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Technical Skills
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Technologies and tools I work with to build amazing applications
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6 text-center">
                {category.title}
              </h3>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="group">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-medium text-gray-900 dark:text-white">
                        {skill.name}
                      </span>
                      <span className="text-sm text-gray-500 dark:text-gray-400">
                        {skill.level}
                      </span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className={`w-3 h-3 rounded-full ${skill.color} group-hover:scale-110 transition-transform duration-200`}></div>
                      <div className="text-sm text-gray-600 dark:text-gray-300 font-medium">
                        {skill.name}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Skills;