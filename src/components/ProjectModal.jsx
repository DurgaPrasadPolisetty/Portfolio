import { motion, AnimatePresence } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import { HiOutlineExternalLink } from "react-icons/hi";

function ProjectModal({ project, isOpen, onClose }) {

  return (

    <AnimatePresence>

      {isOpen && (

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="
            fixed
            inset-0
            bg-black/60
            backdrop-blur-sm
            z-[9999]
            flex
            items-center
            justify-center
            px-4
          "
          onClick={onClose}
        >

          {/* MODAL */}

          <motion.div
            initial={{
              opacity: 0,
              scale: 0.8,
              y: 40,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              scale: 0.8,
            }}
            transition={{
              duration: 0.3,
            }}
            onClick={(e) => e.stopPropagation()}
            className="
              bg-white
              max-w-4xl
              w-full
              rounded-3xl
              overflow-hidden
              shadow-2xl
              max-h-[90vh]
              overflow-y-auto
            "
          >

            {/* IMAGE */}

            <img
              src={project.image}
              alt={project.title}
              className="
                w-full
                h-[250px]
                md:h-[400px]
                object-cover
              "
            />

            {/* CONTENT */}

            <div className="p-8 md:p-10">

              <h2
                className="
                  text-3xl
                  md:text-5xl
                  font-bold
                  text-slate-800
                  mb-6
                "
              >

                {project.title}

              </h2>

              <p
                className="
                  text-slate-600
                  leading-9
                  text-lg
                  mb-8
                "
              >

                {project.description}

              </p>

              {/* TECHNOLOGIES */}

              <div className="flex flex-wrap gap-4 mb-10">

                {project.technologies.map((tech, index) => (

                  <span
                    key={index}
                    className="
                      bg-orange-100
                      text-orange-500
                      px-4
                      py-2
                      rounded-full
                      text-sm
                      font-medium
                    "
                  >

                    {tech}

                  </span>

                ))}

              </div>

              {/* BUTTONS */}

              <div className="flex flex-wrap gap-5">

                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >

                  <button
                    className="
                      flex
                      items-center
                      gap-2
                      bg-orange-400
                      hover:bg-orange-500
                      transition
                      px-6
                      py-3
                      rounded-lg
                      text-white
                      font-medium
                    "
                  >

                    <FaGithub />

                    GitHub

                  </button>

                </a>

                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                >

                  <button
                    className="
                      flex
                      items-center
                      gap-2
                      border
                      border-slate-300
                      hover:border-orange-400
                      transition
                      px-6
                      py-3
                      rounded-lg
                      text-slate-700
                      font-medium
                    "
                  >

                    <HiOutlineExternalLink />

                    Live Demo

                  </button>

                </a>

              </div>

            </div>

          </motion.div>

        </motion.div>

      )}

    </AnimatePresence>

  );
}

export default ProjectModal;