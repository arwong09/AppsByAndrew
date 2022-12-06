export default function TechStackLogoCloud() {
  return (
      <div className="w-full">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-6 lg:grid-cols-6">
          <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
            <img
              className="h-12"
              src="/React-icon.svg.png"
              alt="React"
            />
          </div>
          <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
            <img
              className="h-12"
              src="/Typescript_logo_2020.svg"
              alt="TypeScript"
            />
          </div>
          <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
            <img
              className="h-12"
              src="/Tailwind_CSS_logo.svg"
              alt="Tailwind"
            />
          </div>
          <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
            <img
              className="h-12"
              src="/firebase-logomark.svg"
              alt="Firebase"
            />
          </div>
          <div className="col-span-1 flex justify-center md:col-span-3 lg:col-span-1">
            <img
              className="h-12"
              src="/Nextjs-logo.svg"
              alt="NextJS"
            />
          </div>
          <div className="col-span-2 flex justify-center md:col-span-3 lg:col-span-1">
            <img className="h-12" src="/Node.js_logo.svg" alt="NodeJS" />
          </div>
        </div>
      </div>
  );
}
