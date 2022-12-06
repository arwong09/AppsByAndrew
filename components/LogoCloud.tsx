import Image from 'next/image'

export default function LogoCloud() {
  return (
    <div className="bg-black">
      <div className="max-w-7xl">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-6 lg:grid-cols-6 h-16">
          <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1 relative">
            <Image
              fill
              className="h-12 object-contain"
              src="/Y_Combinator_logo_text_wordmark.png"
              alt="Y Combinator"
            />
          </div>
          <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1 relative">
            <Image
              fill
              className="h-12 object-contain"
              src="/Meta_lockup_mono_white_RGB.svg"
              alt="Meta"
            />
          </div>
          <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1 relative">
            <Image
              fill
              className="h-12 object-contain"
              src="/Instagram_Glyph_Gradient_RGB.svg"
              alt="Instagram"
            />
          </div>
          <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1 relative">
            <Image
              fill
              className="h-12 object-contain"
              src="/Stripe wordmark - white.svg"
              alt="Stripe"
            />
          </div>
          <div className="col-span-1 flex justify-center md:col-span-3 lg:col-span-1 relative">
            <Image
              fill
              className="h-12 object-contain"
              src="/instacart-color-logo.svg"
              alt="Instacart"
            />
          </div>
          <div className="col-span-2 flex justify-center md:col-span-3 lg:col-span-1 relative">
            <Image
              fill
              className="h-12 object-contain"
              src="/Lyft-Logo.wine.png"
              alt="Lyft"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
