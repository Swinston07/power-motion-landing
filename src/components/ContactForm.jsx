import React from "react";

// Tailwind utility strings (so the JSX stays clean)
const field =
  "w-full rounded-xl bg-white/10 border border-white/10 px-4 py-3 placeholder:text-emerald-100/60 focus:outline-none focus:ring-2 focus:ring-lime-300/60";
const error = "mt-1 text-sm text-lime-300"; // reserved if you add custom validation later

export default function ContactForm() {
  return (
    <section id="quote" className="py-24 px-6">
      <div className="mx-auto max-w-4xl">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-extrabold">Request Assistance</h2>
          <p className="mt-3 text-emerald-100/90">
            Tell us about your vehicle and how we can help. We’ll get back ASAP.
          </p>
        </div>

        {/* Replace the action URL with your Formspree endpoint */}
        <form
          action="https://formspree.io/f/xjkejwan"
          method="POST"
          className="grid md:grid-cols-2 gap-6 bg-emerald-900/50 border border-white/10 p-6 md:p-8 rounded-2xl"
        >
          {/* Optional subject shown in email */}
          <input type="hidden" name="_subject" value="PowerMotion Roadside Assistance Request" />
          {/* Optional redirect URL after submit (uncomment & set if you want) */}
          {/* <input type="hidden" name="_redirect" value="https://yourdomain.com/thanks" /> */}

          {/* Vehicle */}
          <div className="md:col-span-2">
            <label className="block mb-2 font-semibold">Car make & model</label>
            <input
              name="makeModel"
              placeholder="e.g., Tesla Model 3"
              required
              className={field}
            />
          </div>

          <div>
            <label className="block mb-2 font-semibold">Year</label>
            <input
              name="year"
              placeholder="e.g., 2022"
              required
              className={field}
              inputMode="numeric"
              pattern="\d{4})$"
              title="Please enter a 4-digit year"
            />
          </div>

          <div>
            <label className="block mb-2 font-semibold">Color</label>
            <input
              name="color"
              placeholder="e.g., Midnight Silver"
              required
              className={field}
            />
          </div>

          {/* Person */}
          <div>
            <label className="block mb-2 font-semibold">First name</label>
            <input
              name="firstName"
              placeholder="First name"
              required
              className={field}
            />
          </div>

          <div>
            <label className="block mb-2 font-semibold">Last name</label>
            <input
              name="lastName"
              placeholder="Last name"
              required
              className={field}
            />
          </div>

          <div>
            <label className="block mb-2 font-semibold">Email</label>
            <input
              type="email"
              name="email"
              placeholder="you@example.com"
              required
              className={field}
            />
          </div>

          <div>
            <label className="block mb-2 font-semibold">Phone</label>
            <input
              type="tel"
              name="phone"
              placeholder="(555) 123-4567"
              required
              className={field}
              pattern="^[0-9+().\\-\\s]{7,}$"
              title="Please enter a valid phone number"
            />
          </div>

          <div className="md:col-span-2">
            <label className="block mb-2 font-semibold">Notes (optional)</label>
            <textarea
              name="notes"
              placeholder="Where are you located? What happened?"
              rows={4}
              className={field}
            />
          </div>

          <div className="md:col-span-2 flex justify-end">
            <button
              type="submit"
              className="px-6 py-3 rounded-xl bg-white text-emerald-900 font-semibold hover:bg-emerald-100 transition"
            >
              Send Request
            </button>
          </div>
        </form>

        {/* (Optional) Success hint for free tier UX */}
        <p className="mt-3 text-sm text-emerald-100/70 text-center">
          After you submit, you’ll see a Formspree confirmation screen.
        </p>
      </div>
    </section>
  );
}
