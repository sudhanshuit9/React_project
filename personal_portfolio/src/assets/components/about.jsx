import { Briefcase, GraduationCap, User } from "lucide-react";

export default function About() {
  return (
    <div
      id="about"
      className="w-full bg-white dark:bg-gray-900 py-16 px-6 md:px-20 lg:px-32"
    >
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
          About Me
        </h2>

        {/* Intro */}
        <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-10">
          I'm a passionate Full-Stack Developer with experience in building modern,
          user-friendly web applications using React, FastAPI, and MySQL.  
          I enjoy solving real-world problems and improving user experiences through 
          clean, minimal and scalable code.
        </p>

        {/* Cards Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

          {/* Personal Info */}
          <div className="p-6 rounded-2xl shadow-lg bg-gray-50 dark:bg-gray-800">
            <User className="w-10 h-10 text-blue-600 dark:text-blue-400 mb-3" />
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              Who I Am
            </h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
              A detail-oriented developer who loves clean UI, optimized code, and 
              continuous learning. I focus on writing scalable and efficient systems.
            </p>
          </div>

          {/* Experience */}
          <div className="p-6 rounded-2xl shadow-lg bg-gray-50 dark:bg-gray-800">
            <Briefcase className="w-10 h-10 text-green-600 dark:text-green-400 mb-3" />
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              Experience
            </h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
              Full-Stack Developer with hands-on experience in React, FastAPI, MySQL,
              Streamlit, Machine Learning, and deep learning-based applications.
            </p>
          </div>

          {/* Education */}
          <div className="p-6 rounded-2xl shadow-lg bg-gray-50 dark:bg-gray-800">
            <GraduationCap className="w-10 h-10 text-purple-600 dark:text-purple-400 mb-3" />
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              Education
            </h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
              Bachelor's degree in Computer Science with focused learning in 
              software development, data analytics, and emerging technologies.
            </p>
          </div>

        </div>

        {/* Soft Skills */}
        <div className="mt-12">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Skills I Bring
          </h3>
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 text-gray-700 dark:text-gray-300 text-sm">
            <li className="p-3 rounded-xl bg-gray-100 dark:bg-gray-800">React + Tailwind CSS</li>
            <li className="p-3 rounded-xl bg-gray-100 dark:bg-gray-800">FastAPI + Python</li>
            <li className="p-3 rounded-xl bg-gray-100 dark:bg-gray-800">MySQL & SQL Queries</li>
            <li className="p-3 rounded-xl bg-gray-100 dark:bg-gray-800">REST API Development</li>
            <li className="p-3 rounded-xl bg-gray-100 dark:bg-gray-800">Machine Learning Basics</li>
            <li className="p-3 rounded-xl bg-gray-100 dark:bg-gray-800">Problem Solving</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
