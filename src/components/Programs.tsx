/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { PROGRAMS_DATA } from "../data";
import { 
  GraduationCap, 
  Sparkles, 
  Heart, 
  Flame, 
  CheckCircle, 
  Users, 
  TrendingUp, 
  ArrowUpRight, 
  Smile, 
  Award 
} from "lucide-react";

export default function Programs() {
  const [selectedProgram, setSelectedProgram] = useState<string>("education");

  // Dynamically resolve icon components
  const resolveIcon = (name: string) => {
    switch (name) {
      case "GraduationCap":
        return <GraduationCap className="text-sky-500 w-6 h-6" />;
      case "FlameKindling":
        return <Flame className="text-rose-500 w-6 h-6" />;
      case "Sparkles":
        return <Sparkles className="text-amber-500 w-6 h-6" />;
      case "Heart":
        return <Heart className="text-sky-500 w-6 h-6" />;
      default:
        return <Smile className="text-sky-500 w-6 h-6" />;
    }
  };

  const activeProgramData = PROGRAMS_DATA.find((item) => item.id === selectedProgram) || PROGRAMS_DATA[0];

  return (
    <section className="py-16 sm:py-24 px-8 max-w-7xl mx-auto" id="h3f-programs-section">
      {/* Sessional Header section */}
      <div className="text-center max-w-2xl mx-auto mb-16 flex flex-col items-center gap-2">
        <span className="text-xs font-bold text-sky-600 font-mono tracking-widest uppercase bg-sky-50 px-3 py-1 rounded-full">
          Social Outreach & Campaigns
        </span>
        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 mt-2">
          Our Operational Programs
        </h2>
        <div className="h-1 w-16 bg-sky-600 rounded-full mt-2"></div>
        <p className="text-sm text-slate-600 leading-relaxed mt-4">
          Click any campaign to inspect specific local achievements, targeted objectives, and direct beneficiaries. Our efforts are entirely non-profit and community-focused.
        </p>
      </div>

      {/* Main Structural Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Navigation / Cards List (Left Side - span 5) */}
        <div className="lg:col-span-5 flex flex-col gap-4">
          {PROGRAMS_DATA.map((prog) => {
            const isActive = selectedProgram === prog.id;
            return (
              <button
                key={prog.id}
                onClick={() => setSelectedProgram(prog.id)}
                id={`program-btn-${prog.id}`}
                className={`w-full text-left p-5 rounded-2xl border-2 transition-all duration-300 outline-none relative group cursor-pointer ${
                  isActive
                    ? "border-sky-600 bg-sky-50/30 shadow-sm shadow-sky-50/50"
                    : "border-slate-100 bg-white hover:border-slate-200"
                }`}
              >
                <div className="flex gap-4 items-center">
                  <div className={`p-3 rounded-xl ${isActive ? "bg-white shadow-sm" : "bg-slate-50 group-hover:bg-sky-50/50"} transition-colors`}>
                    {resolveIcon(prog.iconName)}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="text-sm font-semibold tracking-wider text-slate-400 font-mono uppercase">
                      Campaign
                    </h4>
                    <h3 className="text-base sm:text-lg font-bold text-slate-900 group-hover:text-sky-700 transition-colors truncate">
                      {prog.name}
                    </h3>
                  </div>
                  <ArrowUpRight 
                    size={18} 
                    className={`text-slate-300 group-hover:text-sky-500 transition-all transform ${isActive ? "rotate-45 text-sky-600" : ""}`} 
                  />
                </div>
                <p className="text-xs text-slate-500 leading-relaxed mt-3.5 line-clamp-2">
                  {prog.summary}
                </p>
              </button>
            );
          })}
        </div>

        {/* Detailed Explanation Focus Panel (Right Side - span 7) */}
        <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-8 border border-slate-100 shadow-lg shadow-slate-100 flex flex-col gap-6 animate-[fadeIn_0.3s_ease]">
          {/* Header section of detailed view */}
          <div className="flex flex-col gap-1 border-b border-slate-100 pb-5">
            <span className="text-xs font-bold text-sky-600 font-mono uppercase tracking-wide">
              Detailed Case Analysis
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900 leading-tight">
              {activeProgramData.name} — {activeProgramData.title}
            </h3>
          </div>

          {/* Broad Description content */}
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            {activeProgramData.description}
          </p>

          {/* Objectives Bullet Points */}
          <div className="flex flex-col gap-3 bg-slate-50 rounded-2.5xl p-5 border border-slate-100">
            <h4 className="text-xs font-bold font-mono tracking-widest text-slate-700 uppercase mb-1">
              Core Strategic Objectives
            </h4>
            <ul className="flex flex-col gap-2.5">
              {activeProgramData.objectives.map((obj, index) => (
                <li key={index} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                  <CheckCircle size={16} className="text-sky-500 mt-0.5 shrink-0" />
                  <span>{obj}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Key Achievements Card & Target Beneficiaries Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-1 border-t border-slate-100 pt-5">
            <div className="flex flex-col gap-1.5 p-4 rounded-xl bg-sky-50/30 border border-sky-50/80">
              <span className="text-xs font-bold text-sky-700 font-mono uppercase flex items-center gap-1">
                <TrendingUp size={13} />
                <span>Impact Metric</span>
              </span>
              <p className="text-xs text-slate-600 leading-snug">
                {activeProgramData.achievements}
              </p>
            </div>

            <div className="flex flex-col gap-1.5 p-4 rounded-xl bg-amber-50/20 border border-amber-100">
              <span className="text-xs font-bold text-amber-700 font-mono uppercase flex items-center gap-1">
                <Users size={13} />
                <span>Primary Target</span>
              </span>
              <p className="text-xs text-slate-600 leading-snug">
                {activeProgramData.beneficiaries}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
