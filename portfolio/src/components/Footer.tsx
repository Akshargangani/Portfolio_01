import React from 'react';
import { Heart } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-gray-600 dark:text-gray-300 flex items-center">
              Made with <Heart size={16} className="mx-1 text-red-500" fill="currentColor" /> by Akshar Developer
            </p>
          </div>
          <div className="text-gray-600 dark:text-gray-300">
            © 2025 All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;