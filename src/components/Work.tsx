import { CodeBracketIcon, ArrowTopRightOnSquareIcon } from '@heroicons/react/24/solid';

const projects = [
  {
    title: 'Kloudspot - Video Analytics Platform',
    description: 'Led the development of a real-time video processing pipeline using Nvidia DeepStream 6.2, improving system performance by 25% through algorithm optimization and implementing a robust object detection system with YOLOv4 Tiny.',
    tags: ['Python', 'DeepStream', 'YOLOv4', 'Real-time Processing'],
    github: '#',
    demo: '#',
    image: 'https://via.placeholder.com/600x400?text=Kloudspot+Video+Analytics'
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
    <section id="work" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">My Work</h2>
          <div className="w-20 h-1 bg-indigo-600 mx-auto"></div>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Here are some of my recent projects. Each project was built to solve a specific problem or explore new technologies.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="h-48 bg-gray-200 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex space-x-4">
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center text-sm text-gray-600 hover:text-indigo-600"
                  >
                    <CodeBracketIcon className="w-4 h-4 mr-1" />
                    Code
                  </a>
                  <a 
                    href={project.demo} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center text-sm text-gray-600 hover:text-indigo-600"
                  >
                    <ArrowTopRightOnSquareIcon className="w-4 h-4 mr-1" />
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a 
            href="https://github.com/yourusername" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 transition-colors"
          >
            View All Projects on GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
