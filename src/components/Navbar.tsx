import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="fixed w-full bg-white/80 backdrop-blur-sm z-50 shadow-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            <span className="text-xl font-bold text-gray-900">Gaurav Mehta</span>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <Link href="#home" className="text-gray-700 hover:text-indigo-600 transition-colors">
              Home
            </Link>
            <Link href="#about" className="text-gray-700 hover:text-indigo-600 transition-colors">
              About
            </Link>
            <Link href="#work" className="text-gray-700 hover:text-indigo-600 transition-colors">
              Work
            </Link>
            <Link href="#contact" className="text-gray-700 hover:text-indigo-600 transition-colors">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
