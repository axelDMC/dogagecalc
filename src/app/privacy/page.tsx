import type { Metadata } from "next";
import { SITE } from "@/lib/constants";
import { Breadcrumb } from "@/components/seo/Breadcrumb";

export const metadata: Metadata = {
  title: `Privacy Policy — ${SITE.name}`,
  description: `Privacy policy for ${SITE.name}. Learn how we handle (or don't handle) your data.`,
  alternates: { canonical: `${SITE.url}/privacy` },
  openGraph: {
    title: `Privacy Policy — ${SITE.name}`,
    url: `${SITE.url}/privacy`,
  },
};

export default function PrivacyPage() {
  const lastUpdated = "March 21, 2026";

  return (
    <main>
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
                { label: "Privacy Policy", href: "/privacy" },
              ]}
            />
          </div>
          <h1>Privacy Policy</h1>
          <p
            style={{
              color: "var(--text-muted)",
              marginTop: "8px",
              fontSize: "14px",
            }}
          >
            Last updated: {lastUpdated}
          </p>
        </div>
      </div>

      <div style={{ maxWidth: "1152px", margin: "0 auto", padding: "64px 24px" }}>
        <div
          style={{
            maxWidth: "720px",
            color: "var(--text-secondary)",
            lineHeight: 1.8,
          }}
        >
          <section style={{ marginBottom: "40px" }}>
            <h2
              style={{
                borderLeft: "3px solid var(--accent)",
                paddingLeft: "12px",
                marginBottom: "16px",
              }}
            >
              Overview
            </h2>
            <p>
              {SITE.name} is committed to protecting your privacy. This policy
              explains what information we collect, how we use it, and your
              rights regarding your data. The short version: we collect almost
              nothing, and we never sell your data.
            </p>
          </section>

          <section style={{ marginBottom: "40px" }}>
            <h2
              style={{
                borderLeft: "3px solid var(--accent)",
                paddingLeft: "12px",
                marginBottom: "16px",
              }}
            >
              Data Processing
            </h2>
            <p style={{ marginBottom: "16px" }}>
              All tools on {SITE.name} run entirely in your browser using
              client-side JavaScript. Files, text, and any other data you input
              into our tools are{" "}
              <strong style={{ color: "var(--text-primary)" }}>
                never uploaded to our servers
              </strong>
              . Processing happens locally on your device.
            </p>
            <p>
              We do not store, log, or have access to any data you enter into
              our tools.
            </p>
          </section>

          <section style={{ marginBottom: "40px" }}>
            <h2
              style={{
                borderLeft: "3px solid var(--accent)",
                paddingLeft: "12px",
                marginBottom: "16px",
              }}
            >
              Cookies
            </h2>
            <p style={{ marginBottom: "16px" }}>
              We use a single functional cookie:
            </p>
            <div
              style={{
                background: "var(--bg-secondary)",
                border: "1px solid var(--border)",
                borderRadius: "12px",
                padding: "20px",
                marginBottom: "16px",
              }}
            >
              <strong style={{ color: "var(--text-primary)" }}>theme</strong>
              <span
                style={{
                  color: "var(--text-muted)",
                  fontSize: "13px",
                  marginLeft: "8px",
                }}
              >
                Functional
              </span>
              <p style={{ margin: "8px 0 0", fontSize: "14px" }}>
                Stores your dark/light mode preference. Expires after 1 year.
                No personal data.
              </p>
            </div>
            <p>
              We may add analytics cookies in the future (e.g.,
              privacy-respecting analytics like Plausible or Fathom). If we do,
              this policy will be updated and you will be notified.
            </p>
          </section>

          <section style={{ marginBottom: "40px" }}>
            <h2
              style={{
                borderLeft: "3px solid var(--accent)",
                paddingLeft: "12px",
                marginBottom: "16px",
              }}
            >
              Third-Party Services
            </h2>
            <p style={{ marginBottom: "16px" }}>
              We may use the following third-party services in the future:
            </p>
            <ul style={{ paddingLeft: "20px" }}>
              <li style={{ marginBottom: "8px" }}>
                <strong style={{ color: "var(--text-primary)" }}>
                  Analytics
                </strong>{" "}
                — Privacy-respecting analytics to understand aggregate usage
                patterns (no individual tracking).
              </li>
              <li style={{ marginBottom: "8px" }}>
                <strong style={{ color: "var(--text-primary)" }}>
                  Advertising
                </strong>{" "}
                — Display ads to support free access. Ads may use cookies per
                their own privacy policies.
              </li>
              <li>
                <strong style={{ color: "var(--text-primary)" }}>CDN</strong> —
                Cloudflare for performance and security. See Cloudflare&apos;s
                privacy policy for details.
              </li>
            </ul>
          </section>

          <section style={{ marginBottom: "40px" }}>
            <h2
              style={{
                borderLeft: "3px solid var(--accent)",
                paddingLeft: "12px",
                marginBottom: "16px",
              }}
            >
              Your Rights
            </h2>
            <p>
              Since we do not collect personal data, there is generally nothing
              to access, correct, or delete. If you have questions about your
              data or this policy, contact us at the address in our Terms of
              Service.
            </p>
          </section>

          <section>
            <h2
              style={{
                borderLeft: "3px solid var(--accent)",
                paddingLeft: "12px",
                marginBottom: "16px",
              }}
            >
              Changes to This Policy
            </h2>
            <p>
              We may update this policy from time to time. Changes will be
              reflected in the &quot;Last updated&quot; date at the top of this
              page. Continued use of {SITE.name} after changes constitutes
              acceptance of the updated policy.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
