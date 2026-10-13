import React from "react";
import bgPatternSmall from "@/assets/images/other/bg-pattern-small.png";
import Image from "next/image";

const StepByStep = () => {
  return (
    <section className="size-full lg:px-7.5 md:px-5 px-4 overflow-hidden">
      <div className="container relative z-10 border-default-100 lg:py-30 py-16">
        <div className="px-12.5 mb-12.5">
          <div className="grid md:grid-cols-2 gap-5">
            <div>
              <div className="space-y-2.5 md:text-start text-center">
                <div className="py-1.5 px-4 border-2 border-default-200 text-primary text-xs uppercase font-semibold rounded-full inline-flex items-center justify-center">
                  AI That's Effortless to Use
                </div>

                <h2 className="lg:text-[52px] md:text-[42px] text-[36px]">
                  From idea to publish{" "}
                  <span className="text-default-500">in seconds</span>
                </h2>
              </div>
            </div>

            <div className="max-w-62 md:me-0 mx-auto md:text-end text-center md:place-self-end">
              Generate <span className="text-default-950">high-quality</span>{" "}
              content, from blogs to product pages.
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 grid-cols-2 border-y-2 border-default-100 divide-x-2 divide-y-2 divide-default-100">
          <div className="relative lg:p-12.5 md:p-7.5 p-5">
            <div className="mb-22.5 relative p-1.5 inline-flex items-center justify-center">
              <h2 className="bg-default-950 text-white rounded text-xl size-10 inline-flex items-center justify-center">
                01
              </h2>
              <div className="decoration">
                <span className="decoration-top"></span>
                <span className="decoration-bottom"></span>
              </div>
            </div>

            <h3 className="text-xl mb-2.5">Pick a template</h3>
            <p>
              Create with{" "}
              <span className="text-default-950">50+ templates</span> for
              every content type.
            </p>

            <div className="decoration">
              <span className="decoration-top"></span>
              <span className="decoration-bottom"></span>
            </div>
          </div>

          <div className="relative lg:p-12.5 md:p-7.5 p-5 bg-default-100">
            <div className="mb-22.5 relative p-1.5 inline-flex items-center justify-center">
              <h2 className="bg-default-950 text-white rounded text-xl size-10 inline-flex items-center justify-center">
                02
              </h2>
              <div className="decoration">
                <span className="decoration-top"></span>
                <span className="decoration-bottom"></span>
              </div>
            </div>

            <h3 className="text-xl mb-2.5">Add your input</h3>
            <p>
              <span className="text-default-950">Enter a topic,</span> a few
              keywords, or a product description.
            </p>

            <div className="decoration">
              <span className="decoration-top"></span>
              <span className="decoration-bottom"></span>
            </div>
          </div>

          <div className="hidden md:flex relative">
            <Image
              src={bgPatternSmall}
              alt="Decoration"
              className="size-full object-cover"
            />
            <div className="decoration">
              <span className="decoration-top"></span>
              <span className="decoration-bottom"></span>
            </div>
          </div>

          <div className="hidden md:flex relative border-b-0">
            <div className="min-h-full min-w-full rounded-lg bg-white border-x border-x-default-100 bg-[repeating-linear-gradient(-45deg,var(--color-default-100)_0,var(--color-default-100)_1px,transparent_0,transparent_50%)] bg-size-[10px_10px]"></div>
            <div className="decoration">
              <span className="decoration-top"></span>
              <span className="decoration-bottom"></span>
            </div>
          </div>

          <div className="relative lg:p-12.5 md:p-7.5 p-5 border-b-0 bg-primary border-e-transparent">
            <div className="mb-22.5 relative p-1.5 inline-flex items-center justify-center">
              <h2 className="bg-white text-default-950 text-xl rounded size-10 inline-flex items-center justify-center">
                03
              </h2>
              <div className="decoration text-white">
                <span className="decoration-top"></span>
                <span className="decoration-bottom"></span>
              </div>
            </div>

            <h3 className="text-white text-xl mb-2.5">Let AI write</h3>
            <p className="text-white">
              Get multiple AI-crafted results tailored to your tone and goals.
            </p>

            <div className="decoration">
              <span className="decoration-top"></span>
              <span className="decoration-bottom"></span>
            </div>
          </div>

          <div className="relative lg:p-12.5 md:p-7.5 p-5 border-b-0 bg-default-950">
            <div className="mb-22.5 relative p-1.5 inline-flex items-center justify-center">
              <h2 className="bg-white text-default-950 text-xl rounded size-10 inline-flex items-center justify-center">
                04
              </h2>
              <div className="decoration text-white">
                <span className="decoration-top"></span>
                <span className="decoration-bottom"></span>
              </div>
            </div>

            <h3 className="text-white text-xl mb-2.5">Edit and publish</h3>
            <p className="text-default-400">
              Refine your favorite version &amp; copy it wherever you need.
            </p>

            <div className="decoration">
              <span className="decoration-top"></span>
              <span className="decoration-bottom"></span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StepByStep;
