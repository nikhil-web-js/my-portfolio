import { Mail, Phone, Linkedin, Github } from 'lucide-react'

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-blue-600 dark:text-blue-400 font-semibold mb-2 tracking-wider uppercase text-sm">
            get in touch
          </p>
          <h2 className="text-4xl font-bold mb-4 gradient-text">Let's build something</h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Have an engineering challenge, an architecture question or a collaboration in mind?
            The fastest way to reach me is email.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="glass rounded-xl p-6 sm:p-8 shadow-lg gradient-border">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">
              Reach out directly:
            </h3>
            <div className="space-y-3 sm:space-y-4 relative z-10">
              <a
                href="mailto:nikhil.sharma2407@gmail.com"
                className="flex items-center gap-2 sm:gap-3 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 hover:translate-x-2 p-2 sm:p-3 rounded-lg hover:bg-blue-50/50 dark:hover:bg-blue-950/50 cursor-pointer relative z-10"
              >
                <Mail size={28} className="flex-shrink-0" />
                <span className="text-base sm:text-lg whitespace-nowrap overflow-hidden text-ellipsis">nikhil.sharma2407@gmail.com</span>
              </a>
              <a
                href="tel:+917011590623"
                className="flex items-center gap-2 sm:gap-3 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 hover:translate-x-2 p-2 sm:p-3 rounded-lg hover:bg-blue-50/50 dark:hover:bg-blue-950/50 cursor-pointer relative z-10"
              >
                <Phone size={28} className="flex-shrink-0" />
                <span className="text-base sm:text-lg whitespace-nowrap">+91-7011590623</span>
              </a>
              <a
                href="https://linkedin.com/in/nikhil-web-js"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 sm:gap-3 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 hover:translate-x-2 p-2 sm:p-3 rounded-lg hover:bg-blue-50/50 dark:hover:bg-blue-950/50 cursor-pointer relative z-10"
              >
                <Linkedin size={28} className="flex-shrink-0" style={{ transform: 'translateY(-2px)' }} />
                <span className="text-base sm:text-lg whitespace-nowrap">linkedin.com/in/nikhil-web-js</span>
              </a>
              <a
                href="https://github.com/nikhil-web-js"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 sm:gap-3 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 hover:translate-x-2 p-2 sm:p-3 rounded-lg hover:bg-blue-50/50 dark:hover:bg-blue-950/50 cursor-pointer relative z-10"
              >
                <Github size={28} className="flex-shrink-0" />
                <span className="text-base sm:text-lg whitespace-nowrap">github.com/nikhil-web-js</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
