"use client";

import { Icon } from '@iconify/react';
import React, { useState } from 'react';
import bgPattern from "@/assets/images/other/bg-pattern.png";
import Image from "next/image";

const Hero = () => {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email) {
      alert("Please fill in all required fields.");
      return;
    }

    setSubmitted(true);
  };
    
  return (
      <>
       <section className="size-full lg:px-7.5 md:px-5 px-4 overflow-hidden">
        <div className="container lg:pt-48 lg:pb-30 md:pt-37.5 pt-32 pb-10 relative">
          <Image
            src={bgPattern}
            alt=""
            className="absolute inset-0 size-full z-1 border-y-2 border-default-100"
          />

          <div className="relative z-10 mx-10">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-7.5">
                <div className="py-1.5 px-4 bg-white border-2 border-default-200 text-default-900 text-xs/none uppercase font-semibold rounded-full inline-flex items-center gap-2 justify-center w-fit">
                  <Icon icon="tabler:circle-filled" className="text-primary" />
                  <span>Who We Are</span>
                </div>

                <h1 className="lg:text-7xl md:text-[58px] text-[36px] leading-[1.1em] tracking-[-0.03em]">
                  Get in touch <span className="text-default-500">with our team</span>
                </h1>

                <p>
                  Whether you have questions,{" "}
                  <span className="text-default-950">need support</span>
                  , or just want to say hello, our team is ready to help you write
                  smarter
                </p>

                <div className="space-y-2.5">
                  <div className="flex items-center gap-2.5">
                    <Icon icon="tabler:mail-filled" className="size-5" />
                    <a href="mailto:info@gmail.com">
                      info@gmail.com
                    </a>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <Icon icon="tabler:phone-filled" className="size-5" />
                    <a href="tel:+1(123)456-7890">
                      +1 (123) 456-7890
                    </a>
                  </div>
                </div>

                <p>
                  We're available <span className="text-black">Monday to Friday</span>{" "}
                  to help with any questions about getting started, using our AI
                  tools, or your account.
                </p>
              </div>

              {/* Form Block */}
              <div className="p-6 bg-default-100 rounded-lg">
                {submitted ? (
                  <div className="h-full flex flex-col justify-center items-center text-center p-6 space-y-4">
                    <div className="size-16 bg-primary/10 text-primary flex items-center justify-center rounded-full">
                      <Icon icon="tabler:circle-check-filled" className="size-10" />
                    </div>
                    <h2 className="text-2xl font-bold text-default-950">Thank you!</h2>
                    <p className="text-default-600">
                      Your message has been sent successfully. Our team will get back to you shortly.
                    </p>
                    <button
                      onClick={() => {
                        setSubmitted(false);
                        setFormData({ name: "", email: "", message: "" });
                      }}
                      className="py-2.5 px-6 uppercase inline-flex items-center justify-center gap-2 rounded bg-primary text-white font-medium transition-all duration-500 hover:bg-primary-hover cursor-pointer"
                    >
                      Send another message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div>
                      <label htmlFor="name" className="text-default-950 block mb-2.5 font-medium">
                        Name *
                      </label>
                      <input
                        required
                        className="w-full bg-white h-12.5 inline-flex border-transparent rounded text-default-950 focus:border-default-950 focus:ring-0"
                        placeholder="Jane Smith"
                        maxLength={256}
                        name="name"
                        type="text"
                        id="name"
                        value={formData.name}
                        onChange={handleChange}
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="text-default-950 block mb-2.5 font-medium"
                      >
                        Email address *
                      </label>
                      <input
                        required
                        className="w-full bg-white h-12.5 inline-flex border-transparent rounded text-default-950 focus:border-default-950 focus:ring-0"
                        placeholder="example@company.com"
                        maxLength={256}
                        name="email"
                        type="email"
                        id="email"
                        value={formData.email}
                        onChange={handleChange}
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="message"
                        className="text-default-950 block mb-2.5 font-medium"
                      >
                        Message
                      </label>
                      <textarea
                        className="w-full bg-white inline-flex border-transparent rounded text-default-950 focus:border-default-950 focus:ring-0"
                        rows={5}
                        placeholder="Type your message..."
                        maxLength={1000}
                        name="message"
                        id="message"
                        value={formData.message}
                        onChange={handleChange}
                      />
                    </div>

                    <div className="relative grid p-1.5">
                      <button
                        type="submit"
                        className="py-2.5 px-6 uppercase inline-flex items-center justify-center gap-2 rounded bg-primary text-white font-medium transition-all duration-500 hover:bg-primary-hover cursor-pointer w-full"
                      >
                        Submit
                      </button>

                      <div className="decoration">
                        <span className="decoration-top"></span>
                        <span className="decoration-bottom"></span>
                      </div>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
      </>
  )
}

export default Hero