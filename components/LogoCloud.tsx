import Image from 'next/image'

export default function LogoCloud() {
  return (
    <div className="bg-black h-36 md:h-16">
      <div className="max-w-7xl">
        <div className="grid grid-cols-3 gap-4 md:gap-8 md:grid-cols-6 lg:grid-cols-6 h-16">
          <div className="col-span-1 flex justify-center relative h-16">
            <Image
              fill
              className="h-12 object-contain"
              src="/Meta_lockup_mono_white_RGB.svg"
              alt="Meta"
            />
          </div>
          <div className="col-span-1 flex justify-center relative h-16">
            <Image
              fill
              className="h-12 object-contain"
              src="/Stripe wordmark - white.svg"
              alt="Stripe"
            />
          </div>
          <div className="col-span-1 flex justify-center relative h-16">
            <Image
              fill
              className="h-12 object-contain"
              src="/instacart-color-logo.svg"
              alt="Instacart"
            />
          </div>
          <div className="col-span-1 flex justify-center relative h-16">
            <Image
              fill
              className="h-12 object-contain"
              src="/Lyft-Logo.wine.png"
              alt="Lyft"
            />
          </div>
          <div className="col-span-1 flex justify-center relative h-16">
            <Image
              fill
              className="h-12 object-contain"
              src="/Y_Combinator_logo_text_wordmark.png"
              alt="Y Combinator"
            />
          </div>
          <div className="col-span-1 flex justify-center relative h-16">
            <Image
              fill
              className="h-12 object-contain"
              src="/Instagram_Glyph_Gradient_RGB.svg"
              alt="Instagram"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
