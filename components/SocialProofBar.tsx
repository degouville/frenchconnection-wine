export default function SocialProofBar() {
  const items = [
    '18 Curated French Wines',
    'Direct from 3 Estates',
    'Delivered Across Vietnam',
  ]

  return (
    <div className='bg-[var(--ink-deep,#0a0a0a)] border-y border-[var(--gold)]/20 py-4 px-6'>
      <div className='max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-0'>
        {items.map((item, i) => (
          <div key={item} className='flex items-center gap-3'>
            <span className='text-[var(--off-white)]/80 text-xs tracking-[0.2em] uppercase'>{item}</span>
            {i < items.length - 1 && (
              <span className='hidden sm:block text-[var(--gold)]/40 mx-3'>·</span>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
