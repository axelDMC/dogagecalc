import { Breadcrumb } from "@/components/seo/Breadcrumb";
import type { BreadcrumbItem } from "@/types";

interface ToolHeroProps {
  title: string;
  subtitle: string;
  breadcrumbItems: BreadcrumbItem[];
}

export function ToolHero({ title, subtitle, breadcrumbItems }: ToolHeroProps) {
  return (
    <div
      style={{
        background:
          "linear-gradient(to bottom, var(--bg-secondary), var(--bg-primary))",
        borderBottom: "1px solid var(--border)",
        paddingTop: "48px",
        paddingBottom: "40px",
      }}
    >
      <div
        style={{
          maxWidth: "1152px",
          margin: "0 auto",
          padding: "0 24px",
        }}
      >
        <div style={{ marginBottom: "16px" }}>
          <Breadcrumb items={breadcrumbItems} />
        </div>
        <h1
          style={{
            margin: "0 0 16px 0",
          }}
        >
          {title}
        </h1>
        <p
          style={{
            fontSize: "17px",
            color: "var(--text-secondary)",
            margin: 0,
            maxWidth: "672px",
            lineHeight: 1.7,
          }}
        >
          {subtitle}
        </p>
      </div>
    </div>
  );
}
