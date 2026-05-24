import { useEffect, useState } from "react";
import { motion } from "framer-motion";

function CustomCursor() {

  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });

  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {

    const moveCursor = (e) => {

      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });

    };

    window.addEventListener("mousemove", moveCursor);

    const hoverElements = document.querySelectorAll(
      "a, button, li"
    );

    const mouseEnter = () => setIsHovering(true);
    const mouseLeave = () => setIsHovering(false);

    hoverElements.forEach((el) => {
      el.addEventListener("mouseenter", mouseEnter);
      el.addEventListener("mouseleave", mouseLeave);
    });

    return () => {

      window.removeEventListener("mousemove", moveCursor);

      hoverElements.forEach((el) => {
        el.removeEventListener("mouseenter", mouseEnter);
        el.removeEventListener("mouseleave", mouseLeave);
      });

    };

  }, []);

  return (
    <>

      {/* OUTER CURSOR */}

      <motion.div
        animate={{
          x: mousePosition.x - 20,
          y: mousePosition.y - 20,
          scale: isHovering ? 1.8 : 1,
        }}
        transition={{
          type: "spring",
          stiffness: 250,
          damping: 20,
          mass: 0.5,
        }}
        className="
          fixed
          top-0
          left-0
          w-10
          h-10
          border-2
          border-orange-400
          rounded-full
          pointer-events-none
          z-[9999]
          hidden md:block
        "
      />

      {/* INNER DOT */}

      <motion.div
        animate={{
          x: mousePosition.x - 4,
          y: mousePosition.y - 4,
        }}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 28,
        }}
        className="
          fixed
          top-0
          left-0
          w-2
          h-2
          bg-orange-400
          rounded-full
          pointer-events-none
          z-[9999]
          hidden md:block
        "
      />

    </>
  );
}

export default CustomCursor;