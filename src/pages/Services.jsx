const Services = () => {
  const services = [
    { title: "Website Development", desc: "Modern & responsive websites." },
    { title: "AI Learning Content", desc: "AI tutorials, projects & blogs." },
    { title: "Python Knowledge", desc: "Core to advanced Python concepts." },
    { title: "Quizzes & Tests", desc: "Interactive learning system." },
  ];

  return (
    <section className="min-h-screen bg-dark text-light p-10">
      <h2 className="text-3xl font-bold mb-6 text-primary">Our Services</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((s, i) => (
          <div
            key={i}
            className="bg-secondary text-dark p-6 rounded-xl shadow-lg hover:scale-105 transition-all"
          >
            <h3 className="text-xl font-semibold">{s.title}</h3>
            <p className="mt-2 text-sm">{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
