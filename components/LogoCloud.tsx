import Image from 'next/image'

interface Props {
  logos: {
    src: string
    alt: string
    flexBasis: string
  }[]
}

export default function LogoCloud({ logos }: Props) {
  return (
    <div className="flex flex-row items-center justify-between max-w-7xl h-12">
      {logos.map(({ src, alt, flexBasis }) => (
        <div key={src} className="relative h-full" style={{ flexBasis }}>
          <Image src={src} alt={alt} fill />
        </div>
      ))}
    </div>
  )
}
