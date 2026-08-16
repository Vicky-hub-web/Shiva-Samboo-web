import React from "react";
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { residences } from "../data/residences";

gsap.registerPlugin(ScrollTrigger);

export default function Residences() {
  const root = useRef(null);
  const track = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      mm.add("(min-width: 900px)", () => {
        const getDistance = () => Math.max(0, track.current.scrollWidth - window.innerWidth);
        const tween = gsap.to(track.current, {
          x: () => -getDistance(),
          ease: "none",
          scrollTrigger: {
            trigger: root.current,
            start: "top top",
            end: () => `+=${getDistance() + window.innerHeight * .55}`,
            pin: true,
            scrub: 1.05,
            invalidateOnRefresh: true
          }
        });
        return () => tween.kill();
      });

      return () => mm.revert();
    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <section id="services" className="residences" ref={root}>
      <div className="res-header">
        <div className="section-index">02 / Construction services</div>
        <h2>Built from<br />the ground up</h2>
        <p>Complete construction solutions for new homes, structural work and renovation.</p>
      </div>

      <div className="res-track" ref={track}>
        {residences.map((item) => (
          <article className="res-card" key={item.name}>
            <div className="res-image-wrap">
              <img src={item.image} alt={item.name} loading="lazy" decoding="async" />
              <div className="res-card-arrow">↗</div>
            </div>
            <div className="res-card-meta">
              <span>{item.number}</span>
              <div>
                <h3>{item.name}</h3>
                <p>{item.location}</p>
              </div>
              <span>{item.meta}</span>
            </div>
          </article>
        ))}
        <div className="res-end-card">
          <span>Planning a new home?</span>
          <h3>Tell us what<br />you want to build.</h3>
          <a href="#contact">Get a consultation ↗</a>
        </div>
      </div>
    </section>
  );
}
