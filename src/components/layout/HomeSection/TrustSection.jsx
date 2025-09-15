import { useState, useEffect } from "react";
import { FaCheckCircle, FaStar } from "react-icons/fa";
import { motion } from "framer-motion";

// Images
import Client1 from "../../../assets/mem1.png";
import Client2 from "../../../assets/mem2.png";
import Client3 from "../../../assets/mem3.png";
import Client4 from "../../../assets/mem4.png";

// ✅ Import review images
import Review1 from "../../../assets/mem1.png";
import Review2 from "../../../assets/mem2.png";
import Review3 from "../../../assets/mem3.png";
import Review4 from "../../../assets/mem4.png";

// Reviews
const reviews = [
  { name: "Amit Sharma", text: "I sold my apartment with SR Group – smooth and transparent experience.", rating: 4.6, img: Review1 },
  { name: "Sarah Khan", text: "SR Group helped me find my dream home in just 3 days. Excellent service!", rating: 4.8, img: Review2 },
  { name: "John Williams", text: "Very professional and trustworthy. Highly recommended!", rating: 5.0, img: Review3 },
  { name: "Priya Verma", text: "Quick, reliable, and transparent service. Loved it!", rating: 4.9, img: Review4 },
];

// Stats with targets
const stats = [
  { value: 50, label: "Project Delivered" },
  { value: 20, label: "Countries Served" },
  { value: 98, label: "Customer Retention", suffix: "%" },
  { value: 7, label: "In Industry", suffix: "+ Yrs" },
];

const TrustSection = () => {
  const [index, setIndex] = useState(0);
  const [counts, setCounts] = useState(stats.map(() => 0));

  // Auto-slide reviews
  useEffect(() => {
    const interval = setInterval(
      () => setIndex((prev) => (prev + 1) % reviews.length),
      2500
    );
    return () => clearInterval(interval);
  }, []);

  // Counter animation
  useEffect(() => {
    stats.forEach((stat, i) => {
      let start = 0;
      const end = stat.value;
      const duration = 2000; // 2s
      const stepTime = Math.max(Math.floor(duration / end), 20);

      const timer = setInterval(() => {
        start += 1;
        if (start > end) {
          clearInterval(timer);
        } else {
          setCounts((prev) => {
            const updated = [...prev];
            updated[i] = start;
            return updated;
          });
        }
      }, stepTime);
    });
  }, []);

  return (
    <section className="w-full py-16 bg-dark text-primary">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-2">
        

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* LEFT */}
          <div className="space-y-6">
         <motion.h2
  initial={{ opacity: 0, y: 30 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6, ease: "easeOut" }}
  className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-primary text-center md:text-left"
>
  Your Trusted Partner in{" "}
  <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
    Digital Transformation
  </span>
</motion.h2>

<p className="text-sm sm:text-base md:text-lg lg:text-xl text-secondary leading-relaxed mt-3 text-center md:text-left">
  Innovating with <span className="font-semibold">Code</span>, Empowering with{" "}
  <span className="font-semibold">AI</span>. <br className="hidden sm:block" />
  Together, we build <span className="font-semibold">smart, scalable</span> &{" "}
  <span className="font-semibold">future-ready</span> solutions.
</p>


            <span className="flex items-center gap-2 bg-green-200 text-green-900 px-4 py-2 rounded-full font-semibold shadow-md w-fit">
              <FaCheckCircle /> Trusted by our clients
            </span>

            <div className="flex items-center gap-4 bg-light text-primary px-6 py-4 rounded-xl shadow-md w-fit">
              <div className="flex -space-x-2">
                <img src={Client1} alt="client" className="w-10 h-10 rounded-full border-2 border-white" />
                <img src={Client2} alt="client" className="w-10 h-10 rounded-full border-2 border-white" />
                <img src={Client3} alt="client" className="w-10 h-10 rounded-full border-2 border-white" />
                <img src={Client4} alt="client" className="w-10 h-10 rounded-full border-2 border-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold">100k+ Clients</h3>
                <p className="text-sm text-secondary">across India & overseas</p>
              </div>
            </div>
          </div>

          {/* RIGHT */}
          <div className="space-y-10">
            
            {/* Counters */}
            <div className="grid grid-cols-2 gap-6">
              {stats.map((item, i) => (
                <div key={i} className="px-6 py-6 rounded-2xl shadow-md text-center bg-light">
                  <h3 className="text-3xl font-extrabold text-secondary">
                    {counts[i]}
                    {item.suffix ? item.suffix : "+"}
                  </h3>
                  <p className="text-sm md:text-base text-primary">{item.label}</p>
                </div>
              ))}
            </div>

            {/* Review Card (Design like image) */}
            <div className="relative max-w-md mx-auto">
              <div className="bg-white text-primary px-6 py-4 rounded-2xl shadow-lg flex items-center gap-4">
                
                {/* Profile with rating */}
                <div className="relative">
                  <img src={reviews[index].img} alt={reviews[index].name} className="w-14 h-14 rounded-full object-cover" />
                  <span className="absolute -top-2 -left-2 bg-yellow-400 text-white px-2 py-1 rounded-full text-xs font-bold flex items-center gap-1">
                    <FaStar /> {reviews[index].rating}
                  </span>
                </div>

                {/* Review Text */}
                <p className="text-base md:text-lg leading-relaxed">
                  {reviews[index].text}
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
