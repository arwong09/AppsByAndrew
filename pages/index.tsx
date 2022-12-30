import LogoCloud from '../components/LogoCloud'
import TechStackLogoCloud from '../components/TechStackLogoCloud'
import Team from '../components/Team'
import styles from '../styles/Home.module.css'
import ContactForm from '../components/ContactForm'
import Link from 'next/link'
import Image from 'next/image'

const LOGOS = [
  {
    src: '/Stripe wordmark - blurple.svg',
    alt: 'Stripe Logo',
    flexBasis: '9.2%',
  },
  {
    src: '/Instagram_Glyph_Gradient_RGB.svg',
    alt: 'Instagram Logo',
    flexBasis: '4%',
  },
  {
    src: '/markup-cropped.svg',
    alt: 'Meta Logo',
    flexBasis: '17%',
  },
  {
    src: '/instacart-color-logo.svg',
    alt: 'Instacart Logo',
    flexBasis: '22%',
  },
  {
    src: '/Lyft_logo.svg',
    alt: 'Lyft Logo',
    flexBasis: '5.6%',
  },
  {
    src: '/yclogo.svg',
    alt: 'Y Combinator Logo',
    flexBasis: '19.9%',
  },
]

export default function Home() {
  return (
    <div className="bg-white max-w-7xl text-gray-800 h-full">
      <nav
        className="fixed top-0 left-0 border-b border-gray-200 w-full px-6 py-2 z-50"
        style={{
          backdropFilter: 'saturate(180%) blur(20px)',
          backgroundColor: 'rgba(255, 255, 255, 0.72)',
        }}
      >
        <h1 className="text-2xl font-bold text-gray-800">
          Brooklyn Dev Collective
        </h1>
      </nav>
      <main className="flex flex-col h-full">
        <section className="px-6">
          <div className="mt-24">
            <h1 className="text-5xl font-extrabold bg-gradient-to-r from-red-400 to-amber-300 text-transparent bg-clip-text leading-tight">
              Not your typical Dev Agency.
            </h1>
            <p className="mt-6 text-xl font-medium text-gray-600">
              BK Devs is a New York based co-op for veteran software engineers.
            </p>
          </div>
          <div
            className="w-full relative mx-auto mt-12"
            style={{ paddingBottom: '82%' }}
          >
            <Image
              src="/bk-devs-team.jpg"
              fill
              alt="BK Devs Team Photo"
              style={{ objectFit: 'contain' }}
              priority
              sizes="(max-width: 1280px) 336px"
              // placeholder="blur"
            />
          </div>
          <div className="flex flex-row items-center justify-center w-full text-blue-400 mt-6">
            <Link href="/">View Portfolio &gt;</Link>
          </div>
        </section>

        <section className="bg-gray-50 px-12 mt-14 py-16">
          <div className="w-full">
            <LogoCloud logos={LOGOS} />
          </div>
          <p className="mt-6 text-gray-500 text-medium text-2xl text-center">
            Since 2014, our members have been working at several well-known tech
            companies.
          </p>
        </section>

        <section className="px-6 py-20">
          <p className="font-semibold text-gray-600">
            Together we've worked at
          </p>
          <h2 className="text-xl font-semibold bg-gradient-to-r from-red-400 to-amber-300 text-transparent bg-clip-text">
            Stripe, Meta, Instagram, Instacart, Lyft, and YCombinator.
          </h2>
          <div
            className="w-full relative mx-auto mt-10"
            style={{ paddingBottom: '53%' }}
          >
            <Image
              src="/iphones.jpeg"
              fill
              alt="iPhones"
              style={{ objectFit: 'contain' }}
              priority
              sizes="(max-width: 1280px) 336px"
              // placeholder="blur"
            />
          </div>
        </section>

        <section className="bg-orange-500 px-6 py-12 text-center">
          <h3 className="text-white font-semibold text-3xl">
            Our commitment to you is speed, quality, and overcommunication.
          </h3>
          <p className="text-orange-100 mt-6">
            Agencies with outsourced developers can’t make that promise.
          </p>
        </section>

        <section className="py-20 px-6">
          <h2 className="text-5xl font-semibold bg-gradient-to-r from-red-400 to-amber-300 text-transparent bg-clip-text leading-tight">
            We are founders, just like you.
          </h2>
          <p className="text-gray-600 font-semibold text-xl mt-6">
            We have completed YC and started multiple companies in the past, so
            we deeply understand your needs.
          </p>
        </section>
      </main>
    </div>
    // <div className="flex flex-col bg-white px-6 lg:px-32 max-w-7xl mx-auto text-black">
    //   <main>
    //     <section className="flex flex-col justify-center">
    //       <h1 className="mt-16 md:mt-24 text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-red-400 to-amber-300 text-transparent bg-clip-text">
    //         Brooklyn Dev Collective
    //       </h1>
    //       <h1 className=" text-5xl md:text-6xl font-extrabold">
    //         is a co-op for seasoned software engineers.
    //       </h1>

    //       <div className="flex flex-row justify-center items-center h-80 mt-16">
    //         <div className="relative h-full grow rounded-lg overflow-hidden">
    //           <Image
    //             src="/bk-devs-team.jpg"
    //             fill
    //             alt="BK Devs Team Photo"
    //             style={{ objectFit: 'cover' }}
    //             priority
    //             sizes="(max-width: 1280px) 336px"
    //             // placeholder="blur"
    //           />
    //         </div>
    //       </div>
    //       <div className="flex flex-row justify-center items-center mt-4 text-sm text-blue-400 font-light mb-4">
    //         <Link href="/">View Portfolio &gt;</Link>
    //       </div>
    //       <div className="mt-6 w-full">
    //         <LogoCloud logos={LOGOS} />
    //       </div>
    //     </section>

    //     {/* <section className="flex flex-col justify-center mt-24">
    //       <h2 className="lg:text-6xl md:text-4xl text-4xl font-bold">
    //         We&apos;ve worked at{' '}
    //         <span className="text-teal-400">
    //           Meta, Stripe, Instacart, Lyft,
    //         </span>{' '}
    //         and <span className="text-teal-400">Instagram.</span>
    //       </h2>
    //       <h2 className="lg:text-6xl md:text-4xl text-4xl font-bold mt-24">
    //         And also founded companies through bootstrapping and&nbsp;
    //         <span className="text-teal-400">Y Combinator</span>.
    //       </h2>
    //       <h2 className="text-xl lg:text-4xl font-medium text-gray-400 mt-8">
    //         We understand the problems you&apos;re dealing with as a founder.
    //       </h2>
    //     </section>

    //     <section className="flex flex-col justify-center my-48">
    //       <h2 className="text-4xl text-gray-400 font-medium mt-16">
    //         Our Members
    //       </h2>
    //       <Team />
    //       <p className="text-gray-400">
    //         Interested in joining Dev Collective?{' '}
    //         <a
    //           href="mailto:apply@devcollective.com"
    //           className="text-indigo-400"
    //         >
    //           Apply here
    //         </a>
    //       </p>
    //     </section>

    //     <section className="flex flex-col justify-center mt-64">
    //       <h2 className="lg:text-6xl md:text-4xl text-4xl font-bold">
    //         We&apos;ve curated a process and tech stack that allow us to build{' '}
    //         <span className="text-teal-400">high quality apps, quickly</span>.
    //       </h2>
    //       <div className="mt-20 w-full">
    //         <TechStackLogoCloud />
    //       </div>
    //       <p className="text-gray-400 mt-10">
    //         React, React Native, NodeJS, TypeScript, Tailwind, NextJS, Firebase
    //       </p>
    //     </section> */}

    //     <section className="flex flex-col justify-center my-32">
    //       <div className="flex sm:flex-row flex-col">
    //         <div className="flex-1 shrink">
    //           <h2 className="md:text-6xl text-5xl font-bold">
    //             Want to work with us?
    //           </h2>
    //           <h2 className="text-xl md:text-2xl mt-4 text-gray-500">
    //             <span className="bg-gradient-to-r from-red-400 to-amber-300 text-transparent bg-clip-text font-bold">
    //               BKDC
    //             </span>{' '}
    //             exists to share knowledge, incubate ideas, and build world-class
    //             products.
    //           </h2>
    //         </div>
    //         <div className="sm:max-w-xs sm:ml-24 mt-12 sm:mt-0">
    //           <ContactForm />
    //         </div>
    //       </div>
    //     </section>
    //   </main>
    // </div>
  )
}
