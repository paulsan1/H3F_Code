/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { Heart, Mail, Phone, MapPin, ShieldCheck } from "lucide-react";

interface FooterProps {
  setActiveTab: (tab: string) => void;
}

export default function Footer({ setActiveTab }: FooterProps) {
  return (
    <footer className="bg-slate-950 text-slate-300 border-t border-slate-900" id="h3f-footer">
      {/* Upper footer grid */}
      <div className="max-w-7xl mx-auto px-8 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* NGO Info Column */}
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-sky-600 rounded-lg flex items-center justify-center text-white">
              <Heart size={16} fill="white" />
            </div>
            <span className="font-bold text-base tracking-wide text-white font-sans">
              H3F FOUNDATION
            </span>
          </div>
          <p className="text-xs text-slate-400 leading-relaxed font-light">
            **Hope Heal and Humanity Foundation (H3F)** is a registered, non-profit community organization centered on immediate material relief and childhood coaching in Kolkata, India.
          </p>
          <div className="flex items-center gap-1.5 text-[10px] uppercase font-mono tracking-wider font-semibold text-sky-400 bg-slate-900/40 w-fit px-2 py-0.5 rounded border border-slate-800 font-sans">
            <ShieldCheck size={12} />
            <span>80G Exemption Audited</span>
          </div>
        </div>

        {/* Our Sitemap Column */}
        <div className="flex flex-col gap-3">
          <h4 className="text-xs font-bold uppercase tracking-widest text-white font-mono">
            Navigation Link Map
          </h4>
          <ul className="flex flex-col gap-2 text-xs sm:text-sm">
            {["home", "about", "programs", "gallery", "donate", "contact"].map((item) => (
              <li key={item}>
                <button
                  onClick={() => setActiveTab(item)}
                  className="hover:text-sky-400 transition-colors capitalize font-sans text-left border-b border-transparent hover:border-sky-400/40 pb-0.5 outline-none cursor-pointer"
                >
                  {item === "about" ? "About Us" : item === "programs" ? "Our Campaigns" : item === "gallery" ? "Masonry Grid Gallery" : item === "contact" ? "Contact Requests" : item}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Campaign Focus Highlights Column */}
        <div className="flex flex-col gap-3">
          <h4 className="text-xs font-bold uppercase tracking-widest text-white font-mono">
            Our Campaigns
          </h4>
          <ul className="flex flex-col gap-2.5 text-xs text-slate-400">
            <li className="flex flex-col gap-0.5">
              <span className="font-semibold text-slate-205 text-slate-350">Project Vidyarthi:</span>
              <span className="font-light">School kit backpack distributions</span>
            </li>
            <li className="flex flex-col gap-0.5">
              <span className="font-semibold text-slate-205 text-slate-350">Project Anna:</span>
              <span className="font-light">Dry monthly rations & nutrition help</span>
            </li>
            <li className="flex flex-col gap-0.5">
              <span className="font-semibold text-slate-205 text-slate-350">Project Dignity:</span>
              <span className="font-light">Chronic elderly medication sponsorships</span>
            </li>
            <li className="flex flex-col gap-0.5">
              <span className="font-semibold text-slate-205 text-slate-350">Project Suraksha:</span>
              <span className="font-light">Childcare activity rooms</span>
            </li>
          </ul>
        </div>

        {/* Contact info column */}
        <div className="flex flex-col gap-3">
          <h4 className="text-xs font-bold uppercase tracking-widest text-white font-mono">
            Registered office
          </h4>
          <ul className="flex flex-col gap-3 text-xs">
            <li className="flex items-start gap-2">
              <MapPin size={15} className="text-sky-450 mt-0.5 shrink-0 text-sky-400" />
              <span className="font-light leading-relaxed">
                Behala Tram Depot Area, Behala, Kolkata, West Bengal - 700061
              </span>
            </li>
            <li className="flex items-center gap-2">
              <Phone size={15} className="text-sky-450 shrink-0 text-sky-400" />
              <a href="tel:+918240603991" className="hover:text-sky-400 font-mono">
                +91 82406 03991
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Mail size={15} className="text-sky-450 shrink-0 text-sky-400" />
              <a href="mailto:contact@h3f.org.in" className="hover:text-sky-400 font-mono">
                contact@h3f.org.in
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Under footer bar */}
      <div className="border-t border-slate-900 bg-slate-950 py-6 px-4 text-center text-[11px] text-slate-500 font-mono">
        <p className="max-w-4xl mx-auto leading-normal text-slate-400">
          © 2026 HOPE HEAL AND HUMANITY FOUNDATION (H3F). All Rights Reserved. Reg No: S0024953/WB.
          <br className="hidden sm:block" />
          Designed in conformity with supreme NGO sitemap standards for structural transparency.
        </p>
      </div>
    </footer>
  );
}
