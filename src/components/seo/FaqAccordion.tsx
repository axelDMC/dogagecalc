"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { JsonLd } from "./JsonLd";
import type { FaqItem } from "@/types";

interface FaqAccordionProps {
  items: FaqItem[];
}

export function FaqAccordion({ items }: FaqAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <>
      <JsonLd data={faqSchema} />
      <div style={{ display: "flex", flexDirection: "column" }}>
        {items.map((item, index) => {
          const isOpen = openIndex === index;
          return (
            <div
              key={index}
              style={{ borderBottom: "1px solid var(--border)" }}
            >
              <button
                onClick={() => setOpenIndex(isOpen ? null : index)}
                aria-expanded={isOpen}
                style={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  padding: "16px 0",
                  background: "transparent",
                  border: "none",
                  cursor: "pointer",
                  color: isOpen
                    ? "var(--text-primary)"
                    : "var(--text-secondary)",
                  fontWeight: 600,
                  fontSize: "15px",
                  textAlign: "left",
                  gap: "16px",
                  transition: "color 150ms",
                }}
                onMouseEnter={(e) => {
                  if (!isOpen)
                    (e.currentTarget as HTMLElement).style.color =
                      "var(--text-primary)";
                }}
                onMouseLeave={(e) => {
                  if (!isOpen)
                    (e.currentTarget as HTMLElement).style.color =
                      "var(--text-secondary)";
                }}
              >
                <span>{item.question}</span>
                <ChevronDown
                  size={18}
                  style={{
                    flexShrink: 0,
                    color: "var(--text-muted)",
                    transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                    transition: "transform 200ms ease",
                  }}
                />
              </button>
              <div
                style={{
                  overflow: "hidden",
                  maxHeight: isOpen ? "500px" : "0",
                  transition: "max-height 300ms ease",
                }}
              >
                <p
                  style={{
                    paddingBottom: "16px",
                    color: "var(--text-secondary)",
                    fontSize: "15px",
                    lineHeight: 1.7,
                    margin: 0,
                  }}
                >
                  {item.answer}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
