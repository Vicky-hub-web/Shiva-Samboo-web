import React from "react";
import { motion } from "framer-motion";

export default function CTA() {
  return (
    <section id="contact" className="cta">
      <div className="cta-bg" />
      <div className="cta-shade" />
      <div className="cta-content">
        <span>Start your construction</span>
        <h2>
          Ready to build
          <br />
          <em>your dream home?</em>
        </h2>
        <motion.a
          href="mailto:hello@shivasamboo.example"
          whileHover={{ scale: 1.035 }}
          whileTap={{ scale: .98 }}
        >
          Get a consultation <b>↗</b>
        </motion.a>
      </div>
    </section>
  );
}
