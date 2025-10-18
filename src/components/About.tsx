export default function About() {
  const skills = {
    'Programming Languages': [
      { name: 'Python', level: 'Experienced' },
      { name: 'Java', level: 'Intermediate' },
      { name: 'C++', level: 'Intermediate' }
    ],
    'Frameworks': [
      'ReactJS', 'Angular', 'Flask', 'Django', 'JavaScript', 'SpringBoot'
    ],
    'Web Dev Tools': [
      'Git', 'CI/CD', 'Docker'
    ],
    'Cloud/Database': [
      'SQL', 'MySQL', 'AWS'
    ],
    'Platforms': [
      'Linux', 'Windows', 'AWS'
    ],
    'Familiar With': [
      'Node.js', 'TensorFlow', 'OOPs', 'Kafka'
    ],
    'Soft Skills': [
      'Event Management', 'Technical Writing', 'Public Speaking', 'Time Management'
    ]
  };

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">About Me</h2>
          <div className="w-20 h-1 bg-indigo-600 mx-auto"></div>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Who am I?</h3>
          <p className="text-gray-600 mb-6 leading-relaxed">
            I'm a Python-focused engineer who loves building efficient systems that handle real-time data at scale. I enjoy optimizing performance, designing resilient architectures, and exploring how software drives trading and automation. Always learning, always improving.
          </p>
            
          <div className="mt-8">
            <h4 className="text-2xl font-semibold text-gray-800 mb-6">My Skills</h4>
            <div className="space-y-8">
              {Object.entries(skills).map(([category, items]) => (
                <div key={category}>
                  <h5 className="text-lg font-medium text-gray-700 mb-3">{category}</h5>
                  <div className="flex flex-wrap gap-2">
                    {items.map((item, index) => (
                      <span 
                        key={index}
                        className={`px-3 py-1 rounded-full text-sm font-medium ${
                          typeof item === 'object' 
                            ? 'bg-blue-50 text-blue-700 border border-blue-200'
                            : 'bg-indigo-50 text-indigo-700'
                        }`}
                      >
                        {typeof item === 'object' ? (
                          <span>
                            {item.name} <span className="text-xs text-gray-500">({item.level})</span>
                          </span>
                        ) : item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="mt-8">
            <a 
              href="https://drive.google.com/file/d/1ItAI6Jf16uu7MMrTxEGs96DrQmhf_045/view?usp=sharing" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center text-indigo-600 hover:text-indigo-800 font-medium"
              download="Gaurav_Mehta_Resume"
            >
              Download Resume
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}