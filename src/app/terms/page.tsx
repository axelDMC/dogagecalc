import type { Metadata } from "next";
import { SITE } from "@/lib/constants";
import { Breadcrumb } from "@/components/seo/Breadcrumb";

export const metadata: Metadata = {
  title: `Terms of Service — ${SITE.name}`,
  description: `Terms of service for ${SITE.name}. Read our terms before using our tools.`,
  alternates: { canonical: `${SITE.url}/terms` },
  openGraph: {
    title: `Terms of Service — ${SITE.name}`,
    url: `${SITE.url}/terms`,
  },
};

export default function TermsPage() {
  const lastUpdated = "March 21, 2026";

  return (
    <main>
      <div
        style={{
          background:
            "linear-gradient(to bottom, var(--bg-secondary), var(--bg-secondary), var(--bg-primary))",
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
                { label: "Terms of Service", href: "/terms" },
              ]}
            />
          </div>
          <h1>Terms of Service</h1>
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
              Acceptance of Terms
            </h2>
            <p>
              By accessing and using {SITE.name} (&quot;the Service&quot;), you
              accept and agree to be bound by these Terms of Service. If you do
              not agree, please do not use the Service.
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
              Description of Service
            </h2>
            <p>
              {SITE.name} provides free, browser-based utility tools. The
              Service is provided &quot;as is&quot; and we reserve the right to
              modify, suspend, or discontinue any part of the Service at any
              time without notice.
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
              Acceptable Use
            </h2>
            <p style={{ marginBottom: "16px" }}>
              You agree not to use the Service to:
            </p>
            <ul style={{ paddingLeft: "20px" }}>
              <li style={{ marginBottom: "8px" }}>
                Violate any applicable laws or regulations
              </li>
              <li style={{ marginBottom: "8px" }}>
                Infringe on the intellectual property rights of others
              </li>
              <li style={{ marginBottom: "8px" }}>
                Transmit malware, viruses, or harmful code
              </li>
              <li style={{ marginBottom: "8px" }}>
                Attempt to reverse engineer or scrape the Service in a way that
                harms performance
              </li>
              <li>
                Use automated tools to abuse or overload the Service
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
              Intellectual Property
            </h2>
            <p>
              The Service, including its design, code, and content (excluding
              user-provided content), is owned by {SITE.name} and protected by
              copyright and other intellectual property laws. You may not
              reproduce, distribute, or create derivative works without explicit
              permission.
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
              Disclaimer of Warranties
            </h2>
            <p>
              THE SERVICE IS PROVIDED &quot;AS IS&quot; WITHOUT WARRANTY OF ANY
              KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO WARRANTIES
              OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND
              NON-INFRINGEMENT. WE DO NOT WARRANT THAT THE SERVICE WILL BE
              UNINTERRUPTED, ERROR-FREE, OR FREE OF HARMFUL COMPONENTS.
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
              Limitation of Liability
            </h2>
            <p>
              TO THE MAXIMUM EXTENT PERMITTED BY LAW,{" "}
              {SITE.name.toUpperCase()} SHALL NOT BE LIABLE FOR ANY INDIRECT,
              INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES,
              INCLUDING LOSS OF DATA, PROFITS, OR BUSINESS, ARISING OUT OF OR
              IN CONNECTION WITH YOUR USE OF THE SERVICE.
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
              Changes to Terms
            </h2>
            <p>
              We reserve the right to modify these Terms at any time. Changes
              take effect upon posting to the Service. Continued use after
              changes constitutes acceptance of the updated Terms. The
              &quot;Last updated&quot; date at the top of this page reflects
              the most recent changes.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
