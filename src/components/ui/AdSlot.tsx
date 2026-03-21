interface AdSlotProps {
  size: "leaderboard" | "rectangle";
}

export function AdSlot({ size }: AdSlotProps) {
  if (size === "leaderboard") {
    return (
      <div
        style={{
          width: "100%",
          minHeight: "90px",
          maxWidth: "728px",
          margin: "0 auto",
          border: "1px dashed var(--border)",
          borderRadius: "8px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
        aria-hidden="true"
      >
        <span
          style={{
            fontSize: "11px",
            color: "var(--text-muted)",
            letterSpacing: "0.1em",
            textTransform: "uppercase",
          }}
        >
          Ad
        </span>
      </div>
    );
  }

  return (
    <div
      style={{
        width: "300px",
        minHeight: "250px",
        border: "1px dashed var(--border)",
        borderRadius: "8px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
      aria-hidden="true"
    >
      <span
        style={{
          fontSize: "11px",
          color: "var(--text-muted)",
          letterSpacing: "0.1em",
          textTransform: "uppercase",
        }}
      >
        Ad
      </span>
    </div>
  );
}
