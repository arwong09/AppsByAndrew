import Image from 'next/image'

export default function TechStackLogoCloud() {
  return (
    <div className="bg-black">
      <div className="max-w-7xl">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-6 lg:grid-cols-6 h-16">
          <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1 relative">
            <Image
              fill
              className="h-12 object-contain"
              src="/React-icon.svg.png"
              alt="React"
            />
          </div>
          <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1 relative">
            <Image
              fill
              className="h-12 object-contain"
              src="/Typescript_logo_2020.svg"
              alt="TypeScript"
            />
          </div>
          <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1 relative">
            <Image
              fill
              className="h-12 object-contain"
              src="/Tailwind_CSS_logo.svg"
              alt="Tailwind"
            />
          </div>
          <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1 relative">
            <Image
              fill
              className="h-12 object-contain"
              src="/firebase-logomark.svg"
              alt="Firebase"
            />
          </div>
          <div className="col-span-1 flex justify-center md:col-span-3 lg:col-span-1 relative">
            <Image
              fill
              className="h-12 object-contain"
              src="/Nextjs-logo.svg"
              alt="NextJS"
            />
          </div>
          <div className="col-span-2 flex justify-center md:col-span-3 lg:col-span-1 relative">
            <Image
              fill
              className="h-12 object-contain"
              src="/Node.js_logo.svg"
              alt="NodeJS"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
