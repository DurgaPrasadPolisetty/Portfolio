import { motion } from "framer-motion";
import { useState } from "react";

import ProjectModal from "./ProjectModal";

import wildfire from "../assets/wildfire.png";
import nxtwatch from "../assets/nxtwatch.png";
import cropreccomendation from "../assets/cropreccomendation.png";
import jobbyapp from "../assets/jobbyapp.png";
import energy from "../assets/energy.png";

import {
  fadeInUp,
  staggerContainer,
} from "../utils/animations";

const projects = [
  {
    title: "Wildfire Prediction System",

    description:
      "AI-powered wildfire prediction and monitoring system built using STGCN and LSTM deep learning models.",

    fullDescription:
      "AI-powered wildfire prediction and monitoring system built using STGCN and LSTM deep learning models to forecast wildfire risk based on environmental, weather, and geographical conditions. The platform includes an interactive analytics dashboard with real-time visualization, risk assessment insights, prediction reports, and data-driven monitoring tools for efficient wildfire management and early warning support.",

    image: wildfire,

    technologies: [
      "Python",
      "TensorFlow",
      "LSTM",
      "STGCN",
      "Power BI",
    ],

    demo:
      "https://github.com/DurgaPrasadPolisetty/Wildfire_prediction_GNN",

    github:
      "https://github.com/DurgaPrasadPolisetty/Wildfire_prediction_GNN",
  },

  {
    title: "Jobby APP",

    description:
      "Responsive job search platform with JWT authentication and protected routes.",

    fullDescription:
      "Responsive job search platform inspired by modern recruitment portals, featuring secure JWT authentication, protected routes, dynamic job search, salary and employment-type filters, REST API integration, and seamless user experience with React Router and local storage persistence.",

    image: jobbyapp,

    technologies: [
      "React JS",
      "JWT",
      "REST API",
      "CSS",
      "React Router",
    ],

    demo: "https://nakuarijob.ccbp.tech/",

    github:
      "https://github.com/DurgaPrasadPolisetty",
  },

  {
    title: "NxtWatch App",

    description:
      "Responsive video streaming platform inspired by YouTube.",

    fullDescription:
      "Responsive video streaming platform inspired by YouTube, featuring secure authentication, protected routes, dynamic search functionality, video categorization, trending sections, saved videos, and seamless light/dark theme switching with a modern user-friendly interface.",

    image: nxtwatch,

    technologies: [
      "React JS",
      "Authentication",
      "REST API",
      "Routing",
      "Theme Switch",
    ],

    github:
      "https://github.com/DurgaPrasadPolisetty",

    demo: "https://wdp.ccbp.tech/",
  },

  {
    title: "Crop Recommendation System",

    description:
      "AI-powered crop recommendation using BiLSTM and LSTM models.",

    fullDescription:
      "AI-powered Crop Recommendation System using BiLSTM and LSTM models to predict the most suitable crop based on soil nutrients, weather conditions, humidity, and environmental factors, featuring an interactive farmer-friendly dashboard with Explainable AI (XAI) insights.",

    image: cropreccomendation,

    technologies: [
      "Python",
      "BiLSTM",
      "LSTM",
      "Machine Learning",
      "XAI",
    ],

    github:
      "https://github.com/DurgaPrasadPolisetty/Crop-Recommendation-System-ML",

    demo:
      "https://github.com/DurgaPrasadPolisetty/Crop-Recommendation-System-ML",
  },

  {
    title: "Energy Insights",

    description:
      "Full-stack energy analytics platform with ML forecasting.",

    fullDescription:
      "Full-stack energy analytics platform that predicts and visualizes household electricity consumption using Machine Learning models, featuring real-time weather integration, anomaly detection, 7-day forecasting, and electricity bill estimation across all Indian states.",

    image: energy,

    technologies: [
      "Machine Learning",
      "React",
      "Node JS",
      "Forecasting",
      "Analytics",
    ],

    github:
      "https://github.com/DurgaPrasadPolisetty/MiniProject_DS_AIML-B_2026_Energy_Insights",

    demo:
      "https://github.com/DurgaPrasadPolisetty/MiniProject_DS_AIML-B_2026_Energy_Insights",
  },
];

function Projects() {

  const [selectedProject, setSelectedProject] =
    useState(null);

  return (

    <section
      id="projects"
      className="
        min-h-screen
        bg-[#403B46]
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

            Projects

          </p>

          <h2 className="text-4xl md:text-6xl font-bold text-white">

            Featured Works

          </h2>

        </motion.div>

        {/* GRID */}

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="
            grid
            grid-cols-1
            md:grid-cols-2
            lg:grid-cols-3
            gap-8
          "
        >

          {projects.map((project, index) => (

            <motion.div
              key={index}
              variants={fadeInUp}
              whileHover={{
                y: -10,
                scale: 1.02,
              }}
              transition={{
                type: "spring",
                stiffness: 300,
              }}
              onClick={() =>
                setSelectedProject(project)
              }
              className="
                bg-[#4B4653]
                rounded-3xl
                overflow-hidden
                shadow-lg
                hover:shadow-2xl
                transition-all
                duration-300
                cursor-pointer
                group
              "
            >

              {/* IMAGE */}

              <div className="overflow-hidden">

                <img
                  src={project.image}
                  alt={project.title}
                  className="
                    w-full
                    h-[240px]
                    object-cover
                    group-hover:scale-105
                    transition-transform
                    duration-500
                  "
                />

              </div>

              {/* CONTENT */}

              <div className="p-6 space-y-5">

                <h3
                  className="
                    text-2xl
                    font-semibold
                    text-white
                  "
                >

                  {project.title}

                </h3>

                <p
                  className="
                    text-gray-300
                    leading-7
                  "
                >

                  {project.description}

                </p>

                {/* TECHNOLOGIES */}

                <div className="flex flex-wrap gap-3">

                  {project.technologies.map(
                    (tech, index) => (

                      <span
                        key={index}
                        className="
                          bg-orange-400/20
                          text-orange-300
                          px-3
                          py-1
                          rounded-full
                          text-sm
                        "
                      >

                        {tech}

                      </span>

                    )
                  )}

                </div>

              </div>

            </motion.div>

          ))}

        </motion.div>

      </div>

      {/* MODAL */}

      <ProjectModal
        project={{
          ...selectedProject,
          description:
            selectedProject?.fullDescription,
        }}
        isOpen={selectedProject !== null}
        onClose={() =>
          setSelectedProject(null)
        }
      />

    </section>
  );
}

export default Projects;