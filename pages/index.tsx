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
      <nav className="fixed top-0 left-0 border-b border-gray-300 w-full px-6 py-2.5 z-50 bg-white">
        <h1 className="text-lg font-medium text-gray-800">Apps By Andrew</h1>
      </nav>
      <main className="flex flex-col h-full">
        <section className="px-6 py-32">
          <h1 className="text-6xl font-medium bg-gradient-to-r from-teal-400 to-rose-300 text-transparent bg-clip-text tracking-tight pb-1 via-blue-400">
            Software for Pet Care.
          </h1>
          <p className="mt-8 text-xl text-gray-500 font-semibold leading-tight">
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

        <section className="bg-gray-100 py-16">
          <div className="px-6">
            <h2 className="font-semibold text-5xl">Hi, I'm</h2>
            <h2 className="mt-1.5 font-bold text-6xl">Andrew!</h2>
          </div>
          <div className="mt-8 mx-6 relative h-96">
            <Image
              src="/andrew.jpg"
              fill
              alt="BK Devs Team Photo"
              style={{ objectFit: 'cover' }}
              priority
              sizes="(max-width: 1280px) 336px"
              // placeholder="blur"
            />
          </div>
          <div className="w-full px-6 mt-6">
            <LogoCloud logos={LOGOS} />
          </div>
          <p className="mt-4 font-medium text-gray-600 text-2xl px-6">
            Since 2014, I worked as a software engineer at tech giants like
            Instacart, Thumbtack, & Lyft.
          </p>
        </section>

        <section className="bg-teal-500 px-6 py-16">
          <h3 className="text-white font-medium text-4xl">code + pets = ❤️</h3>
          <p className="text-white mt-6 text-lg">
            Working for Big Tech was necessary to earn my programming expertise,
            but now I'm following my passion.
          </p>
        </section>

        <section className="px-6 py-20 text-center">
          <p className="font-medium text-lg text-gray-600">
            My software solutions are for
          </p>
          <h2 className="text-xl font-semibold bg-gradient-to-r from-red-400 to-amber-300 text-transparent bg-clip-text">
            Groomers, Vets, Walkers, Sitters, & Kennel owners.
          </h2>
          <div
            className="w-full relative mx-auto mt-14"
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

        <section className="bg-gray-100 px-6 py-14">
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

        <section className="flex flex-col justify-center my-24 px-6 pb-32">
          <div className="flex sm:flex-row flex-col">
            <div className="flex-1 shrink">
              <h2 className="md:text-6xl text-5xl font-semibold">
                Eager to learn more?
              </h2>

              <h2 className="text-xl md:text-2xl mt-4 text-gray-500">
                Request a free 15-minute consultation where we can diagnose your
                software needs.
              </h2>
            </div>

            <div className="sm:max-w-xs sm:ml-24 mt-10 sm:mt-0">
              <ContactForm />
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
