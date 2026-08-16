import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

export default function Navbar({ night, setNight }) {
  const [open, setOpen] = useState(false);

  const go = (id) => {
    const target = document.getElementById(id);
    if (target) target.scrollIntoView({ behavior: "smooth", block: "start" });
    setOpen(false);
  };

  return (
    <header className="nav-shell">
      <a className="brand magnetic" href="#top" aria-label="Shiva Samboo home">
        SHIVA SAMBOO<span>°</span>
      </a>

      <nav className="desktop-nav">
        <button onClick={() => go("services")}>Services</button>
        <button onClick={() => go("process")}>Process</button>
        <button onClick={() => go("contact")}>Contact</button>
      </nav>

      <div className="nav-actions">
        <button
          className="theme-pill magnetic"
          onClick={() => setNight(!night)}
          aria-label={`Switch to ${night ? "day" : "night"} view`}
        >
          <span className={`orb ${night ? "night" : ""}`} />
          <span>{night ? "Night" : "Day"}</span>
        </button>
        <button
          className="menu-button magnetic"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <span />
          <span />
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            className="mobile-menu"
            initial={{ clipPath: "inset(0 0 100% 0)" }}
            animate={{ clipPath: "inset(0 0 0% 0)" }}
            exit={{ clipPath: "inset(0 0 100% 0)" }}
            transition={{ duration: .65, ease: [0.76, 0, 0.24, 1] }}
          >
            <div className="mobile-menu-inner">
              {[
                ["Services", "services"],
                ["Process", "process"],
                ["Contact", "contact"],
              ].map(([label, id], index) => (
                <motion.button
                  key={label}
                  onClick={() => go(id)}
                  initial={{ y: 60, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: .16 + index * .08 }}
                >
                  <small>0{index + 1}</small>{label}
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
