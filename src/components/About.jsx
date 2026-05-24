import { motion } from "framer-motion";

import { scrollToSection } from "../utils/scrollToSection";

import about from "../assets/about.png";

import MagneticButton from "./MagneticButton";

import {
  fadeInLeft,
  fadeInRight,
} from "../utils/animations";

function About() {

  return (

    <section
      className="
        min-h-screen
        bg-[#403B46]
        flex
        items-center
        px-6
        md:px-12
        py-24
        overflow-hidden
        relative
      "
    >

      <div
        className="
          absolute
          top-[-150px]
          right-[-100px]
          w-[400px]
          h-[400px]
          bg-orange-400/10
          blur-[120px]
          rounded-full
          pointer-events-none
        "
      />

      <div
        className="
          absolute
          bottom-[-150px]
          left-[-100px]
          w-[350px]
          h-[350px]
          bg-orange-300/10
          blur-[120px]
          rounded-full
          pointer-events-none
        "
      />

      <div
        className="
          max-w-7xl
          mx-auto
          w-full
          relative
          z-10
        "
      >

        <div
          className="
            grid
            grid-cols-1
            lg:grid-cols-2
            gap-16
            items-center
          "
        >

          <motion.div
            variants={fadeInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="
              flex
              justify-center
              relative
            "
          >

            <div
              className="
                absolute
                w-[320px]
                h-[320px]
                md:w-[450px]
                md:h-[450px]
                bg-orange-400/10
                blur-[80px]
                rounded-full
              "
            />

            <motion.img
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              src={about}
              alt="about"
              className="
                relative
                z-10
                w-[420px]
                md:w-[620px]
                lg:w-[760px]
                xl:w-[850px]
                max-w-none
                object-contain
                drop-shadow-2xl
              "
            />

          </motion.div>

          <motion.div
            variants={fadeInRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="
              space-y-8
              text-center
              lg:text-left
            "
          >

            <p
              className="
                text-orange-400
                font-medium
                text-lg
                tracking-wide
              "
            >

              About Me.

            </p>

            <h2
              className="
                text-4xl
                md:text-5xl
                xl:text-6xl
                font-bold
                text-white
                leading-tight
              "
            >

              Why hire me for your next project?

            </h2>

            <p
              className="
                text-gray-300
                leading-9
                text-lg
              "
            >

              I’m a passionate AI/ML and Full Stack
              Developer focused on building scalable,
              responsive, and intelligent applications
              that solve real-world problems.

            </p>

            <p
              className="
                text-gray-300
                leading-9
                text-lg
              "
            >

              I enjoy creating clean user experiences,
              modern interfaces, and impactful projects
              using React, Machine Learning, and modern
              web technologies.

            </p>

            <MagneticButton
              onClick={() =>
                scrollToSection("projects")
              }
              className="
                mt-4
                bg-orange-400
                hover:bg-orange-500
                text-white
                px-10
                py-4
                rounded-xl
                font-semibold
                text-lg
                shadow-lg
                hover:shadow-orange-400/30
                transition-all
                duration-300
              "
            >

              Explore Projects

            </MagneticButton>

          </motion.div>

        </div>

      </div>

    </section>

  );
}

export default About;