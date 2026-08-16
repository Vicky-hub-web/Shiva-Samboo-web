import React from "react";
import { useEffect, useRef } from "react";

export default function Cursor() {
  const cursor = useRef(null);

  useEffect(() => {
    const el = cursor.current;
    if (!el || window.matchMedia("(pointer: coarse)").matches) return;

    let tx = -100, ty = -100, x = tx, y = ty, raf;
    const move = (e) => { tx = e.clientX; ty = e.clientY; };
    const loop = () => {
      x += (tx - x) * .18;
      y += (ty - y) * .18;
      el.style.transform = `translate3d(${x}px,${y}px,0)`;
      raf = requestAnimationFrame(loop);
    };
    const over = (e) => {
      if (e.target.closest("a,button,.res-card")) el.classList.add("active");
    };
    const out = (e) => {
      if (e.target.closest("a,button,.res-card")) el.classList.remove("active");
    };

    window.addEventListener("mousemove", move);
    document.addEventListener("mouseover", over);
    document.addEventListener("mouseout", out);
    loop();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", move);
      document.removeEventListener("mouseover", over);
      document.removeEventListener("mouseout", out);
    };
  }, []);

  return <div ref={cursor} className="cursor" />;
}
