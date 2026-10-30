export const BENTO_TONES = {
  slate: {
    sectionBg: "rgba(15, 23, 42, 0.62)",
    cardBg: "rgba(15, 23, 42, 0.86)",
    cardHoverBg: "rgba(15, 23, 42, 0.93)",
    outline: "rgba(148, 163, 184, 0.22)",
    cardHoverOutline: "rgba(148, 163, 184, 0.36)",

    link: "rgba(226, 232, 240, 0.95)",
    linkHover: "rgba(255, 255, 255, 1)",
  },

  indigo: {
    sectionBg: "rgba(30, 27, 75, 0.58)",
    cardBg: "rgba(30, 27, 75, 0.84)",
    cardHoverBg: "rgba(30, 27, 75, 0.92)",
    outline: "rgba(165, 180, 252, 0.22)",
    cardHoverOutline: "rgba(165, 180, 252, 0.36)",

    link: "rgba(199, 210, 254, 0.95)",
    linkHover: "rgba(224, 231, 255, 1)",
  },

  emerald: {
    sectionBg: "rgba(6, 42, 34, 0.58)",
    cardBg: "rgba(6, 42, 34, 0.84)",
    cardHoverBg: "rgba(6, 42, 34, 0.92)",
    outline: "rgba(110, 231, 183, 0.16)",
    cardHoverOutline: "rgba(110, 231, 183, 0.28)",

    link: "rgba(167, 243, 208, 0.95)",
    linkHover: "rgba(209, 250, 229, 1)",
  },

  rose: {
    sectionBg: "rgba(55, 10, 20, 0.58)",
    cardBg: "rgba(55, 10, 20, 0.84)",
    cardHoverBg: "rgba(55, 10, 20, 0.92)",
    outline: "rgba(251, 113, 133, 0.16)",
    cardHoverOutline: "rgba(251, 113, 133, 0.28)",

    link: "rgba(253, 230, 138, 0.95)",
    linkHover: "rgba(254, 243, 199, 1)",
  },

  //not quite poppy, maybe burnt orange
  // poppy: {
  //   sectionBg: "rgba(88, 28, 7, 0.56)",
  //   cardBg: "rgba(88, 28, 7, 0.84)",
  //   cardHoverBg: "rgba(88, 28, 7, 0.92)",
  //   outline: "rgba(253, 186, 116, 0.16)",
  //   cardHoverOutline: "rgba(253, 186, 116, 0.28)",
  // },

  //i like it :)
  //polished carnelian
  poppy: {
    sectionBg: "rgba(88, 28, 7, 0.56)",

    cardBg: "rgba(236, 97, 24, 0.65)",
    cardHoverBg: "rgba(238, 100, 26, 0.65)",

    outline: "rgba(255, 153, 87, 0.28)",
    cardHoverOutline: "rgba(255, 184, 110, 0.43)",

    link: "rgba(255, 220, 168, 0.96)",
    linkHover: "rgba(255, 241, 204, 1)",
  },

  //going more orangy in the yellow
  mustard: {
    sectionBg: "rgba(154, 92, 16, 0.40)",
    cardBg: "rgba(201, 134, 18, 0.69)",
    cardHoverBg: "rgba(206, 137, 20, 0.70)",

    outline: "rgba(255, 208, 107, 0.28)",
    cardHoverOutline: "rgba(255, 220, 125, 0.43)",

    link: "rgba(255, 235, 159, 0.96)",
    linkHover: "rgba(255, 247, 202, 1)",
  },
};

export const DEFAULT_BENTO_TONE = "slate";

export function getBentoTone(tone) {
  return BENTO_TONES[tone] ?? BENTO_TONES[DEFAULT_BENTO_TONE];
}
