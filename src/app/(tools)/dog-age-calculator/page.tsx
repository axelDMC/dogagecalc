import { Metadata } from 'next'
import { WebAppSchema } from '@/components/seo/WebAppSchema'
import { ToolHero } from '@/components/ui/ToolHero'
import { AdSlot } from '@/components/ui/AdSlot'
import { SeoContent } from '@/components/seo/SeoContent'
import { FaqAccordion } from '@/components/seo/FaqAccordion'
import { ToolCard } from '@/components/ui/ToolCard'
import { TOOLS } from '@/lib/constants'
import DogAgeCalculator from './DogAgeCalculator'

export const metadata: Metadata = {
  title: 'Dog Age Calculator by Breed — Free & Science-Backed',
  description: 'Calculate your dog\'s real human-equivalent age by breed size using the 2020 Nature logarithmic formula — not the wrong multiply-by-7 myth.',
  alternates: { canonical: 'https://dogagecalc.adcmartinez1.workers.dev/dog-age-calculator' },
  openGraph: {
    title: 'Dog Age Calculator by Breed — Free & Science-Backed',
    description: 'Calculate your dog\'s real human-equivalent age by breed size using the 2020 Nature logarithmic formula — not the wrong multiply-by-7 myth.',
    url: 'https://dogagecalc.adcmartinez1.workers.dev/dog-age-calculator',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dog Age Calculator by Breed — Free & Science-Backed',
    description: 'Calculate your dog\'s real human-equivalent age by breed size using the 2020 Nature logarithmic formula — not the wrong multiply-by-7 myth.',
  },
}

const dogFaqs = [
  {
    question: 'Is the 7-year rule accurate?',
    answer: 'No. The 7-year rule is a rough approximation invented in the 1950s and has no scientific basis. A 1-year-old dog is already sexually mature and roughly equivalent to a 15-year-old human, not a 7-year-old. The 2020 Nature Aging study showed that dogs age very rapidly in their first two years and more slowly thereafter.'
  },
  {
    question: 'Why does breed size affect the calculation?',
    answer: 'Larger dogs age faster biologically and have shorter lifespans. A 10-year-old Great Dane is far older in human terms than a 10-year-old Chihuahua. The logarithmic formula is adjusted by breed size to reflect this difference.'
  },
  {
    question: 'What is the logarithmic formula based on?',
    answer: 'The formula is derived from a 2020 study published in Cell Systems by researchers at UC San Diego, led by Dr. Trey Ideker. They compared DNA methylation patterns — epigenetic clocks — between dogs and humans to map biological aging across species.'
  },
  {
    question: 'Can I use this for puppies under 1 year old?',
    answer: 'Yes. Enter the age as a decimal — for example, 0.5 for a 6-month-old puppy. The logarithmic formula handles fractional ages correctly.'
  },
  {
    question: 'What is the most accurate dog age calculator?',
    answer: 'The most accurate publicly available formula uses the natural logarithm of the dog\'s age, adjusted for breed size. That is exactly what this calculator uses. The 7x rule is the least accurate method available.'
  },
  {
    question: 'Does this work for mixed breeds?',
    answer: 'Yes. Select the breed size category that best matches your dog\'s adult weight: Toy/Small under 20 lbs, Medium 21–50 lbs, Large 51–90 lbs, or Giant 91+ lbs.'
  }
]

// Pre-computed dog age chart values
const dogAgeChart = [
  { dogAge: 1,  small: (15 * Math.log(1) + 28).toFixed(1), medium: (16 * Math.log(1) + 31).toFixed(1), large: (17 * Math.log(1) + 34).toFixed(1), giant: (18 * Math.log(1) + 37).toFixed(1) },
  { dogAge: 2,  small: (15 * Math.log(2) + 28).toFixed(1), medium: (16 * Math.log(2) + 31).toFixed(1), large: (17 * Math.log(2) + 34).toFixed(1), giant: (18 * Math.log(2) + 37).toFixed(1) },
  { dogAge: 3,  small: (15 * Math.log(3) + 28).toFixed(1), medium: (16 * Math.log(3) + 31).toFixed(1), large: (17 * Math.log(3) + 34).toFixed(1), giant: (18 * Math.log(3) + 37).toFixed(1) },
  { dogAge: 4,  small: (15 * Math.log(4) + 28).toFixed(1), medium: (16 * Math.log(4) + 31).toFixed(1), large: (17 * Math.log(4) + 34).toFixed(1), giant: (18 * Math.log(4) + 37).toFixed(1) },
  { dogAge: 5,  small: (15 * Math.log(5) + 28).toFixed(1), medium: (16 * Math.log(5) + 31).toFixed(1), large: (17 * Math.log(5) + 34).toFixed(1), giant: (18 * Math.log(5) + 37).toFixed(1) },
  { dogAge: 6,  small: (15 * Math.log(6) + 28).toFixed(1), medium: (16 * Math.log(6) + 31).toFixed(1), large: (17 * Math.log(6) + 34).toFixed(1), giant: (18 * Math.log(6) + 37).toFixed(1) },
  { dogAge: 7,  small: (15 * Math.log(7) + 28).toFixed(1), medium: (16 * Math.log(7) + 31).toFixed(1), large: (17 * Math.log(7) + 34).toFixed(1), giant: (18 * Math.log(7) + 37).toFixed(1) },
  { dogAge: 8,  small: (15 * Math.log(8) + 28).toFixed(1), medium: (16 * Math.log(8) + 31).toFixed(1), large: (17 * Math.log(8) + 34).toFixed(1), giant: (18 * Math.log(8) + 37).toFixed(1) },
  { dogAge: 10, small: (15 * Math.log(10) + 28).toFixed(1), medium: (16 * Math.log(10) + 31).toFixed(1), large: (17 * Math.log(10) + 34).toFixed(1), giant: (18 * Math.log(10) + 37).toFixed(1) },
  { dogAge: 12, small: (15 * Math.log(12) + 28).toFixed(1), medium: (16 * Math.log(12) + 31).toFixed(1), large: (17 * Math.log(12) + 34).toFixed(1), giant: (18 * Math.log(12) + 37).toFixed(1) },
  { dogAge: 15, small: (15 * Math.log(15) + 28).toFixed(1), medium: (16 * Math.log(15) + 31).toFixed(1), large: (17 * Math.log(15) + 34).toFixed(1), giant: (18 * Math.log(15) + 37).toFixed(1) },
]

export default function DogAgeCalculatorPage() {
  return (
    <>
      <WebAppSchema
        name="Dog Age Calculator"
        description="Breed-specific dog age to human years converter using the 2020 Nature Aging logarithmic formula"
        url="https://dogagecalc.adcmartinez1.workers.dev/dog-age-calculator"
        category="UtilityApplication"
      />
      <ToolHero
        title="Dog Age Calculator"
        subtitle="Get your dog's true human-equivalent age by breed size — powered by the 2020 Nature Aging study, not the outdated 7× myth."
        breadcrumbItems={[
          { label: 'Home', href: '/' },
          { label: 'Dog Age Calculator', href: '/dog-age-calculator' }
        ]}
      />
      <DogAgeCalculator />
      <AdSlot size="leaderboard" />
      <SeoContent>
        <h2>What Is a Dog&apos;s Human Equivalent Age?</h2>
        <p>Most people have heard the rule: multiply your dog&apos;s age by 7 to get their human equivalent age. It&apos;s simple, memorable, and almost completely wrong.</p>
        <p>The 7x myth dates back to the 1950s, where it likely originated as a rough marketing shortcut — a way to communicate that dogs live shorter lives than humans. There&apos;s no biology behind it. Consider: a 1-year-old dog is already sexually mature, can reproduce, and has the physical development of a teenage human. By the 7x rule, that would make them the equivalent of a 7-year-old child. That&apos;s not even close.</p>
        <p>In 2020, a team of researchers at UC San Diego led by Dr. Trey Ideker published a landmark study in the journal Cell Systems. They mapped DNA methylation patterns — sometimes called epigenetic clocks — across 104 Labrador Retrievers and compared them to human methylation data spanning 320 people of various ages. What they found was that dogs and humans share a mathematically predictable aging relationship, but it&apos;s logarithmic, not linear. Dogs age extremely rapidly in their first two years of life, then slow down considerably.</p>
        <p>The resulting formula uses the natural logarithm of the dog&apos;s age, not a flat multiplier. A 1-year-old dog maps to roughly a 31-year-old human (medium breed). A 7-year-old dog maps to about 62 — solidly middle-aged.</p>
        <p>Breed size also matters significantly. Larger dogs age faster and die younger than smaller dogs. A 10-year-old Chihuahua and a 10-year-old Great Dane are not the same biological age. Our calculator accounts for this by adjusting the formula&apos;s multiplier based on your dog&apos;s size category: Toy/Small, Medium, Large, or Giant.</p>

        <h2>How to Use This Dog Age Calculator</h2>
        <ol>
          <li>Select your dog&apos;s mode — or switch to Cat Mode for cats.</li>
          <li>Enter your dog&apos;s age in years. You can use decimals (e.g., 0.5 for 6 months).</li>
          <li>Select your dog&apos;s breed size from the dropdown.</li>
          <li>Click &quot;Calculate&quot; to see the human-equivalent age.</li>
          <li>Read the life stage and fun fact for extra context.</li>
        </ol>

        <h2>Dog Age Chart by Breed Size</h2>
        <table>
          <thead>
            <tr>
              <th>Dog Age</th>
              <th>Toy / Small</th>
              <th>Medium</th>
              <th>Large</th>
              <th>Giant</th>
            </tr>
          </thead>
          <tbody>
            {dogAgeChart.map(row => (
              <tr key={row.dogAge}>
                <td>{row.dogAge} yr{row.dogAge > 1 ? 's' : ''}</td>
                <td>{row.small}</td>
                <td>{row.medium}</td>
                <td>{row.large}</td>
                <td>{row.giant}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <h2>Frequently Asked Questions</h2>
        <FaqAccordion items={dogFaqs} />

        <h2>Related Tools</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {TOOLS.filter(t => t.slug !== 'dog-age-calculator').map(tool => (
            <ToolCard key={tool.slug} title={tool.name} description={tool.description} href={`/${tool.slug}`} icon={tool.icon} />
          ))}
        </div>
      </SeoContent>
    </>
  )
}
