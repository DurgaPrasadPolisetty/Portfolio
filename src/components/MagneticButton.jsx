import { motion } from "framer-motion";
import { useRef } from "react";

function MagneticButton({ children, className }) {

  const ref = useRef(null);

  const handleMouseMove = (e) => {

    const element = ref.current;

    const { left, top, width, height } =
      element.getBoundingClientRect();

    const x = e.clientX - (left + width / 2);
    const y = e.clientY - (top + height / 2);

    element.style.transform = `
      translate(${x * 0.2}px, ${y * 0.2}px)
    `;
  };

  const handleMouseLeave = () => {

    const element = ref.current;

    element.style.transform = `
      translate(0px, 0px)
    `;
  };

  return (

    <motion.button
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      whileTap={{ scale: 0.95 }}
      className={className}
    >

      {children}

    </motion.button>

  );
}

export default MagneticButton;