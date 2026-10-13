import React from "react";
import { Icon } from "@iconify/react";
import VideoPlayer from "./VideoPlayer";

const Features = () => {
  return (
    <section
      className="size-full lg:px-7.5 md:px-5 px-4 overflow-hidden bg-default-950"
      id="features"
    >
      <div className="container relative z-10 border-default-800 lg:py-30 py-16">
        <div className="px-12.5 mb-12.5">
          <div className="grid md:grid-cols-2 gap-5">
            <div>
              <div className="space-y-2.5 md:text-start text-center">
                <div className="py-1.5 px-4 border border-default-800 text-primary text-xs uppercase font-semibold rounded-full inline-flex items-center justify-center">
                  Write faster, not harder
                </div>

                <h2 className="text-white lg:text-[52px] md:text-[42px] text-[36px]">
                  Powerful features{" "}
                  <span className="text-default-500">that supercharge</span>
                </h2>
              </div>
            </div>

            <div className="max-w-62 md:me-0 mx-auto md:text-end text-center md:place-self-end">
              Generate <span className="text-white">high-quality</span>{" "}
              content, from blogs to product pages.
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 border-y-2 border-default-800 divide-x-2 divide-y-2 divide-default-800">
          {/* Feature 1 */}
          <div className="relative lg:p-12.5 md:p-7.5 p-5">
            <div className="mb-12.5 size-10 bg-default-800 flex items-center justify-center">
              <Icon icon="tabler:text-plus" className="size-7 text-primary" />
            </div>

            <div className="feature-info">
              <h3 className="text-xl text-white mb-2.5">
                Long-Form Content Writer
              </h3>
              <p className="text-default-400">
                Generate SEO-friendly blog posts using simple topics or
                keywords efficiently and professionally.
              </p>
            </div>

            <div className="decoration">
              <span className="decoration-top"></span>
              <span className="decoration-bottom"></span>
            </div>
          </div>

          {/* Video component */}
          <div className="md:row-span-2 border-e-0">
            <VideoPlayer />
          </div>

          {/* Feature 2 */}
          <div className="relative lg:p-12.5 md:p-7.5 p-5">
            <div className="mb-12.5 size-10 bg-default-800 flex items-center justify-center">
              <Icon icon="tabler:microphone-filled" className="size-7 text-primary" />
            </div>

            <div className="feature-info">
              <h3 className="text-xl text-white mb-2.5">
                Custom Writing Style
              </h3>
              <p className="text-default-400">
                Train AI to match your tone, style, audience, and content
                goals perfectly.
              </p>
            </div>

            <div className="decoration">
              <span className="decoration-top"></span>
              <span className="decoration-bottom"></span>
            </div>
          </div>

          {/* Feature 3 */}
          <div className="relative lg:p-12.5 md:p-7.5 p-5 md:border-b-0 border-b-2 md:border-e-2 border-e-0">
            <div className="mb-12.5 size-10 bg-default-800 flex items-center justify-center">
              <Icon icon="tabler:world" className="size-7 text-primary" />
            </div>

            <div className="feature-info">
              <h3 className="text-xl text-white mb-2.5">
                Multi-Language Support
              </h3>
              <p className="text-default-400">
                Generate content in 30+ languages with tone awareness
                accurately and smoothly.
              </p>
            </div>

            <div className="decoration">
              <span className="decoration-top"></span>
              <span className="decoration-bottom"></span>
            </div>
          </div>

          {/* Feature 4 */}
          <div className="relative lg:p-12.5 md:p-7.5 p-5 md:col-span-1 col-span-2">
            <div className="mb-12.5 size-10 bg-default-800 flex items-center justify-center">
              <Icon icon="tabler:loader" className="size-7 text-primary" />
            </div>

            <div className="feature-info">
              <h3 className="text-xl text-white mb-2.5">
                Content Rewriter & Improver
              </h3>
              <p className="text-default-400">
                Rewrite and enhance existing content to improve clarity, tone,
                and engagement instantly.
              </p>
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

export default Features;
