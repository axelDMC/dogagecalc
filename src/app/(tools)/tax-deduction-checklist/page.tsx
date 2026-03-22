import { Metadata } from "next";
import { WebAppSchema } from "@/components/seo/WebAppSchema";
import { ToolHero } from "@/components/ui/ToolHero";
import { AdSlot } from "@/components/ui/AdSlot";
import { SeoContent } from "@/components/seo/SeoContent";
import { FaqAccordion } from "@/components/seo/FaqAccordion";
import { TaxChecklistWrapper } from "./TaxChecklistWrapper";

export const metadata: Metadata = {
  title: "Freelance Tax Deductions Checklist — Free IRS Guide | FreelanceTaxChecklist",
  description:
    "Generate a free personalized freelance tax deduction checklist. Pick your profession, answer 6 questions, and get IRS form numbers and savings estimates instantly.",
  alternates: {
    canonical:
      "https://freelance-tax-checklist.adcmartinez1.workers.dev/tax-deduction-checklist",
  },
  openGraph: {
    title: "Freelance Tax Deductions Checklist — Free IRS Guide",
    description:
      "Generate a free personalized freelance tax deduction checklist. IRS form numbers and savings estimates included.",
    url: "https://freelance-tax-checklist.adcmartinez1.workers.dev/tax-deduction-checklist",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Freelance Tax Deductions Checklist — Free IRS Guide",
    description:
      "Personalized tax deduction checklist for freelancers. Free, instant, no signup.",
  },
};

const FAQ_ITEMS = [
  {
    question: "Can I deduct my home office if I work from a coffee shop sometimes?",
    answer:
      "Yes. The home office deduction requires the space to be used regularly and exclusively for business — it does not require you to work only from home. If you have a dedicated room that meets the IRS definition, you can still claim it even if you occasionally work elsewhere. The deduction is calculated as the percentage of your home's square footage dedicated to your office multiplied by eligible home expenses.",
  },
  {
    question: "What is the standard mileage rate for 2024?",
    answer:
      "The IRS standard mileage rate for business use in 2024 is 67 cents per mile (up from 65.5 cents in 2023). You can alternatively use the actual expense method, which tracks fuel, insurance, depreciation, and maintenance proportional to business use. Keep a mileage log — date, destination, purpose, and miles — for every business trip.",
  },
  {
    question: "Is a SEP-IRA better than a Solo 401(k) for freelancers?",
    answer:
      "Both accounts offer tax-deferred growth, but the Solo 401(k) generally allows higher contribution limits for high-earning freelancers because it accepts both employee and employer contributions (up to $69,000 in 2024 combined). A SEP-IRA is simpler to administer and allows contributions up to 25% of net self-employment income. If your net income is under ~$100,000, the SEP-IRA often provides similar limits with less paperwork.",
  },
  {
    question: "Can I deduct a laptop I use for both personal and business use?",
    answer:
      "Yes, but only the business-use percentage. If you use a laptop 80% for work and 20% personally, you can deduct 80% of its cost. Under Section 179, you may be able to deduct the full business portion in the year of purchase rather than depreciating it over several years. Keep records showing the business vs. personal usage split.",
  },
  {
    question: "Do I need to file quarterly estimated taxes as a freelancer?",
    answer:
      "If you expect to owe $1,000 or more in taxes for the year, the IRS generally requires quarterly estimated tax payments. These are due in April, June, September, and January. Failing to pay estimated taxes can result in underpayment penalties. A common strategy is to set aside 25–30% of each invoice payment into a dedicated savings account to cover both income tax and self-employment tax.",
  },
  {
    question: "What records do I need to keep to support my deductions?",
    answer:
      "The IRS recommends keeping records for at least 3 years from the date you file your return (7 years if you underreport income by more than 25%). For each deduction you claim, keep: original receipts or invoices, bank and credit card statements showing the payment, a brief note of the business purpose, and for home office or vehicle deductions, a log or floor plan showing usage allocation.",
  },
];

export default function TaxDeductionChecklistPage() {
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Tax Deduction Checklist", href: "/tax-deduction-checklist" },
  ];

  return (
    <>
      <WebAppSchema
        name="Freelance Tax Deduction Checklist Generator"
        description="Generate a personalized IRS tax deduction checklist based on your freelance profession and situation."
        url="https://freelance-tax-checklist.adcmartinez1.workers.dev/tax-deduction-checklist"
        category="FinanceApplication"
      />
      <ToolHero
        title="Freelance Tax Deductions Checklist"
        subtitle="Select your freelance category, answer 6 quick questions, and get a personalized tax deduction checklist with IRS form numbers and estimated savings."
        breadcrumbItems={breadcrumbItems}
      />
      <main>
        <section
          style={{
            maxWidth: "1152px",
            margin: "0 auto",
            padding: "48px 24px 80px",
          }}
        >
          <TaxChecklistWrapper />
        </section>
        <div
          style={{
            maxWidth: "1152px",
            margin: "0 auto",
            padding: "0 24px 48px",
          }}
        >
          <AdSlot size="leaderboard" />
        </div>
        <SeoContent>
          <h2>What Are Freelance Tax Deductions?</h2>
          <p>
            The IRS allows self-employed individuals to deduct &ldquo;ordinary and
            necessary&rdquo; business expenses from their gross income under Schedule C
            (Form 1040). Unlike W-2 employees, freelancers bear the full 15.3%
            self-employment tax burden, making deductions especially valuable. Every
            dollar of legitimate deductions reduces not just your income tax but also
            your self-employment tax — a compounding benefit that W-2 workers never see.
          </p>
          <p>
            The most overlooked deductions include the home office deduction (Form 8829),
            health insurance premiums (Schedule 1), and retirement contributions (a
            SEP-IRA can shelter up to 25% of net self-employment income). Many freelancers
            miss these entirely because they are unfamiliar with the forms involved or
            unsure whether they qualify.
          </p>
          <p>
            It helps to understand the difference between above-the-line deductions and
            below-the-line deductions. Above-the-line deductions — such as the
            self-employment tax deduction and health insurance premiums — reduce your
            adjusted gross income (AGI) directly, even if you take the standard deduction.
            Below-the-line deductions, like the business expenses on Schedule C, also
            reduce your taxable income but work through a different mechanism. Both types
            are available to freelancers.
          </p>
          <p>
            For 2024, the Qualified Business Income (QBI) deduction under Section 199A
            may allow an additional 20% deduction of your qualified business income if
            you operate as a sole proprietor or pass-through entity. This deduction phases
            out at higher income levels and excludes certain service businesses, so
            consult a tax professional to determine whether you qualify.
          </p>
          <p>
            Proper record-keeping is essential for any audit. The IRS requires you to
            substantiate deductions with receipts, invoices, bank statements, and for
            mileage or home office claims, detailed logs. Keep these records for at least
            3 years from the date you file, and up to 7 years if there is any risk of
            underreported income. A simple folder — physical or cloud-based — organized
            by expense category can save you thousands in an audit.
          </p>

          <h2>How to Use the Freelance Tax Deduction Checklist Generator</h2>
          <ol>
            <li>
              <strong>Select your freelance category</strong> from the six options:
              developer, designer, writer, consultant, driver, or photographer.
            </li>
            <li>
              <strong>Answer six yes/no questions</strong> about your home office,
              equipment, vehicle, health insurance, retirement contributions, and software
              subscriptions.
            </li>
            <li>
              <strong>Review your personalized checklist</strong> with IRS form numbers
              and estimated savings ranges for each deduction.
            </li>
            <li>
              <strong>Check off items</strong> as you gather supporting documentation
              from your records.
            </li>
            <li>
              <strong>Download or print the checklist</strong> to share with your tax
              preparer or use when filing yourself.
            </li>
          </ol>

          <h2>Frequently Asked Questions</h2>
          <FaqAccordion items={FAQ_ITEMS} />

          <h2>Disclaimer</h2>
          <p>
            This tool provides general educational information about common freelance tax
            deductions. It does not constitute tax, legal, or financial advice. Tax laws
            change frequently and individual situations vary. Always consult a qualified
            tax professional (CPA or enrolled agent) before making decisions about your
            tax filing.
          </p>
        </SeoContent>
      </main>
    </>
  );
}
