import type { Metadata } from "next";
import { PawPrint, Ruler, Cat } from "lucide-react";
import { SITE, TOOLS } from "@/lib/constants";
import { ToolCard } from "@/components/ui/ToolCard";

export const metadata: Metadata = {
  title: `${SITE.name} — ${SITE.tagline}`,
  description: SITE.description,
  alternates: { canonical: SITE.url },
};

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section
        style={{
          paddingTop: "80px",
          paddingBottom: "80px",
          textAlign: "center",
        }}
      >
        <div style={{ maxWidth: "1152px", margin: "0 auto", padding: "0 24px" }}>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              padding: "6px 14px",
              borderRadius: "999px",
              background: "var(--accent-muted)",
              border: "1px solid rgba(52,211,153,0.2)",
              marginBottom: "24px",
              fontSize: "13px",
              fontWeight: 500,
              color: "var(--accent)",
              letterSpacing: "0.02em",
            }}
          >
            <span
              style={{
                width: 6,
                height: 6,
                borderRadius: "50%",
                background: "var(--accent)",
                display: "inline-block",
              }}
            />
            Free tools, no signup required
          </div>

          <h1 style={{ marginBottom: "20px" }}>Your Pet&apos;s Age, Finally Accurate.</h1>

          <p
            style={{
              fontSize: "18px",
              color: "var(--text-secondary)",
              maxWidth: "560px",
              margin: "0 auto 40px",
              lineHeight: 1.7,
            }}
          >
            Stop using the wrong formula. Get your dog&apos;s or cat&apos;s true human-equivalent age — powered by peer-reviewed science.
          </p>

          {TOOLS.length > 0 && (
            <a
              href={`/${TOOLS[0].slug}`}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                padding: "12px 24px",
                borderRadius: "12px",
                background: "var(--accent)",
                color: "var(--accent-text)",
                fontWeight: 600,
                fontSize: "15px",
                textDecoration: "none",
                transition: "all 200ms ease",
              }}
            >
              Get started free →
            </a>
          )}
        </div>
      </section>

      {/* Tools Grid */}
      <section style={{ paddingBottom: "80px" }}>
        <div style={{ maxWidth: "1152px", margin: "0 auto", padding: "0 24px" }}>
          {TOOLS.length > 0 ? (
            <>
              <h2 style={{ marginBottom: "32px" }}>All Tools</h2>
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
            </>
          ) : (
            <div
              style={{
                background: "var(--bg-secondary)",
                border: "1px solid var(--border)",
                borderRadius: "16px",
                padding: "48px 32px",
                textAlign: "center",
              }}
            >
              <div style={{ fontSize: "48px", marginBottom: "16px" }}>🛠️</div>
              <h3 style={{ marginBottom: "8px" }}>Tools coming soon</h3>
              <p
                style={{
                  color: "var(--text-secondary)",
                  maxWidth: "400px",
                  margin: "0 auto",
                }}
              >
                This template is ready for your tools. Add entries to the TOOLS
                array in{" "}
                <code
                  style={{
                    fontFamily: "var(--font-mono)",
                    background: "var(--bg-tertiary)",
                    padding: "2px 6px",
                    borderRadius: "4px",
                  }}
                >
                  src/lib/constants.ts
                </code>
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Why section */}
      <section
        style={{
          paddingTop: "80px",
          paddingBottom: "80px",
          background: "var(--bg-secondary)",
          borderTop: "1px solid var(--border)",
          borderBottom: "1px solid var(--border)",
        }}
      >
        <div style={{ maxWidth: "1152px", margin: "0 auto", padding: "0 24px" }}>
          <h2 style={{ marginBottom: "12px" }}>Why {SITE.name}?</h2>
          <p
            style={{
              color: "var(--text-secondary)",
              marginBottom: "40px",
              maxWidth: "560px",
            }}
          >
            Built for pet owners who want answers based on real science, not the wrong 7x myth.
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
              gap: "16px",
            }}
          >
            {[
              {
                icon: PawPrint,
                title: "Science-Backed Formula",
                desc: "Uses the 2020 Nature Aging logarithmic formula — not the outdated 7x rule that's been misleading pet owners for decades.",
              },
              {
                icon: Ruler,
                title: "Breed-Size Aware",
                desc: "Large breeds age faster. Small breeds live longer. Our calculator adjusts for your dog's size for a more accurate result.",
              },
              {
                icon: Cat,
                title: "Cat Mode Included",
                desc: "Switch to cat mode for an accurate feline age conversion using the AAFP-aligned life stage scale.",
              },
            ].map(({ icon: Icon, title, desc }) => (
              <div
                key={title}
                style={{
                  background: "var(--bg-primary)",
                  border: "1px solid var(--border)",
                  borderRadius: "16px",
                  padding: "28px",
                }}
              >
                <div
                  style={{
                    width: 44,
                    height: 44,
                    borderRadius: "12px",
                    background: "var(--accent-muted)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: "16px",
                  }}
                >
                  <Icon size={20} color="var(--accent)" />
                </div>
                <h3 style={{ marginBottom: "8px" }}>{title}</h3>
                <p
                  style={{
                    color: "var(--text-secondary)",
                    margin: 0,
                    fontSize: "14px",
                    lineHeight: 1.6,
                  }}
                >
                  {desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section style={{ paddingTop: "80px", paddingBottom: "80px" }}>
        <div style={{ maxWidth: "1152px", margin: "0 auto", padding: "0 24px" }}>
          <h2 style={{ marginBottom: "12px" }}>How It Works</h2>
          <p style={{ color: "var(--text-secondary)", marginBottom: "40px" }}>
            Three steps to get what you need.
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
              gap: "24px",
            }}
          >
            {[
              {
                num: "1",
                title: "Choose a tool",
                desc: "Pick the tool that fits your task from our growing collection.",
              },
              {
                num: "2",
                title: "Enter your data",
                desc: "Paste text, upload a file, or type in what you need to process.",
              },
              {
                num: "3",
                title: "Get results",
                desc: "Results appear instantly. Copy, download, or share in one click.",
              },
            ].map(({ num, title, desc }) => (
              <div
                key={num}
                style={{
                  display: "flex",
                  gap: "16px",
                  alignItems: "flex-start",
                }}
              >
                <div
                  style={{
                    flexShrink: 0,
                    width: 36,
                    height: 36,
                    borderRadius: "50%",
                    background: "var(--accent-muted)",
                    border: "1px solid rgba(52,211,153,0.3)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "14px",
                    fontWeight: 700,
                    color: "var(--accent)",
                  }}
                >
                  {num}
                </div>
                <div>
                  <h3 style={{ marginBottom: "6px" }}>{title}</h3>
                  <p
                    style={{
                      color: "var(--text-secondary)",
                      margin: 0,
                      fontSize: "14px",
                      lineHeight: 1.6,
                    }}
                  >
                    {desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
