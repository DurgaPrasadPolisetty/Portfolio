import { motion } from "framer-motion";

import {
  FaReact,
  FaNodeJs,
  FaPython,
  FaHtml5,
  FaCss3Alt,
  FaGitAlt,
  FaPaintBrush,
} from "react-icons/fa";

import {
  SiJavascript,
  SiTailwindcss,
  SiMysql,
  SiCplusplus,
} from "react-icons/si";

import {
  fadeInUp,
  staggerContainer,
} from "../utils/animations";

const skills = [
  {
    name: "React JS",
    icon: <FaReact />,
  },

  {
    name: "JavaScript",
    icon: <SiJavascript />,
  },

  {
    name: "Python",
    icon: <FaPython />,
  },

  {
    name: "Node JS",
    icon: <FaNodeJs />,
  },

  {
    name: "Tailwind CSS",
    icon: <SiTailwindcss />,
  },

  {
    name: "MySQL",
    icon: <SiMysql />,
  },

  {
    name: "HTML5",
    icon: <FaHtml5 />,
  },

  {
    name: "CSS3",
    icon: <FaCss3Alt />,
  },

  {
    name: "Git",
    icon: <FaGitAlt />,
  },

  {
    name: "C++",
    icon: <SiCplusplus />,
  },

  {
    name: "Canva",
    icon: <FaPaintBrush />,
  },
];

function Skills() {

  return (

    <section
      id="skills"
      className="
        min-h-screen
        bg-[#F3F4F6]
        px-6
        md:px-12
        py-24
        overflow-hidden
      "
    >

      <div className="max-w-7xl mx-auto">

        {/* TITLE */}

        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-20"
        >

          <p className="text-orange-400 font-medium text-lg mb-3">

            Skills

          </p>

          <h2
            className="
              text-4xl
              md:text-6xl
              font-bold
              text-slate-800
            "
          >

            Technologies I Work With

          </h2>

        </motion.div>

        {/* SKILLS GRID */}

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="
            grid
            grid-cols-2
            sm:grid-cols-3
            md:grid-cols-4
            lg:grid-cols-5
            xl:grid-cols-6
            gap-6
          "
        >

          {skills.map((skill, index) => (

            <motion.div
              key={index}
              variants={fadeInUp}
              whileHover={{
                y: -10,
                scale: 1.03,
              }}
              transition={{
                type: "spring",
                stiffness: 300,
              }}
              className="
                bg-white/80
                backdrop-blur-md
                border
                border-white/40
                rounded-3xl
                shadow-sm
                hover:shadow-2xl
                transition-all
                duration-300
                p-8
                flex
                flex-col
                items-center
                justify-center
                gap-5
                group
              "
            >

              {/* ICON */}

              <div
                className="
                  text-5xl
                  text-orange-400
                  group-hover:scale-110
                  transition-transform
                  duration-300
                "
              >

                {skill.icon}

              </div>

              {/* NAME */}

              <h3
                className="
                  text-slate-700
                  font-medium
                  text-center
                  text-sm
                  md:text-base
                "
              >

                {skill.name}

              </h3>

            </motion.div>

          ))}

        </motion.div>

      </div>

    </section>
  );
}

export default Skills;