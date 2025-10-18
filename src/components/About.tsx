export default function About() {
  const skills = [
    'JavaScript/TypeScript', 'React', 'Next.js', 'Node.js',
    'UI/UX Design', 'Responsive Design', 'Git', 'Agile/Scrum'
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">About Me</h2>
          <div className="w-20 h-1 bg-indigo-600 mx-auto"></div>
        </div>
        
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/3">
            <div className="w-64 h-64 mx-auto bg-gray-200 rounded-full overflow-hidden">
              {/* Replace with your actual image */}
              <div className="w-full h-full bg-gray-300 flex items-center justify-center text-gray-500">
                Your Photo
              </div>
            </div>
          </div>
          
          <div className="md:w-2/3">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Who am I?</h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              I'm a passionate [Your Profession] with [X] years of experience in [your field]. 
              I specialize in [your specialties], and I love turning complex problems into simple, 
              beautiful, and intuitive solutions.
            </p>
            
            <p className="text-gray-600 mb-6 leading-relaxed">
              When I'm not coding, you'll find me [your hobbies/interests], or 
              exploring the latest web technologies.
            </p>
            
            <div className="mt-8">
              <h4 className="text-lg font-medium text-gray-800 mb-4">My Skills</h4>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill, index) => (
                  <span 
                    key={index}
                    className="px-3 py-1 bg-indigo-50 text-indigo-700 rounded-full text-sm font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="mt-8">
              <a 
                href="/resume.pdf" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center text-indigo-600 hover:text-indigo-800 font-medium"
              >
                Download Resume
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
