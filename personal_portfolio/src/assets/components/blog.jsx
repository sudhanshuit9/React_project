import { ArrowRight, Calendar, User } from "lucide-react";

export default function Blog() {
  const posts = [
    {
      id: 1,
      title: "Building a Full-Stack App with React & FastAPI",
      date: "January 2025",
      author: "Sudhanshu Singh",
      description:
        "A step-by-step guide on connecting React with FastAPI using Axios, handling routes, and building clean UI components.",
      image: "/blog1.jpg",
    },
    {
      id: 2,
      title: "How I Built My Portfolio with React + Tailwind",
      date: "December 2024",
      author: "Sudhanshu Singh",
      description:
        "A breakdown of how I created my portfolio website from scratch, including components, optimization, and responsive design.",
      image: "/blog2.jpg",
    },
    {
      id: 3,
      title: "Understanding MySQL with FastAPI",
      date: "November 2024",
      author: "Sudhanshu Singh",
      description:
        "Learn how to set up SQLAlchemy, create models, APIs, and connect your backend with MySQL using simple steps.",
      image: "/blog3.jpg",
    },
  ];

  return (
    <div
      id="blog"
      className="w-full bg-gray-50 dark:bg-gray-900 py-16 px-6 md:px-20 lg:px-32"
    >
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-10">
          Blog & Articles
        </h2>

        {/* Blog Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <div
              key={post.id}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden transition transform hover:-translate-y-1"
            >
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-40 object-cover"
              />

              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {post.title}
                </h3>

                <div className="flex items-center text-gray-500 dark:text-gray-400 text-sm mb-3 gap-4">
                  <span className="flex items-center gap-1">
                    <Calendar size={16} /> {post.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <User size={16} /> {post.author}
                  </span>
                </div>

                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-4">
                  {post.description}
                </p>

                <a
                  href="#"
                  className="flex items-center text-blue-600 dark:text-blue-400 font-medium hover:underline"
                >
                  Read More <ArrowRight size={18} className="ml-1" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
