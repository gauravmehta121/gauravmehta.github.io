import { AcademicCapIcon, BookOpenIcon, TrophyIcon } from '@heroicons/react/24/outline';

const education = [
  {
    degree: "Master of Computer Applications (MCA)",
    institution: "PES University, Bengaluru, KA",
    year: "Nov 2021 - Sept 2023",
    description: "CGPA: 7.57/10",
    icon: <AcademicCapIcon className="h-8 w-8 text-indigo-600" />
  },
  {
    degree: "Bachelor of Computer Applications (BCA)",
    institution: "Acharya Institute of Graduate Studies, Bengaluru, KA",
    year: "June 2018 - Sept 2021",
    description: "CGPA: 8.5/10",
    icon: <BookOpenIcon className="h-8 w-8 text-indigo-600" />
  }
];

export default function Education() {
  return (
    <section id="education" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Education</h2>
          <div className="w-20 h-1 bg-indigo-600 mx-auto"></div>
        </div>

        <div className="space-y-12">
          {education.map((item, index) => (
            <div key={index} className="relative">
              <div className="absolute left-0 top-0 flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-md">
                {item.icon}
              </div>
              <div className="pl-20">
                <h3 className="text-xl font-semibold text-gray-800">{item.degree}</h3>
                <p className="mt-1 text-indigo-600 font-medium">{item.institution}</p>
                <p className="text-sm text-gray-500 mb-2">{item.year}</p>
                <p className="text-gray-600">{item.description}</p>
              </div>
              {index !== education.length - 1 && (
                <div className="absolute left-6 top-12 h-full w-0.5 bg-gray-200"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}