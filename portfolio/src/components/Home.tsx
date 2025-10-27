import React from 'react';
import { Github, Linkedin, Mail, ArrowDown } from 'lucide-react';

const Home: React.FC = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <div className="mb-8">
            <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 p-1">
              <div className="w-full h-full rounded-full bg-white dark:bg-gray-800 flex items-center justify-center">
                {/* <div className="w-24 h-24 rounded-full bg-gradient-to-r from-blue-400 to-purple-500 flex items-center justify-center text-white text-2xl font-bold">
                  AG
                </div> */}
 <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-blue-400">
  <img 
    src="https://i.ibb.co/Kpcg640N/Screenshot-2025-09-15-143506.png"
    alt="Profile"
    className="w-full h-full object-cover"
  />
</div>
              </div>
            </div>
          </div>

          {/* <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            Akshar <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600"></span>
          </h1> */}
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
  <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-purple-500">
    Akshar
  </span>
</h1>


          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
            Full Stack Developer
          </p>
          
          <p className="text-lg text-gray-500 dark:text-gray-400 mb-12 max-w-2xl mx-auto">
            Passionate about creating beautiful, functional web applications with modern technologies and best practices.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <button 
              onClick={() => {
                const element = document.getElementById('projects');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              View Projects
            </button>
            <button 
              onClick={() => {
                const element = document.getElementById('about');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="px-8 py-4 border-2 border-blue-600 text-blue-600 dark:text-blue-400 hover:bg-blue-600 hover:text-white rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Learn More
            </button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6 mb-12">
            <a href="https://github.com/Akshargangani" className="p-3 bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-lg text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 transform hover:-translate-y-1">
              <Github size={24} />
            </a>
            <a href="https://www.linkedin.com/in/akshar-gangani/" className="p-3 bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-lg text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 transform hover:-translate-y-1">
              <Linkedin size={24} />
            </a>
            <a href="#" className="p-3 bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-lg text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 transform hover:-translate-y-1">
              <Mail size={24} />
            </a>
          </div>

          {/* Scroll Indicator */}
          <div className="animate-bounce">
            <ArrowDown className="mx-auto text-gray-400 dark:text-gray-500" size={24} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;