export interface BreadcrumbItem {
  label: string;
  href: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export type BadgeVariant = "success" | "warning" | "danger" | "info" | "default";
