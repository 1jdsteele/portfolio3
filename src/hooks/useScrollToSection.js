export default function useScrollToSection() {
  const scrollToSection = (sectionId) => {
    const el = document.getElementById(sectionId);
    if (!el) return;

    el.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return { scrollToSection };
}
