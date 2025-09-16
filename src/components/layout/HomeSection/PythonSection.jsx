import { motion } from "framer-motion";
import { BookOpen, Code2, Laptop, Trophy } from "lucide-react";
import pythonIllustration from "../../../assets/CodemindAI.jpg"; // <-- import your image from assets folder

const PythonSection = () => {
  return (
    <section className="bg-light text-primary py-20 px-6 md:px-16">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <div className="flex items-center gap-3">
            <BookOpen size={40} className="text-primary" />
            <h2 className="text-3xl md:text-5xl font-bold">
              Learn <span className="text-secondary">Python</span> the Smart Way
            </h2>
          </div>

          <p className="text-secondary text-lg leading-relaxed">
            From basics to advanced topics, master Python with{" "}
            <span className="font-semibold">CodemindAI</span>'s step-by-step
            tutorials, real projects, and coding challenges that prepare you for
            real-world development and job interviews.
          </p>

          {/* HIGHLIGHTS */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
            <div className="flex items-start gap-3">
              <Code2 size={28} className="text-primary" />
              <p className="text-base">
                Beginner → Advanced <br /> Lessons
              </p>
            </div>
            <div className="flex items-start gap-3">
              <Laptop size={28} className="text-primary" />
              <p className="text-base">
                Interactive Examples <br /> & Hands-On Code
              </p>
            </div>
            <div className="flex items-start gap-3">
              <Trophy size={28} className="text-primary" />
              <p className="text-base">
                Real Projects & <br /> Challenges
              </p>
            </div>
            <div className="flex items-start gap-3">
              <BookOpen size={28} className="text-primary" />
              <p className="text-base">
                Track Progress & <br /> Improve Skills
              </p>
            </div>
          </div>

          {/* CTA */}
          <button className="bg-primary text-dark px-8 py-3 mt-6 rounded-2xl font-semibold shadow hover:bg-secondary hover:text-dark transition">
            🚀 Start Learning Now
          </button>
        </motion.div>

        {/* RIGHT GRAPHIC / IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
        <img
  src={pythonIllustration}
  alt="Python Learning"
  className="max-w-lg w-[100%] md:w-[100%] h-auto drop-shadow-2xl"
/>

        </motion.div>
      </div>
    </section>
  );
};

export default PythonSection;
