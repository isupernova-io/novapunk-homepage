import React from "react";
import Image from "next/image";
import growthChartImg from "@/assets/images/other/growth-chart.png";

const GrowthChart = () => {
  return (
    <section className="size-full lg:px-7.5 md:px-5 px-4 overflow-hidden">
      <div className="container relative z-10 border-default-100 lg:py-30 py-16">
        <div className="max-w-135 mx-auto px-12.5 mb-12.5">
          <div className="space-y-2.5 mb-10 text-center">
            <div className="py-1.5 px-4 border-2 border-default-200 text-primary text-xs uppercase font-semibold rounded-full inline-flex items-center justify-center">
              Instant AI, Seamlessly Integrated
            </div>

            <h2 className="lg:text-[52px] md:text-[42px] text-[36px]">
              Ready-made tools{" "}
              <span className="text-default-500">for every use case</span>
            </h2>

            <p>
              Create blogs, ads, and emails in seconds with&nbsp;
              <span className="text-default-950">50+ templates.</span>
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 border-y-2 border-default-100 divide-x-2 divide-y-2 divide-default-100">
          <div className="relative p-6 bg-default-950 border-b-0">
            <Image
              src={growthChartImg}
              loading="lazy"
              alt="Element Image"
              className="w-full h-auto"
            />

            <div className="decoration">
              <span className="decoration-top"></span>
              <span className="decoration-bottom"></span>
            </div>
          </div>

          <div className="relative lg:p-12.5 md:p-7.5 p-5">
            <div className="space-y-15">
              <div className="space-y-2.5">
                <h2 className="lg:text-4xl text-2xl">Marketing Content</h2>
                <p>
                  Create persuasive ad copy, landing page sections, and punchy{" "}
                  <span className="text-default-950">calls-to-action</span>{" "}
                  that grab attention and drive clicks while staying aligned
                  with your{" "}
                  <span className="text-default-950">campaign goals.</span>
                </p>
                <p>
                  <span className="text-default-950">Launch faster</span> with
                  messaging that your audience understands.
                </p>
              </div>

              <div className="bg-default-950 p-7.5 rounded space-y-2.5">
                <h3 className="text-xl text-primary font-bold">70% faster</h3>
                <p className="text-default-400"><span className="text-white">Reduced time</span> for ads &amp; emails using the AI to speed up content without sacrificing <span className="text-white">quality.</span></p>
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
};

export default GrowthChart;
