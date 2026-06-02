import { ExternalLink, Github } from 'lucide-react'

const projects = [
  {
    title: 'Linux Automation Scripts',
    year: '2024',
    description:
      'Applying AI-assisted development and an instinct for UX friction to personal productivity tooling on Linux.',
    highlights: [
      'Built a custom GNOME Shell extension that auto-moves fullscreen apps to a new workspace (macOS-style UX), identified the gap, spec\'d and built it with Claude Code',
      'Fixed Ubuntu sticky keys on Wayland using keyd one-shot modifiers, replicating the intuitive Windows/Mac modifier behaviour',
      'Bluetooth MAC address sync script for dual-boot Windows/Linux, touchpad history gesture fix for Chrome/Brave on Wayland',
      'ZRAM performance tuning and GNOME keyboard shortcut backup/restore utilities',
    ],
    tags: ['Linux', 'GNOME', 'Shell Scripting', 'AI-Assisted Development', 'Wayland', 'Claude Code'],
    github: 'https://github.com/nikhil-web-js/linux-scripts',
    link: null,
  },
  {
    title: 'Registrar of Companies (ROC) Reports Automation',
    year: '2016',
    description:
      'Freelance project during B.Tech - Built and sold an automation utility for LAA & Associates, a Chartered Accountant firm.',
    highlights: [
      'Generates Company and LLP reports in MCA-prescribed format by processing data from the Ministry of Corporate Affairs (MCA) portal',
      'Replaced fully manual report generation for 5,000+ vendors',
    ],
    tags: ['Automation', 'Python', 'Data Processing', 'Freelance'],
    github: null,
    link: null,
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-blue-600 dark:text-blue-400 font-semibold mb-2 tracking-wider uppercase text-sm">
            things i've built
          </p>
          <h2 className="text-4xl font-bold mb-4 gradient-text">Personal Projects</h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Selected public work and freelance projects.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="glass rounded-xl p-6 shadow-lg gradient-border hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 cursor-pointer"
            >
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
                    {project.title}
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{project.year}</p>
                </div>
                <div className="flex gap-2">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors cursor-pointer"
                      aria-label="GitHub"
                    >
                      <Github size={20} />
                    </a>
                  )}
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors cursor-pointer"
                      aria-label="External Link"
                    >
                      <ExternalLink size={20} />
                    </a>
                  )}
                </div>
              </div>

              <p className="text-gray-700 dark:text-gray-300 mb-4">{project.description}</p>

              <ul className="space-y-2 mb-6">
                {project.highlights.map((highlight, i) => (
                  <li key={i} className="flex items-start text-sm">
                    <span className="text-blue-600 dark:text-blue-400 mr-2 mt-1">▸</span>
                    <span className="text-gray-600 dark:text-gray-400">{highlight}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, i) => (
                  <span
                    key={tag}
                    className="px-3 py-1 glass rounded-full text-xs font-medium hover:scale-110 transition-transform duration-300 cursor-default"
                    style={{ animationDelay: `${i * 0.1}s` }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
