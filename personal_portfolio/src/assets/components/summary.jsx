import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { 
  Award, BookOpen, Code2, Target, Laptop, Rocket,
  Briefcase, GraduationCap, FileDown
} from "lucide-react";

export default function Summary() {

  // Animated Counter
  const Counter = ({ value }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
      let start = 0;
      const end = parseInt(value);
      if (start === end) return;

      let interval = setInterval(() => {
        start += 1;
        setCount(start);
        if (start === end) clearInterval(interval);
      }, 40);
    }, [value]);

    return <span>{count}+</span>;
  };

  return (
    <section className="py-20 bg-black-50" id="summary">
      <div className="max-w-6xl mx-auto px-6">

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center text-white-900 mb-8"
        >
          Professional Summary
        </motion.h2>

        {/* Intro */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.7 }}
          className="text-lg text-black-700 text-center max-w-3xl mx-auto mb-16"
        >
          Passionate Full-Stack Developer with strong skills in React, FastAPI, MySQL, 
          and UI/UX design. I enjoy creating modern, fast, and user-friendly applications 
          with clean architecture and high performance.
        </motion.p>

        {/* Download Resume */}
        <div className="flex justify-center mb-14">
          <a
            href="/resume.pdf"
            download
            className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 
            text-white px-6 py-3 rounded-xl shadow-md transition"
          >
            <FileDown className="w-5 h-5" /> Download Resume
          </a>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center mb-20">
          {[ 
            { label: "Projects", value: 12 },
            { label: "Technologies", value: 20 },
            { label: "Clients / Teams", value: 5 },
            { label: "Months Experience", value: 24 },
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="bg-white shadow rounded-xl p-6"
            >
              <h3 className="text-4xl font-bold text-blue-600 mb-1">
                <Counter value={item.value} />
              </h3>
              <p className="text-gray-700 font-medium">{item.label}</p>
            </motion.div>
          ))}
        </div>

        {/* Core Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-20">

          {/* Card 1 */}
          <motion.div whileHover={{ scale: 1.05 }} className="bg-white shadow-lg rounded-2xl p-6">
            <div className="flex items-center gap-3 mb-4">
              <Code2 className="w-8 h-8 text-blue-600" />
              <h3 className="text-xl font-semibold">Core Skills</h3>
            </div>
            <ul className="text-gray-700 space-y-2">
              <li>• React.js, JavaScript, Tailwind CSS</li>
              <li>• FastAPI, Python, Node.js</li>
              <li>• MySQL, SQLAlchemy, REST APIs</li>
              <li>• Git, Deployment, CI/CD</li>
            </ul>
          </motion.div>

          {/* Card 2 */}
          <motion.div whileHover={{ scale: 1.05 }} className="bg-white shadow-lg rounded-2xl p-6">
            <div className="flex items-center gap-3 mb-4">
              <BookOpen className="w-8 h-8 text-green-600" />
              <h3 className="text-xl font-semibold">Currently Learning</h3>
            </div>
            <p className="text-gray-700">
              Advancing in AI/ML, real-time pipelines, Next.js, system design, 
              and improving UI animations.
            </p>
          </motion.div>

          {/* Card 3 */}
          <motion.div whileHover={{ scale: 1.05 }} className="bg-white shadow-lg rounded-2xl p-6">
            <div className="flex items-center gap-3 mb-4">
              <Award className="w-8 h-8 text-yellow-500" />
              <h3 className="text-xl font-semibold">Achievements</h3>
            </div>
            <ul className="text-gray-700 space-y-2">
              <li>• Built full-stack systems</li>
              <li>• Experience with AI-based projects</li>
              <li>• Designed scalable backend APIs</li>
              <li>• Modern UI/UX implementations</li>
            </ul>
          </motion.div>

          {/* Card 4 */}
          <motion.div whileHover={{ scale: 1.05 }} className="bg-white shadow-lg rounded-2xl p-6">
            <div className="flex items-center gap-3 mb-4">
              <Laptop className="w-8 h-8 text-purple-700" />
              <h3 className="text-xl font-semibold">Work Style</h3>
            </div>
            <p className="text-gray-700">
              Clean architecture, problem-solving, pixel-perfect UI, 
              and writing scalable, maintainable code.
            </p>
          </motion.div>

          {/* Card 5 */}
          <motion.div whileHover={{ scale: 1.05 }} className="bg-white shadow-lg rounded-2xl p-6">
            <div className="flex items-center gap-3 mb-4">
              <Target className="w-8 h-8 text-red-600" />
              <h3 className="text-xl font-semibold">Career Goals</h3>
            </div>
            <p className="text-gray-700">
              Become a top-level full-stack engineer and build impactful 
              AI-powered platforms.
            </p>
          </motion.div>

          {/* Card 6 */}
          <motion.div whileHover={{ scale: 1.05 }} className="bg-white shadow-lg rounded-2xl p-6">
            <div className="flex items-center gap-3 mb-4">
              <Rocket className="w-8 h-8 text-indigo-600" />
              <h3 className="text-xl font-semibold">Future Vision</h3>
            </div>
            <p className="text-gray-700">
              Build my own SaaS products, contribute to open source, 
              and become part of large-scale tech teams.
            </p>
          </motion.div>
        </div>

        {/* Timeline Section */}
        
        <h3 className="text-3xl font-bold text-indigo-400 text-center mb-10" >Experience & Education</h3>
        <div className="space-y-6 max-w-3xl mx-auto">
          

          {/* Experience */}
          <motion.div 
            whileHover={{ scale: 1.02 }} 
            className="bg-black p-6 rounded-xl shadow flex gap-4"
          >
            <Briefcase className="w-10 h-10 text-blue-600" />
            <div>
              <h4 className="text-xl font-semibold">Full Stack Developer</h4>
              <p className="text-white-600">ACL Digital · 2024</p>
              <p className="text-white-700 mt-1">Developed full-stack projects with React, FastAPI, MySQL</p>
            </div>
          </motion.div>

          {/* Education */}
          <motion.div 
            whileHover={{ scale: 1.02 }} 
            className="bg-black p-6 rounded-xl shadow flex gap-4"
          >
            <GraduationCap className="w-10 h-10 text-white-600" />
            <div>
              <h4 className="text-xl font-semibold">Computer Science</h4>
              <p className="text-blue-600">Bachelor’s Degree</p>
              <p className="text-blue-700 mt-1">Focused on programming, DBMS, and full-stack dev</p>
            </div>
          </motion.div>
        </div>

        {/* Tech Stack Icons Grid */}
        <h3 className="text-3xl font-bold text-blue-400 text-center mt-20 mb-10">Tech Stack</h3>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 text-center">
          {[
            { name: "React.js" },
            { name: "FastAPI" },
            { name: "Python" },
            { name: "MySQL" },
            { name: "Tailwind CSS" },
            { name: "Node.js" },
            { name: "Git & GitHub" },
            { name: "SQLAlchemy" },
          ].map((tech, index) => (
            <motion.div 
              key={index} 
              whileHover={{ scale: 1.1 }} 
              className="bg-white shadow p-5 rounded-xl font-medium text-gray-800"
            >
              {tech.name}
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
