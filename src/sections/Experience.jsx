import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Reveal from "../components/Reveal";

export default function Experience() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  const y = useTransform(scrollYProgress, [0, 1], [-70, 70]);

  return (
    <section id="process" className="experience section-pad" ref={ref}>
      <div className="experience-copy">
        <div className="section-index light-index">03 / How we work</div>
        <Reveal>
          <h2>One team.<br />Every stage.</h2>
        </Reveal>
        <Reveal delay={.08}>
          <p>
            Site assessment, planning, foundation, structure, masonry, electrical,
            plumbing, flooring, painting and final finishing — coordinated as one
            clear construction journey from start to handover.
          </p>
        </Reveal>
        <div className="experience-stats">
          <div><strong>01</strong><span>Plan & estimate</span></div>
          <div><strong>02</strong><span>Build & supervise</span></div>
          <div><strong>03</strong><span>Finish & handover</span></div>
        </div>
      </div>

      <div className="experience-media">
        <motion.img
          style={{ y }}
          src="./images/experience.jpg"
          alt="House construction and finishing"
          loading="lazy"
          decoding="async"
        />
      </div>
    </section>
  );
}
