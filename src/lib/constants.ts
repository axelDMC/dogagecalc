// TODO: Replace all placeholder values before deploying
export const SITE = {
  name: "[PROJECT_NAME]",
  // Must be a valid URL. Replace with your actual domain before deploying.
  url: "https://example.com",
  description: "[PROJECT_DESCRIPTION]",
  tagline: "[PROJECT_TAGLINE]",
  googleVerification: "",
  socialX: "https://x.com/Axel1863670",
  socialLinkedIn: "https://linkedin.com/in/axeldmc",
} as const;

export interface Tool {
  name: string;
  slug: string;
  description: string;
  icon: string;
}

export const TOOLS: Tool[] = [];
