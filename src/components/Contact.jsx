import { motion } from "framer-motion";
import {
  FaLinkedin,
  FaGithub,
  FaEnvelope,
} from "react-icons/fa";

function Contact() {
  return (

    <section className="bg-[#F3F4F6] px-6 md:px-12 py-24">

      <div className="max-w-7xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >

          <p className="text-orange-400 font-medium text-lg mb-3">
            Contact
          </p>

          <h2 className="text-4xl md:text-6xl font-bold text-slate-800">

            Let’s Connect

          </h2>

        </motion.div>

        <div className="flex flex-col items-center text-center space-y-10">


          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="
              text-slate-600
              text-lg
              leading-9
              max-w-3xl
            "
          >

            Passionate about AI/ML, Full Stack Development,
            and building modern digital experiences.
            Always exploring innovative technologies and
            creating impactful projects.

          </motion.p>

          <motion.a
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            href="mailto:yourmail@gmail.com"
            className="
              text-2xl
              md:text-3xl
              font-semibold
              text-slate-800
              hover:text-orange-400
              transition
            "
          >

            durgapolisetty2005@gmail.com

          </motion.a>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="
              flex
              gap-8
              text-4xl
              text-slate-700
            "
          >

            <a
              href="https://www.linkedin.com/in/durga-prasad-polisetty-4960a1308/"
              target="_blank"
              rel="noopener noreferrer"
            >

              <FaLinkedin className="hover:text-orange-400 hover:scale-110 transition-all duration-300" />

            </a>

            <a
              href="https://github.com/DurgaPrasadPolisetty"
              target="_blank"
              rel="noopener noreferrer"
            >

              <FaGithub className="hover:text-orange-400 hover:scale-110 transition-all duration-300" />

            </a>

            <a href="mailto:durgapolisetty2005@gmail.com">

              <FaEnvelope className="hover:text-orange-400 hover:scale-110 transition-all duration-300" />

            </a>

          </motion.div>

        </div>
      </div>

    </section>
  );
}

export default Contact;