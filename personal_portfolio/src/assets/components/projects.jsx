const projects = [
  {
    title: "Plant Disease Detection",
    desc: "AI + ResNet50 model with image scanning.",
    img: "/public/pic3.jpg"
  },
  {
    title: "Fraud Detection System",
    desc: "A deep learning Streamlit dashboard.",
    img: "/public/pic4.jpg"
  },
  {
    title: "YouTube Clone",
    desc: "A complete Django full-stack app.",
    img: "/public/pic5.jpg"
  },
  {
    title: "ChatGPT Clone",
    desc: "A complete Django full-stack app.",
    img: "/public/pic6.jpg"
  },
  {
    title: "chatbot Application",
    desc: "A complete Django full-stack app.",
    img: "/public/pic7.jpg"
  },
  {
    title: "YouTube Clone",
    desc: "A complete Django full-stack app.",
    img: "/public/pic5.jpg"
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-black text-white px-6">
      <h2 className="text-4xl font-bold text-center mb-10">Projects</h2>

      <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {projects.map((p, i) => (
          <div
            key={i}
            className="bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:scale-105 transition"
          >
            <img src={p.img} alt={p.title} className="h-48 w-full object-cover" />
            <div className="p-5">
              <h3 className="text-xl font-semibold mb-2">{p.title}</h3>
              <p className="text-gray-300">{p.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
