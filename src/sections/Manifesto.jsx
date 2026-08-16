import React from "react";
import { motion } from "framer-motion";

const words = "Planning Foundation Structure Masonry Electrical Plumbing Finishing Quality".split(" ");

export default function Manifesto() {
  return (
    <section className="manifesto">
      <div className="marquee">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 28, ease: "linear", repeat: Infinity }}
          className="marquee-inner"
        >
          {[...words, ...words, ...words, ...words].map((word, i) => (
            <span key={i}>{word}<i>·</i></span>
          ))}
        </motion.div>
      </div>
      <div className="manifesto-grid section-pad">
        <div className="section-index">04 / Our promise</div>
        <p>
          Strong foundations, dependable materials and disciplined site execution
          are at the centre of every Shiva Samboo construction project.
        </p>
        <p>
          We keep the process transparent from estimate to handover, with attention
          to workmanship, practical design and long-term durability.
        </p>
      </div>
    </section>
  );
}
