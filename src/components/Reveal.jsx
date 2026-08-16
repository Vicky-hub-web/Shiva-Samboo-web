import React from "react";
import { motion } from "framer-motion";

export default function Reveal({ children, className = "", delay = 0 }) {
  return (
    <div className={`reveal-mask ${className}`}>
      <motion.div
        initial={{ y: "110%" }}
        whileInView={{ y: 0 }}
        viewport={{ once: true, amount: .2, margin: "0px 0px -8% 0px" }}
        transition={{ duration: .9, delay, ease: [0.22, 1, 0.36, 1] }}
      >
        {children}
      </motion.div>
    </div>
  );
}
