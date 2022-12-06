import { ChevronDownIcon } from '@heroicons/react/20/solid'
import addWeeks from 'date-fns/addWeeks'
import format from 'date-fns/format'

export default function ContactForm() {
  const today = new Date()
  const in8Weeks = addWeeks(today, 8)
  const in13Weeks = addWeeks(today, 13)
  const in26Weeks = addWeeks(today, 26)

  return (
    <form className="w-full">
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
              type="text"
              id="name"
              name="name"
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
        className="block text-base font-medium text-gray-300 mt-2"
      >
        Email
      </label>
      <div className="relative mt-1.5">
        <input
          type="text"
          id="email"
          name="email"
          className="block w-full appearance-none rounded-md border border-transparent bg-gray-700  py-2 pl-3 pr-10 text-base text-white focus:border-white focus:outline-none focus:ring-1 focus:ring-white sm:text-sm"
        ></input>
      </div>

      <div className="flex flex-row mt-2">
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
              defaultValue="United States (USD)"
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
              id="budget"
              name="budget"
              className="block w-full appearance-none rounded-md border border-transparent bg-gray-700  py-2 pl-3 pr-10 text-base text-white focus:border-white focus:outline-none focus:ring-1 focus:ring-white sm:text-sm"
              defaultValue="$75K - $150K"
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
        className="block text-base font-medium text-gray-300 mt-2"
      >
        Timeline
      </label>
      <div className="relative mt-1.5">
        <select
          id="timeline"
          name="timeline"
          className="block w-full appearance-none rounded-md border border-transparent bg-gray-700  py-2 pl-3 pr-10 text-base text-white focus:border-white focus:outline-none focus:ring-1 focus:ring-white sm:text-sm"
          defaultValue="ASAP"
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
          Get started
        </button>
      </div>
    </form>
  )
}
