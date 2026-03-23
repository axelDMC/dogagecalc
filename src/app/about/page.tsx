import type { Metadata } from "next";
import { SITE, TOOLS } from "@/lib/constants";
import { Breadcrumb } from "@/components/seo/Breadcrumb";
import { ToolCard } from "@/components/ui/ToolCard";

export const metadata: Metadata = {
  title: `About ${SITE.name}`,
  description: `Learn about ${SITE.name} — ${SITE.description}`,
  alternates: { canonical: `${SITE.url}/about` },
  openGraph: {
    title: `About ${SITE.name}`,
    description: `Learn about ${SITE.name} — ${SITE.description}`,
    url: `${SITE.url}/about`,
  },
};

export default function AboutPage() {
  return (
    <main>
      {/* Hero */}
      <div
        style={{
          background:
            "linear-gradient(to bottom, var(--bg-secondary), var(--bg-primary))",
          borderBottom: "1px solid var(--border)",
          paddingTop: "48px",
          paddingBottom: "40px",
        }}
      >
        <div style={{ maxWidth: "1152px", margin: "0 auto", padding: "0 24px" }}>
          <div style={{ marginBottom: "16px" }}>
            <Breadcrumb
              items={[
                { label: "Home", href: "/" },
                { label: "About", href: "/about" },
              ]}
            />
          </div>
          <h1>About {SITE.name}</h1>
        </div>
      </div>

      {/* Content */}
      <div style={{ maxWidth: "1152px", margin: "0 auto", padding: "64px 24px" }}>
        <div style={{ maxWidth: "720px" }}>
          <p
            style={{
              fontSize: "17px",
              color: "var(--text-secondary)",
              lineHeight: 1.8,
              marginBottom: "24px",
            }}
          >
            {SITE.name} is a collection of free, browser-based tools designed to
            make everyday tasks faster and simpler. No accounts, no subscriptions
            — just open the tool and get things done.
          </p>
          <p
            style={{
              color: "var(--text-secondary)",
              lineHeight: 1.8,
              marginBottom: "24px",
            }}
          >
            DogAgeCalc exists to debunk a myth that has misled pet owners for decades. The "multiply by 7" rule is scientifically inaccurate and doesn't reflect how dogs actually age. In 2020, researchers at UC San Diego used DNA methylation patterns to map the true relationship between dog aging and human aging — and the results were groundbreaking. Dogs don't age linearly. They age rapidly in their first two years, then slow down considerably. Breed size matters too: large breeds age faster and live shorter lives than small breeds. A 10-year-old Chihuahua is not the same biological age as a 10-year-old Great Dane.
          </p>
          <p
            style={{
              color: "var(--text-secondary)",
              lineHeight: 1.8,
              marginBottom: "48px",
            }}
          >
            This calculator uses the accurate logarithmic formula from peer-reviewed research, adjusted for your dog's breed size. We've also included a cat mode, because cats deserve the same level of accuracy. All calculations run in your browser — nothing is sent to our servers, and your data is never stored. Just open the tool, enter your pet's age, and get the real answer.
          </p>

          {/* Privacy section */}
          <div
            style={{
              background: "var(--bg-secondary)",
              border: "1px solid var(--border)",
              borderRadius: "16px",
              padding: "28px",
              marginBottom: "48px",
            }}
          >
            <h2
              style={{
                marginBottom: "12px",
                borderLeft: "3px solid var(--accent)",
                paddingLeft: "12px",
              }}
            >
              Privacy First
            </h2>
            <p
              style={{
                color: "var(--text-secondary)",
                margin: 0,
                lineHeight: 1.7,
              }}
            >
              Every tool on {SITE.name} runs entirely in your browser. Your data
              is never uploaded to our servers, never stored, and never shared.
              What happens in your browser stays in your browser.
            </p>
          </div>
        </div>

        {/* Tools */}
        {TOOLS.length > 0 && (
          <div>
            <h2
              style={{
                marginBottom: "24px",
                borderLeft: "3px solid var(--accent)",
                paddingLeft: "12px",
              }}
            >
              Our Tools
            </h2>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
                gap: "16px",
              }}
            >
              {TOOLS.map((tool) => (
                <ToolCard
                  key={tool.slug}
                  title={tool.name}
                  description={tool.description}
                  href={`/${tool.slug}`}
                  icon={tool.icon}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
