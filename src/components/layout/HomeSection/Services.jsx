import { motion } from "framer-motion";
import {
  Code,
  Wrench,
  BookOpen,
  FileCheck,
} from "lucide-react";

export default function ServicesSection() {
  const services = [
    {
      title: "Website & App Development",
      description:
        "Build fast, secure, and scalable websites & apps that help businesses grow online and engage their users effectively.",
      points: [
        "Custom Website Development",
        "Full-Stack Web Apps",
        "Mobile App Development (iOS & Android)",
        "API Development & Integration",
      ],
      icon: <Code size={32} className="text-primary" />,
    },
    {
      title: "Maintenance & Support",
      description:
        "Keep your digital platforms running smoothly with our continuous support, monitoring, and optimization services.",
      points: [
        "Bug Fixes & Updates",
        "Server & Database Monitoring",
        "Performance Optimization",
        "24/7 Support & Maintenance",
      ],
      icon: <Wrench size={32} className="text-primary" />,
    },
    {
      title: "Python Tutorials",
      description:
        "Learn Python step by step with structured tutorials, real projects, and practical exercises designed for beginners and pros.",
      points: [
        "Beginner to Advanced Python",
        "Hands-on Coding Practice",
        "Real-World Project Examples",
        "Interactive Learning Modules",
      ],
      icon: <BookOpen size={32} className="text-primary" />,
    },
    {
      title: "Quiz & Test Platform",
      description:
        "Challenge yourself with quizzes and coding tests to boost your skills and prepare for interviews with confidence.",
      points: [
        "MCQ & Coding Quizzes",
        "Instant Results & Explanations",
        "Progress Tracking",
        "Gamified Learning",
      ],
      icon: <FileCheck size={32} className="text-primary" />,
    },
  ];

  return (
    <section className="bg-dark min-h-screen flex flex-col lg:flex-row items-center justify-center px-6 lg:px-16 py-16 gap-12">
      {/* LEFT SIDE - INTRO */}
      <div className="lg:w-1/2 space-y-6 text-center lg:text-left">
        <p className="text-secondary uppercase tracking-wide font-semibold">
          Advanced Digital Solutions for Your Growth
        </p>
        <h2 className="text-3xl md:text-5xl font-bold text-primary leading-snug">
          End-to-End Digital Services to Design, Build & Support Your Business
        </h2>
        <p className="text-secondary text-lg">
          At <span className="font-semibold">CodemindAI</span>, we provide 
          website & app development, ongoing maintenance, Python learning 
          resources, and quizzes — everything you need to succeed digitally.
        </p>
        <button className="bg-primary text-dark px-6 py-3 rounded-xl shadow hover:bg-secondary transition">
          Start Your Digital Journey
        </button>
      </div>

      {/* RIGHT SIDE - SCROLLABLE CARDS */}
      <div className="lg:w-1/2 h-[500px] overflow-y-auto space-y-6 pr-3 custom-scrollbar">
        {services.map((service, index) => (
          <motion.div
            key={index}
            className="bg-light rounded-2xl shadow-lg p-6 md:p-8 flex flex-col gap-3 hover:shadow-xl transition-all duration-300"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.15 }}
          >
            <div className="flex items-center gap-3">
              {service.icon}
              <h3 className="text-xl md:text-2xl font-bold text-primary">
                {service.title}
              </h3>
            </div>
            <p className="text-secondary">{service.description}</p>
            <ul className="list-disc list-inside text-primary space-y-1">
              {service.points.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
