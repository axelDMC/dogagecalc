'use client'

import { useState } from 'react'
import { ExternalLink } from 'lucide-react'

type Mode = 'dog' | 'cat'
type BreedSize = 'small' | 'medium' | 'large' | 'giant'

function calcDogAge(dogAge: number, size: BreedSize): number {
  const configs = {
    small:  { m: 15, b: 28 },
    medium: { m: 16, b: 31 },
    large:  { m: 17, b: 34 },
    giant:  { m: 18, b: 37 },
  }
  const { m, b } = configs[size]
  return Math.round((m * Math.log(dogAge) + b) * 10) / 10
}

function calcCatAge(catAge: number): number {
  if (catAge <= 1) return Math.round(15 * catAge)
  if (catAge <= 2) return Math.round(15 + 9 * (catAge - 1))
  return Math.round(24 + 4 * (catAge - 2))
}

function getDogLifeStage(dogAge: number): string {
  if (dogAge < 1) return 'Puppy'
  if (dogAge <= 2) return 'Junior'
  if (dogAge <= 7) return 'Adult'
  if (dogAge <= 11) return 'Senior'
  return 'Geriatric'
}

function getCatLifeStage(catAge: number): string {
  if (catAge < 1) return 'Kitten'
  if (catAge <= 2) return 'Junior'
  if (catAge <= 6) return 'Prime'
  if (catAge <= 10) return 'Mature'
  if (catAge <= 14) return 'Senior'
  return 'Super Senior'
}

function getDogFunFact(humanAge: number): string {
  if (humanAge < 18) return 'Still technically a teenager — full of energy and curiosity.'
  if (humanAge <= 25) return 'The equivalent of a college student — peak physical condition.'
  if (humanAge <= 40) return 'Prime adult years — confident, trained, and in their groove.'
  if (humanAge <= 60) return 'Middle age — wise, loyal, and maybe a little slower on stairs.'
  if (humanAge <= 80) return 'Senior years — deserves extra rest, warmth, and belly rubs.'
  return 'A true elder — every day is a gift. Spoil them accordingly.'
}

function getCatFunFact(humanAge: number): string {
  if (humanAge < 18) return 'Still a kitten at heart, even if they act otherwise.'
  if (humanAge <= 25) return 'Young adult cat — ready to take on the world (or a paper bag).'
  if (humanAge <= 40) return 'In their prime — graceful, wise, and deeply unimpressed.'
  if (humanAge <= 60) return 'Middle-aged cat — the nap schedule is now non-negotiable.'
  if (humanAge <= 80) return 'A senior cat who has seen things. Respect their wisdom.'
  return 'Remarkable longevity — this cat has outlived several trends.'
}

export default function DogAgeCalculator() {
  const [mode, setMode] = useState<Mode>('dog')
  const [dogAge, setDogAge] = useState('')
  const [breedSize, setBreedSize] = useState<BreedSize>('medium')
  const [catAge, setCatAge] = useState('')
  const [result, setResult] = useState<number | null>(null)
  const [lifeStage, setLifeStage] = useState('')
  const [funFact, setFunFact] = useState('')
  const [error, setError] = useState<string | null>(null)

  function handleCalculate() {
    setError(null)
    setResult(null)

    if (mode === 'dog') {
      const age = parseFloat(dogAge)
      if (!dogAge || isNaN(age) || age <= 0) {
        setError('Please enter a valid age.')
        return
      }
      const humanAge = calcDogAge(age, breedSize)
      setResult(humanAge)
      setLifeStage(getDogLifeStage(age))
      setFunFact(getDogFunFact(humanAge))
    } else {
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
  }

  return (
    <div className="max-w-lg mx-auto px-4 py-8 space-y-6">
      {/* Mode toggle */}
      <div className="flex rounded-lg border border-white/10 p-1 gap-1 bg-white/5">
        {(['dog', 'cat'] as Mode[]).map(m => (
          <button
            key={m}
            onClick={() => { setMode(m); setResult(null); setError(null) }}
            className={`flex-1 py-2 rounded-md text-sm font-medium transition-colors capitalize ${
              mode === m
                ? 'bg-blue-600 text-white'
                : 'text-white/60 hover:text-white'
            }`}
          >
            {m === 'dog' ? 'Dog' : 'Cat'}
          </button>
        ))}
      </div>

      {/* Inputs */}
      <div className="space-y-4">
        {mode === 'dog' ? (
          <>
            <div>
              <label htmlFor="dog-age" className="block text-sm font-medium text-white/80 mb-1">
                Dog&apos;s Age (years)
              </label>
              <input
                id="dog-age"
                type="number"
                min="0.1"
                max="30"
                step="0.5"
                value={dogAge}
                onChange={e => setDogAge(e.target.value)}
                placeholder="e.g. 3.5"
                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-blue-500"
              />
            </div>
            <div>
              <label htmlFor="breed-size" className="block text-sm font-medium text-white/80 mb-1">
                Breed Size
              </label>
              <select
                id="breed-size"
                value={breedSize}
                onChange={e => setBreedSize(e.target.value as BreedSize)}
                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500"
              >
                <option value="small">Toy / Small (under 20 lbs)</option>
                <option value="medium">Medium (21–50 lbs)</option>
                <option value="large">Large (51–90 lbs)</option>
                <option value="giant">Giant (91+ lbs)</option>
              </select>
            </div>
          </>
        ) : (
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
        )}
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
          <p className="text-white/30 text-xs flex items-center justify-center gap-1">
            Formula: based on the 2020 Nature Aging study by Trey Ideker et al., UC San Diego
            <ExternalLink size={12} />
          </p>
        </div>
      )}
    </div>
  )
}
