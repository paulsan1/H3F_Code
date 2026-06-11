/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { DONATION_TIERS } from "../data";
import { 
  Heart, 
  Check, 
  Sparkles, 
  QrCode, 
  Building2, 
  Info, 
  CheckCircle, 
  PartyPopper,
  Copy
} from "lucide-react";
import Logo from "./Logo";

export default function Donate() {
  const [selectedTier, setSelectedTier] = useState<string>("tier-1");
  const [customAmount, setCustomAmount] = useState<string>("");
  const [isCustomMode, setIsCustomMode] = useState<boolean>(false);
  const [isSimulatingSuccess, setIsSimulatingSuccess] = useState<boolean>(false);
  const [donorName, setDonorName] = useState<string>("");
  const [copiedUPI, setCopiedUPI] = useState<boolean>(false);

  const activeTierObj = DONATION_TIERS.find((t) => t.id === selectedTier) || DONATION_TIERS[0];
  const finalAmount = isCustomMode ? (Number(customAmount) || 0) : activeTierObj.amount;

  const handleCopyUPI = () => {
    navigator.clipboard.writeText("h3f.foundation@okhdfc");
    setCopiedUPI(true);
    setTimeout(() => setCopiedUPI(false), 2000);
  };

  const handleSimulatePayment = (e: React.FormEvent) => {
    e.preventDefault();
    if (finalAmount <= 0) {
      alert("Please enter or select a donation amount.");
      return;
    }
    setIsSimulatingSuccess(true);
  };

  const handleResetSimulator = () => {
    setIsSimulatingSuccess(false);
    setCustomAmount("");
    setDonorName("");
    setIsCustomMode(false);
  };

  return (
    <section className="py-16 sm:py-24 px-8 max-w-7xl mx-auto" id="h3f-donation-portal">
      {/* Narrative Section Header */}
      <div className="text-center max-w-2xl mx-auto mb-16 flex flex-col items-center gap-2">
        <span className="text-xs font-bold text-sky-600 font-mono tracking-widest uppercase bg-sky-55 bg-sky-50 px-3 py-1 rounded-full w-fit">
          Empower Lives Securely
        </span>
        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 mt-2">
          Support Our Mission
        </h2>
        <div className="h-1 w-16 bg-sky-600 rounded-full mt-2"></div>
        <p className="text-sm text-slate-600 leading-relaxed mt-4">
          All donations to <span className="font-semibold text-slate-900">Hope Heal and Humanity Foundation (H3F)</span> are <span className="font-semibold text-slate-900">50% tax exempt</span> under Section 80G of the Income Tax Act, Govt. of India.
        </p>
      </div>

      {isSimulatingSuccess ? (
        /* Simulated Success State Screen */
        <div className="max-w-xl mx-auto bg-white rounded-3xl p-8 border border-sky-100 shadow-2xl shadow-sky-50 text-center flex flex-col items-center gap-6 animate-[scaleUp_0.3s_ease]">
          <div className="w-16 h-16 bg-sky-50 rounded-full flex items-center justify-center text-sky-600 shadow-inner">
            <PartyPopper size={32} />
          </div>
          <div className="flex flex-col gap-1.5">
            <h3 className="text-2xl font-bold text-slate-900">
              Thank You, Compassionate Soul!
            </h3>
            <p className="text-xs font-mono text-sky-600 tracking-wider font-semibold uppercase bg-sky-50 px-3 py-1 rounded-md">
              Simulated Contribution Logged Successfully
            </p>
          </div>
          
          <div className="bg-slate-50/80 rounded-2xl p-5 border border-slate-100 w-full text-left flex flex-col gap-3">
            <div className="flex justify-between items-center text-xs font-mono text-slate-400 border-b border-slate-100 pb-2">
              <span>Receipt Tracker ID</span>
              <span className="font-semibold text-slate-700">H3F-TX-{Math.floor(10000 + Math.random() * 90000)}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-slate-500">Donor Name:</span>
              <span className="font-semibold text-slate-800">{donorName || "Anonymous Supporter"}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-slate-500">Contribution Value:</span>
              <span className="font-bold text-sky-600 font-mono">₹{finalAmount.toLocaleString("en-IN")} INR</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-slate-500">Assigned Impact:</span>
              <span className="font-medium text-slate-800">
                {isCustomMode ? "General Upliftment Drive" : activeTierObj.impact}
              </span>
            </div>
            <p className="text-[11px] text-slate-450 text-center leading-snug border-t border-slate-100 pt-3 mt-1 italic">
              "We will process this exact sum immediately. An 80G tax receipt will be delivered soon to support your tax declaration!"
            </p>
          </div>
          
          <div className="flex gap-3 w-full">
            <button
              onClick={handleResetSimulator}
              className="flex-1 bg-slate-900 hover:bg-slate-800 text-white font-bold py-3.5 px-5 rounded-full text-sm transition-all cursor-pointer outline-none"
            >
              Back to Calculator
            </button>
          </div>
        </div>
      ) : (
        /* Main Dual Panel Contribution View */
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Column Left: Impact Selector Cards (span 7) */}
          <div className="lg:col-span-7 flex flex-col gap-6 animate-[fadeIn_0.5s_ease]">
            <div className="flex flex-col gap-1">
              <h3 className="text-xl font-bold text-slate-900">
                1. Select Pricing Bracket or Custom Amount
              </h3>
              <p className="text-xs text-slate-500">
                Transparent funding thresholds. Examine where every single rupee is spent.
              </p>
            </div>

            {/* Direct Bracket Tiers */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {DONATION_TIERS.map((tier) => {
                const isSelected = selectedTier === tier.id && !isCustomMode;
                return (
                  <button
                    key={tier.id}
                    onClick={() => {
                      setSelectedTier(tier.id);
                      setIsCustomMode(false);
                    }}
                    id={`donation-tier-card-${tier.id}`}
                    className={`flex flex-col gap-4 p-5 rounded-2xl border-2 text-left transition-all outline-none cursor-pointer ${
                      isSelected
                        ? "border-sky-600 bg-sky-50/20 shadow-sm shadow-sky-50"
                        : "border-slate-100 bg-white hover:border-slate-200"
                    }`}
                  >
                    <div className="flex justify-between items-center w-full">
                      <span className="text-sm font-bold text-sky-600 font-mono uppercase bg-sky-50 px-2 py-0.5 rounded text-[10px]">
                        {tier.impact}
                      </span>
                      {isSelected && (
                        <div className="w-5 h-5 bg-sky-600 rounded-full flex items-center justify-center text-white">
                          <Check size={12} strokeWidth={3} />
                        </div>
                      )}
                    </div>
                    <div>
                      <h4 className="text-2xl font-mono font-bold text-slate-950">
                        ₹{tier.amount.toLocaleString("en-IN")}
                      </h4>
                      <h5 className="text-xs font-bold text-slate-800 leading-tight mt-1">
                        {tier.label}
                      </h5>
                    </div>
                    <p className="text-xs text-slate-500 leading-snug font-light mt-1.5 border-t border-slate-50 pt-2.5">
                      {tier.description}
                    </p>
                  </button>
                );
              })}
            </div>

            {/* Custom Amount Form Segment */}
            <div className="bg-slate-50 rounded-2.5xl p-5 border border-slate-200/60">
              <div className="flex items-center justify-between mb-3 border-b border-slate-200/50 pb-2">
                <label className="text-sm font-bold text-slate-800 flex items-center gap-1.5">
                  <Sparkles size={15} className="text-amber-500" />
                  <span>Customize Your Contribution</span>
                </label>
                <button
                  type="button"
                  id="custom-toggle-btn"
                  onClick={() => setIsCustomMode(!isCustomMode)}
                  className={`text-xs font-bold uppercase tracking-wider font-mono px-3 py-1 rounded-full border transition-all cursor-pointer ${
                    isCustomMode 
                      ? "bg-sky-600 text-white border-sky-600" 
                      : "bg-white text-slate-600 hover:bg-slate-100 border-slate-200"
                  }`}
                >
                  {isCustomMode ? "Use Brackets" : "Custom Amount"}
                </button>
              </div>

              {isCustomMode ? (
                <div className="flex flex-col gap-3">
                  <div className="relative">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-lg font-bold text-slate-400 font-mono">
                      ₹
                    </span>
                    <input
                      type="number"
                      required
                      min="10"
                      max="1000000"
                      value={customAmount}
                      onChange={(e) => setCustomAmount(e.target.value)}
                      placeholder="Enter amount in Indian Rupees (INR)"
                      className="w-full bg-white border border-slate-200 rounded-xl py-3.5 pl-8 pr-4 font-mono font-bold text-slate-850 placeholder:font-sans placeholder:font-normal focus:outline-none focus:ring-2 focus:ring-sky-500 shadow-sm"
                    />
                  </div>
                  <p className="text-[11px] text-slate-450 leading-snug">
                    Enter any size donation from ₹10 to ₹10,00,000. Your funding supports general education materials and monthly grocery kits across Kolkata.
                  </p>
                </div>
              ) : (
                <div className="flex items-center gap-2 text-xs text-slate-500 font-light">
                  <Info size={14} className="text-sky-500 shrink-0" />
                  <span>Interactive Calculation Mode active. Click buttons above to change budget.</span>
                </div>
              )}
            </div>
          </div>

          {/* Column Right: Secure Checkout Simulator (span 5) */}
          <div className="lg:col-span-5 bg-white rounded-3xl p-6 sm:p-8 border border-slate-100 shadow-lg shadow-slate-105 flex flex-col gap-6">
            <div className="flex flex-col gap-1 border-b border-slate-100 pb-4">
              <h3 className="text-lg font-bold text-slate-900">
                2. Complete Checkout Transfer
              </h3>
              <p className="text-xs text-slate-500">
                Pick a transfer medium. Mock payments process locally for preview testing.
              </p>
            </div>

            {/* Simulated QR block details */}
            <div className="flex flex-col gap-4 border border-slate-200 bg-slate-50/50 rounded-2xl p-4">
              <span className="text-xs font-bold text-slate-700 font-mono uppercase tracking-widest flex items-center gap-1.5">
                <QrCode size={15} className="text-sky-600" />
                <span>UPI Scan & Transfer</span>
              </span>
              <div className="flex flex-col sm:flex-row gap-5 items-center">
                
                {/* Simulated Realistic QR Graphic */}
                <div className="w-32 h-32 bg-white rounded-xl border-2 border-slate-200 p-2 shadow-md flex flex-col justify-center items-center relative select-none shrink-0 group">
                  {/* Outer corner blocks representing a QR code scan target */}
                  <div className="absolute top-2.5 left-2.5 w-5 h-5 border-[3px] border-slate-800 rounded-sm"></div>
                  <div className="absolute top-2.5 right-2.5 w-5 h-5 border-[3px] border-slate-800 rounded-sm"></div>
                  <div className="absolute bottom-2.5 left-2.5 w-5 h-5 border-[3px] border-slate-800 rounded-sm"></div>
                  <div className="absolute bottom-2.5 right-2.5 w-1.5 h-1.5 bg-slate-800"></div>

                  {/* Randomized vector barcode elements */}
                  <div className="w-full h-full opacity-20 flex flex-wrap gap-1 p-5 items-center justify-center content-center select-none pointer-events-none">
                    <div className="w-2.5 h-1.5 bg-slate-800"></div>
                    <div className="w-1.5 h-2.5 bg-slate-800"></div>
                    <div className="w-1 h-1 bg-slate-800"></div>
                    <div className="w-2.5 h-2.5 bg-slate-800"></div>
                    <div className="w-1.5 h-1.5 bg-slate-800"></div>
                    <div className="w-2 h-1 bg-slate-800"></div>
                    <div className="w-1.5 h-2 bg-slate-800"></div>
                    <div className="w-3 h-1.5 bg-slate-800"></div>
                  </div>

                  {/* Logo overlay on the center of QR code */}
                  <div className="absolute bg-white p-1 rounded-md border border-slate-100 shadow-md transform group-hover:scale-115 transition-all duration-300">
                    <Logo size={20} />
                  </div>
                </div>

                <div className="flex-1 text-center sm:text-left flex flex-col gap-1.5 w-full">
                  <h4 className="text-xs font-bold text-slate-700">
                    Official UPI ID:
                  </h4>
                  {/* Copiable interactive block */}
                  <div className="flex items-center justify-between bg-white border border-slate-250 border-slate-200 rounded-lg p-1.5 shadow-sm">
                    <span className="text-xs font-mono font-bold text-slate-800 select-all ml-1.5">
                      h3f.foundation@okhdfc
                    </span>
                    <button
                      type="button"
                      onClick={handleCopyUPI}
                      className="text-slate-500 hover:text-sky-600 active:scale-95 transition-all outline-none cursor-pointer p-1.5 rounded-md hover:bg-slate-50 border border-transparent hover:border-slate-100"
                      title="Copy UPI ID"
                    >
                      {copiedUPI ? (
                        <CheckCircle size={14} className="text-emerald-500" />
                      ) : (
                        <Copy size={14} />
                      )}
                    </button>
                  </div>
                  <p className="text-[10px] text-slate-550 leading-snug mt-1">
                    Scan via GPay, PhonePe, Paytm, or BHIM apps. Registered under <span className="font-semibold text-slate-700">Hope Heal and Humanity Foundation</span>.
                  </p>
                </div>
              </div>
            </div>

            {/* Donation Checkout Form */}
            <form onSubmit={handleSimulatePayment} className="flex flex-col gap-4">
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-bold text-slate-700 uppercase tracking-wide">
                  Your Full Name
                </label>
                <input
                  type="text"
                  required
                  value={donorName}
                  onChange={(e) => setDonorName(e.target.value)}
                  placeholder="E.g. Sriman Ramesh Paul"
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-sky-500 transition-all"
                />
              </div>

              {/* Net total calculate block */}
              <div className="bg-slate-900 text-white p-5 rounded-2xl flex flex-col gap-2">
                <div className="flex justify-between items-baseline">
                  <span className="text-xs font-mono text-slate-400">TOTAL CONTRIBUTION DUE:</span>
                  <span className="text-2xl font-mono font-bold text-sky-400">
                    ₹{finalAmount.toLocaleString("en-IN")}
                  </span>
                </div>
                <div className="h-px bg-slate-800 my-1"></div>
                <p className="text-[10px] text-slate-400 leading-snug italic">
                  *Process mock donation feedback by completing this direct receipt form.
                </p>
              </div>

              <button
                type="submit"
                id="donate-submit-btn"
                className="w-full bg-sky-600 hover:bg-sky-700 text-white font-bold py-3.5 px-6 rounded-full text-base transition-all shadow-md active:scale-95 flex items-center justify-center gap-2 outline-none cursor-pointer"
              >
                <Heart size={16} fill="white" />
                <span>Simulate Donation Receipt</span>
              </button>
            </form>

            {/* Direct Bank coordinates Panel info */}
            <div className="border-t border-slate-100 pt-5 flex flex-col gap-3">
              <span className="text-xs font-bold text-slate-600 font-mono uppercase tracking-wider flex items-center gap-1.5">
                <Building2 size={13} className="text-sky-600" />
                <span>Corporate Bank Transfer Coordinates</span>
              </span>
              
              <div className="bg-slate-50 grid grid-cols-2 gap-3.5 p-4 rounded-xl border border-slate-100 text-xs text-slate-600">
                <div className="flex flex-col gap-0.5">
                  <span className="text-[10px] font-mono text-slate-400 uppercase">Beneficiary name</span>
                  <span className="font-semibold text-slate-800 leading-snug">HOPE HEAL AND HUMANITY FOUNDATION</span>
                </div>
                <div className="flex flex-col gap-0.5">
                  <span className="text-[10px] font-mono text-slate-400 uppercase">Bank / Branch</span>
                  <span className="font-semibold text-slate-800 leading-snug">HDFC Bank, Behala Branch</span>
                </div>
                <div className="flex flex-col gap-0.5">
                  <span className="text-[10px] font-mono text-slate-300 uppercase">Account number</span>
                  <span className="font-bold text-sky-700 font-mono text-sm leading-snug">50201048259932</span>
                </div>
                <div className="flex flex-col gap-0.5">
                  <span className="text-[10px] font-mono text-slate-400 uppercase">IFSC Bank Code</span>
                  <span className="font-semibold text-slate-800 font-mono leading-snug">HDFC0000254</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      )}
    </section>
  );
}
