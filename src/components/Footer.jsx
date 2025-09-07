import React from "react";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-emerald-900/70 border-t border-white/10 text-emerald-100">
      <div className="mx-auto max-w-7xl px-6 py-12 grid gap-8 md:grid-cols-3">
        {/* Brand */}
        <div>
          <div className="flex items-center gap-2 font-extrabold text-lg">
            <span className="text-lime-300 text-xl">⚡</span> Power Motion Rescue
          </div>
          <p className="mt-3 text-emerald-100/80 text-sm leading-relaxed">
            Reliable roadside assistance for electric and traditional vehicles.
            Available 7 days a week with rapid ETAs and professional technicians.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#home" className="hover:text-white transition">Home</a></li>
            <li><a href="#services" className="hover:text-white transition">Services</a></li>
            <li><a href="#about" className="hover:text-white transition">About</a></li>
            <li><a href="#quote" className="hover:text-white transition">Contact / Quote</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="font-semibold mb-4">Contact</h3>
          <ul className="space-y-3 text-sm">
            <li className="flex items-center gap-2">
              <Phone className="h-4 w-4 text-lime-300" />
              <span>(833) 415-4040</span>
            </li>
            <li className="flex items-center gap-2">
              <Mail className="h-4 w-4 text-lime-300" />
              <span>info@powermotionrescue.com</span>
            </li>
            <li className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-lime-300" />
              <span>Moreno Valley, CA</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10 py-6 text-center text-xs text-emerald-100/70">
        &copy; {new Date().getFullYear()} Power Motion Rescue. All rights reserved.
      </div>
    </footer>
  );
}
