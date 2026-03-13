export default function Panels() {
  return (
    <div className='grid md:grid-cols-2'>
      {/* Our Story */}
      <section
        id='story'
        className='relative min-h-[520px] flex items-end overflow-hidden'
        style={{
          backgroundImage: 'url(/images/lifestyle/vineyard-landscape-estate.webp)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {/* Base dark layer + gradient for strong contrast */}
        <div className='absolute inset-0 bg-[var(--ink)]/55' />
        <div className='absolute inset-0 bg-gradient-to-t from-[var(--ink)] via-[var(--ink)]/70 to-transparent' />
        <div className='relative z-10 p-10 md:p-14'>
          <p className='text-[var(--gold)] text-xs tracking-[0.3em] uppercase mb-3'>Our story</p>
          <h2 className='font-display text-3xl md:text-4xl text-[var(--off-white)] mb-4'>
            Why We Started This
          </h2>
          <p className='text-[var(--off-white)]/80 leading-relaxed mb-4 max-w-md'>
            You shouldn't have to choose between overpriced restaurant wine and whatever's available at the supermarket. That gap — between what wine lovers in France drink at home and what's accessible in Vietnam — is exactly why French Connection Wines exists.
          </p>
          <p className='text-[var(--off-white)]/80 leading-relaxed max-w-md'>
            Based in Central Vietnam, we work directly with estates in the South of France to bring curated, cellar-worthy bottles to your table. No middlemen. No compromises. Just the kind of wine that makes a dinner memorable.
          </p>
          <a
            href='#'
            className='inline-block mt-6 text-xs tracking-widest uppercase text-[var(--gold)] border-b border-[var(--gold)]/40 hover:border-[var(--gold)] transition-colors'
          >
            Our full story →
          </a>
        </div>
      </section>

      {/* Order & Delivery */}
      <section
        id='order'
        className='relative min-h-[520px] flex items-end overflow-hidden'
        style={{
          backgroundImage: 'url(/images/categories/Grand_Cru_Forge_Celeste.webp)',
          backgroundSize: 'cover',
          backgroundPosition: 'top',
        }}
      >
        <div className='absolute inset-0 bg-gradient-to-t from-[var(--ink)] via-[var(--ink)]/60 to-transparent' />
        <div className='relative z-10 p-10 md:p-14'>
          <p className='text-[var(--gold)] text-xs tracking-[0.3em] uppercase mb-3'>Get in touch</p>
          <h2 className='font-display text-3xl md:text-4xl text-[var(--off-white)] mb-4'>
            Order Today, Enjoy This Week
          </h2>
          <ul className='text-[var(--off-white)]/70 leading-relaxed space-y-2 mb-6 max-w-md'>
            <li className='flex gap-3'>
              <span className='text-[var(--gold)] font-bold mt-px'>01</span>
              <span>Pick your wines — any mix of reds, whites, rosé, or sparkling</span>
            </li>
            <li className='flex gap-3'>
              <span className='text-[var(--gold)] font-bold mt-px'>02</span>
              <span>Message us on Zalo with your order and delivery address</span>
            </li>
            <li className='flex gap-3'>
              <span className='text-[var(--gold)] font-bold mt-px'>03</span>
              <span>We pack and deliver — most orders arrive within 2–3 business days</span>
            </li>
          </ul>
          <a
            href='https://zalo.me/84936480805'
            className='inline-flex items-center gap-2 px-6 py-3 bg-[var(--gold)] text-[var(--ink)] font-bold text-sm tracking-widest uppercase hover:bg-[var(--gold-dk)] transition-colors duration-200'
          >
            <svg width='16' height='16' viewBox='0 0 48 48' fill='currentColor'>
              <path d='M24 4C13 4 4 12.06 4 22c0 5.72 2.9 10.82 7.46 14.18L9.5 44l8.04-4.02A21.8 21.8 0 0024 40.5c11 0 20-8.06 20-18S35 4 24 4zm-6.5 20.5h-3v-9h3v9zm4.5 0h-3v-9h3v9zm4.5 0h-3v-9h3v9z'/>
            </svg>
            Start Your Order on Zalo
          </a>
          <p className='mt-3 text-[var(--off-white)]/40 text-xs tracking-wide'>
            Delivering across Vietnam · No minimum order
          </p>
        </div>
      </section>
    </div>
  )
}
