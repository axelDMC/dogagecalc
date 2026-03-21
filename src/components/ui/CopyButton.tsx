"use client";

import { useState } from "react";
import { Copy, Check } from "lucide-react";
import { copyToClipboard } from "@/lib/utils";

interface CopyButtonProps {
  text: string;
  label?: string;
}

export function CopyButton({ text, label }: CopyButtonProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    const success = await copyToClipboard(text);
    if (success) {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <button
      onClick={handleCopy}
      title={label ?? "Copy to clipboard"}
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: "6px",
        padding: "8px 12px",
        borderRadius: "8px",
        background: "transparent",
        border: "1px solid var(--border)",
        color: copied ? "var(--success)" : "var(--text-secondary)",
        cursor: "pointer",
        fontSize: "13px",
        fontWeight: 500,
        transition: "all 200ms ease",
      }}
      onMouseEnter={(e) => {
        if (!copied) {
          (e.currentTarget as HTMLElement).style.borderColor =
            "var(--border-hover)";
          (e.currentTarget as HTMLElement).style.color = "var(--text-primary)";
        }
      }}
      onMouseLeave={(e) => {
        if (!copied) {
          (e.currentTarget as HTMLElement).style.borderColor = "var(--border)";
          (e.currentTarget as HTMLElement).style.color =
            "var(--text-secondary)";
        }
      }}
    >
      {copied ? (
        <>
          <Check size={14} />
          {label ? "Copied!" : null}
        </>
      ) : (
        <>
          <Copy size={14} />
          {label ?? null}
        </>
      )}
    </button>
  );
}
