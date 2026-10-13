import { Icon } from "@iconify/react"
import Link from "next/link"

const SupportFaq = () => {
  return (
    <>
      <section className="size-full lg:px-7.5 md:px-5 px-4 overflow-hidden">
        <div className="container relative z-10 lg:py-30 py-16">
          <div className="grid md:grid-cols-2 border-y-2 border-default-100">

            <div className="py-7.5 px-10 bg-default-100">
              <h2 className="text-xl mb-2.5">Visit Help Center</h2>
              <p className="mb-7.5">Browse tutorials, guides, and articles to get the most out of our AI tools</p>

              <Link href="/contact" className="py-3 px-4 text-xs uppercase inline-flex items-center justify-center gap-2 rounded bg-white text-default-950 font-medium">
                Visit Help Center <Icon icon="tabler:chevron-right" className="size-4"></Icon>
              </Link>
            </div>

            <div className="py-7.5 px-10">
              <h2 className="text-xl mb-2.5">Frequently Asked Questions</h2>
              <p className="mb-7.5">Find quick answers to the most common questions about our platform</p>

              <Link href="/contact" className="py-3 px-4 text-xs uppercase inline-flex items-center justify-center gap-2 rounded bg-default-950 text-white font-medium">
                Visit FAQs <Icon icon="tabler:chevron-right" className="size-4"></Icon>
              </Link>
            </div>

          </div>
        </div>
      </section>
    </>
  )
}

export default SupportFaq