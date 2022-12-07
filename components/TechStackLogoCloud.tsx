import Image from 'next/image'

export default function TechStackLogoCloud() {
  return (
    <div className="bg-black h-36 md:h-16">
      <div className="max-w-7xl">
        <div className="grid grid-cols-3 gap-4 md:gap-8 md:grid-cols-6 lg:grid-cols-6 h-16">
          <div className="col-span-1 flex justify-center relative h-16">
            <Image
              fill
              className="h-12 object-contain"
              src="/React-icon.svg.png"
              alt="React"
              sizes="144px"
            />
          </div>
          <div className="col-span-1 flex justify-center relative h-16">
            <Image
              fill
              className="h-12 object-contain"
              src="/Typescript_logo_2020.svg"
              alt="TypeScript"
              sizes="144px"
            />
          </div>
          <div className="col-span-1 flex justify-center relative h-16">
            <Image
              fill
              className="h-12 object-contain"
              src="/Tailwind_CSS_logo.svg"
              alt="Tailwind"
              sizes="144px"
            />
          </div>
          <div className="col-span-1 flex justify-center relative h-16">
            <Image
              fill
              className="h-12 object-contain"
              src="/firebase-logomark.svg"
              alt="Firebase"
              sizes="144px"
            />
          </div>
          <div className="col-span-1 flex justify-center relative h-16">
            <Image
              fill
              className="h-12 object-contain"
              src="/Nextjs-logo.svg"
              alt="NextJS"
              sizes="144px"
            />
          </div>
          <div className="col-span-1 flex justify-center relative h-16">
            <Image
              fill
              className="h-12 object-contain"
              src="/Node.js_logo.svg"
              alt="NodeJS"
              sizes="144px"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
