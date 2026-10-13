import React from "react";
import Image from "next/image";
import bgPatternSmall from "@/assets/images/other/bg-pattern-small.png";

const Stats = () => {
  return (
    <section className="size-full lg:px-7.5 md:px-5 px-4 overflow-hidden">
      <div className="container relative z-10 border-default-100 lg:py-30 py-16">
        <div className="px-12.5 mb-12.5">
          <div className="grid md:grid-cols-3 gap-5">
            <div className="md:col-span-2">
              <div className="space-y-2.5 md:text-start text-center">
                <div className="py-1.5 px-4 border-2 border-default-200 text-primary text-xs uppercase font-semibold rounded-full inline-flex items-center justify-center">
                  Proven Results at Scale
                </div>

                <h2 className="lg:text-[52px] md:text-[42px] text-[36px]">
                  Join thousands writing{" "}
                  <span className="text-default-500">smarter with AI</span>
                </h2>
              </div>
            </div>

            <div className="max-w-62 md:me-0 mx-auto md:text-end text-center md:place-self-end">
              <p>Trust our <span className="text-default-950">platform</span> to boost output &amp; cut writing time in half</p>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 grid-cols-2 border-y-2 border-default-100 divide-x-2 divide-y-2 divide-default-100">
          <div className="relative text-center md:flex hidden">
            <div className="min-h-full min-w-full rounded-lg bg-white border-x border-x-default-100 bg-[repeating-linear-gradient(-45deg,var(--color-default-100)_0,var(--color-default-100)_1px,transparent_0,transparent_50%)] bg-size-[10px_10px]"></div>
            <div className="decoration">
              <span className="decoration-top"></span>
              <span className="decoration-bottom"></span>
            </div>
          </div>

          <div className="relative text-center lg:p-10 p-5 bg-primary flex flex-col justify-center items-center">
            <h2 className="text-xl text-white">100K+ Users Worldwide</h2>
            <div className="decoration">
              <span className="decoration-top"></span>
              <span className="decoration-bottom"></span>
            </div>
          </div>

          <div className="relative text-center md:flex hidden">
            <Image
              src={bgPatternSmall}
              alt="Decoration"
              className="w-full h-25 object-cover"
            />
            <div className="decoration">
              <span className="decoration-top"></span>
              <span className="decoration-bottom"></span>
            </div>
          </div>

          <div className="relative text-center lg:p-10 p-5 bg-default-100 flex flex-col justify-center items-center">
            <h2 className="text-xl text-default-950">
              50M+ Words Generated{" "}
            </h2>
            <div className="decoration">
              <span className="decoration-top"></span>
              <span className="decoration-bottom"></span>
            </div>
          </div>

          <div className="relative text-center lg:p-10 p-5 flex flex-col justify-center items-center">
            <h2 className="text-xl text-default-950">70% Faster Time</h2>
            <div className="decoration">
              <span className="decoration-top"></span>
              <span className="decoration-bottom"></span>
            </div>
          </div>

          <div className="relative text-center lg:p-10 p-5 bg-default-950 flex flex-col justify-center items-center">
            <h2 className="text-xl text-white">4.9/5 Average Rating</h2>
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

export default Stats;
