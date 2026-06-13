/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Calendar, 
  MapPin, 
  Sparkles, 
  Leaf, 
  ArrowRight, 
  Users, 
  TrendingUp, 
  Compass,
  FileCheck,
  Award,
  ChevronRight
} from "lucide-react";

interface Drive {
  index: number;
  title: string;
  date: string;
  location?: string;
  points: string[];
}

interface YearJourney {
  year: string;
  description?: string;
  highlightIcon: React.ReactNode;
  drivesCount: number;
  drives: Drive[];
}

export default function Programs() {
  const [activeYear, setActiveYear] = useState<string>("2026");

  const timelineData: YearJourney[] = [
    {
      year: "2026",
      description: "Entering third year of operations with deep local integration and sustained rural primary school supports.",
      highlightIcon: <Award size={15} className="text-emerald-500 shrink-0" />,
      drivesCount: 1,
      drives: [
        {
          index: 8,
          title: "Sonarpur Drive",
          date: "June 2026",
          location: "Sonarpur Village District",
          points: [
            "Supported a vital rural primary school initiative",
            "Distributed nutritious food packets, sturdy school bags, games items, and full stationery packages",
            "Assisted the school state mid-day meal support channel with clean food distribution"
          ]
        }
      ]
    },
    {
      year: "2025",
      description: "Geographic expansion and landmark outreach beyond Kolkata city perimeter to coastal river areas.",
      highlightIcon: <TrendingUp size={15} className="text-sky-500 shrink-0" />,
      drivesCount: 3,
      drives: [
        {
          index: 7,
          title: "Expanded Sundarban Drive",
          date: "Dec 2025",
          location: "Goranbose & Nafarganj Villages",
          points: [
            "Covered ultra-remote riverine villages of Goranbose and Nafarganj",
            "Distributed academic textbooks and study reference kits to local schoolgirls",
            "Provided heavy direct grocery bags and warm winter blankets to over 100+ unassisted elderly residents",
            "Sustained over 300+ direct beneficiaries at the end of winter"
          ]
        },
        {
          index: 6,
          title: "Sundarban Drive",
          date: "Sept 2025",
          location: "Sundarban Delta Region",
          points: [
            "Executed our landmark first outreach campaign outside the Kolkata city perimeter",
            "Provided complete dry food materials and groceries to underprivileged households",
            "Distributed hand-stitched clothing collections for infants, warm blankets, and essential writing kits",
            "Directly supported over 100+ local coastal families"
          ]
        },
        {
          index: 5,
          title: "Village Drive",
          date: "Mar 2025",
          location: "Raniakuthi Village",
          points: [
            "Distributed custom-designed new dresses, clothing pairs, and clean family food boxes",
            "Provided complete writing pens, notebooks, and dynamic stationery kits to schoolgoers",
            "Delivered refurbished secondary wear and garments to adults",
            "Separately supported 100+ local village children"
          ]
        }
      ]
    },
    {
      year: "2024",
      description: "Programmatic scaling through school holiday joy distribution and intense freezing winter street rescues.",
      highlightIcon: <Sparkles size={15} className="text-amber-500 shrink-0" />,
      drivesCount: 2,
      drives: [
        {
          index: 4,
          title: "Winter Drive",
          date: "Dec 2024",
          location: "Kolkata City Streets & Railway Stations",
          points: [
            "Conducted midnight street distributions of hand-packed, freshly cooked homemade food",
            "Distributed premium heavy blankets to homeless people seeking shelter along roadsides and station platforms"
          ]
        },
        {
          index: 3,
          title: "Durga Puja Drive",
          date: "October 2024",
          location: "Sarisha Village, Diamond Harbour",
          points: [
            "Partnered with and supported two under-resourced countryside primary schools",
            "Gifted premium new festive dresses to around 180 young students to spread puja smiles",
            "Distributed customized stationery sets, ready-to-eat healthy snack packs, and organized a grand community lunch"
          ]
        }
      ]
    },
    {
      year: "2023",
      description: "Landmark year of H3F's formal transition into an officially Government registered NGO.",
      highlightIcon: <FileCheck size={15} className="text-indigo-505 text-indigo-500 shrink-0" />,
      drivesCount: 1,
      drives: [
        {
          index: 2,
          title: "Second Drive",
          date: "11 June 2023",
          location: "South Kolkata Streets",
          points: [
            "Distributed dry ration supplies and packed grocery sets directly to pavement dwellers",
            "Offered relief and daily-use support kits to over 80+ roadside people"
          ]
        }
      ]
    },
    {
      year: "2022",
      description: "Our humble origins fueled by dynamic, compassionate youth volunteers on the ground with zero external funding.",
      highlightIcon: <Leaf size={15} className="text-emerald-500 shrink-0" />,
      drivesCount: 1,
      drives: [
        {
          index: 1,
          title: "First Drive",
          date: "10 Dec 2022",
          location: "Raniakuthi Village Area",
          points: [
            "Successfully organized an absolute grand festive community lunch for 50+ underprivileged children",
            "Distributed new protective blankets, fresh dry fruits, primary stationery kits, and collections of neatly sorted old clothes"
          ]
        }
      ]
    }
  ];

  const currentJourney = timelineData.find(item => item.year === activeYear) || timelineData[0];

  return (
    <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 max-w-5xl mx-auto" id="h3f-campaigns-section">
      {/* Dynamic Header */}
      <div className="max-w-3xl mx-auto mb-10 text-center flex flex-col items-center">
        <span className="text-[10px] font-bold text-sky-600 font-mono tracking-widest uppercase bg-sky-50 px-2.5 py-1 rounded-full flex items-center gap-1.5 border border-sky-100/60">
          <Compass size={11} className="text-sky-500 animate-[spin_8s_linear_infinite]" />
          <span>Campaign Registry</span>
        </span>
        <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 mt-2">
          🌱 H3F Project Portfolios
        </h2>
        <p className="text-xs text-slate-500 font-light mt-1.5 max-w-md">
          Explore our real, localized historical drives, village actions, and community responses organized by year.
        </p>
        <div className="h-1 w-12 bg-sky-600 rounded-full mt-3"></div>
      </div>

      {/* Main Panel Layout (Left Panel sidebar, Right Panel detail viewport) */}
      <div className="grid grid-cols-1 md:grid-cols-[220px_1fr] gap-6 md:gap-10 items-start">
        
        {/* LEFT PANEL: Year Selector */}
        <div className="md:sticky md:top-24 z-10">
          <div className="bg-white rounded-2xl p-3 border border-slate-200/60 md:shadow-xs">
            <h3 className="hidden md:block text-[10px] font-mono font-bold uppercase tracking-widest text-slate-400 mb-3 px-2">
              Select Operating Year
            </h3>
            
            {/* Scrollable button group for mobile, regular list for desktop */}
            <div className="flex md:flex-col overflow-x-auto md:overflow-x-visible pb-2 md:pb-0 gap-1.5 scrollbar-thin scrollbar-thumb-slate-200">
              {timelineData.map((item) => {
                const isSelected = item.year === activeYear;
                return (
                  <button
                    key={item.year}
                    id={`year-tab-${item.year}`}
                    onClick={() => setActiveYear(item.year)}
                    className={`flex-none md:w-full text-left py-2.5 px-3 rounded-lg flex items-center justify-between transition-all outline-none cursor-pointer border ${
                      isSelected
                        ? "bg-sky-50/90 border-sky-200 text-sky-750 font-semibold shadow-xs"
                        : "bg-transparent border-transparent hover:bg-slate-50 hover:border-slate-100 text-slate-605 text-slate-600 hover:text-slate-900"
                    }`}
                  >
                    <div className="flex items-center gap-2.5">
                      <div className={`w-2 h-2 rounded-full transition-all ${isSelected ? "bg-sky-500 ring-2 ring-sky-200 scale-110" : "bg-slate-300"}`} />
                      <span className="text-sm font-bold font-mono tracking-tight">{item.year}</span>
                    </div>
                    
                    <span className={`text-[10px] font-mono px-1.5 py-0.5 rounded ml-2 md:ml-0 ${
                      isSelected ? "bg-sky-100 text-sky-850 font-bold" : "bg-slate-100 text-slate-500"
                    }`}>
                      {item.drivesCount} {item.drivesCount > 1 ? "Drives" : "Drive"}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* RIGHT PANEL: Selected Year Details Viewport */}
        <div className="min-h-[380px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeYear}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.18, ease: "easeOut" }}
              className="bg-white rounded-2xl p-5 sm:p-7 border border-slate-200/70 shadow-xs flex flex-col gap-5.5 relative overflow-hidden"
            >
              
              {/* Subtle visual big background year watermark */}
              <div className="absolute right-4 top-2 text-[80px] sm:text-[100px] font-black font-mono text-slate-50 leading-none select-none z-0 pointer-events-none tracking-tighter">
                {currentJourney.year}
              </div>

              {/* Header inside right panel */}
              <div className="flex items-start gap-3.5 relative z-10 border-b border-slate-100 pb-4">
                <div className="w-9 h-9 rounded-xl bg-slate-50 flex items-center justify-center border border-slate-100/80 shrink-0 shadow-xs">
                  {currentJourney.highlightIcon}
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-slate-900 flex items-center gap-2">
                    Campaigns Year {currentJourney.year}
                  </h3>
                  <p className="text-xs text-slate-500 font-light mt-0.5 leading-relaxed">
                    {currentJourney.description}
                  </p>
                </div>
              </div>

              {/* Operational Milestones Callout (specifically for 2023 or 2022) */}
              {activeYear === "2023" && (
                <div className="bg-indigo-50/50 border border-indigo-100/40 rounded-xl p-3.5 text-xs text-slate-650 flex items-start gap-2.5 relative z-10">
                  <div className="w-5 h-5 rounded-md bg-indigo-100 text-indigo-700 flex items-center justify-center shrink-0 font-medium">✨</div>
                  <div>
                    <strong className="font-bold text-indigo-900 font-mono text-[10px] uppercase tracking-wider block">Scale & Government Registration</strong>
                    <span className="font-light text-slate-600 block mt-0.5">
                      Operational strength expanded from 6 to 13 members within this single year, boosting the scope of roadside actions and enabling formal legal West Bengal governmental registration.
                    </span>
                  </div>
                </div>
              )}
              {activeYear === "2022" && (
                <div className="bg-emerald-50/50 border border-emerald-100/40 rounded-xl p-3.5 text-xs text-slate-650 flex items-start gap-2.5 relative z-10">
                  <div className="w-5 h-5 rounded-md bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 font-medium">🌱</div>
                  <div>
                    <strong className="font-bold text-emerald-900 font-mono text-[10px] uppercase tracking-wider block">Cooperative Founding Roots</strong>
                    <span className="font-light text-slate-600 block mt-0.5">
                      Initiated collectively by young Kolkata students contributing their personal allowances. No formal office or external charity was utilized; drives focused on pure roadside meal distributions.
                    </span>
                  </div>
                </div>
              )}

              {/* Selected Year's Drives list */}
              <div className="space-y-4 relative z-10">
                <h4 className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-450 text-slate-400">
                  Action Records ({currentJourney.drivesCount})
                </h4>

                <div className="space-y-4">
                  {currentJourney.drives.map((drive) => (
                    <div 
                      key={drive.index} 
                      className="border border-slate-100 bg-slate-50/30 hover:bg-slate-50/75 p-4 rounded-xl transition-all hover:shadow-xs group"
                    >
                      {/* Top bar: Drive indexing, title, location and date details */}
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 border-b border-slate-100 pb-2">
                        <div className="flex items-center gap-2">
                          <span className="text-[9px] font-mono font-bold bg-sky-100 text-sky-800 px-1.5 py-0.5 rounded">
                            DRIVE #{drive.index}
                          </span>
                          <h5 className="text-sm font-bold text-slate-800 group-hover:text-sky-600 transition-colors">
                            {drive.title}
                          </h5>
                        </div>
                        
                        <div className="flex flex-wrap items-center gap-1.5">
                          <span className="inline-flex items-center gap-1 text-[9px] font-mono font-bold text-sky-700 bg-sky-50/80 px-1.5 py-0.5 rounded border border-sky-100/60">
                            <Calendar size={9} />
                            {drive.date}
                          </span>
                          {drive.location && (
                            <span className="inline-flex items-center gap-1 text-[9px] font-mono font-bold text-amber-700 bg-amber-50/80 px-1.5 py-0.5 rounded border border-amber-100/60">
                              <MapPin size={9} />
                              {drive.location}
                            </span>
                          )}
                        </div>
                      </div>

                      {/* Points achieved/accomplished */}
                      <ul className="mt-3 space-y-2">
                        {drive.points.map((point, pIdx) => (
                          <li key={pIdx} className="flex items-start gap-2 text-xs text-slate-600 leading-relaxed font-light">
                            <ArrowRight size={11} className="text-sky-400 mt-1 shrink-0 group-hover:translate-x-0.5 transition-transform" />
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>

            </motion.div>
          </AnimatePresence>
        </div>

      </div>

      {/* Vision & Goals Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-12 pt-8 border-t border-slate-200">
        <div className="bg-white rounded-xl p-4 sm:p-5 border border-slate-100/80 shadow-xs flex flex-col gap-2.5">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg bg-rose-50 text-rose-500 flex items-center justify-center shrink-0 border border-rose-100/40">
              <Users size={14} />
            </div>
            <h3 className="text-sm font-bold text-slate-900">❤️ Our Crew</h3>
          </div>
          <p className="text-xs text-slate-500 leading-relaxed font-light">
            Starting with just 6 members, we have grown to an organized community registry, expanding the breadth and quality of direct on-the-ground volunteer relief.
          </p>
        </div>

        <div className="bg-white rounded-xl p-4 sm:p-5 border border-slate-100/80 shadow-xs flex flex-col gap-2.5">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg bg-emerald-50 text-emerald-500 flex items-center justify-center shrink-0 border border-emerald-100/40">
              <Sparkles size={14} />
            </div>
            <h3 className="text-sm font-bold text-slate-900">🌟 Clean Accountability</h3>
          </div>
          <p className="text-xs text-slate-500 leading-relaxed font-light">
            Maintaining direct support deliveries translates into maximum efficiency, steering all contributions straight into rural classrooms and unassisted pension-poor elders.
          </p>
        </div>
      </div>
    </section>
  );
}
