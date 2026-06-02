import { GraduationCap } from 'lucide-react'

export default function Education() {
  return (
    <section id="education" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-blue-600 dark:text-blue-400 font-semibold mb-2 tracking-wider uppercase text-sm">
            how i got here
          </p>
          <h2 className="text-4xl font-bold mb-4 gradient-text">Education</h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Formal background in computer science and engineering.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="glass rounded-xl p-8 shadow-lg gradient-border hover:shadow-2xl transition-all duration-300 cursor-pointer">
            <div className="flex items-start gap-4">
              <div className="bg-gradient-to-br from-blue-500 to-purple-600 p-3 rounded-lg shadow-lg">
                <GraduationCap className="text-white" size={32} />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                  B.Tech in Computer Science & Engineering
                </h3>
                <p className="text-lg text-blue-600 dark:text-blue-400 font-semibold mb-1">
                  UIET-KUK, Kurukshetra University
                </p>
                <p className="text-gray-600 dark:text-gray-400">2014 – 2018</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
