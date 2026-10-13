"use client";
import { Icon } from "@iconify/react";

import React, { useState } from "react";
import bgPattern from "@/assets/images/other/bg-pattern.png";
import Image from "next/image";

const WaitListForm = () => {

  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) {
      alert("Please enter a valid email address.");
      return;
    }
    setSubmitted(true);
  };

  return (
    <>
      <section className="size-full lg:px-7.5 md:px-5 px-4 overflow-hidden">
        <div className="container lg:pt-48 lg:pb-30 md:pt-37.5 pt-32 pb-10 relative">
          <Image
            src={bgPattern} alt="" className="absolute inset-0 size-full z-1 border-y-2 border-default-100" />

          <div className="relative z-10 max-w-[560px] mx-auto text-center">
            <div className="space-y-5">
              <div className="py-1.5 px-4 bg-white border-2 border-default-200 text-default-900 text-xs/none uppercase font-semibold rounded-full inline-flex items-center gap-2 justify-center w-fit mx-auto">
                <Icon icon="tabler:circle-filled" className="text-primary" />
                <span>Be the First to Try It</span>
              </div>

              <h1 className="lg:text-7xl md:text-[58px] text-[36px] leading-[1.1em] tracking-[-0.03em]">
                Join the waitlist <span className="text-default-500">for early access</span>
              </h1>

              <p>We're opening up <span className="text-black">limited early access</span> to writers marketers and teams who want to create smarter faster and with less effort</p>

              <div className="p-6 bg-default-100 rounded-lg space-y-5">
                {submitted ? (
                  <div className="space-y-4 py-4">
                    <div className="size-14 bg-primary/10 text-primary flex items-center justify-center rounded-full mx-auto">
                      <Icon icon="tabler:circle-check-filled" className="size-8" />
                    </div>
                    <h2 className="text-xl font-bold text-default-950">You're on the list!</h2>
                    <p className="text-sm text-default-600">
                      Thank you for signing up with <strong>{email}</strong>. We'll reach out as soon as early access slots open up.
                    </p>
                    <button
                      onClick={() => {
                        setSubmitted(false);
                        setEmail("");
                      }}
                      className="text-xs uppercase font-semibold text-primary hover:underline cursor-pointer"
                    >
                      Use a different email
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div>
                      <label
                        htmlFor="email"
                        className="text-default-950 block text-start mb-2.5 font-medium"
                      >
                        Email Address
                      </label>
                      <input
                        required
                        className="w-full bg-white h-12.5 inline-flex border-transparent rounded text-default-950 focus:border-default-950 focus:ring-0"
                        placeholder="example@company.com"
                        maxLength={256}
                        name="email"
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>

                    <div className="relative grid p-1.5">
                      <button
                        type="submit"
                        className="py-2.5 px-6 uppercase inline-flex items-center justify-center gap-2 rounded bg-primary text-white font-medium transition-all duration-500 hover:bg-primary-hover w-full cursor-pointer"
                      >
                        Join The Waitlist
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

export default WaitListForm