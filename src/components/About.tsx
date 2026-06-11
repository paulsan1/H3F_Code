/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { TEAM_DATA } from "../data";
import { Heart, Activity, Users, HelpCircle, ChevronRight, Award, Landmark, BookOpen } from "lucide-react";

export default function About() {
  const [activePillar, setActivePillar] = useState<string>("hope");

  const pillars = [
    {
      id: "hope",
      title: "Hope (Vidyarthi)",
      tagline: "Unlocking intellectual potentials",
      icon: BookOpen,
      iconColor: "text-blue-500 bg-blue-50",
      colorClass: "border-blue-500 bg-blue-50/20 text-blue-800",
      longDescription: "We provide educational kits, cartoon backpacks, writing slates, folders, pencil boxes, and uniform subsidies to under-resourced schools. Our team has committed to assuring that economic distress never derails primary education in local communities of Behala, Kolkata."
    },
    {
      id: "heal",
      title: "Heal (Dignity)",
      tagline: "Restoring physiological & mental ease",
      icon: Activity,
      iconColor: "text-rose-500 bg-rose-50",
      colorClass: "border-rose-500 bg-rose-50/20 text-rose-800",
      longDescription: "Healing happens through consistent medical drives, health screening, medicine distribution, diagnostics help, and elder physical aids. Under Project Dignity, we sustain abandoned, low-income elderly populations with basic geriatric therapies and routine monthly health provisions."
    },
    {
      id: "humanity",
      title: "Humanity (Anna)",
      tagline: "Lifting those facing sudden structural decay",
      icon: Heart,
      iconColor: "text-sky-500 bg-sky-50",
      colorClass: "border-sky-500 bg-sky-50/20 text-sky-850",
      longDescription: "Feeding hungry households is humanity's primary task. Under Project Anna, our team packs and supplies monthly grocery bags (rice, wheat, lentils, nutrition supplement, hygienic supplies) to daily-wage workers, widows, and vulnerable sectors in regional Kolkata pockets."
    },
    {
      id: "together",
      title: "Together (Suraksha)",
      tagline: "Safe spaces of mutual growth & play",
      icon: Users,
      iconColor: "text-amber-500 bg-amber-50",
      colorClass: "border-amber-500 bg-amber-50/20 text-amber-805",
      longDescription: "We operate secure, daytime childrens' activity spaces featuring games, study hours, drawing canvases, and basic sanitary guides. Mobilizing regional peer support structures and building safe harbor regions forms our unified community objective."
    }
  ];

  const selectedPillarData = pillars.find((p) => p.id === activePillar) || pillars[0];

  return (
    <section className="bg-slate-50/40 py-16 sm:py-24 px-8 max-w-7xl mx-auto" id="h3f-about-page">
      {/* Narrative Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-16 flex flex-col items-center gap-3">
        <span className="text-xs font-bold text-sky-600 font-mono tracking-widest uppercase bg-sky-50 px-3 py-1 rounded-full">
          About Our Foundation
        </span>
        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 mt-2">
          Lend a Hand to Bring a Smile
        </h2>
        <div className="h-1 w-16 bg-sky-600 rounded-full mt-2"></div>
        <p className="text-base text-slate-600 mt-4 leading-relaxed font-sans">
          Founded in Kolkata, **Hope Heal and Humanity Foundation (H3F)** serves as an actionable, non-profit community organization centered on the immediate, tangible relief of absolute distress. We are non-sectarian, completely audited, and run by local volunteers.
        </p>
      </div>

      {/* Grid: Story Card Left & Core Statistics Right */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-24">
        {/* NGO Story Card */}
        <div className="bg-white rounded-3xl p-8 shadow-sm border border-slate-200 flex flex-col gap-5">
          <div className="flex items-center gap-1.5 text-xs font-bold font-mono uppercase text-sky-600">
            <Award size={15} />
            <span>Official NGO Identity</span>
          </div>
          <h3 className="text-2xl font-bold text-slate-900 leading-snug">
            Our Mission & Direct Field Presence
          </h3>
          <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
            H3F conducts field missions in the urban slums, daily wage clusters, and elderly pocket communities of south-west Kolkata. Unlike conventional theoretical foundations, 100% of our operations focus on direct material distribution and educational coaching. We source, buy, pack, and physically carry materials directly into classrooms and households.
          </p>
          <div className="bg-slate-50 rounded-2xl p-4 flex flex-col gap-2 border border-slate-100">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700 flex items-center gap-1.5 font-sans">
              <Landmark size={14} className="text-sky-655 text-sky-600" />
              <span>Full Governance & Tax Exemption Compliance</span>
            </h4>
            <p className="text-xs text-slate-505 text-slate-500 leading-relaxed">
              We operate under full registration guidelines of public society acts, with approvals including IT Section 80G (granting 50% tax deductions to individual/corporate donors), making our finances completely open to third-party audits.
            </p>
          </div>
        </div>

        {/* Interactive "Pillars of Impact Selector" */}
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-1.5">
            <h3 className="text-xl font-bold text-slate-900 flex items-center gap-2">
              <span>Interactive Pillar Guide</span>
              <span className="text-xs font-normal text-slate-400 font-mono">(Click to expand)</span>
            </h3>
            <p className="text-sm text-slate-505 text-slate-500">
              Our work flows through 4 specialized, practical programs mapped directly to human survival and empowerment metrics.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3">
            {pillars.map((pillar) => {
              const IconComp = pillar.icon;
              const isSelected = pillar.id === activePillar;
              return (
                <button
                  key={pillar.id}
                  onClick={() => setActivePillar(pillar.id)}
                  id={`about-pillar-btn-${pillar.id}`}
                  className={`flex flex-col gap-3 p-4 rounded-2xl border-2 text-left transition-all outline-none cursor-pointer ${
                    isSelected
                      ? "border-sky-600 bg-sky-50/40 shadow-sm shadow-sky-50"
                      : "border-slate-100 bg-white hover:border-slate-200"
                  }`}
                >
                  <div className={`p-2 rounded-xl self-start ${pillar.iconColor}`}>
                    <IconComp size={18} />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">{pillar.title}</h4>
                    <p className="text-[11px] text-slate-500 leading-snug line-clamp-1 truncate mt-0.5">
                      {pillar.tagline}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Active Pillar Card Expanded Display */}
          <div className="bg-gradient-to-br from-slate-950 to-slate-900 text-white rounded-2xl p-6 shadow-lg border border-slate-800 animate-[fadeIn_0.3s_ease]">
            <div className="flex items-center gap-2 text-sky-400 font-sans font-semibold text-sm uppercase tracking-wide mb-2">
              <span>ACTIVE INSIGHT</span>
              <ChevronRight size={14} />
              <span>{selectedPillarData.title}</span>
            </div>
            <p className="text-sm sm:text-base text-slate-350 text-slate-300 leading-relaxed font-light">
              "{selectedPillarData.longDescription}"
            </p>
          </div>
        </div>
      </div>

      {/* Meet Team Members Card segment */}
      <div className="border-t border-slate-200/60 pt-20">
        <div className="text-center max-w-2xl mx-auto mb-12 flex flex-col items-center gap-2">
          <span className="text-xs font-bold text-sky-600 font-mono uppercase bg-sky-50 px-3 py-1 rounded-full">Leadership & Core Team</span>
          <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-950 mt-2">
            Meet the Heart of H3F
          </h3>
          <p className="text-sm text-slate-600 leading-relaxed">
            Our governing body consists of physicians, specialized educators, and logistics leads who oversee field operations personally.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TEAM_DATA.map((member) => (
            <div
              key={member.id}
              className="group bg-white rounded-2xl p-6 border border-slate-200 hover:border-sky-500 hover:shadow-lg transition-all flex flex-col gap-4 text-center items-center"
              id={`team-card-${member.id}`}
            >
              <div className="relative">
                {/* Image Avatar Wrapper */}
                <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-slate-100 group-hover:border-sky-500 transition-colors bg-slate-100 shadow-inner">
                  <img
                    src={member.imageUrl}
                    alt={member.name}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-300 transform group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="absolute -bottom-1 right-2 bg-sky-600 text-white px-2 py-0.5 rounded-full text-[9px] font-bold uppercase tracking-wider scale-95 shadow-sm">
                  Director
                </div>
              </div>

              <div>
                <h4 className="text-base font-bold text-slate-900 group-hover:text-sky-700 transition-colors">
                  {member.name}
                </h4>
                <p className="text-xs font-semibold text-sky-600 font-mono mt-0.5">
                  {member.role}
                </p>
              </div>

              <p className="text-xs text-slate-500 leading-relaxed mt-1 font-light border-t border-slate-100 pt-3">
                {member.bio}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
