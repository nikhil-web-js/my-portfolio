const experiences = [
  {
    company: 'Confluent India Pvt. Ltd.',
    role: 'Senior Software Engineer',
    period: 'Sep 2024 – Mar 2026',
    location: 'India',
    description: 'Confluent Cloud – Connect UI & Streaming Platform: React/TypeScript console for Kafka Connect-based real-time data pipelines',
    highlights: [
      'Conceptualised, pitched, and led an AI pilot integrating Azure OpenAI, built a streaming chat UI, a RAG pipeline powered by Azure OpenAI embeddings over the full-stack codebase, and GitHub webhooks for automatic re-indexing, reducing FE/BE integration overhead by ~35% by giving engineers instant codebase context across the stack',
      'Served as SPOC and led end-to-end delivery of Private Networking for Kafka Custom Connectors on AWS, managing phased releases, drove cross-functional alignment across infra, security, and PM stakeholders, and resolved critical functional gaps to fulfil a long-standing enterprise customer requirement',
      'Built a Node.js cost estimation engine with REST APIs for calculating projected charges across Kafka, Flink, and Connectors, enabling on-demand cost visibility with multi-tier discount evaluation',
      'Implemented Server-Sent Events (SSE) to detect concurrent form edits in real-time and prevent data loss, while replacing polling for async calculation status updates, reducing unnecessary network overhead',
      'Established post-release monitoring via Amplitude & Datadog, introduced fail-fast validations that reduced late-stage provisioning failures by ~17%',
      'Established E2E testing practice using Playwright across 20+ critical user flows, adopted by the team prior to every release, saving ~6–8 engineering hours per release cycle',
      'Shipped features using Claude Code and Cursor as core dev tools, built AI-generated one-click environment setup scripts adopted across the team, reducing onboarding and environment setup time by ~40%',
    ],
    tags: ['React', 'TypeScript', 'Azure OpenAI', 'RAG', 'Playwright', 'Node.js', 'Express.js', 'SSE', 'Datadog', 'Amplitude'],
  },
  {
    company: 'Paytm Money Ltd.',
    role: 'Senior Software Engineer',
    period: 'Feb 2022 – Sep 2024',
    location: 'India',
    description: 'Large-scale investment & trading platform focused on frontend platform architecture, performance, and real-time trading experiences',
    highlights: [
      'Built Hybrid Web trading widgets using React, powering core buy/sell flows and F&O dashboards on a high-traffic trading platform serving 100K+ daily active users',
      'Implemented the UI market data layer using Web Workers to process real-time WebSocket price feeds off the main thread, keeping Portfolio (PnL and day\'s gain/loss) in sync without blocking the UI',
      'Built Express.js services computing derived trading insights (P&L, holdings analysis) by implementing data transformation logic and API endpoint handlers',
      'Established Module Federation micro-frontend architecture as the standard for cross-app communication across KYC, Funds, and Stocks apps using Shared Workers, enabling independent deployments across teams',
      'Pioneered prompt engineering practices for frontend development, sharing reusable Claude/ChatGPT snippets adopted directly by teammates for component generation and code refactoring',
      'Leveraged GitHub Copilot to automate client-side analytics integration from PM-shared Google Sheets, reducing integration effort by ~35% and enabling faster release cycles',
      'Improved repeat-visit performance by 15% using Service Workers and selective caching for static assets and non-market data',
      'Optimized initial load & navigation performance (~10–15%) via adaptive media loading & preload/prefetch strategy',
    ],
    tags: ['React', 'TypeScript', 'Module Federation', 'Web Workers', 'Service Workers', 'Express.js', 'Redux', 'RxJS'],
  },
  {
    company: 'Infosys',
    role: 'Specialist Programmer',
    period: 'Jan 2019 – Feb 2022',
    location: 'India',
    description: 'NIA Chatbot Platform',
    highlights: [
      'Contributed to the Infosys NIA Chatbot platform, developed and maintained the chatbot studio interface using React & Node.js, enabling enterprise teams to configure conversation flows, manage intents, and deploy NLP-driven interactions across web channels',
      'Integrated custom chatbots with Microsoft Teams and Slack, enabling enterprise users to access conversational workflows and business services directly within collaboration platforms',
      'Integrated AWS Polly for real-time voice synthesis and developed an Alexa skill for conversational access',
      'Built enterprise client POCs for John Deere, Aetna, and Morgan Stanley',
    ],
    tags: ['React', 'Node.js', 'AWS Polly', 'Alexa', 'NLP', 'JavaScript', 'Microsoft Teams', 'Slack'],
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
                <div className="glass rounded-xl p-6 shadow-lg gradient-border hover:shadow-2xl transition-all duration-300 cursor-pointer">
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
