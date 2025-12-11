// src/components/sections/HeroIntroSection.jsx
import { useEffect, useState } from "react";
import { heroImages } from "../../data/heroImages.js";
import "./HeroIntroSection.css";

export default function HeroIntroSection() {
  const roles = [
    "Full-Stack Engineer",
    "Grad Student",
    "Software Generalist",
    "React + Supabase Developer",
  ];

  const [roleIndex, setRoleIndex] = useState(0);
  const [bgIndex, setBgIndex] = useState(0);

  // rotate text roles
  useEffect(() => {
    const id = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 2000);
    return () => clearInterval(id);
  }, [roles.length]);

  // rotate background images
  useEffect(() => {
    const id = setInterval(() => {
      setBgIndex((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="hero-section">
      {/* sliding background layer */}
      <div className="hero-bg-slider">
        {heroImages.map((img, i) => (
          <div
            key={i}
            className={`hero-bg-slide ${i === bgIndex ? "active" : ""}`}
            style={{ backgroundImage: `url(${img})` }}
          />
        ))}
      </div>

      {/* text overlay */}
      <div className="hero-overlay">
        <h1 className="hero-title">Hi, I'm Jake Steele</h1>
        <h2 className="hero-subtitle">
          I am a <span className="hero-role">{roles[roleIndex]}</span>
        </h2>
      </div>
    </section>
  );
}
