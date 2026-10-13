import React from "react";
import Image from "next/image";
import dashboardImg from "@/assets/images/other/dashboard.png";

const DashboardPreview = () => {
  return (
    <section className="size-full lg:px-7.5 md:px-5 px-4 overflow-hidden">
      <div className="container relative z-10 lg:py-30 py-16">
        <div className="max-w-135 mx-auto px-12.5 mb-12.5">
          <div className="space-y-2.5 mb-10 text-center">
            <div className="py-1.5 px-4 border-2 border-default-200 text-primary text-xs uppercase font-semibold rounded-full inline-flex items-center justify-center">
              Write Anywhere, Anytime
            </div>

            <h2 className="lg:text-[52px] md:text-[42px] text-[36px]">
              AI writing that{" "}
              <span className="text-default-500">works everywhere</span>
            </h2> 
          </div>
        </div>

        <div className="flex border-y-2 border-default-100 bg-default-100">
          <div className="min-h-full min-w-15 rounded-lg bg-white border-x border-x-default-100 bg-[repeating-linear-gradient(315deg,var(--color-default-100)_0,var(--color-default-100)_1px,transparent_0,transparent_50%)] bg-size-[10px_10px]"></div>

          <div>
            <Image src={dashboardImg} className="w-full h-auto" alt="Dashboard" />
          </div>

          <div className="min-h-full min-w-15 rounded-lg bg-white border-x border-x-default-100 bg-[repeating-linear-gradient(315deg,var(--color-default-100)_0,var(--color-default-100)_1px,transparent_0,transparent_50%)] bg-size-[10px_10px]"></div>
        </div>
      </div>
    </section>
  );
}

export default DashboardPreview;
