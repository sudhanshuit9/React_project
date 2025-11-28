const Blog = () => {
  const posts = [
    {
      title: "Building a Full Stack App with React & FastAPI",
      date: "Nov 20, 2025",
      desc: "Learn how to create a full-stack application with React frontend and FastAPI backend.",
    },
    {
      title: "AI for Plant Disease Detection",
      date: "Oct 10, 2025",
      desc: "Step-by-step tutorial to detect plant diseases using deep learning and computer vision.",
    },
    {
      title: "Portfolio Optimization Tips for Developers",
      date: "Sep 5, 2025",
      desc: "How to build a professional portfolio that highlights your skills and projects.",
    },
  ];

  return (
    <section id="blog" className="py-20 bg-gray-100 text-gray-800">
      <div className="max-w-6xl mx-auto text-center px-4">
        <h2 className="text-4xl font-bold mb-12">Latest Blogs</h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <div
              key={index}
              className="p-6 bg-gray-50 shadow rounded-lg hover:shadow-xl transition"
            >
              <h3 className="text-2xl font-semibold text-gray-800">{post.title}</h3>
              <p className="text-gray-500 text-sm mt-1">{post.date}</p>
              <p className="text-gray-700 mt-3">{post.desc}</p>
              <a
                href="#"
                className="mt-4 inline-block text-blue-600 font-semibold hover:underline"
              >
                Read More →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
