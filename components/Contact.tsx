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
          <div className="glass rounded-xl p-8 shadow-lg gradient-border">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">
              Reach out directly:
            </h3>
            <div className="space-y-4">
              <a
                href="mailto:nikhil.sharma2407@gmail.com"
                className="flex items-center gap-3 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 hover:translate-x-2 p-3 rounded-lg hover:bg-blue-50/50 dark:hover:bg-blue-950/50 cursor-pointer"
              >
                <Mail size={28} className="flex-shrink-0" />
                <span className="text-base sm:text-lg break-all">nikhil.sharma2407@gmail.com</span>
              </a>
              <a
                href="tel:+917011590623"
                className="flex items-center gap-3 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 hover:translate-x-2 p-3 rounded-lg hover:bg-blue-50/50 dark:hover:bg-blue-950/50 cursor-pointer"
              >
                <Phone size={28} className="flex-shrink-0" />
                <span className="text-base sm:text-lg">+91-7011590623</span>
              </a>
              <a
                href="https://linkedin.com/in/nikhil-web-js"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 hover:translate-x-2 p-3 rounded-lg hover:bg-blue-50/50 dark:hover:bg-blue-950/50 cursor-pointer"
              >
                <Linkedin size={28} className="flex-shrink-0" />
                <span className="text-base sm:text-lg">linkedin.com/in/nikhil-web-js</span>
              </a>
              <a
                href="https://github.com/nikhil-sharma2407"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 hover:translate-x-2 p-3 rounded-lg hover:bg-blue-50/50 dark:hover:bg-blue-950/50 cursor-pointer"
              >
                <Github size={28} className="flex-shrink-0" />
                <span className="text-base sm:text-lg">github.com/nikhil-sharma2407</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
