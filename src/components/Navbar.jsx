import React, { useState } from "react";

export default function Navbar() {
    const [open, setOpen] = useState(false);

    const navItems = [
        {label: "Home", href: "#home"},
        {label: "Services", href: "#services"},
        {label: "About", href: "#about"},
        {label: "Contact", href: "#contact"},
    ];

    return (
        <header className="sticky top-0 z-50 bg-emerald-900/70 backdrop-blur border-b border-white/10">
            <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
                {/* Brand */}
                <a href="#home" className="flex items-center gap-2 font-extrabold tracking-wide">
                    {/* Simple Lightening Bolt logo */}
                    <span aria-hidden="true" className="text-lime-300 text-xl">⚡</span>
                    <span className="text-white">Power Motion Rescue</span>
                </a>

                {/* Desktop Links */}
                <div className="hidden md:flex items-center gap-6">
                    {navItems.map((item) => (
                        <a
                            key={item.href}
                            href={item.href}
                            className="text-sm text-emerald-100 hover:text-white transition"
                        >
                            {item.label}
                        </a>
                    ))}
                    <a
                        href="#quote"
                        className="px-4 py-2 text-sm font-semibold rounded-xl bg-white text-emerald-500 hover:text-emerald-900 transition"
                        >
                            Request Help
                        </a>
                </div>

                {/* Mobile Menu Button */}
                <button
                    onClick={() => setOpen((o) => !o)}
                    className="md:hidden inline-flex items-center justify-center p-2 rounded-lg border border-white/20 text-white hover:bg-white/10 transition"
                    aria-label="Toggle Menu"
                    aria-expanded={open}
                >
                    {/* Hamburger Icon */}
                    <svg
                        className={`h-5 w-5 ${open ? "hidden" : "block"}`}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                    >
                        <path strokeWidth="2" strokeLinecap="round" d="M4 7h16M4 12h16M4 17h16" />
                    </svg>
                    <svg
                        className={`h-5 w-5 ${open ? "block" : "hidden"}`}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                    >
                        <path strokeWidth="2" strokeLinecap="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
            </nav>

            {/* Mobile Menu */}
            {open && (
                <div className="md:hidden border-t border-white/10 bg-emerald-900/80 backdrop-blur">
                    <div className="px-4 py-3 space-y-2">
                        {navItems.map((item) => (
                            <a
                                key={item.href}
                                href={item.href}
                                className="block px-2 py-2 rounded-lg text-emerald-100 hover:text-white hover:bg-white/10 transition"
                                onClick={() => setOpen(false)}
                            >
                                {item.label}
                            </a>
                        ))}
                        <a
                            href="#quote"
                            className="block text-center px-3 py-2 rounded-lg font-semibold bg-white text-emerald-100 trasition"
                            onClick={() => setOpen(false)}
                        >
                            Request Help
                        </a>
                    </div>
                </div>
            )}
        </header>
    );
}