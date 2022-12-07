import addWeeks from 'date-fns/addWeeks'
import format from 'date-fns/format'
import { FormEvent, useState } from 'react'
import { addDoc, collection } from 'firebase/firestore'
import firestore from '../utils/firebase'
import { useRouter } from 'next/router'

export default function ContactForm() {
  const router = useRouter()
  const [name, setName] = useState<string>('')
  const [email, setEmail] = useState<string>('')
  const [phone, setPhone] = useState<string>('')
  const [projectType, setProjectType] = useState<string>('Mobile App')
  const [budget, setBudget] = useState<string>('$75K - $150K')
  const [timeline, setTimeline] = useState<string>('ASAP')
  const today = new Date()
  const in8Weeks = addWeeks(today, 8)
  const in13Weeks = addWeeks(today, 13)
  const in26Weeks = addWeeks(today, 26)

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const collectionRef = collection(firestore, '/leads')
    addDoc(collectionRef, {
      name,
      email,
      phone,
      projectType,
      budget,
      timeline,
    })
    router.push('/success')
  }

  return (
    <form className="w-full" onSubmit={handleSubmit}>
      <div className="flex flex-row">
        <div className="grow">
          <label
            htmlFor="name"
            className="block text-base font-medium text-gray-300"
          >
            Name
          </label>
          <div className="relative mt-1.5 mr-1">
            <input
              onChange={(e) => setName(e.currentTarget.value)}
              type="text"
              id="name"
              name="name"
              value={name}
              className="block w-full appearance-none rounded-md border border-transparent bg-gray-700  py-2 pl-3 pr-10 text-base text-white focus:border-white focus:outline-none focus:ring-1 focus:ring-white sm:text-sm"
            ></input>
          </div>
        </div>
        <div className="grow">
          <label
            htmlFor="phone"
            className="block text-base font-medium text-gray-300"
          >
            Phone
          </label>
          <div className="relative mt-1.5 ml-1">
            <input
              onChange={(e) => setPhone(e.currentTarget.value)}
              value={phone}
              type="text"
              id="Phone"
              name="Phone"
              className="block w-full appearance-none rounded-md border border-transparent bg-gray-700  py-2 pl-3 pr-10 text-base text-white focus:border-white focus:outline-none focus:ring-1 focus:ring-white sm:text-sm"
            ></input>
          </div>
        </div>
      </div>
      <label
        htmlFor="email"
        className="block text-base font-medium text-gray-300 mt-4"
      >
        Email
      </label>
      <div className="relative mt-1.5 mr-1">
        <input
          onChange={(e) => setEmail(e.currentTarget.value)}
          value={email}
          type="email"
          id="email"
          name="email"
          className="block w-full appearance-none rounded-md border border-transparent bg-gray-700  py-2 pl-3 pr-10 text-base text-white focus:border-white focus:outline-none focus:ring-1 focus:ring-white sm:text-sm"
        />
      </div>

      <div className="flex flex-row mt-4">
        <div className="grow">
          <label
            htmlFor="currency"
            className="block text-base font-medium text-gray-300"
          >
            Project Type
          </label>
          <div className="relative mt-1.5 mr-1">
            <select
              id="type"
              name="type"
              className="block w-full appearance-none rounded-md border border-transparent bg-gray-700  py-2 pl-3 pr-10 text-base text-white focus:border-white focus:outline-none focus:ring-1 focus:ring-white sm:text-sm"
              onChange={(e) => setProjectType(e.currentTarget.value)}
              value={projectType}
            >
              <option>Mobile App</option>
              <option>Web App</option>
              <option>Other</option>
            </select>
          </div>
        </div>
        <div className="grow">
          <label
            htmlFor="budget"
            className="block text-base font-medium text-gray-300"
          >
            Budget
          </label>
          <div className="relative mt-1.5 ml-1">
            <select
              onChange={(e) => setBudget(e.currentTarget.value)}
              value={budget}
              id="budget"
              name="budget"
              className="block w-full appearance-none rounded-md border border-transparent bg-gray-700  py-2 pl-3 pr-10 text-base text-white focus:border-white focus:outline-none focus:ring-1 focus:ring-white sm:text-sm"
            >
              <option>Less than $75K</option>
              <option>$75K - $150K</option>
              <option>$150K - $300K</option>
              <option>$300K+</option>
            </select>
          </div>
        </div>
      </div>

      <label
        htmlFor="timeline"
        className="block text-base font-medium text-gray-300 mt-4"
      >
        Timeline
      </label>
      <div className="relative mt-1.5">
        <select
          id="timeline"
          name="timeline"
          className="block w-full appearance-none rounded-md border border-transparent bg-gray-700  py-2 pl-3 pr-10 text-base text-white focus:border-white focus:outline-none focus:ring-1 focus:ring-white sm:text-sm"
          value={timeline}
          onChange={(e) => setTimeline(e.currentTarget.value)}
        >
          <option>ASAP</option>
          <option>(8 weeks) - deliver by {format(in8Weeks, 'MMM d')} </option>
          <option>(13 weeks) - deliver by {format(in13Weeks, 'MMM d')} </option>
          <option>(26 weeks) - deliver by {format(in26Weeks, 'MMM d')} </option>
        </select>
      </div>
      <div className="text-right sm:col-span-2 mt-4">
        <button
          type="submit"
          className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        >
          Contact Us
        </button>
      </div>
    </form>
  )
}
