"use client";

import { useState } from "react";
import { Icon } from "@iconify/react";

export type FaqType = {
  question: string;
  answer: string;
}

export type FaqAccordionProps = {
  items: FaqType[];
}

const FaqAccordion = ({ items }: FaqAccordionProps) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    if (activeIndex === index) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  };

  return (
    <div className="bg-white border-2 border-default-100 divide-y-2 divide-default-100">
      {items.map((item, idx) => {
        const isOpen = activeIndex === idx;
        return (
          <div
            key={idx}
            className={`transition-colors duration-500 py-5 px-7.5 ${
              isOpen ? "bg-default-950 text-white" : "bg-white text-default-950"
            }`}
          >
            <button
              onClick={() => toggleAccordion(idx)}
              className="w-full flex justify-between items-center gap-2.5 text-start cursor-pointer focus:outline-hidden"
              aria-expanded={isOpen}
            >
              <h3
                className={`text-xl transition-colors duration-500 ${
                  isOpen ? "text-white" : "text-default-950"
                }`}
              >
                {item.question}
              </h3>

              <div className="size-7.5 flex items-center justify-center">
                <Icon
                  icon="tabler:plus"
                  className={`size-5 transition-transform duration-500 ${
                    isOpen ? "rotate-45 text-white" : "text-default-950"
                  }`}
                />
              </div>
            </button>

            <div
              className={`overflow-hidden transition-all duration-300 ${
                isOpen ? "max-h-40 opacity-100 mt-5" : "max-h-0 opacity-0"
              }`}
            >
              <p
                className={`transition-colors duration-500 ${
                  isOpen ? "text-default-300" : "text-default-600"
                }`}
              >
                {item.answer}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default FaqAccordion;
