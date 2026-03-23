'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Dog } from 'lucide-react'

function calcCatAge(catAge: number): number {
  if (catAge <= 1) return Math.round(15 * catAge)
  if (catAge <= 2) return Math.round(15 + 9 * (catAge - 1))
  return Math.round(24 + 4 * (catAge - 2))
}

function getCatLifeStage(catAge: number): string {
  if (catAge < 1) return 'Kitten'
  if (catAge <= 2) return 'Junior'
  if (catAge <= 6) return 'Prime'
  if (catAge <= 10) return 'Mature'
  if (catAge <= 14) return 'Senior'
  return 'Super Senior'
}

function getCatFunFact(humanAge: number): string {
  if (humanAge < 18) return 'Still a kitten at heart, even if they act otherwise.'
  if (humanAge <= 25) return 'Young adult cat — ready to take on the world (or a paper bag).'
  if (humanAge <= 40) return 'In their prime — graceful, wise, and deeply unimpressed.'
  if (humanAge <= 60) return 'Middle-aged cat — the nap schedule is now non-negotiable.'
  if (humanAge <= 80) return 'A senior cat who has seen things. Respect their wisdom.'
  return 'Remarkable longevity — this cat has outlived several trends.'
}

export default function CatAgeCalculator() {
  const [catAge, setCatAge] = useState('')
  const [result, setResult] = useState<number | null>(null)
  const [lifeStage, setLifeStage] = useState('')
  const [funFact, setFunFact] = useState('')
  const [error, setError] = useState<string | null>(null)

  function handleCalculate() {
    setError(null)
    setResult(null)
    const age = parseFloat(catAge)
    if (!catAge || isNaN(age) || age <= 0) {
      setError('Please enter a valid age.')
      return
    }
    const humanAge = calcCatAge(age)
    setResult(humanAge)
    setLifeStage(getCatLifeStage(age))
    setFunFact(getCatFunFact(humanAge))
  }

  return (
    <div className="max-w-lg mx-auto px-4 py-8 space-y-6">
      <div>
        <label htmlFor="cat-age" className="block text-sm font-medium text-white/80 mb-1">
          Cat&apos;s Age (years)
        </label>
        <input
          id="cat-age"
          type="number"
          min="0.1"
          max="25"
          step="0.5"
          value={catAge}
          onChange={e => setCatAge(e.target.value)}
          placeholder="e.g. 5"
          className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-blue-500"
        />
      </div>

      {error && <p className="text-red-400 text-sm">{error}</p>}

      <button
        onClick={handleCalculate}
        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg py-[14px] transition-colors"
      >
        Calculate
      </button>

      {result !== null && (
        <div
          aria-live="polite"
          className="rounded-xl border border-white/10 bg-white/[0.02] p-6 space-y-3 text-center"
        >
          <p className="text-white/60 text-sm">Human-equivalent age</p>
          <p className="font-mono text-5xl font-bold text-white">{result}</p>
          <span className="inline-block bg-blue-600/20 text-blue-400 text-xs font-medium px-3 py-1 rounded-full border border-blue-500/20">
            {lifeStage}
          </span>
          <p className="text-white/60 text-sm">{funFact}</p>
        </div>
      )}

      <Link
        href="/dog-age-calculator"
        className="flex items-center justify-center gap-2 text-sm text-white/50 hover:text-white/80 transition-colors"
      >
        <Dog size={16} />
        Also check: Dog Age Calculator
      </Link>
    </div>
  )
}
