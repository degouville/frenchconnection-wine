import Image from 'next/image'

export default function PhotoStrip() {
  return (
    <div className='grid grid-cols-3 h-[320px] md:h-[460px]'>
      <div className='relative overflow-hidden'>
        <Image
          src='/images/lifestyle/wine-glasses-rose-red-overhead.webp'
          alt='Rosé and red wine glasses'
          fill
          sizes='33vw'
          className='object-cover hover:scale-105 transition-transform duration-700'
        />
      </div>
      <div className='relative overflow-hidden'>
        <Image
          src='/images/lifestyle/red-wine-pouring-decanter.webp'
          alt='Red wine poured from a decanter'
          fill
          sizes='33vw'
          className='object-cover object-center hover:scale-105 transition-transform duration-700'
        />
      </div>
      <div className='relative overflow-hidden'>
        <Image
          src='/images/lifestyle/red-grapes-on-vine.webp'
          alt='Red grapes on the vine'
          fill
          sizes='33vw'
          className='object-cover hover:scale-105 transition-transform duration-700'
        />
      </div>
    </div>
  )
}
