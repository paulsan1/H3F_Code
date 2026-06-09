/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { Phone, Mail, MapPin, Menu, X, Heart } from "lucide-react";
import Logo from "./Logo";

interface HeaderProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export default function Header({ activeTab, setActiveTab }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navigations = [
    { id: "home", label: "Home" },
    { id: "about", label: "About Us" },
    { id: "programs", label: "Our Programs" },
    { id: "gallery", label: "Masonry Gallery" },
    { id: "donate", label: "Donate" },
    { id: "contact", label: "Contact Us" }
  ];

  return (
    <header className="w-full z-50 flex flex-col" id="h3f-header">
      {/* Top Utility Bar */}
      <div className="bg-slate-900 text-slate-200 text-xs py-2 px-4 sm:px-8 flex flex-col sm:flex-row justify-between items-center border-b border-slate-800 gap-2">
        <div className="flex flex-wrap justify-center sm:justify-start items-center gap-4 sm:gap-6">
          <a
            href="tel:+918240603991"
            className="flex items-center gap-1.5 hover:text-sky-400 font-mono transition-colors"
          >
            <Phone size={13} className="text-sky-450 text-sky-400" />
            <span>+91 8240603991</span>
          </a>
          <a
            href="mailto:contact@h3f.org.in"
            className="flex items-center gap-1.5 hover:text-sky-400 font-mono transition-colors"
          >
            <Mail size={13} className="text-sky-450 text-sky-400" />
            <span>contact@h3f.org.in</span>
          </a>
          <div className="flex items-center gap-1.5 font-mono text-slate-300">
            <MapPin size={13} className="text-sky-450 text-sky-400" />
            <span>Behala, Kolkata - 700061</span>
          </div>
        </div>
        <div className="hidden md:flex items-center gap-3">
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[10px] uppercase tracking-wider font-semibold bg-sky-950 text-sky-400 border border-sky-800 font-sans">
            ● 80G Tax Exempt
          </span>
          <span className="text-slate-400">Reg No: S0024953/WB</span>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="bg-white/95 backdrop-blur-md sticky top-0 border-b border-slate-200 shadow-sm px-8 py-4 flex justify-between items-center">
        {/* Brand/Logo Section with Uploaded Logo Attachment */}
        <div 
          onClick={() => {
            setActiveTab("home");
            setMobileMenuOpen(false);
          }} 
          className="flex items-center gap-3.5 group cursor-pointer select-none"
        >
          {/* Real Custom Render of uploaded Logo */}
          <Logo size={42} className="group-hover:scale-105 transition-transform shrink-0" />
          
          <div className="flex flex-col">
            <h1 className="text-xs sm:text-sm md:text-base font-extrabold tracking-tight text-slate-900 group-hover:text-sky-600 transition-colors uppercase leading-tight font-sans">
              Hope Heal and Humanity Foundation (H3F)
            </h1>
            <p className="text-[10px] sm:text-xs font-semibold tracking-wide text-slate-500 capitalize leading-snug">
              Lend a hand to bring a smile <span className="text-sky-500 font-bold mx-1">●</span> Kolkata trust
            </p>
          </div>
        </div>

        {/* Desktop Nav Links */}
        <nav className="hidden lg:flex items-center gap-1">
          {navigations.map((item) => (
            <button
              key={item.id}
              id={`nav-link-${item.id}`}
              onClick={() => setActiveTab(item.id)}
              className={`relative px-4 py-2 rounded-lg text-sm font-semibold transition-all ${
                activeTab === item.id
                  ? "text-sky-600 border-b-2 border-sky-600 rounded-none pb-1 pt-1"
                  : "text-slate-600 hover:text-sky-600"
              }`}
            >
              {item.label}
            </button>
          ))}
          <div className="h-6 w-px bg-slate-200 mx-4"></div>
          <button
            onClick={() => setActiveTab("donate")}
            id="nav-cta-donate"
            className="bg-sky-600 hover:bg-sky-700 text-white font-semibold text-sm px-5 py-2 rounded-full shadow-md shadow-sky-200 active:scale-95 transition-all outline-none cursor-pointer"
          >
            Donate Now
          </button>
        </nav>

        {/* Mobile Navigation Toggle */}
        <div className="flex lg:hidden items-center gap-2">
          <button
            onClick={() => setActiveTab("donate")}
            className="flex items-center gap-1 bg-sky-600 hover:bg-sky-700 text-white font-semibold text-xs px-3.5 py-2 rounded-full shadow-md transition-all active:scale-95 cursor-pointer"
          >
            <Heart size={12} fill="white" />
            Donate
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg text-slate-600 hover:bg-slate-100 hover:text-slate-900 transition-colors cursor-pointer"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation Navigation links */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white/98 backdrop-blur-lg border-b border-slate-250 py-4 px-4 flex flex-col gap-1 shadow-inner animate-[fadeIn_0.2s_ease-out]">
          {navigations.map((item) => (
            <button
              key={item.id}
              id={`mobile-nav-link-${item.id}`}
              onClick={() => {
                setActiveTab(item.id);
                setMobileMenuOpen(false);
              }}
              className={`w-full text-left px-4 py-3 rounded-xl text-base font-semibold transition-all ${
                activeTab === item.id
                  ? "bg-sky-50 text-sky-750 text-sky-700"
                  : "text-slate-700 hover:bg-slate-50 hover:text-sky-600"
              }`}
            >
              {item.label}
            </button>
          ))}
          <div className="border-t border-slate-100 my-2 pt-2">
            <div className="flex flex-col gap-2 p-2">
              <span className="text-xs font-semibold text-slate-450 font-mono uppercase tracking-widest text-sky-600">
                Tax Benefits
              </span>
              <p className="text-xs text-slate-500 leading-snug">
                All donations to Hope Heal and Humanity Foundation are 50% tax exempt under section 80G of IT Act, India.
              </p>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
