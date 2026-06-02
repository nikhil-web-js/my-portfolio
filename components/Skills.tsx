'use client'

import { 
  SiJavascript, 
  SiTypescript, 
  SiReact, 
  SiRedux, 
  SiHtml5, 
  SiCss,
  SiSass,
  SiNodedotjs,
  SiExpress,
  SiPostgresql,
  SiMongodb,
  SiPython,
  SiGit,
  SiDatadog
} from 'react-icons/si'

const skillCategories = [
  {
    name: 'Frontend',
    skills: [
      { name: 'JavaScript (ES6+)', icon: SiJavascript, color: '#F7DF1E' },
      { name: 'TypeScript', icon: SiTypescript, color: '#3178C6' },
      { name: 'React.js', icon: SiReact, color: '#61DAFB' },
      { name: 'Redux', icon: SiRedux, color: '#764ABC' },
      { name: 'RxJS', icon: null, color: '#B7178C' },
      { name: 'HTML5', icon: SiHtml5, color: '#E34F26' },
      { name: 'CSS3', icon: SiCss, color: '#1572B6' },
      { name: 'SASS/SCSS', icon: SiSass, color: '#CC6699' },
    ],
  },
  {
    name: 'Backend',
    skills: [
      { name: 'Node.js', icon: SiNodedotjs, color: '#339933' },
      { name: 'Express.js', icon: SiExpress, color: '#000000' },
      { name: 'REST API', icon: null, color: '#009688' },
      { name: 'PostgreSQL', icon: SiPostgresql, color: '#4169E1' },
      { name: 'MongoDB', icon: SiMongodb, color: '#47A248' },
      { name: 'Python', icon: SiPython, color: '#3776AB' },
      { name: 'Redis', icon: null, color: '#DC382D' },
    ],
  },
  {
    name: 'Architecture & Performance',
    skills: [
      { name: 'Micro-Frontends', icon: null, color: '#3B82F6' },
      { name: 'Module Federation', icon: null, color: '#8DD6F9' },
      { name: 'Web Performance Optimization', icon: null, color: '#10B981' },
      { name: 'Service Workers', icon: null, color: '#FF6B35' },
      { name: 'Design Systems', icon: null, color: '#EC4899' },
    ],
  },
  {
    name: 'Security & Quality',
    skills: [
      { name: 'OWASP Top 10', icon: null, color: '#000000' },
      { name: 'SAST/SCA/DAST', icon: null, color: '#6B46C1' },
      { name: 'Secure-by-Design', icon: null, color: '#059669' },
      { name: 'Fortify', icon: null, color: '#1E3A8A' },
      { name: 'Veracode', icon: null, color: '#00B4A0' },
      { name: 'SonarQube', icon: null, color: '#4E9BCD' },
    ],
  },
  {
    name: 'AI & Dev Tools',
    skills: [
      { name: 'Claude Code', icon: null, color: '#D97757' },
      { name: 'Cursor', icon: null, color: '#000000' },
      { name: 'GitHub Copilot', icon: null, color: '#000000' },
      { name: 'Azure OpenAI', icon: null, color: '#0078D4' },
      { name: 'RAG Pipelines', icon: null, color: '#8B5CF6' },
    ],
  },
  {
    name: 'Testing & Tooling',
    skills: [
      { name: 'Playwright', icon: null, color: '#2EAD33' },
      { name: 'Unit Testing', icon: null, color: '#C21325' },
      { name: 'Git', icon: SiGit, color: '#F05032' },
      { name: 'Datadog', icon: SiDatadog, color: '#632CA6' },
      { name: 'Amplitude', icon: null, color: '#1F77B4' },
      { name: 'LaunchDarkly', icon: null, color: '#3DD6F5' },
    ],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-blue-600 dark:text-blue-400 font-semibold mb-2 tracking-wider uppercase text-sm">
            what i work with
          </p>
          <h2 className="text-4xl font-bold mb-4 gradient-text">Skills & Tech Stack</h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Seven-plus years across frontend, backend, and cloud — with a growing focus on
            AI-assisted engineering.
          </p>
        </div>

        {/* Skills Categories */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <div
              key={category.name}
              className="glass rounded-xl p-6 shadow-lg gradient-border hover:shadow-2xl hover:scale-105 transition-all duration-300 cursor-pointer"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                {category.name}
              </h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill) => {
                  const IconComponent = skill.icon
                  return (
                    <div
                      key={skill.name}
                      className="flex items-center gap-2 px-3 py-2 bg-white dark:bg-gray-800 rounded-lg hover:scale-110 transition-transform duration-300 cursor-default shadow-sm border border-gray-200 dark:border-gray-700"
                    >
                      {IconComponent && (
                        <IconComponent 
                          className="w-5 h-5 flex-shrink-0" 
                          style={{ color: skill.color }}
                        />
                      )}
                      <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                        {skill.name}
                      </span>
                    </div>
                  )
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
