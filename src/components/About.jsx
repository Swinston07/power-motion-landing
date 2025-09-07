import React from "react";

export default function About() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="mx-auto max-w-5xl text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold">About PowerMotion</h2>
        <p className="mt-6 text-lg text-emerald-100/90 leading-relaxed">
          PowerMotion was founded to bring **fast, reliable roadside assistance**
          to electric vehicle owners and drivers of all vehicles. We understand
          that breakdowns happen at the worst times, so we’re committed to
          providing **24/7 service** with trained technicians who know both
          traditional cars and the latest EV technology.
        </p>
        <p className="mt-4 text-lg text-emerald-100/90 leading-relaxed">
          From on-site charging and emergency fuel delivery to locksmith services,
          tire changes, and jump starts, we’ve got you covered. PowerMotion is
          proud to serve our community with transparent pricing, friendly support,
          and a mission to get you **back on the road quickly and safely**.
        </p>
      </div>
    </section>
  );
}
