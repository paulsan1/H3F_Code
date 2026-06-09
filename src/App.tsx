/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Programs from "./components/Programs";
import Gallery from "./components/Gallery";
import Donate from "./components/Donate";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { ContactRequest } from "./types";

export default function App() {
  const [activeTab, setActiveTab] = useState<string>("home");

  // In-memory or LocalStorage contact submissions persistence
  const [contactLogs, setContactLogs] = useState<ContactRequest[]>(() => {
    const saved = localStorage.getItem("h3f_contact_logs");
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {
        return [];
      }
    }
    // Seeds delicious, professional starting records to avoid looking blank empty
    return [
      {
        id: "seed-1",
        name: "Santanu Paul (General Trustee)",
        email: "santanupaul123@gmail.com",
        phone: "+91 82406 03991",
        subject: "Welcome to H3F New Web Portal",
        inquiryType: "Partnership",
        message: "This is a seed notification confirming that the Hope Heal and Humanity Foundation sitemap is up and running. Kolkata operations can log submissions in this session console.",
        timestamp: "06:15:20 PM",
        status: "Email Sim Dispatched"
      },
      {
        id: "seed-2",
        name: "Shyamal Chatterjee",
        email: "shyamal.chat@rediffmail.com",
        phone: "+91 98301 22485",
        subject: "Wish to volunteer for children tutoring near Behala",
        inquiryType: "Volunteer",
        message: "I am a retired high school mathematics teacher residing in south-west Kolkata. I wish to give 4 hours every weekend to tutor the Project Vidyarthi kids in local primary coaching circles.",
        timestamp: "06:17:11 PM",
        status: "Received"
      }
    ];
  });

  useEffect(() => {
    localStorage.setItem("h3f_contact_logs", JSON.stringify(contactLogs));
  }, [contactLogs]);

  // Hook up tab changing viewport reset back to top scroll
  const handleSetActiveTab = (tab: string) => {
    setActiveTab(tab);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleAddContactLog = (log: ContactRequest) => {
    setContactLogs((prev) => [log, ...prev]);
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-850 flex flex-col font-sans selection:bg-sky-500 selection:text-white" id="h3f-app-root">
      {/* Dynamic Header */}
      <Header activeTab={activeTab} setActiveTab={handleSetActiveTab} />

      {/* Primary Dynamic Main Body Content viewport */}
      <main className="flex-1 w-full animate-[fadeIn_0.4s_ease-out]">
        {activeTab === "home" && (
          <div className="flex flex-col">
            <Hero 
              onDonateClick={() => handleSetActiveTab("donate")} 
              onContactClick={() => handleSetActiveTab("contact")} 
            />
            {/* Direct Home Summary Section of campaigns */}
            <section className="py-20 bg-white">
              <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 md:grid-cols-3 gap-10">
                <div className="flex flex-col gap-3 p-6.5 rounded-2.5xl bg-slate-50/50 border border-slate-100">
                  <span className="text-xs font-bold font-mono text-sky-600 uppercase bg-sky-50 py-0.5 px-2 rounded-md w-fit">Strategic Focus 01</span>
                  <h3 className="text-xl font-bold text-slate-900">Direct Local Deliveries</h3>
                  <p className="text-sm text-slate-600 leading-relaxed font-light">
                    Unlike standard centralized aggregators, we purchase materials in bulk, pack, and hand-deliver school kits and nutrition packages directly into classrooms and slums.
                  </p>
                  <button 
                    onClick={() => handleSetActiveTab("about")} 
                    className="text-xs font-bold text-sky-600 hover:text-sky-700 text-left underline mt-1 outline-none cursor-pointer"
                  >
                    Examine Our Methods
                  </button>
                </div>

                <div className="flex flex-col gap-3 p-6.5 rounded-2.5xl bg-slate-50/50 border border-slate-100">
                  <span className="text-xs font-bold font-mono text-sky-600 uppercase bg-sky-50 py-0.5 px-2 rounded-md w-fit">Strategic Focus 02</span>
                  <h3 className="text-xl font-bold text-slate-900">Education Over Dependency</h3>
                  <p className="text-sm text-slate-600 leading-relaxed font-light">
                    Giving material aid without counseling fails long-term. Under Project Vidyarthi, we provide routine after-school coaching sessions to foster deep academic resilience.
                  </p>
                  <button 
                    onClick={() => handleSetActiveTab("programs")} 
                    className="text-xs font-bold text-sky-600 hover:text-sky-700 text-left underline mt-1 outline-none cursor-pointer"
                  >
                    Examine Child Programs
                  </button>
                </div>

                <div className="flex flex-col gap-3 p-6.5 rounded-2.5xl bg-slate-50/50 border border-slate-100">
                  <span className="text-xs font-bold font-mono text-sky-600 uppercase bg-sky-50 py-0.5 px-2 rounded-md w-fit">Strategic Focus 03</span>
                  <h3 className="text-xl font-bold text-slate-900">Elderly Companion Circles</h3>
                  <p className="text-sm text-slate-600 leading-relaxed font-light">
                    Seniors left behind face acute healthcare degradation. We sponsor continuous chronic medical capsules and distribute dignity ration aids to unassisted elders.
                  </p>
                  <button 
                    onClick={() => handleSetActiveTab("donate")} 
                    className="text-xs font-bold text-sky-600 hover:text-sky-700 text-left underline mt-1 outline-none cursor-pointer"
                  >
                    Sponsor Elder Care
                  </button>
                </div>
              </div>
            </section>
          </div>
        )}

        {activeTab === "about" && <About />}

        {activeTab === "programs" && <Programs />}

        {activeTab === "gallery" && <Gallery />}

        {activeTab === "donate" && <Donate />}

        {activeTab === "contact" && (
          <Contact 
            contactLogs={contactLogs} 
            onAddContactLog={handleAddContactLog} 
          />
        )}
      </main>

      {/* Standard Footer */}
      <Footer setActiveTab={handleSetActiveTab} />
    </div>
  );
}
