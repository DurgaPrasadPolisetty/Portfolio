import { motion } from "framer-motion";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { scrollToSection } from "../utils/scrollToSection";
import hero from "../assets/hero.png";
import MagneticButton from "./MagneticButton";
import {
  fadeInLeft,
  fadeInRight,
  fadeInUp,
} from "../utils/animations";

function Hero() {
  return (
    <section className="min-h-screen bg-[#F5F5F5] flex items-center overflow-hidden px-6 md:px-12 pt-24">

      <div className="max-w-7xl mx-auto w-full">

        <div className="grid grid-cols-1 lg:grid-cols-3 items-center gap-10">

          {/* LEFT SECTION */}

          <motion.div
            variants={fadeInLeft}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.8 }}
            className="space-y-6 text-center lg:text-left z-10"
          >

            <p className="text-orange-400 text-xl font-medium">
              Hi, I am
            </p>

            <h1 className="text-6xl md:text-7xl xl:text-8xl font-bold text-slate-800 leading-[0.95]">
              Durga
              <br />
              Prasad<span className="text-orange-400">.</span>
            </h1>

            <div className="w-28 h-1 bg-orange-400 mx-auto lg:mx-0"></div>

            <div className="flex justify-center lg:justify-start gap-6 text-4xl text-slate-700 pt-2">

              <a
                href="https://www.linkedin.com/in/durga-prasad-polisetty-4960a1308/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin className="cursor-pointer hover:text-orange-400 transition duration-300" />
              </a>

              <a
                href="https://github.com/DurgaPrasadPolisetty"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub className="cursor-pointer hover:text-orange-400 transition duration-300" />
              </a>

            </div>

          </motion.div>

          {/* CENTER IMAGE */}

          <motion.div
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            transition={{ duration: 1 }}
            className="relative flex justify-center items-end"
          >

            <img
              src={hero}
              alt="profile"
              className="
                w-[420px]
                md:w-[620px]
                lg:w-[780px]
                xl:w-[900px]
                max-w-none
                object-contain
                translate-y-8
              "
            />

          </motion.div>

          {/* RIGHT SECTION */}

          <motion.div
            variants={fadeInRight}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.8 }}
            className="space-y-8 text-center lg:text-left z-10"
          >

            <h2 className="text-5xl md:text-6xl xl:text-7xl font-bold text-slate-700 leading-[1]">
              Full Stack
              <br />
              Developer.
            </h2>

            <p className="text-slate-500 leading-9 text-xl max-w-xl">

              Passionate about building intelligent
              applications, responsive web experiences,
              and scalable full-stack solutions with
              modern technologies.

            </p>

            <div className="flex flex-col sm:flex-row gap-5 justify-center lg:justify-start">

              <a
                href="/Polisetty DurgaPrasad.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MagneticButton
  className="
    bg-orange-400
    hover:bg-orange-500
    hover:scale-105
    transition-all
    duration-300
    px-8
    py-3
    rounded-md
    text-white
    font-medium
  "
>
  Open Resume
</MagneticButton>
              </a>

              <button
                onClick={() => scrollToSection("projects")}
                className="border border-slate-300 hover:border-orange-400 hover:text-orange-400 transition duration-300 px-10 py-4 rounded-xl text-slate-700 font-semibold text-lg cursor-pointer"
              >
                Projects
              </button>

            </div>

          </motion.div>

        </div>

      </div>

    </section>
  );
}

export default Hero;