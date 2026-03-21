import type { LucideIcon } from "lucide-react";

interface EmptyStateProps {
  icon: LucideIcon;
  title: string;
  subtitle?: string;
}

export function EmptyState({ icon: Icon, title, subtitle }: EmptyStateProps) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "64px 24px",
        textAlign: "center",
      }}
    >
      <div
        style={{
          marginBottom: "16px",
          color: "var(--text-muted)",
          opacity: 0.3,
        }}
      >
        <Icon size={48} />
      </div>
      <h3
        style={{
          fontSize: "18px",
          fontWeight: 600,
          color: "var(--text-muted)",
          margin: "0 0 8px 0",
        }}
      >
        {title}
      </h3>
      {subtitle && (
        <p
          style={{
            fontSize: "14px",
            color: "var(--text-muted)",
            margin: 0,
            opacity: 0.7,
          }}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
