import { useEffect, useState } from "react";
import "./HeroIntroSection.css"; // optional external CSS

export default function HeroIntroSection() {
  // Array of rotating titles
  const roles = [
    "Full-Stack Engineer",
    "Grad Student",
    "Software Generalist",
    "React + Supabase Developer",
  ];

  const [index, setIndex] = useState(0);

  // Simple interval rotator
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % roles.length);
    }, 2000); // change every 2 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="hero-intro-container">
      <div className="hero-overlay">
        <h1 className="hero-title">Hi, I'm Jake Steele</h1>

        <h2 className="hero-subtitle">
          I am <span className="hero-role">{roles[index]}</span>
        </h2>
      </div>
    </section>
  );
}
