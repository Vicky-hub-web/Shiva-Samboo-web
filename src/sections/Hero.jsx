import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const heroImage =
  "./images/hero.jpg";

export default function Hero({ night, setNight }) {
  const section = useRef(null);
  const [wipe, setWipe] = useState(54);
  const [hovering, setHovering] = useState(false);
  const { scrollYProgress } = useScroll({
    target: section,
    offset: ["start start", "end start"]
  });
  const imageScale = useTransform(scrollYProgress, [0, 1], [1.03, 1.15]);
  const contentY = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const opacity = useTransform(scrollYProgress, [0, .82], [1, 0]);

  useEffect(() => {
    if (!hovering) setWipe(night ? 100 : 0);
  }, [night, hovering]);

  const move = (e) => {
    if (window.matchMedia("(pointer: coarse)").matches) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    setWipe(Math.max(8, Math.min(92, x)));
  };

  return (
    <section id="top" className="hero" ref={section}>
      <motion.div className="hero-media" style={{ scale: imageScale }}>
        <div className="hero-day" style={{ backgroundImage: `url(${heroImage})` }} />
        <div
          className="hero-night"
          style={{
            backgroundImage: `linear-gradient(rgba(4,8,14,.08),rgba(4,8,14,.08)),url(${heroImage})`,
            clipPath: `inset(0 0 0 ${100 - wipe}%)`
          }}
        />
        <div
          className="hero-interaction-zone"
          onMouseMove={move}
          onMouseEnter={() => setHovering(true)}
          onMouseLeave={() => setHovering(false)}
        />
        <div className="grain" />
      </motion.div>

      <motion.div className="hero-overlay" style={{ y: contentY, opacity }}>
        <div className="hero-kicker">
          <span>House construction</span>
          <span>Built with care · 2026</span>
        </div>

        <div className="hero-title-wrap">
          <div className="line-mask">
            <motion.h1
              initial={{ y: "110%" }}
              animate={{ y: 0 }}
              transition={{ duration: 1.05, delay: .22, ease: [0.16, 1, 0.3, 1] }}
            >
              We build homes.
            </motion.h1>
          </div>
          <div className="line-mask hero-title-indent">
            <motion.h1
              initial={{ y: "110%" }}
              animate={{ y: 0 }}
              transition={{ duration: 1.05, delay: .34, ease: [0.16, 1, 0.3, 1] }}
            >
              Built to last.
            </motion.h1>
          </div>
        </div>

        <div className="hero-bottom">
          <p>
            Complete residential construction — from planning and foundation to
            structural work, finishing and final handover.
          </p>
          <button onClick={() => document.getElementById("services")?.scrollIntoView({ behavior: "smooth", block: "start" })}>
            Explore services <span>↘</span>
          </button>
        </div>
      </motion.div>

      <div className="hero-mode-labels">
        <button onClick={() => setNight(false)} className={!night ? "active" : ""}>Day</button>
        <div className="mode-line"><span style={{ width: `${wipe}%` }} /></div>
        <button onClick={() => setNight(true)} className={night ? "active" : ""}>Night</button>
      </div>

      <div className="scroll-note">Scroll to explore</div>
    </section>
  );
}
