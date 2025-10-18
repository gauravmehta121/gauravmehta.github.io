import Link from 'next/link';

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-b from-white to-gray-50 pt-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="w-40 h-40 md:w-48 md:h-48 mx-auto mb-8 rounded-full overflow-hidden border-4 border-indigo-100 shadow-lg">
          <img 
            src="/images/1671044743732.jpeg" 
            alt="Gaurav Mehta"
            className="w-full h-full object-cover"
            onError={(e) => {
              // Fallback to a placeholder if the image fails to load
              e.currentTarget.src = 'https://via.placeholder.com/200';
            }}
          />
        </div>
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4">
          Hi, I'm <span className="text-indigo-600">Gaurav Mehta</span>
        </h1>
        <h2 className="text-xl md:text-2xl text-gray-600 mb-6">
          Software Engineer | Python Specialist | Problem Solver
        </h2>
        <div className="flex flex-col space-y-2 mb-8 text-gray-700">
          <div className="flex items-center justify-center">
            <svg className="w-5 h-5 mr-2 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            <a href="mailto:mehtagurv123@gmail.com" className="hover:text-indigo-600 transition-colors">mehtagurv123@gmail.com</a>
          </div>
          <div className="flex items-center justify-center">
            <svg className="w-5 h-5 mr-2 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            <a href="tel:+919380141387" className="hover:text-indigo-600 transition-colors">+91 9380141387</a>
          </div>
        </div>
        <p className="text-lg text-gray-600 mb-10 max-w-2xl mx-auto">
          I'm a passionate Python Engineer with expertise in building high-performance, real-time data systems. At Kloudspot, I focus on developing scalable video processing pipelines and optimizing system performance. I love tackling complex challenges in distributed systems and data-intensive applications.
        </p>
        <p className="text-gray-500 italic mb-10 max-w-2xl mx-auto">
          When I'm not coding, you'll find me exploring the latest tech blogs or diving deep into the world of high-frequency trading systems.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link 
            href="#work" 
            className="px-8 py-3 bg-indigo-600 text-white rounded-lg font-medium hover:bg-indigo-700 transition-colors"
          >
            View My Work
          </Link>
          <Link 
            href="#contact" 
            className="px-8 py-3 border-2 border-gray-300 text-gray-700 rounded-lg font-medium hover:bg-gray-50 transition-colors"
          >
            Get In Touch
          </Link>
        </div>
      </div>
    </section>
  );
}
