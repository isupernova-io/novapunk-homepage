import Link from "next/link";
import { Icon } from "@iconify/react";

export type PricingPlan = {
  name: string;
  description: string;
  price: string;
  period?: string;
  features: string[];
  buttonText: string;
  buttonHref: string;
  isHighlighted?: boolean;
};

export const pricingPlans: PricingPlan[] = [
  {
    name: "FREE",
    description: "Perfect for individuals getting started",
    price: "$0",
    period: "/month",
    features: [
      "Access to 50+ Templates",
      "Basic AI Writer",
      "Limited Word Count",
      "Email Support",
      "Brand Voice Customization",
      "SEO Optimization Tools",
    ],
    buttonText: "Get Started Now",
    buttonHref: "/contact",
  },
  {
    name: "PRO",
    description: "Best for solo creators and marketers",
    price: "$299",
    period: "/month",
    features: [
      "Everything in Free",
      "Unlimited Words",
      "Export to WordPress & Notion",
      "Long-Form Assistant",
      "Brand Voice Customization",
      "SEO Optimization Tools",
    ],
    buttonText: "Start 7-Day Free Trial",
    buttonHref: "/contact",
    isHighlighted: true,
  },
  {
    name: "ENTERPRISE",
    description: "For the growing teams and businesses",
    price: "Contact us",
    features: [
      "Everything in Pro",
      "5 User Seats",
      "Shared Workspaces",
      "Team Performance Analytics",
      "Priority Support",
      "SEO Optimization Tools",
    ],
    buttonText: "Contact Sales",
    buttonHref: "/contact",
  },
];

const Pricing = () => {
  return (
    <section
      className="size-full lg:px-7.5 md:px-5 px-4 overflow-hidden bg-default-950"
      id="pricing"
    >
      <div className="container relative z-10 border-default-800 lg:py-30 py-16">
        <div className="px-12.5 mb-12.5">
          <div className="grid md:grid-cols-2 gap-5">
            <div>
              <div className="space-y-2.5 md:text-start text-center">
                <div className="py-1.5 px-4 border border-default-800 text-primary text-xs uppercase font-semibold rounded-full inline-flex items-center justify-center">
                  Simple, Scalable Pricing
                </div>

                <h2 className="text-white lg:text-[52px] md:text-[42px] text-[36px]">
                  Plans that fit your{" "}
                  <span className="text-default-500">writing needs</span>
                </h2>
              </div>
            </div>

            <div className="max-w-62 md:me-0 mx-auto md:text-end text-center md:place-self-end">
              <p>
                <span className="text-white">Simple pricing</span> with
                powerful tools to help you write faster
              </p>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3">
          {pricingPlans.map((plan, index) => (
            <div
              key={index}
              className={`relative ${
                plan.isHighlighted
                  ? "border-2 border-primary"
                  : "border-y-2 border-default-800"
              }`}
            >
              <div
                className={`relative p-7.5 border-b-2 ${
                  plan.isHighlighted ? "border-primary" : "border-default-800"
                }`}
              >
                <h3
                  className={`text-xl mb-2.5 ${
                    plan.isHighlighted ? "text-primary" : "text-white"
                  }`}
                >
                  {plan.name}
                </h3>
                <div className="text-default-400">{plan.description}</div>
                <div className="decoration">
                  <span className="decoration-bottom"></span>
                </div>
              </div>

              <div className="p-7.5">
                <div className="space-y-5">
                  <div className="flex items-center gap-1 text-default-400">
                    <h4
                      className={`text-4xl ${
                        plan.isHighlighted ? "text-primary" : "text-white font-bold"
                      }`}
                    >
                      {plan.price}
                    </h4>
                    {plan.period && <div>{plan.period}</div>}
                  </div>

                  <div
                    className={`space-y-2.5 text-default-400 ${
                      plan.isHighlighted ? "*:[&>svg]:text-primary" : ""
                    }`}
                  >
                    <div className="text-white">What's included:</div>

                    {plan.features.map((feature, featureIdx) => (
                      <div key={featureIdx} className="flex items-center gap-2.5">
                        <Icon icon="tabler:circle-check-filled" className="size-4" />
                        <div>{feature}</div>
                      </div>
                    ))}
                  </div>

                  <div className="grid">
                    <Link
                      href={plan.buttonHref}
                      className={`py-3 px-4 text-xs uppercase inline-flex items-center justify-between gap-2 rounded font-medium transition-all duration-500 ${
                        plan.isHighlighted
                          ? "bg-primary text-white hover:bg-primary-hover"
                          : "bg-white text-default-950 hover:bg-default-100"
                      }`}
                    >
                      {plan.buttonText}{" "}
                      <Icon icon="tabler:chevron-right" className="size-4" />
                    </Link>
                  </div>
                </div>
              </div>

              <div className="decoration">
                <span className="decoration-top"></span>
                <span className="decoration-bottom"></span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
