import { JsonLd } from "./JsonLd";

interface WebAppSchemaProps {
  name: string;
  description: string;
  url: string;
  category?: string;
}

export function WebAppSchema({
  name,
  description,
  url,
  category = "UtilityApplication",
}: WebAppSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name,
    description,
    url,
    applicationCategory: category,
    operatingSystem: "Any",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
  };

  return <JsonLd data={schema} />;
}
