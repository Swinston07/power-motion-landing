import React from "react";
import { BatteryCharging, Fuel, KeyRound, Wrench, Zap } from "lucide-react";

const SERVICES = [
    {
        icon: BatteryCharging,
        title: "EV Charging (On-Site)",
        desc: "Mobile boost to get you moving again. Level-1/2 top-ups to reach the nearest station.",
    },
    {
        icon: KeyRound,
        title: "Locksmith",
        desc: "Locked out? Non-destructive entry for most makes and models.",
    },
    {
        icon: Fuel,
        title: "Emergency Gas / Oil",
        desc: "Out of fuel or low on oil? We deliver what you need safely and fast.",
    },
    {
        icon: Wrench,
        title: "Tire Change",
        desc: "Flat tire? Roadside swap or temporary spare installation.",
    },
    {
        icon: Zap,
        title: "Jump Start",
        desc: "12V support for EVs and ICE vehicles with modern, safe equipment.",
    },
]

export default function Services() {
    return (
        <section id="services" className="py-24 px-6">
            <div className="mx-auto max-w-7xl">
                <div className="text-center">
                    <h2 className="text-3xl md:text-4xl font-extrabold">Our Services</h2>
                    <p className="mt-3 text-emerald-100/90 max-w-2xl mx-auto">
                        Transparent pricing, rapid ETAs, and trained techs who know EVs and traditional vehicles.
                    </p>

                    <a
                        href="#quote"
                        className="inline-block mt-8 px-6 py-3 rounded-xl bg-white text-emerald-900 font-semibold hover:bg-emerald-100 transition"
                    >
                        Request a Service
                    </a>
                </div>

                <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {SERVICES.map(({ icon: Icon, title, desc}) => (
                        <div
                            key={title}
                            className="group rounded-2xl bg-emerald-900/60 border border-white/10 p-6 hover:-translate-y-1 transition"
                        >
                            <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-white/10">
                                <Icon className="h-6 w-6 text-lime-300" />
                            </div>
                            <h3 className="mt-4 text-xl font-bold">{title}</h3>
                            <p className="mt-2 text-emerald-100/80">{desc}</p>

                            <div className="mt-4 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
                            <p className="mt-3 text-sm text-emerald-100/70">
                                Available 7 days a week • Local • Insured
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}