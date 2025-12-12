// src/components/sections/HeroIntroSection.jsx
import { useEffect, useState } from "react";
import { heroImages } from "../../data/heroImages.js";
import "./HeroIntroSection.css";

export default function HeroIntroSection() {
  const [imgIndex, setImgIndex] = useState(0);

  const roles = [
    "a Full-Stack Engineer",
    "a CS Grad Student",
    "a Software Generalist",
    "a React + Supabase Developer",
    "a planner",
    "a risk-taker",
  ];

  const [roleIndex, setRoleIndex] = useState(0);

  // rotate text roles
  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  // rotate background images
  useEffect(() => {
    const interval = setInterval(() => {
      setImgIndex((prev) => (prev + 1) % heroImages.length);
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="hero-section">
      <div className="hero-bento">
        {/* IMAGE CARD */}
        <div className="hero-bento-card hero-image-card">
          <div className="hero-bg-slider">
            {heroImages.map((img, i) => (
              <div
                key={i}
                className={`hero-bg-slide ${i === imgIndex ? "active" : ""}`}
                style={{ backgroundImage: `url(${img})` }}
              />
            ))}
          </div>
        </div>

        {/* NAME CARD */}
        <div className="hero-bento-card hero-name-card">
          <h1 className="hero-title">Hi, I&apos;m Jake Steele</h1>
        </div>

        {/* ROLE CARD */}
        <div className="hero-bento-card hero-role-card">
          <h2 className="hero-subtitle">
            I am <span className="hero-role">{roles[roleIndex]}</span>
          </h2>
        </div>
      </div>
    </section>
  );
}
