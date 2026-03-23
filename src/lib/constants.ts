export const SITE = {
  name: "DogAgeCalc",
  url: "https://dogagecalc.adcmartinez1.workers.dev",
  description: "Free breed-specific dog age calculator using the science-backed logarithmic formula — not the wrong 7x myth. Includes cat mode.",
  tagline: "Your pet's real age, backed by science.",
  googleVerification: "q04eVe2wFeyQl_Bl2_z9kB4VHp2VeKXxJ23w5wiVRhU",
  socialX: "https://x.com/Axel1863670",
  socialLinkedIn: "https://linkedin.com/in/axeldmc",
} as const;

export interface Tool {
  name: string;
  slug: string;
  description: string;
  icon: string;
}

export const TOOLS: Tool[] = [
  {
    name: "Dog Age Calculator",
    slug: "dog-age-calculator",
    description: "Calculate your dog's human-equivalent age by breed size using the 2020 Nature study logarithmic formula.",
    icon: "Dog"
  },
  {
    name: "Cat Age Calculator",
    slug: "cat-age-calculator",
    description: "Convert your cat's age to human years using the accurate feline age scale — not the wrong 7x myth.",
    icon: "Cat"
  }
];
