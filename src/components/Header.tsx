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
  const [activeTheme, setActiveTheme] = useState(() => {
    return localStorage.getItem("h3f_theme_color") || "sky";
  });

  const handleSetThemeColor = (themeKey: string) => {
    setActiveTheme(themeKey);
    localStorage.setItem("h3f_theme_color", themeKey);
    const THEME_SHADES_DATA: any = {
      sky: {
        50: '#f0f9ff', 100: '#e0f2fe', 200: '#bae6fd', 300: '#7dd3fc', 400: '#38bdf8', 500: '#0ea5e9', 600: '#0284c7', 700: '#0369a1', 800: '#075985', 900: '#0c4a6e',
      },
      emerald: {
        50: '#ecfdf5', 100: '#d1fae5', 200: '#a7f3d0', 300: '#6ee7b7', 400: '#34d399', 500: '#10b981', 600: '#059669', 700: '#047857', 800: '#065f46', 900: '#064e3b',
      },
      rose: {
        50: '#fff1f2', 100: '#ffe4e6', 200: '#fecdd3', 300: '#fda4af', 400: '#fb7185', 500: '#f43f5e', 600: '#e11d48', 700: '#be123c', 800: '#9f1239', 900: '#881337',
      },
      amber: {
        50: '#fffbeb', 100: '#fef3c7', 200: '#fde68a', 300: '#fcd34d', 400: '#fbbf24', 500: '#f59e0b', 600: '#d97706', 700: '#b45309', 800: '#92400e', 900: '#78350f',
      }
    };
    const shades = THEME_SHADES_DATA[themeKey] || THEME_SHADES_DATA.sky;
    const root = document.documentElement;
    Object.entries(shades).forEach(([shade, value]: any) => {
      root.style.setProperty(`--color-sky-${shade}`, value);
    });
  };

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
      <div className="bg-slate-900 text-slate-200 text-xs py-2 px-4 sm:px-8 flex flex-col sm:flex-row justify-between items-center border-b border-slate-800 gap-3">
        <div className="flex flex-wrap justify-center sm:justify-start items-center gap-4 sm:gap-6 w-full sm:w-auto">
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
        <div className="flex items-center justify-between sm:justify-end gap-5 w-full sm:w-auto mt-2 sm:mt-0">
          <div className="hidden md:flex items-center gap-3">
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[10px] uppercase tracking-wider font-semibold bg-sky-950 text-sky-400 border border-sky-800 font-sans">
              ● 80G Tax Exempt
            </span>
            <span className="text-slate-400">Reg No: S0024953/WB</span>
          </div>
          {/* Theme Toggler */}
          <div className="flex items-center gap-2 bg-slate-950 py-1 px-2.5 rounded-full border border-slate-800 shadow-inner">
            <span className="text-[10px] text-slate-400 font-mono select-none">Theme:</span>
            <div className="flex items-center gap-1.5">
              <button onClick={() => handleSetThemeColor('sky')} className={`w-3 h-3 rounded-full bg-sky-500 hover:scale-125 transition-transform duration-200 border border-white/20 active:scale-95 cursor-pointer ${activeTheme === 'sky' ? 'ring-2 ring-white scale-110' : 'opacity-70'}`} title="Classic Sky"></button>
              <button onClick={() => handleSetThemeColor('emerald')} className={`w-3 h-3 rounded-full bg-emerald-500 hover:scale-125 transition-transform duration-200 border border-white/20 active:scale-95 cursor-pointer ${activeTheme === 'emerald' ? 'ring-2 ring-white scale-110' : 'opacity-70'}`} title="Hopeful Emerald"></button>
              <button onClick={() => handleSetThemeColor('rose')} className={`w-3 h-3 rounded-full bg-rose-500 hover:scale-125 transition-transform duration-200 border border-white/20 active:scale-95 cursor-pointer ${activeTheme === 'rose' ? 'ring-2 ring-white scale-110' : 'opacity-70'}`} title="Caring Rose"></button>
              <button onClick={() => handleSetThemeColor('amber')} className={`w-3 h-3 rounded-full bg-amber-500 hover:scale-125 transition-transform duration-200 border border-white/20 active:scale-95 cursor-pointer ${activeTheme === 'amber' ? 'ring-2 ring-white scale-110' : 'opacity-70'}`} title="Warm Amber"></button>
            </div>
          </div>
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
              Lend a hand to bring a smile <span className="text-sky-500 font-bold mx-1">●</span> Kolkata organization
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
