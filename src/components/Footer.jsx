import React from "react";
export default function Footer() {
  return (
    <footer className="footer">
      <a href="#top" className="brand">SHIVA SAMBOO<span>°</span></a>
      <div className="footer-meta">
        <span>House Construction & Civil Works</span>
        <span>Planning · Building · Finishing</span>
      </div>
      <div className="footer-links">
        <a href="mailto:hello@shivasamboo.example">Email</a>
        <a href="#services">Services</a>
        <a href="#top">Back to top ↑</a>
      </div>
      <div className="footer-line" />
      <small>© 2026 Shiva Samboo. All rights reserved.</small>
    </footer>
  );
}
