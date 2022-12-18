import Image from 'next/image'

interface Props {
  logos: { src: string; alt: string }[]
}

export default function LogoCloud({ logos }: Props) {
  return (
    <div className="h-12">
      <div className="max-w-7xl h-full">
        <div className="flex flex-row items-center justify-center relative h-full w-full">
          {logos.map(({ src, alt }) => (
            // <div className="flex justify-center relative w-full" key={src}>
            <div className="grow flex flex-row justify-center items-center relative h-full mr-4 last:mr-0 sm:mr-6 md:mr-8">
              <img
                src={src}
                alt={alt}
                style={{ width: 'auto', height: '100%' }}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
