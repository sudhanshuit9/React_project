
export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center text-center"
    >
      {/* Background video */}
      <video
        autoPlay
        loop
        muted
        className="absolute inset-0 w-full h-full object-cover opacity-60"
        src="/public/video"
      ></video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black-100/60"></div>

      <div className="relative z-10 text-white px-5">
        <img
          src="public/profile.jpg   "
          alt="Profile"
          className="w-40 h-40 rounded-full mx-auto border-4 border-blue-500 shadow-xl mb-6"
        />
        <h1 className="text-5xl font-bold">
          Hi, I'm <span className="text-blue-400">Sudhanshu Singh</span>
        </h1>
        <p className="text-lg text-gray-300 max-w-2xl mx-auto mt-4">
          Full Stack Developer • AI/ML Enthusiast • React • FastAPI • Deep Learning
        </p>

        <a
          href="#contact"
          className="mt-6 inline-block px-8 py-3 bg-blue-600 rounded-full hover:bg-blue-700 transition"
        >
          Contact Me
        </a>
      </div>
    </section>
  );
}
