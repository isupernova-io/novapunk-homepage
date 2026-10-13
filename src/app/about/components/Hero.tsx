import { Icon } from '@iconify/react'
import React from 'react'
import bgPattern from "@/assets/images/other/bg-pattern.png";
import Image from "next/image";

const Hero = () => {
  return (
      <>
         <section className="size-full lg:px-7.5 md:px-5 px-4 overflow-hidden">
        <div className="container lg:pt-48 lg:pb-30 md:pt-37.5 pt-32 pb-10 relative">
          <Image
            src={bgPattern}
            alt=""
            className="absolute inset-0 z-1"
          />

          <div className="relative z-10 text-center space-y-7.5">
            <div className="max-w-200 space-y-4 mx-auto">
              <div className="py-1.5 px-4 bg-white border-2 border-default-200 text-default-900 text-xs/none uppercase font-semibold rounded-full inline-flex items-center gap-2 justify-center">
                <Icon icon="tabler:circle-filled" className="text-primary" />
                <span>Who We Are</span>
              </div>

              <h1 className="lg:text-7xl md:text-[58px] text-[36px] text-center leading-[1.1em] tracking-[-0.03em]">
                Helping teams write <span className="text-default-500">smarter with AI</span>
              </h1>

              <p className="max-w-1/2 mx-auto">
                We build AI tools that make{" "}
                <span className="text-default-950">content creation</span> faster,
                easier, and more impactful for teams of all sizes.
              </p>
            </div>
          </div>
        </div>
      </section>  
      </>
  )
}

export default Hero