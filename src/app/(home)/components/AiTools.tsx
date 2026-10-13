import Link from "next/link";
import { Icon } from "@iconify/react";
import Image from "next/image";
import aiChatImg from "@/assets/images/other/ai-chat.png";
import aiSpeedImg from "@/assets/images/other/ai-speed.png";

const AiTools = () => {
  return (
    <section className="size-full lg:px-7.5 md:px-5 px-4 overflow-hidden">
      <div className="container relative z-10 border-default-100 lg:py-30 py-16">
        <div className="max-w-135 mx-auto px-12.5 mb-12.5">
          <div className="space-y-2.5 mb-10 text-center">
            <div className="py-1.5 px-4 border-2 border-default-200 text-primary text-xs uppercase font-semibold rounded-full inline-flex items-center justify-center">
              Instant AI, Seamlessly Integrated
            </div>

            <h2 className="lg:text-[52px] md:text-[42px] text-[36px]">
              Built-in AI tools <span className="text-default-500">for every writer</span>
            </h2>

            <p>
              Get AI ideas, edits, and suggestions{" "}
              <span className="text-default-950">without switching</span>{" "}
              tools.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 border-y-2 border-default-100 divide-x-2 divide-y-2 divide-default-100">
          <div className="relative lg:p-12.5 md:p-7.5 p-5 order-1 md:order-0">
            <div className="space-y-15">
              <div className="space-y-2.5">
                <div className="py-1.5 px-4 border-2 border-default-200 text-primary text-xs uppercase font-semibold rounded-full inline-flex items-center justify-center">
                  Write Smarter, Not Harder
                </div>

                <h2 className="lg:text-4xl text-2xl">
                  Smarter tools for{" "}
                  <span className="text-default-500">stronger results</span>
                </h2>
              </div>

              <div className="space-y-2.5">
                <div className="flex items-center gap-2.5">
                  <Icon icon="tabler:bolt-filled" className="rotate-30 size-4" />
                  <div className="text-default-900">
                    Create content in minutes
                  </div>
                </div>
                <div className="flex items-center gap-2.5">
                  <Icon icon="tabler:palette-filled" className="size-4" />
                  <div className="text-default-900">
                    Keep writing style consistent
                  </div>
                </div>
                <div className="flex items-center gap-2.5">
                  <Icon icon="tabler:plane-tilt-filled" className="size-4" />
                  <div className="text-default-900">
                    Save time on every task
                  </div>
                </div>
              </div>

              <p>
                AI helps you create{" "}
                <span className="text-default-950">high-quality</span> content
                faster with consistent tone and clarity.
              </p>
            </div>

            <div className="decoration">
              <span className="decoration-top"></span>
              <span className="decoration-bottom"></span>
            </div>
          </div>

          <div className="relative p-6 bg-default-100 border-e-0 order-1 md:order-0">
            <Image
              src={aiChatImg}
              loading="lazy"
              alt="Element Image"
              className="w-full h-auto"
            />

            <div className="decoration">
              <span className="decoration-top"></span>
              <span className="decoration-bottom"></span>
            </div>
          </div>

          <div className="relative p-6 bg-default-100 border-b-0 order-3 md:order-2">
            <Image
              src={aiSpeedImg}
              loading="lazy"
              alt="Element Image"
              className="w-full h-auto"
            />

            <div className="decoration">
              <span className="decoration-top"></span>
              <span className="decoration-bottom"></span>
            </div>
          </div>

          <div className="relative lg:p-12.5 md:p-7.5 p-5 border-e-0 order-2 md:order-3">
            <div className="space-y-15 flex flex-col justify-between h-full">
              <div className="space-y-2.5">
                <div className="py-1.5 px-4 border-2 border-default-200 text-primary text-xs uppercase font-semibold rounded-full inline-flex items-center justify-center">
                  Built for Modern Teams
                </div>

                <h2 className="lg:text-4xl text-2xl">
                  Fast, simple, consistent{" "}
                  <span className="text-default-500">clean, reliable</span>
                </h2>

                <p>
                  From blogs to emails and ads, our{" "}
                  <span className="text-default-950">AI helps teams</span>{" "}
                  write faster, publish sooner, and scale without extra
                  effort.
                </p>
              </div>

              <div className="relative grid p-1.5">
                <Link
                  href="/contact"
                  className="py-3 px-4 text-xs uppercase inline-flex items-center justify-between gap-2 rounded bg-primary text-white font-medium transition-all duration-500 hover:bg-primary-hover"
                >
                  Start Writing Smarter{" "}
                  <Icon icon="tabler:chevron-right" className="size-4" />
                </Link>

                <div className="decoration">
                  <span className="decoration-top"></span>
                  <span className="decoration-bottom"></span>
                </div>
              </div>
            </div>

            <div className="decoration">
              <span className="decoration-top"></span>
              <span className="decoration-bottom"></span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AiTools;
