import Testimonials from "./Testimonials";

const Testimonial2 = () => {
  return (
    <section className="size-full lg:px-7.5 md:px-5 px-4 overflow-hidden">
      <div className="container relative z-10 border-default-100 lg:py-30 py-16">
        <div className="px-12.5 mb-12.5">
          <div className="grid md:grid-cols-3 gap-5">
            <div className="md:col-span-2">
              <div className="space-y-2.5 md:text-start text-center">
                <div className="py-1.5 px-4 border-2 border-default-200 text-primary text-xs uppercase font-semibold rounded-full inline-flex items-center justify-center">
                  Real Stories, Real Results
                </div>

                <h2 className="lg:text-[52px] md:text-[42px] text-[36px]">
                  Trusted by creators,{" "}
                  <span className="text-default-500">marketers & teams</span>
                </h2>
              </div>
            </div>

            <div className="max-w-62 md:me-0 mx-auto md:text-end text-center md:place-self-end">
              Real stories from teams powered by our{" "}
              <span className="text-default-950">AI platform.</span>
            </div>
          </div>
        </div>

        <Testimonials />
      </div>
    </section>
  );
};

export default Testimonial2;
