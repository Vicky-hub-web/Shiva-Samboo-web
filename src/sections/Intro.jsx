import React from "react";
import Reveal from "../components/Reveal";

export default function Intro() {
  return (
    <section className="intro section-pad">
      <div className="section-index">01 / What we build</div>
      <div className="intro-copy">
        <Reveal>
          <h2>From the first drawing to the final handover, we build homes made to last.</h2>
        </Reveal>
        <div className="intro-detail">
          <Reveal delay={.08}>
            <p>
              Shiva Samboo handles complete house construction with careful planning,
              quality materials, skilled workmanship and clear execution at every stage.
            </p>
          </Reveal>
          <Reveal delay={.14}>
            <a href="#process">Our construction process <span>↗</span></a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
