export default function About() {
  return (
    <section id="about" className="py-20 bg-gradient-to-b from-black to-gray-900 text-white px-6">
      <h2 className="text-4xl font-bold text-center mb-12">About Me</h2>

      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        <img
          src="/public/pic1.jpg"
          className="rounded-xl shadow-2xl"
          alt="about"
        />

        <p className="text-gray-300 text-lg leading-relaxed">
          I’m a passionate developer specializing in **React, Tailwind CSS, FastAPI,
          Deep Learning, and Computer Vision**. I build modern, responsive, and intelligent
          applications with great attention to UI, UX, and performance.
        </p>
      </div>
    </section>
  );
}
