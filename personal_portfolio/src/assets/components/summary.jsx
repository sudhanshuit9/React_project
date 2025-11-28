const Summary = () => {
  const stats = [
    { label: "Projects Completed", value: 12 },
    { label: "Clients", value: 8 },
    { label: "Years of Experience", value: 2 },
    { label: "Certifications", value: 5 },
  ];

  return (
    <section id="summary" className="py-20 bg-black-50">
      <div className="max-w-6xl mx-auto text-center px-4">
        <h2 className="text-4xl font-bold mb-12">My Summary</h2>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="p-6 bg-white shadow rounded-lg hover:shadow-lg transition"
            >
              <h3 className="text-3xl font-bold text-blue-600">{stat.value}+</h3>
              <p className="text-gray-700 mt-2">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Summary;
