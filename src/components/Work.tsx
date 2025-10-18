import { CodeBracketIcon, ArrowTopRightOnSquareIcon } from '@heroicons/react/24/solid';

const projects = [
  {
    title: 'Kloudspot - Video Analytics Platform',
    description: [
      'Led the end-to-end design, development, and implementation of a dynamic video wall pipeline using Nvidia DeepStream 6.2 elements, creating a scalable architecture for real-time video processing and analysis.',
      'Improved the overall optimization of the code by 25% by implementing design patterns and enhancing algorithm efficiency system.',
      'Developed a robust object detection system using YOLOv4 Tiny for real-time identification of critical safety elements, including fire extinguishers, forklift PPE, and personnel.',
      'Designed a system to track the status of each camera\'s payload, improving monitoring efficiency by 50%.',
      'Enhanced API Response time from 0.02 to 0.002 seconds, resulting in 100% improvement in overall response time.',
      'Resolved over 25 customer-reported bugs in both frontend and backend systems, including concurrency and payload merging issues in messaging systems.'
    ],
    tags: ['Python', 'Java', 'Spring Boot', 'Angular', 'DeepStream', 'YOLOv4', 'MongoDB', 'MQTT', 'HTTPS'],
    github: '#',
    demo: '#',
    image: 'https://via.placeholder.com/600x400?text=Kloudspot+Video+Analytics',
    location: 'Bengaluru, India',
    role: 'Software Engineer',
    date: 'June 2023 - Present'
  },
  {
    title: 'E-Job Portal',
    description: 'Developed a PHP-based web portal with MySQL for managing job applications, featuring application submission, tracking, and company management.',
    tags: ['PHP', 'MySQL', 'Bootstrap'],
    github: '#',
    demo: '#',
    image: 'https://via.placeholder.com/600x400?text=E-Job+Portal'
  },
  {
    title: 'Gemini Matching Engine',
    description: 'Built a trading system with a Matching Engine and Order Book that handles buy/sell orders, sorts them by price, and executes orders through Price Buckets.',
    tags: ['Java', 'System Design', 'Algorithms'],
    github: '#',
    demo: '#',
    image: 'https://via.placeholder.com/600x400?text=Gemini+Matching+Engine'
  },
  {
    title: 'Airbnb Stock Prediction',
    description: 'Utilized Random Forest Regressor for stock price prediction, incorporating historical data, market sentiment, and macroeconomic indicators.',
    tags: ['Python', 'Machine Learning', 'Pandas', 'Scikit-learn'],
    github: '#',
    demo: '#',
    image: 'https://via.placeholder.com/600x400?text=Stock+Prediction'
  }
];

export default function Work() {
  return (
    <section id="work" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block text-indigo-600 text-sm font-semibold mb-3">PORTFOLIO</span>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">My Recent Work</h2>
          <div className="w-24 h-1 bg-indigo-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Explore my latest projects and professional experience. Each project showcases my skills in solving complex problems and implementing innovative solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="group bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100"
            >
              <div className="h-56 bg-gradient-to-r from-indigo-50 to-blue-50 overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent z-10"></div>
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute bottom-4 left-4 z-20">
                  {project.role && (
                    <span className="inline-block px-3 py-1 text-xs font-semibold bg-indigo-600 text-white rounded-full mb-2">
                      {project.role}
                    </span>
                  )}
                  <h3 className="text-2xl font-bold text-white">{project.title}</h3>
                </div>
              </div>
              
              <div className="p-6">
                {project.location && (
                  <div className="flex items-center text-sm text-gray-500 mb-4">
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span>{project.location}</span>
                    <span className="mx-2">•</span>
                    <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <span>{project.date}</span>
                  </div>
                )}
                
                <div className="mb-6 space-y-3">
                  {Array.isArray(project.description) ? (
                    <ul className="space-y-2">
                      {project.description.map((item, i) => (
                        <li key={i} className="flex items-start">
                          <div className="flex-shrink-0 mt-1">
                            <div className="w-1.5 h-1.5 bg-indigo-600 rounded-full"></div>
                          </div>
                          <span className="ml-2 text-gray-600">{item}</span>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p className="text-gray-600">{project.description}</p>
                  )}
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, i) => (
                    <span 
                      key={i} 
                      className="px-3 py-1 bg-indigo-50 text-indigo-700 text-xs font-medium rounded-full border border-indigo-100 hover:bg-indigo-100 transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <a 
            href="https://github.com/gauravmehta121" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-3.5 text-base font-semibold text-white bg-gradient-to-r from-indigo-600 to-blue-600 rounded-full hover:from-indigo-700 hover:to-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-all duration-200 transform hover:-translate-y-0.5 hover:shadow-lg"
          >
            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
              <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.268 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.699 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
            </svg>
            View All Projects on GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
