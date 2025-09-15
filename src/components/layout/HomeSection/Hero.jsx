import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import heroVideo from "../../../assets/codemindaivideo.mp4";
import heroImage from "../../../assets/codemindaiherosectionphoto.png";

const Hero = () => {
  const [videoLoaded, setVideoLoaded] = useState(false);

  useEffect(() => {
    const video = document.getElementById("heroVideo");
    if (video) {
      video.oncanplaythrough = () => setVideoLoaded(true);
    }
  }, []);

  return (
    <section className="relative w-full h-[65vh] sm:h-[75vh] md:h-[85vh] lg:h-screen flex items-center overflow-hidden">
      {/* Fallback Image */}
      {!videoLoaded && (
        <img
          src={heroImage}
          alt="Hero fallback"
          className="absolute w-full h-full object-cover"
        />
      )}

      {/* Video Background */}
      <video
        id="heroVideo"
        src={heroVideo}
        autoPlay
        loop
        muted
        playsInline
        className={`absolute w-full h-full object-cover transition-opacity duration-1000 ${
          videoLoaded ? "opacity-100" : "opacity-0"
        }`}
      ></video>

      {/* Left-aligned Content */}
      <div className="relative z-10 px-6 md:px-12 lg:px-24 text-light flex flex-col justify-center h-full max-w-4xl">
        <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4 text-left leading-tight">
          CodemindAI - Your AI & Web Development Partner
        </h1>
        <p className="text-base sm:text-lg md:text-2xl mb-6 text-left leading-relaxed">
          We deliver <span className="font-semibold">smart, scalable websites</span> and{" "}
          <span className="font-semibold">AI-powered learning solutions</span> that turn your ideas into{" "}
          <span className="font-semibold">real digital experiences</span>.
        </p>
        <div className="flex gap-4 flex-wrap justify-start">
          <Link
            to="/services"
            className="px-6 py-3 bg-secondary text-dark font-semibold rounded-full hover:bg-light hover:scale-105 transition-all duration-300 shadow-md"
          >
            Our Services
          </Link>
          <Link
            to="/contact-us"
            className="px-6 py-3 bg-light text-primary font-semibold rounded-full hover:bg-secondary hover:scale-105 transition-all duration-300 shadow-md"
          >
            Talk to Experts
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
