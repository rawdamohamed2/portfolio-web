import React from "react";

export default function Contact() {
  return (
    <section className="relative w-full overflow-hidden bg-SecondbgColor/20 pt-24 pb-10">
      <div className="pointer-events-none absolute -left-40 top-20 h-[400px] w-[400px] rounded-full bg-effectColor/10 blur-[120px]" />

      <div className="pointer-events-none absolute -right-40 bottom-0 h-[500px] w-[500px] rounded-full bg-cricleColor/10 blur-[120px]" />

      <div className="container relative z-10 mx-auto px-5 sm:px-8 lg:px-10">
        <div
          className="mb-12 text-center"
          data-aos="zoom-in"
          data-aos-delay="300"
        >
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Let's Work{" "}
            <span className="bg-gradient-to-r from-effectColor to-cricleColor bg-clip-text text-transparent">
              Together
            </span>
          </h1>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-secondfontColor sm:text-base">
            Have a project in mind or want to work together? I'd love to hear
            from you. Send me a message and let's create something amazing.
          </p>
        </div>

        <div
          className="mx-auto max-w-4xl rounded-3xl border border-effectColor/10 bg-bgColor/30 p-5 shadow-[0_0_60px_rgba(0,0,0,0.08)] backdrop-blur-xl sm:p-8 lg:p-10"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          <form
            className="grid grid-cols-1 gap-6"
            action="https://getform.io/f/bejlmloa"
            method="POST"
          >
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <div className="group">
                <label
                  htmlFor="inputName"
                  className="mb-2 block text-sm font-medium text-fontColor"
                >
                  Name
                </label>

                <div className="relative">
                  <input
                    type="text"
                    id="inputName"
                    name="name"
                    placeholder="Enter your name"
                    required
                    className="w-full rounded-xl border border-effectColor/10 bg-bgColor/40 px-4 py-3.5 text-sm text-fontColor outline-none backdrop-blur-sm transition-all duration-300 placeholder:text-secondfontColor/50 focus:border-effectColor/50 focus:bg-bgColor/60 focus:shadow-[0_0_20px_rgba(1,202,188,0.08)]"
                  />

                  <div className="absolute bottom-0 left-1/2 h-px w-0 bg-effectColor transition-all duration-300 group-focus-within:left-0 group-focus-within:w-full" />
                </div>
              </div>

              <div className="group">
                <label
                  htmlFor="inputEmail"
                  className="mb-2 block text-sm font-medium text-fontColor"
                >
                  Email
                </label>

                <div className="relative">
                  <input
                    type="email"
                    id="inputEmail"
                    name="email"
                    placeholder="Enter your email"
                    required
                    className="w-full rounded-xl border border-effectColor/10 bg-bgColor/40 px-4 py-3.5 text-sm text-fontColor outline-none backdrop-blur-sm transition-all duration-300 placeholder:text-secondfontColor/50 focus:border-effectColor/50 focus:bg-bgColor/60 focus:shadow-[0_0_20px_rgba(1,202,188,0.08)]"
                  />

                  <div className="absolute bottom-0 left-1/2 h-px w-0 bg-effectColor transition-all duration-300 group-focus-within:left-0 group-focus-within:w-full" />
                </div>
              </div>
            </div>

            <div className="group">
              <label
                htmlFor="message"
                className="mb-2 block text-sm font-medium text-fontColor"
              >
                Your Message
              </label>

              <div className="relative">
                <textarea
                  id="message"
                  name="message"
                  placeholder="Tell me about your project..."
                  rows="6"
                  required
                  className="w-full resize-none rounded-xl border border-effectColor/10 bg-bgColor/40 px-4 py-3.5 text-sm text-fontColor outline-none backdrop-blur-sm transition-all duration-300 placeholder:text-secondfontColor/50 focus:border-effectColor/50 focus:bg-bgColor/60 focus:shadow-[0_0_20px_rgba(1,202,188,0.08)]"
                />

                <div className="absolute bottom-0 left-1/2 h-px w-0 bg-effectColor transition-all duration-300 group-focus-within:left-0 group-focus-within:w-full" />
              </div>
            </div>

            <div className="flex justify-center pt-2 sm:justify-start">
              <button
                type="submit"
                className="group relative overflow-hidden rounded-xl bg-hoverBtn px-8 py-3.5 text-sm font-semibold text-bgColor shadow-[0_0_25px_var(--hover-btn)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_40px_var(--hover-btn)]"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Send Message
                  <span className="transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </span>

                <span className="absolute inset-0 -translate-x-full bg-white/20 transition-transform duration-500 group-hover:translate-x-full" />
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
