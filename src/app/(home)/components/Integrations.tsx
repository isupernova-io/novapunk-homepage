import React from "react";
import Link from "next/link";
import { Icon } from "@iconify/react";
import integrationImg from "@/assets/images/other/integration.svg";
import Image from "next/image";

const Integrations = () => {
  return (
    <section className="size-full lg:px-7.5 md:px-5 px-4 overflow-hidden">
      <div className="container relative z-10 border-default-100 lg:py-30 py-16">
        <div className="max-w-135 mx-auto px-12.5 mb-12.5">
          <div className="space-y-2.5 mb-10 text-center">
            <div className="py-1.5 px-4 border-2 border-default-200 text-primary text-xs uppercase font-semibold rounded-full inline-flex items-center justify-center">
              Seamlessly Connected
            </div>

            <h2 className="lg:text-[52px] md:text-[42px] text-[36px] mb-2.5">
              Works with tools{" "}
              <span className="text-default-500">you already use</span>
            </h2>

            <div className="relative inline-flex p-1.5">
              <Link
                href="/contact"
                className="py-3 px-4 text-xs uppercase inline-flex items-center justify-center gap-2 rounded bg-primary text-white font-medium transition-all duration-500 hover:bg-primary-hover"
              >
                Get Started Now{" "}
                <Icon icon="tabler:chevron-right" className="size-4" />
              </Link>

              <div className="decoration">
                <span className="decoration-top"></span>
                <span className="decoration-bottom"></span>
              </div>
            </div>
          </div>
        </div>

        <div className="px-7.5">
          <Image
            src={integrationImg}
            loading="lazy"
            alt="Element Image"
            className="w-full h-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default Integrations;
