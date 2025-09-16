import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { motion } from "framer-motion";

import project1 from "../../../assets/SrGroup.png";
import project2 from "../../../assets/SrGroup.png";
import getMyLogo from "../../../assets/codemindailogo.png";

const projects = [
  {
    name: "GetMyProperty",
    description:
      "Our skilled team built a powerful real estate platform for GetMyProperty, enabling seamless property discovery of top premium residential and commercial zones.",
    image: project1,
    logo: getMyLogo,
  },
  {
    name: "GreenBridge",
    description:
      "Blending the best of print and digital for future-ready classrooms. Our platform helps teachers and students collaborate effectively.",
    image: project2,
    logo: getMyLogo,
  },
];

const AISection = () => {
  const scrollRefs = useRef([]);
  const swiperRef = useRef(null);

  const handleMouseEnterImage = (index) => {
    const img = scrollRefs.current[index];
    if (img) {
      img.style.transition = "transform 6s linear";
      img.style.transform = `translateY(-${img.scrollHeight - 400}px)`;
    }
    swiperRef.current?.autoplay?.stop();
  };

  const handleMouseLeaveImage = (index) => {
    const img = scrollRefs.current[index];
    if (img) {
      img.style.transition = "transform 0.8s ease";
      img.style.transform = "translateY(0)";
    }
    swiperRef.current?.autoplay?.start();
  };

  return (
    <section className="bg-primary text-light py-16 px-6 relative">
      {/* Heading */}
      <div className="text-center mb-10">
        <p className="text-light uppercase tracking-wide">
          Our Diverse Portfolio
        </p>
        <h2 className="text-3xl md:text-5xl font-bold text-dark">
          Our Excellence is Driven By Client Satisfaction
        </h2>
        <p className="text-light mt-3 max-w-2xl mx-auto">
          A curated collection of our best collaborations, designed to help
          businesses thrive in the digital space.
        </p>
      </div>

      {/* Swiper Slider */}
      <Swiper
        modules={[Navigation, Autoplay]}
        navigation
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        className="max-w-6xl mx-auto"
      >
        {projects.map((project, index) => (
          <SwiperSlide key={index}>
            <div className="grid md:grid-cols-2 items-center gap-10 bg-dark rounded-2xl shadow-2xl p-6 relative">
              {/* Left Section */}
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                {project.logo && (
                  <img
                    src={project.logo}
                    alt={project.name}
                    className="h-12 mb-4"
                  />
                )}
                <h3 className="text-2xl md:text-3xl font-bold text-light mb-2">
                  {project.name.toUpperCase()}
                </h3>
                <div className="w-16 h-[2px] bg-primary mb-4"></div>
                <p className="text-light/80 text-lg leading-relaxed">
                  {project.description}
                </p>
              </motion.div>

              {/* Right Section */}
              <motion.div
                className="relative h-[400px] overflow-hidden rounded-xl border border-light shadow-lg bg-dark cursor-pointer"
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                onMouseEnter={() => handleMouseEnterImage(index)}
                onMouseLeave={() => handleMouseLeaveImage(index)}
              >
                {/* Decorative Curved Line */}
                <div className="absolute -left-8 top-10 w-20 h-20 border-t-2 border-l-2 border-light rounded-tl-3xl"></div>

                <img
                  ref={(el) => (scrollRefs.current[index] = el)}
                  src={project.image}
                  alt={project.name}
                  className="w-full object-top"
                />
              </motion.div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default AISection;
