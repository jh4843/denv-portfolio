import LottieAnimation from '@/components/lottie-animation'
import Link from 'next/link'

export default function WhoAmI() {
  return (
    <>
      <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
        <h1 className="title-font sm:text-4xl text-3xl mb-8 font-semibold text-gray-900">
          Who is Jaehyeok?
          <br className="hidden lg:inline-block" />
        </h1>
        <p className="text-slate-600 mb-8 leading-relaxed">
          1988. 02. 14. (35 Years old)
        </p>
        <p className="text-slate-500 mb-8 leading-relaxed">
          Strict father of 2 sons
        </p>
        <p className="text-slate-400 mb-8 leading-relaxed">Weak husband</p>
        <p className="text-slate-300 mb-8 leading-relaxed">SW Developer</p>
        <div className="flex justify-center">
          <Link legacyBehavior href="/projects">
            <a className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
              Go to my projects
            </a>
          </Link>
        </div>
      </div>
      <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
        <LottieAnimation></LottieAnimation>
      </div>
    </>
  )
}
