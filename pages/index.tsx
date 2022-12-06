import LogoCloud from '../components/LogoCloud'
import TechStackLogoCloud from '../components/TechStackLogoCloud'
import Team from '../components/Team'
import styles from '../styles/Home.module.css'
import ContactForm from '../components/ContactForm'

export default function Home() {
  return (
    <div className="flex flex-col bg-black px-12 lg:px-32 max-w-7xl mx-auto text-white">
      <main>
        <section className="flex flex-col justify-center h-screen">
          <h1 className="lg:text-6xl md:text-4xl text-4xl font-bold">
            <span className="text-teal-400">Dev Collective</span> is a co-op of
            software engineers with deep industry experience.
          </h1>
          <div className="mt-14 w-full">
            <LogoCloud />
          </div>
        </section>

        <section className="flex flex-col justify-center mt-24">
          <h2 className="lg:text-6xl md:text-4xl text-4xl font-bold">
            We&apos;ve worked at{' '}
            <span className="text-teal-400">
              Meta, Stripe, Instacart, Lyft,
            </span>{' '}
            and <span className="text-teal-400">Instagram.</span>
          </h2>
          <h2 className="lg:text-6xl md:text-4xl text-4xl font-bold mt-24">
            And also founded companies through bootstrapping and&nbsp;
            <span className="text-teal-400">Y Combinator</span>.
          </h2>
          <h2 className="text-xl lg:text-4xl font-medium text-gray-400 mt-8">
            We understand the problems you&apos;re dealing with as a founder.
          </h2>
        </section>

        <section className="flex flex-col justify-center my-48">
          <h2 className="text-4xl text-gray-400 font-medium mt-16">
            Our Members
          </h2>
          <Team />
          <p className="text-gray-400">
            Interested in joining Dev Collective?{' '}
            <a
              href="mailto:apply@devcollective.com"
              className="text-indigo-400"
            >
              Apply here
            </a>
          </p>
        </section>
        <section className="flex flex-col justify-center mt-64">
          <h2 className="lg:text-6xl md:text-4xl text-4xl font-bold">
            We&apos;ve curated a process and tech stack that allow us to build{' '}
            <span className="text-teal-400">high quality apps, quickly</span>.
          </h2>
          <div className="mt-20 w-full">
            <TechStackLogoCloud />
          </div>
          <p className="text-gray-400 mt-10">
            React, React Native, NodeJS, TypeScript, Tailwind, NextJS, Firebase
          </p>
        </section>
        <section className="flex flex-col justify-center h-screen">
          <div className="flex sm:flex-row flex-col">
            <div className="flex-1 shrink">
              <h2 className="lg:text-6xl md:text-4xl text-4xl font-bold">
                Want to work with us?
              </h2>
              <h2 className="text-base sm:text-xl lg:text-3xl font-medium mt-4 sm:mt-12">
                <span className="text-teal-400">Dev Collective</span> exists to
                share knowledge, incubate ideas, and continue building{' '}
                <span className="text-teal-400">
                  products we&apos;re proud of
                </span>
                .
              </h2>
            </div>
            <div className="sm:max-w-xs sm:ml-24 mt-12 sm:mt-0 mx-auto">
              <ContactForm />
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
