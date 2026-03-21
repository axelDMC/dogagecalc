interface SeoContentProps {
  children: React.ReactNode;
}

export function SeoContent({ children }: SeoContentProps) {
  return (
    <div
      className="seo-content"
      style={{
        maxWidth: "768px",
        margin: "0 auto",
        paddingTop: "64px",
        color: "var(--text-secondary)",
        fontSize: "15px",
        lineHeight: 1.7,
      }}
    >
      {children}
    </div>
  );
}
