
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function Donate() {
  return (
    <>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-950 dark:bg-gray-950">
        <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
          <div className="space-y-3">
            <h2 className="text-3xl font-bold tracking-tighter text-gray-50 md:text-4xl/tight">
              Support Our Machine Learning Mission
            </h2>
            <p className="mx-auto max-w-[600px] text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Your donation will help us continue developing cutting-edge machine learning models and tools to empower
              our users.
            </p>
          </div>
          <div className="mx-auto w-full max-w-sm space-y-2">
            <div className="grid grid-cols-3 gap-2">
              <Button className="w-full bg-gray-800 hover:bg-gray-700 text-gray-50">$25</Button>
              <Button className="w-full bg-gray-800 hover:bg-gray-700 text-gray-50">$50</Button>
              <Button className="w-full bg-gray-800 hover:bg-gray-700 text-gray-50">$100</Button>
            </div>
            <Button className="w-full bg-[#4CAF50] hover:bg-[#45a049] text-gray-50">Donate Now</Button>
            <p className="text-xs text-gray-400 dark:text-gray-400">
              All donations are tax-deductible.
              <Link className="underline underline-offset-2 text-gray-400" href="#">
                Terms & Conditions
              </Link>
            </p>
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-950 dark:bg-gray-950">
        <div className="container grid items-center justify-center gap-4 px-4 md:px-6 lg:grid-cols-2 lg:gap-10">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-gray-800 px-3 py-1 text-sm text-gray-50">Donation Impact</div>
            <h2 className="text-3xl font-bold tracking-tighter text-gray-50 md:text-4xl/tight">
              How Your Donation Makes a Difference
            </h2>
            <p className="max-w-[600px] text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Your donation will directly support the development and maintenance of our machine learning models and
              tools, helping us to continuously improve and expand our offerings.
            </p>
          </div>
          <div className="grid gap-6">
            <div className="grid gap-1">
              <h3 className="text-xl font-bold text-gray-50">$25 Donation</h3>
              <p className="text-gray-400 dark:text-gray-400">
                Covers the cost of hosting and serving one of our machine learning models for a month, ensuring it's
                available to our users.
              </p>
            </div>
            <div className="grid gap-1">
              <h3 className="text-xl font-bold text-gray-50">$50 Donation</h3>
              <p className="text-gray-400 dark:text-gray-400">
                Funds the development and testing of a new feature or model improvement, helping us to continuously
                enhance our platform.
              </p>
            </div>
            <div className="grid gap-1">
              <h3 className="text-xl font-bold text-gray-50">$100 Donation</h3>
              <p className="text-gray-400 dark:text-gray-400">
                Supports our team of machine learning engineers and researchers, allowing us to dedicate more time to
                innovation and problem-solving.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
