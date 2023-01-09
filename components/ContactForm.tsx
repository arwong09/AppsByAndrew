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
  const [budget, setBudget] = useState<string>('$2k - $5k')
  const [timeline, setTimeline] = useState<string>('ASAP')
  const today = new Date()

  const inXWeeks = (weeks: number) => addWeeks(today, weeks)

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
            htmlFor="email"
            className="block text-base font-medium text-gray-600"
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
              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500 sm:text-sm"
            />
          </div>
        </div>
      </div>
      <div className="flex flex-row mt-4">
        <div className="grow">
          <label
            htmlFor="name"
            className="block text-base font-medium text-gray-600"
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
              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500 sm:text-sm"
            />
          </div>
        </div>
        <div className="grow w-1/2">
          <label
            htmlFor="phone"
            className="block text-base font-medium text-gray-600"
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
              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500 sm:text-sm"
            ></input>
          </div>
        </div>
      </div>

      <div className="flex flex-row mt-4">
        <div className="grow">
          <label
            htmlFor="budget"
            className="block text-base font-medium text-gray-600"
          >
            Budget
          </label>
          <div className="relative mt-1.5 ml-1">
            <select
              onChange={(e) => setBudget(e.currentTarget.value)}
              value={budget}
              id="budget"
              name="budget"
              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500 sm:text-sm"
            >
              <option>Less than $2k</option>
              <option>$2k - $5k</option>
              <option>$5k - $25k</option>
              <option>$25k+</option>
            </select>
          </div>
        </div>
        <div className="grow ml-2">
          <label
            htmlFor="Timeline"
            className="block text-base font-medium text-gray-600"
          >
            Timeline
          </label>
          <div className="relative mt-1.5">
            <select
              id="timeline"
              name="timeline"
              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500 sm:text-sm"
              value={timeline}
              onChange={(e) => setTimeline(e.currentTarget.value)}
            >
              <option>ASAP</option>
              <option>
                (4 weeks) - deliver by {format(inXWeeks(4), 'MMM d')}{' '}
              </option>
              <option>
                (8 weeks) - deliver by {format(inXWeeks(8), 'MMM d')}{' '}
              </option>
              <option>
                (13 weeks) - deliver by {format(inXWeeks(13), 'MMM d')}{' '}
              </option>
            </select>
          </div>
        </div>
      </div>

      <div className="text-right sm:col-span-2 mt-10">
        <button
          type="submit"
          className="inline-flex justify-center rounded-md border border-transparent bg-teal-500 py-3 px-6 text-base font-medium text-white shadow-sm hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-400 focus:ring-offset-2"
        >
          Request Free Consultation
        </button>
      </div>
    </form>
  )
}
