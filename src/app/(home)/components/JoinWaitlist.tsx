
import Link from "next/link";
import { Icon } from "@iconify/react";
import rocketImg from "@/assets/images/other/rocket.png";
import Image from "next/image";

const JoinWaitlist = () => {
  return (
    <section className="size-full lg:px-7.5 md:px-5 px-4 overflow-hidden">
      <div className="container relative z-10 lg:py-30 py-16">
        <div className="grid md:grid-cols-3 border-y-2 border-default-100 divide-x-2 divide-default-100">
          <div className="md:col-span-2">
            <div className="relative lg:p-12.5 md:p-7.5 p-5">
              <div className="space-y-2.5">
                <div className="py-1.5 px-4 border-2 border-default-200 text-primary text-xs uppercase font-semibold rounded-full inline-flex items-center justify-center">
                  Proven Results at Scale
                </div>

                <h2 className="lg:text-[52px] md:text-[42px] text-[36px]">Join thousands writing <span className="text-default-500">smarter with AI</span></h2>

                <p className="no-margin-bottom">Join thousands writing faster and better with AI.</p>

                <div>
                  <div className="inline-flex items-center gap-5">
                    <Link href="/contact" className="py-3 px-4 text-xs uppercase inline-flex items-center justify-center gap-2 rounded bg-primary text-white font-medium transition-all duration-500 hover:bg-primary-hover">
                      Start 7-Day Free Trial <Icon icon="tabler:chevron-right" className="size-4"></Icon>
                    </Link>

                    <Link href="/contact" className="py-3 px-4 text-xs uppercase text-default-950 inline-flex items-center justify-center gap-2">
                      Book a Demo <Icon icon="tabler:chevron-right" className="size-4"></Icon>
                    </Link>
                  </div>
                </div>
              </div>

              <div className="decoration">
                <span className="decoration-top"></span>
                <span className="decoration-bottom"></span>
              </div>
            </div>
          </div>

          <div className="relative p-6 bg-default-950 h-full">
            <Image src={rocketImg} loading="lazy" alt="Element Image" className="w-full h-auto" />

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

export default JoinWaitlist;
