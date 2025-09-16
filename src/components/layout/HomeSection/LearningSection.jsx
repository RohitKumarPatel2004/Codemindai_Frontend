import { motion } from "framer-motion";
import { Target, Award, BarChart3, Users } from "lucide-react";
import quizIllustration from "../../../assets/CodemindAILearning.jpg"; // add your image in assets folder

const LearningSection = () => {
  return (
    <section className="bg-dark text-primary py-20 px-6 md:px-16">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          {/* Heading */}
          <div className="flex items-center gap-3">
            <Target size={40} className="text-primary" />
            <h2 className="text-3xl md:text-5xl font-bold">
              Quizzes & <span className="text-secondary">Tests</span>
            </h2>
          </div>

          {/* Description */}
          <p className="text-secondary text-lg leading-relaxed">
            🎯 <span className="font-semibold">Test Your Knowledge</span> <br />
            Take interactive quizzes and coding challenges to evaluate your
            learning. Track progress, earn badges, and compete with others for
            a fun learning experience.
          </p>

          {/* Highlights */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
            <div className="flex items-start gap-3">
              <BarChart3 size={28} className="text-primary" />
              <p className="text-base">
                Real-Time <br /> Progress Tracking
              </p>
            </div>
            <div className="flex items-start gap-3">
              <Award size={28} className="text-primary" />
              <p className="text-base">
                Earn Badges <br /> & Achievements
              </p>
            </div>
            <div className="flex items-start gap-3">
              <Users size={28} className="text-primary" />
              <p className="text-base">
                Compete with <br /> Other Learners
              </p>
            </div>
            <div className="flex items-start gap-3">
              <Target size={28} className="text-primary" />
              <p className="text-base">
                MCQ + Coding <br /> Challenges
              </p>
            </div>
          </div>

          {/* CTA Button */}
          <button className="bg-primary text-dark px-8 py-3 mt-6 rounded-2xl font-semibold shadow hover:bg-secondary hover:text-dark transition">
            🎯 Take a Free Quiz
          </button>
        </motion.div>

        {/* RIGHT IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <img
            src={quizIllustration}
            alt="Quizzes & Tests"
            className="max-w-lg w-[90%] md:w-[80%] h-auto drop-shadow-2xl"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default LearningSection;
