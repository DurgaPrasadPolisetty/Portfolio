import { motion } from "framer-motion";
import { useEffect, useState } from "react";

function Loader() {

  const [progress, setProgress] = useState(0);

  useEffect(() => {

    const interval = setInterval(() => {

      setProgress((prev) => {

        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }

        return prev + 1;

      });

    }, 25);

    return () => clearInterval(interval);

  }, []);

  return (

    <div className="fixed inset-0 bg-gradient-to-br from-white via-slate-50 to-orange-50 flex items-center justify-center z-[9999] overflow-hidden">

      {/* ANIMATED BACKGROUND CIRCLES */}

      <motion.div
        className="absolute w-96 h-96 bg-orange-200 rounded-full opacity-20 blur-3xl"
        animate={{
          x: [-100, 100, -100],
          y: [0, 50, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{ top: "-10%", left: "-10%" }}
      ></motion.div>

      <motion.div
        className="absolute w-80 h-80 bg-orange-300 rounded-full opacity-15 blur-3xl"
        animate={{
          x: [100, -100, 100],
          y: [-50, 0, -50],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{ bottom: "-5%", right: "-5%" }}
      ></motion.div>

      {/* PERCENTAGE */}

      <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="
          relative
          z-10
          text-orange-400
          text-4xl
          md:text-6xl
          font-light
          tracking-widest
        "
      >
        {progress}%
      </motion.h1>

    </div>

  );
}

export default Loader;