const experiences = [
  {
    company: 'Confluent India Pvt. Ltd.',
    role: 'Senior Software Engineer',
    period: 'Sep 2024 – Mar 2026',
    location: 'India',
    description: 'Confluent Cloud – Connect UI & Streaming Platform: React/TypeScript console for Kafka Connect-based real-time data pipelines',
    highlights: [
      'Led an AI pilot program integrating Azure OpenAI to build an internal developer assistant with a streaming chat UI (SSE), a RAG pipeline trained on the full-stack codebase, and GitHub webhooks for automatic retraining',
      'Architected and led delivery of Private Networking for Kafka Custom Connectors on AWS Enterprise & Dedicated, driven by product discussions and enterprise security requirements',
      'Shipped features end-to-end using Claude Code and Cursor as core workflow tools, building Gen-AI-assisted automation scripts that reduced manual environment setup effort significantly',
      'Established post-release monitoring using Amplitude & Datadog, identified recurring late-stage provisioning failures, and introduced fail-fast validations that reduced them by ~17%',
      'Reduced manual regression effort, saving ~6-8 engineering hours per release, by introducing Playwright E2E automation across 20+ critical user flows',
      'Delivered a Cloud Commit Estimator in React under strict deadlines with full end-to-end ownership and intern mentorship',
    ],
    tags: ['React', 'TypeScript', 'Azure OpenAI', 'RAG', 'Playwright', 'Node.js', 'Express.js', 'Datadog', 'Amplitude'],
  },
  {
    company: 'Paytm Money Ltd.',
    role: 'Senior Software Engineer',
    period: 'Feb 2022 – Sep 2024',
    location: 'India',
    description: 'Large-scale investment & trading platform focused on frontend platform architecture, performance, and real-time trading experiences',
    highlights: [
      'Built Hybrid Web trading widgets using React, powering core buy/sell flows and F&O dashboards on a high-traffic trading platform',
      'Implemented the UI market data layer using Web Workers to process real-time market prices off the main thread, keeping Portfolio (PnL and day\'s gain/loss) in sync without blocking the UI',
      'Enabled independent releases by implementing Module Federation micro-frontends, managing cross-app communication across KYC, Funds, and Stocks apps using Shared Workers',
      'Leveraged ChatGPT to identify and extract shared logic into custom hooks, creating 30+ reusable components across desktop and mobile using Atomic Design and MVC principles',
      'Improved repeat-visit performance by 15% using Service Workers and selective caching for static assets and non-market data',
      'Optimized initial load & navigation performance (~10-15%) via adaptive media loading & preload/prefetch strategy',
    ],
    tags: ['React', 'TypeScript', 'Module Federation', 'Web Workers', 'Service Workers', 'Redux', 'RxJS', 'Express.js'],
  },
  {
    company: 'Infosys',
    role: 'Specialist Programmer',
    period: 'Jan 2019 – Feb 2022',
    location: 'India',
    description: 'NIA Chatbot Platform - Enterprise chatbot studio interface enabling teams to configure conversation flows and deploy NLP-driven interactions',
    highlights: [
      'Developed and maintained the chatbot studio interface using React & Node.js, enabling enterprise teams to configure conversation flows, manage intents, and deploy across web channels',
      'Integrated AWS Polly for real-time voice synthesis and developed an Alexa skill for conversational access',
      'Enabled custom chatbot integration with Microsoft Teams and Slack for enterprise communication',
      'Built enterprise client POCs for John Deere, Aetna, and Morgan Stanley demonstrating platform capabilities',
    ],
    tags: ['React', 'Node.js', 'AWS Polly', 'Alexa', 'NLP', 'JavaScript'],
  },
]

export default function Experience() {
  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-blue-600 dark:text-blue-400 font-semibold mb-2 tracking-wider uppercase text-sm">
            where i've worked
          </p>
          <h2 className="text-4xl font-bold mb-4 gradient-text">Work Experience</h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Senior roles building and scaling production web platforms.
          </p>
        </div>

        {/* Linear Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-600 via-purple-600 to-pink-600"></div>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div key={index} className="relative pl-10">
                {/* Timeline dot */}
                <div className="absolute left-0 top-2 w-5 h-5 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 border-4 border-white dark:border-gray-900 shadow-lg"></div>

                {/* Content card */}
                <div className="glass rounded-xl p-6 shadow-lg gradient-border hover:shadow-2xl transition-all duration-300">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 mb-3">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                        {exp.role}
                      </h3>
                      <p className="text-lg gradient-text font-semibold">
                        {exp.company}
                      </p>
                    </div>
                    <div className="text-sm text-blue-600 dark:text-blue-400 font-semibold whitespace-nowrap">
                      {exp.period}
                    </div>
                  </div>

                  <p className="text-sm text-gray-600 dark:text-gray-400 italic mb-4">
                    {exp.description}
                  </p>

                  <ul className="space-y-2 mb-4">
                    {exp.highlights.map((highlight, i) => (
                      <li key={i} className="flex items-start">
                        <span className="text-blue-600 dark:text-blue-400 mr-2 mt-0.5 flex-shrink-0">▸</span>
                        <span className="text-gray-700 dark:text-gray-300">{highlight}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2">
                    {exp.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1.5 glass rounded-full text-sm font-medium hover:scale-110 transition-transform duration-300 cursor-default"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
