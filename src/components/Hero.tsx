import Link from 'next/link';

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-b from-white to-gray-50 pt-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
          Hi, I'm <span className="text-indigo-600">Gaurav Mehta</span>
        </h1>
        <h2 className="text-xl md:text-2xl text-gray-600 mb-8">
          [Your Professional Title] | Building digital experiences that matter
        </h2>
        <p className="text-lg text-gray-600 mb-10 max-w-2xl mx-auto">
          I'm passionate about creating elegant solutions to complex problems. 
          Currently focused on [your current focus/role].
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
