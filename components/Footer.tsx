import { Mail, Linkedin, Github } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="glass py-12 px-4 sm:px-6 lg:px-8 border-t border-gray-200/50 dark:border-gray-800/50 relative overflow-hidden">
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-blue-500/5 to-transparent pointer-events-none"></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
              Nikhil Sharma
            </h3>
            <p className="text-gray-600 dark:text-gray-400">Senior Frontend Engineer</p>
          </div>

          <div className="flex gap-6">
            <a
              href="https://linkedin.com/in/nikhil-web-js"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 hover:scale-125"
              aria-label="LinkedIn"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="https://github.com/nikhil-sharma2407"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 hover:scale-125"
              aria-label="GitHub"
            >
              <Github size={24} />
            </a>
            <a
              href="mailto:nikhil.sharma2407@gmail.com"
              className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 hover:scale-125"
              aria-label="Email"
            >
              <Mail size={24} />
            </a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-800 text-center">
          <p className="text-gray-600 dark:text-gray-400 text-sm">
            © {new Date().getFullYear()} Nikhil Sharma. All rights reserved.
          </p>
          <p className="text-gray-500 dark:text-gray-500 text-sm mt-2">
            Built with Next.js · Crafted with Claude + Cursor
          </p>
        </div>
      </div>
    </footer>
  )
}
