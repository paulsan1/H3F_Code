/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect, useState } from "react";
import { Heart, ArrowRight, ShieldCheck, Sparkles, Award } from "lucide-react";

interface HeroProps {
  onDonateClick: () => void;
  onContactClick: () => void;
}

export default function Hero({ onDonateClick, onContactClick }: HeroProps) {
  // Simulated interactive incremental stats to bring the page to life!
  const [mealsServed, setMealsServed] = useState(6425);
  const [kitsGifted, setKitsGifted] = useState(1284);

  useEffect(() => {
    const mealInterval = setInterval(() => {
      setMealsServed((prev) => prev + Math.floor(Math.random() * 2));
    }, 12000);

    const kitInterval = setInterval(() => {
      setKitsGifted((prev) => prev + (Math.random() > 0.85 ? 1 : 0));
    }, 2500);

    return () => {
      clearInterval(mealInterval);
      clearInterval(kitInterval);
    };
  }, []);

  return (
    <section className="relative min-h-[85vh] flex flex-col justify-center overflow-hidden" id="h3f-hero">
      {/* Background Cover Image with Gradient Overlay Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=1600"
          alt="Smiling Children Learning"
          className="w-full h-full object-cover object-center scale-105 animate-[pulse_10s_ease-in-out_infinite] brightness-90 saturate-50"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-900/90 to-sky-950/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-slate-950/20" />
      </div>

      {/* Main Content Pane */}
      <div className="relative z-10 px-8 py-20 lg:py-24 max-w-5xl text-white leading-relaxed flex flex-col gap-6 md:gap-7">
        {/* Dynamic Badge */}
        <div className="inline-flex items-center gap-2 self-start px-3 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-sky-600/10 text-sky-300 border border-sky-500/20 backdrop-blur-md animate-[bounce_3s_infinite]">
          <Sparkles size={12} className="text-amber-400 fill-amber-400" />
          <span>Care Based in Kolkata, West Bengal</span>
        </div>

        {/* Powerful Display Heading Typography */}
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.1]">
          Education, Food Relief,<br className="hidden sm:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-sky-300 to-blue-400 animate-pulse">
            Child Welfare & Support
          </span>
        </h2>

        {/* Concise Description Subtitle */}
        <p className="text-base sm:text-lg lg:text-xl text-slate-300 max-w-2xl font-light leading-relaxed">
          The <span className="font-semibold text-white">Hope Heal and Humanity Foundation (H3F)</span> is a registered NGO committed to lifting the marginalized communities in south Kolkata. Discover our programs, track our direct local campaigns, and make a real difference.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-wrap items-center gap-4 mt-2">
          <button
            onClick={onDonateClick}
            id="hero-cta-donate"
            className="group flex items-center gap-2 bg-sky-600 hover:bg-sky-700 text-white font-semibold text-base px-6 py-3 rounded-full shadow-md shadow-sky-200 active:scale-95 transition-all outline-none cursor-pointer"
          >
            <Heart size={18} fill="white" className="group-hover:scale-110 transition-transform" />
            <span>Donate Now</span>
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </button>
          <button
            onClick={onContactClick}
            id="hero-cta-volunteer"
            className="bg-transparent hover:bg-white/10 text-white font-semibold text-base px-6 py-3 rounded-full border-2 border-white/40 hover:border-white/90 backdrop-blur-sm transition-all cursor-pointer"
          >
            Volunteer / Contact Us
          </button>
        </div>

        {/* Feature badges */}
        <div className="flex flex-wrap items-center gap-6 mt-4 text-xs font-mono text-slate-400">
          <div className="flex items-center gap-2">
            <ShieldCheck size={16} className="text-sky-400" />
            <span>Registered Charity</span>
          </div>
          <div className="flex items-center gap-2">
            <Award size={16} className="text-amber-400" />
            <span>50% 80G Tax Exemption</span>
          </div>
        </div>
      </div>

      {/* Real-time Impact Counter Section */}
      <div className="relative z-10 w-full bg-slate-900/90 border-t border-slate-800 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-8 py-8 grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 justify-between text-white">
          <div className="flex flex-col gap-1 border-r border-slate-800/80 pr-4">
            <p className="text-xs font-semibold text-sky-400 uppercase tracking-widest font-mono">
              Education Kits Distributed
            </p>
            <div className="flex items-baseline gap-1">
              <span className="text-2xl sm:text-3.5xl font-mono font-bold leading-none">
                {kitsGifted.toLocaleString()}
              </span>
              <span className="text-xs text-slate-400 font-light">Kits</span>
            </div>
            <span className="text-[10px] text-slate-500 font-mono">Project Vidyarthi</span>
          </div>

          <div className="flex flex-col gap-1 border-r md:border-r border-slate-800/80 pr-4">
            <p className="text-xs font-semibold text-sky-400 uppercase tracking-widest font-mono">
              Meals Served Active
            </p>
            <div className="flex items-baseline gap-1">
              <span className="text-2xl sm:text-3.5xl font-mono font-bold leading-none text-sky-450 text-sky-400">
                {mealsServed.toLocaleString()}
              </span>
              <span className="text-xs text-slate-400 font-light">Meals</span>
            </div>
            <span className="text-[10px] text-slate-500 font-mono">● Auto Counting</span>
          </div>

          <div className="flex flex-col gap-1 border-r border-slate-800/80 pr-4">
            <p className="text-xs font-semibold text-sky-400 uppercase tracking-widest font-mono">
              Elder Care Routine
            </p>
            <div className="flex items-baseline gap-1">
              <span className="text-2xl sm:text-3.5xl font-mono font-bold leading-none">
                120
              </span>
              <span className="text-xs text-slate-400 font-light">Seniors</span>
            </div>
            <span className="text-[10px] text-slate-500 font-mono">Project Dignity</span>
          </div>

          <div className="flex flex-col gap-1">
            <p className="text-xs font-semibold text-sky-400 uppercase tracking-widest font-mono">
              Transparency Rating
            </p>
            <div className="flex items-baseline gap-1">
              <span className="text-2xl sm:text-3.5xl font-mono font-bold text-amber-300 leading-none">
                100%
              </span>
              <span className="text-xs text-slate-400 font-light">Verified</span>
            </div>
            <span className="text-[10px] text-slate-500 font-mono">Audit Standard</span>
          </div>
        </div>
      </div>
    </section>
  );
}
