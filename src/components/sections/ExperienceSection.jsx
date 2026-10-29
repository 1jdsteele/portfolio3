// src/components/sections/ExperienceSection.jsx
import { experiences } from "../../services/experiencesData";
import BentoSection from "../BentoSection";
import ExperienceCard from "../ExperienceCard";
import SectionHeaderCard from "../SectionHeaderCard";

export default function ExperienceSection() {
  return (
    <BentoSection id="experience" tone="mustard">
      <SectionHeaderCard
        title="Experience"
        subtitle="Where the rubber meets the code"
      />

      {experiences.map((experience, index) => {
        // The first experience is featured through placement, not different styling.
        const isFeatured = index === 0;

        return (
          <ExperienceCard
            key={experience.id}
            {...experience}
            sx={{
              gridColumn: {
                xs: "1 / -1",
                sm: isFeatured ? "span 6" : "span 3",
                md: isFeatured ? "span 8" : "span 6",
              },
            }}
          />
        );
      })}
    </BentoSection>
  );
}
