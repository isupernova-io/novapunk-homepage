
import Link from "next/link";
import { Icon } from "@iconify/react";
import FaqAccordion, { FaqType } from "./FaqAccordion";
import bgPattern from "@/assets/images/other/bg-pattern.png";

const faqData: FaqType[] = [
  {
    question: "How does the AI generate content?",
    answer: "It uses advanced language models trained on vast datasets to understand your input and generate high-quality, human-like copy instantly.",
  },
  {
    question: "Is the content original and plagiarism-free?",
    answer: "Yes. The AI generates content from scratch rather than copying existing sources. Each piece is unique, and you can also use built-in plagiarism checkers to ensure complete originality.",
  },
  {
    question: "Can I train the AI to match my tone or brand voice?",
    answer: "Absolutely. You can customize the AI by providing examples of your writing style, tone, or brand guidelines. Over time, the AI adapts to produce content that reflects your unique brand voice.",
  },
  {
    question: "Do I need writing experience to use it?",
    answer: "Not at all. The tool is designed for everyone—from beginners to professionals. Even if you don’t have writing experience, the AI helps you structure, refine, and polish your content with ease.",
  },
  {
    question: "Which languages are supported?",
    answer: "The AI supports multiple languages, including English, Spanish, French, German, Portuguese, Italian, Dutch, Chinese, Japanese, Korean, Hindi, and many more. Support for additional languages continues to expand.",
  },
];

const Faq = () => {
  return (
    <section
      className="size-full lg:px-7.5 md:px-5 px-4 overflow-hidden"
      id="faqs"
    >
      <div className="container relative z-10 border-default-100 lg:py-30 py-16">
        <div className="max-w-135 mx-auto px-12.5 mb-12.5">
          <div className="space-y-2.5 mb-10 text-center">
            <div className="py-1.5 px-4 border-2 border-default-200 text-primary text-xs uppercase font-semibold rounded-full inline-flex items-center justify-center">
              Got Questions?
            </div>

            <h2 className="lg:text-[52px] md:text-[42px] text-[36px]">
              We've got <span className="text-default-500">answers</span>
            </h2>

            <p>
              <span className="text-default-950">Everything</span> you need to
              know about getting started.{" "}
            </p>
          </div>
        </div>

        <div className="relative border-y-2 border-default-100">
          <div className="lg:w-178 mx-auto relative z-10">
            <div className="relative divide-y-2 divide-default-100">
              <FaqAccordion items={faqData} />

              <div className="relative p-10 bg-default-100 text-center">
                <h2 className="text-xl mb-2.5">Still have questions?</h2>
                <p className="mb-5">
                  Need help? Our team is here with{" "}
                  <span className="text-default-950">answers anytime.</span>
                </p>

                <div className="relative inline-flex p-1.5">
                  <Link
                    href="/contact"
                    className="py-3 px-4 text-xs uppercase inline-flex items-center justify-center gap-2 rounded bg-primary text-white font-medium transition-all duration-500 hover:bg-primary-hover"
                  >
                    Contact Support{" "}
                    <Icon icon="tabler:chevron-right" className="size-4" />
                  </Link>

                  <div className="decoration">
                    <span className="decoration-top"></span>
                    <span className="decoration-bottom"></span>
                  </div>
                </div>

                <div className="decoration">
                  <span className="decoration-top"></span>
                  <span className="decoration-bottom"></span>
                </div>
              </div>
            </div>
          </div>

          <div 
            style={{ backgroundImage: `url(${bgPattern})` }}
            className="size-full absolute top-0 left-0 object-cover bg-repeat bg-contain bg-fixed bg-position-[50%] opacity-20 pointer-events-none"
          ></div>
        </div>
      </div>
    </section>
  );
};

export default Faq;
