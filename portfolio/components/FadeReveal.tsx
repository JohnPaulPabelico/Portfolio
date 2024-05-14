//Reveal animation in the works
import React, { useRef, useEffect } from "react";
import { motion, useInView, useAnimation, delay } from "framer-motion";

interface props {
  children: JSX.Element;
  width?: "fit-content" | "100%";
}

export const FadeReveal = ({ children, width = "fit-content" }: props) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView]);

  return (
    <div ref={ref} style={{ position: "relative", width, overflow: "hidden" }}>
      <motion.div
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1 },
        }}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.25 }}
      >
        {children}
      </motion.div>
    </div>
  );
};
