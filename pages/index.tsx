import LogoCloud from '../components/LogoCloud'
import TechStackLogoCloud from '../components/TechStackLogoCloud'
import Team from '../components/Team'
import styles from '../styles/Home.module.css'
import ContactForm from '../components/ContactForm'
import Link from 'next/link'
import Image from 'next/image'
import {
  CalendarDaysIcon,
  DevicePhoneMobileIcon,
  ComputerDesktopIcon,
  CreditCardIcon,
  CursorArrowRaysIcon,
  ChatBubbleLeftRightIcon,
} from '@heroicons/react/24/outline'

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
    <div className="bg-white max-w-7xl text-gray-900 h-full">
      <nav
        className="fixed top-0 left-0 border-b border-gray-300 w-full px-6 py-3 z-50"
        style={{
          backdropFilter: 'saturate(180%) blur(20px)',
          backgroundColor: 'rgba(255, 255, 255, 0.72)',
        }}
      >
        <h1 className="text-xl font-medium text-gray-800">Apps By Andrew</h1>
      </nav>
      <main className="flex flex-col h-full">
        <section className="px-6 py-28">
          <h1 className="text-6xl font-semibold bg-gradient-to-r from-teal-400 to-emerald-300 text-transparent bg-clip-text tracking-tight pb-1">
            Software for Pet Care Professionals.
          </h1>
          <p className="mt-3 text-2xl text-gray-600 leading-tight">
            Custom Websites & Mobile Apps to elevate your growing business.
          </p>
          <div
            className="w-full relative mx-auto mt-8"
            style={{ paddingBottom: '82%' }}
          >
            <Image
              src="/bk-devs-team.jpg"
              fill
              alt="BK Devs Team Photo"
              style={{ objectFit: 'contain' }}
              priority
              sizes="(max-width: 1280px) 336px"
            />
          </div>
          <div className="flex flex-row items-center justify-center w-full text-blue-400 mt-4">
            <Link href="/">View Portfolio &gt;</Link>
          </div>
        </section>

        <section>
          <div className="relative w-full" style={{ paddingBottom: '151%' }}>
            <h2 className="absolute top-6 text-3xl z-40 font-semibold text-white text-center w-full">
              Hi, I'm Andrew!
            </h2>
            <p className="absolute top-16 z-40 text-white text-lg px-3 text-center">
              I've been a software engineer since 2014 at tech giants like
              Instacart, Thumbtack, & Lyft.
            </p>
            <Image
              src="/andrew.jpg"
              fill
              alt="BK Devs Team Photo"
              style={{ objectFit: 'contain' }}
              priority
              sizes="(max-width: 1280px) 336px"
              // placeholder="blur"
            />
          </div>
        </section>

        <div className="relative w-full">
          <div className="absolute -top-20 z-40 w-full px-6">
            <LogoCloud logos={LOGOS} />
          </div>
        </div>

        <section className="bg-teal-500 px-6 py-12 text-center -mt-0.5">
          <h3 className="text-white font-medium text-3xl">code + pets = ❤️</h3>
          <p className="text-white mt-6 font-lg">
            Working for Big Tech was necessary to gain programming expertise,
            but now I am following my true passion.
          </p>
        </section>

        <section className="px-6 py-28 text-center">
          <p className="font-medium text-lg text-gray-600">
            I build custom business software for
          </p>
          <h2 className="text-xl font-semibold bg-gradient-to-r from-red-400 to-amber-300 text-transparent bg-clip-text">
            Groomers, Vets, Walkers, Sitters, & Kennel owners.
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

        <section className="bg-gray-50 px-6 py-14">
          <h1 className="text-2xl font-semibold text-center">
            Supercharge your day-to-day
          </h1>
          <ul className="grid grid-cols-2 gap-y-12 gap-x-2 mt-16">
            <li className="grid-span-1 relative flex flex-col items-center">
              <ComputerDesktopIcon height={48} />
              <span className="text-lg mt-2">Custom Website</span>
            </li>
            <li className="grid-span-1 relative flex flex-col items-center">
              <DevicePhoneMobileIcon height={48} />
              <span className="text-lg mt-2">Custom Mobile App</span>
            </li>
            <li className="grid-span-1 relative flex flex-col items-center">
              <CursorArrowRaysIcon height={48} />
              <span className="text-lg mt-2">Online Booking</span>
            </li>
            <li className="grid-span-1 relative flex flex-col items-center">
              <CreditCardIcon height={48} />
              <span className="text-lg mt-2">Online Payments</span>
            </li>
            <li className="grid-span-1 relative flex flex-col items-center">
              <CalendarDaysIcon height={48} />
              <span className="text-center text-lg mt-2">
                Schedule Management
              </span>
            </li>
            <li className="grid-span-1 relative flex flex-col items-center">
              <ChatBubbleLeftRightIcon height={48} />
              <span className="text-center text-lg mt-2">
                Text & Email Automation
              </span>
            </li>
          </ul>
        </section>

        <section>
          <div className="relative w-full" style={{ paddingBottom: '151%' }}>
            <Image
              src="/shoot-2607-1637342420-780_2741.jpg"
              fill
              alt="BK Devs Team Photo"
              style={{ objectFit: 'contain' }}
              priority
              sizes="(max-width: 1280px) 336px"
              // placeholder="blur"
            />
          </div>
        </section>

        <section className="flex flex-col justify-center my-32 px-6 pb-32">
          <div className="flex sm:flex-row flex-col">
            <div className="flex-1 shrink">
              <h2 className="md:text-6xl text-5xl font-bold">
                Eager to learn more?
              </h2>

              <h2 className="text-xl md:text-2xl mt-4 text-gray-500">
                I'm offering a free 15-minute consultation to new customers so
                we can diagnose your software needs.
              </h2>
            </div>

            <div className="sm:max-w-xs sm:ml-24 mt-12 sm:mt-0">
              <ContactForm />
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
