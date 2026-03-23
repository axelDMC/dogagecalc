import { Metadata } from 'next'
import { WebAppSchema } from '@/components/seo/WebAppSchema'
import { ToolHero } from '@/components/ui/ToolHero'
import { AdSlot } from '@/components/ui/AdSlot'
import { SeoContent } from '@/components/seo/SeoContent'
import { FaqAccordion } from '@/components/seo/FaqAccordion'
import { ToolCard } from '@/components/ui/ToolCard'
import { TOOLS } from '@/lib/constants'
import CatAgeCalculator from './CatAgeCalculator'

export const metadata: Metadata = {
  title: 'Cat Age Calculator — Convert Cat Years to Human Years',
  description: 'Convert your cat\'s age to human years using the accurate feline age scale. Year 1 = 15 human years — not the wrong multiply-by-7 rule.',
  alternates: { canonical: 'https://dogagecalc.adcmartinez1.workers.dev/cat-age-calculator' },
  openGraph: {
    title: 'Cat Age Calculator — Convert Cat Years to Human Years',
    description: 'Convert your cat\'s age to human years using the accurate feline age scale. Year 1 = 15 human years — not the wrong multiply-by-7 rule.',
    url: 'https://dogagecalc.adcmartinez1.workers.dev/cat-age-calculator',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cat Age Calculator — Convert Cat Years to Human Years',
    description: 'Convert your cat\'s age to human years using the accurate feline age scale. Year 1 = 15 human years — not the wrong multiply-by-7 rule.',
  },
}

const catFaqs = [
  {
    question: 'How old is a 1-year-old cat in human years?',
    answer: 'A 1-year-old cat is roughly equivalent to a 15-year-old human. This is why the 7-year rule is so wrong for cats — a 1-year-old cat is not a 7-year-old child, they are a teenager.'
  },
  {
    question: 'How old is a 2-year-old cat in human years?',
    answer: 'A 2-year-old cat is approximately 24 in human years. From year 2 onward, each additional cat year equals about 4 human years.'
  },
  {
    question: 'What is considered old for a cat?',
    answer: 'Veterinary associations classify cats aged 11–14 as senior and cats 15 and over as super senior. In human terms that is roughly 60–72 years (senior) and 76+ years (super senior).'
  },
  {
    question: 'Do indoor cats age differently than outdoor cats?',
    answer: 'The biological aging rate is the same, but indoor cats typically live longer because they face fewer environmental hazards. The calculator reflects biological age, not lifespan.'
  },
  {
    question: 'Is a 20-year-old cat rare?',
    answer: 'Yes. A 20-year-old cat is approximately 96 in human years and is considered exceptionally old. The world record for oldest cat is 38 years (Creme Puff, Austin Texas).'
  },
  {
    question: 'Can I use this for kittens?',
    answer: 'Yes — enter 0.5 for a 6-month-old kitten. The formula correctly handles fractional ages and will show the kitten life stage for cats under 1 year old.'
  }
]

function calcCatAgeStatic(catAge: number): number {
  if (catAge <= 1) return Math.round(15 * catAge)
  if (catAge <= 2) return Math.round(15 + 9 * (catAge - 1))
  return Math.round(24 + 4 * (catAge - 2))
}

const catAgeChart = [0.5, 1, 2, 3, 4, 5, 6, 7, 8, 10, 12, 15, 18, 20].map(age => ({
  catAge: age,
  humanAge: calcCatAgeStatic(age)
}))

export default function CatAgeCalculatorPage() {
  return (
    <>
      <WebAppSchema
        name="Cat Age Calculator"
        description="Accurate cat years to human years converter using the feline life stage scale"
        url="https://dogagecalc.adcmartinez1.workers.dev/cat-age-calculator"
        category="UtilityApplication"
      />
      <ToolHero
        title="Cat Age Calculator"
        subtitle="Convert your cat's age to human years using the real feline age scale — year 1 equals 15 human years, not 7."
        breadcrumbItems={[
          { label: 'Home', href: '/' },
          { label: 'Cat Age Calculator', href: '/cat-age-calculator' }
        ]}
      />
      <CatAgeCalculator />
      <AdSlot size="leaderboard" />
      <SeoContent>
        <h2>How Old Is Your Cat in Human Years?</h2>
        <p>If you&apos;ve ever wondered how old your cat really is in human terms, you&apos;ve probably heard the 7x rule. Multiply your cat&apos;s age by 7. It&apos;s simple, widely repeated, and almost entirely inaccurate.</p>
        <p>The reality is that cats age in a non-linear way. In the first year of life, a cat undergoes enormous physical and developmental changes — reaching sexual maturity, completing their growth, and developing adult behavior. By the time a cat is 1 year old, they are developmentally equivalent to a 15-year-old human, not a 7-year-old child. By age 2, they are roughly 24 in human terms.</p>
        <p>After age 2, the aging rate slows considerably. Each additional year of cat life corresponds to approximately 4 human years. This matches the life stage classification system used by major veterinary associations, including the American Association of Feline Practitioners (AAFP) and the American Animal Hospital Association (AAHA).</p>
        <p>Understanding your cat&apos;s life stage matters for healthcare decisions. A 10-year-old cat (roughly 56 in human terms) is in their mature years and may need different nutrition, more frequent vet checkups, and monitoring for age-related conditions. A 15-year-old cat (76 human years) is in their super senior years — exceptional longevity that deserves special attention.</p>
        <p>This calculator uses the accurate feline age scale, not the 7x myth. Enter your cat&apos;s age and get their true human-equivalent age along with their life stage classification.</p>

        <h2>How to Use This Cat Age Calculator</h2>
        <ol>
          <li>Enter your cat&apos;s age in years (decimals allowed, e.g., 0.5 for 6 months).</li>
          <li>Click &quot;Calculate&quot; to see the human-equivalent age.</li>
          <li>Read the life stage label to understand where your cat is in their life journey.</li>
        </ol>

        <h2>Cat Age Chart: Cat Years to Human Years</h2>
        <table>
          <thead>
            <tr>
              <th>Cat Age</th>
              <th>Human Equivalent</th>
            </tr>
          </thead>
          <tbody>
            {catAgeChart.map(row => (
              <tr key={row.catAge}>
                <td>{row.catAge} yr{row.catAge !== 1 ? 's' : ''}</td>
                <td>{row.humanAge}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <h2>Frequently Asked Questions</h2>
        <FaqAccordion items={catFaqs} />

        <h2>Related Tools</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {TOOLS.filter(t => t.slug !== 'cat-age-calculator').map(tool => (
            <ToolCard key={tool.slug} title={tool.name} description={tool.description} href={`/${tool.slug}`} icon={tool.icon} />
          ))}
        </div>
      </SeoContent>
    </>
  )
}
