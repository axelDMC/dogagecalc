import type { BadgeVariant } from "@/types";

interface BadgeProps {
  children: React.ReactNode;
  variant?: BadgeVariant;
}

const variantStyles: Record<
  BadgeVariant,
  { background: string; color: string; border: string }
> = {
  success: {
    background: "rgba(52, 211, 153, 0.1)",
    color: "#34d399",
    border: "rgba(52, 211, 153, 0.2)",
  },
  warning: {
    background: "rgba(251, 191, 36, 0.1)",
    color: "#fbbf24",
    border: "rgba(251, 191, 36, 0.2)",
  },
  danger: {
    background: "rgba(248, 113, 113, 0.1)",
    color: "#f87171",
    border: "rgba(248, 113, 113, 0.2)",
  },
  info: {
    background: "rgba(96, 165, 250, 0.1)",
    color: "#60a5fa",
    border: "rgba(96, 165, 250, 0.2)",
  },
  default: {
    background: "var(--bg-tertiary)",
    color: "var(--text-secondary)",
    border: "var(--border)",
  },
};

export function Badge({ children, variant = "default" }: BadgeProps) {
  const styles = variantStyles[variant];
  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        padding: "2px 8px",
        borderRadius: "6px",
        fontSize: "12px",
        fontWeight: 500,
        background: styles.background,
        color: styles.color,
        border: `1px solid ${styles.border}`,
        whiteSpace: "nowrap",
      }}
    >
      {children}
    </span>
  );
}
