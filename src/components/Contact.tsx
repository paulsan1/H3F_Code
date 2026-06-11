/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { ContactRequest } from "../types";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  Inbox, 
  CheckCircle, 
  AlertCircle, 
  Clock, 
  Compass, 
  Sparkles, 
  FileText 
} from "lucide-react";

interface ContactProps {
  contactLogs: ContactRequest[];
  onAddContactLog: (log: ContactRequest) => void;
}

export default function Contact({ contactLogs, onAddContactLog }: ContactProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [subject, setSubject] = useState("");
  const [inquiryType, setInquiryType] = useState<"Volunteer" | "Donate" | "Partnership" | "General">("General");
  const [message, setMessage] = useState("");
  const [successMsg, setSuccessMsg] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!name || !email || !message) {
      alert("Please fill in all mandatory fields before sending.");
      return;
    }

    const newLog: ContactRequest = {
      id: `req-${Date.now()}`,
      name,
      email,
      phone: phone || "Not Provided",
      subject: subject || `${inquiryType} Inquiry of H3F`,
      inquiryType,
      message,
      timestamp: new Date().toLocaleTimeString(),
      status: "Email Sim Dispatched"
    };

    onAddContactLog(newLog);
    setSuccessMsg(true);

    // Reset fields
    setName("");
    setEmail("");
    setPhone("");
    setSubject("");
    setMessage("");

    // Hide success after a few seconds
    setTimeout(() => {
      setSuccessMsg(false);
    }, 6000);
  };

  return (
    <section className="py-16 sm:py-24 px-8 max-w-7xl mx-auto" id="h3f-contact-page">
      {/* Narrative Section Header */}
      <div className="text-center max-w-2xl mx-auto mb-16 flex flex-col items-center gap-2">
        <span className="text-xs font-bold text-sky-600 font-mono tracking-widest uppercase bg-sky-50 px-3 py-1 rounded-full">
          Connect With Core Team
        </span>
        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 mt-2">
          Contact Us & Submit Requests
        </h2>
        <div className="h-1 w-16 bg-sky-600 rounded-full mt-2"></div>
        <p className="text-sm text-slate-600 leading-relaxed mt-4">
          Fill out our secure inquiry console to request assistance, register as a volunteer, or coordinate corporate partnerships with our organization.
        </p>
      </div>

      {/* Structural Column Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        {/* Column Left: Contact Form (span 7) */}
        <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-8 border border-slate-100 shadow-lg shadow-slate-100/40">
          <div className="flex flex-col gap-1 border-b border-slate-100 pb-4 mb-6">
            <h3 className="text-lg font-bold text-slate-900 flex items-center gap-1.5">
              <Compass size={18} className="text-sky-600" />
              <span>Inquiry Submission Portal</span>
            </h3>
            <p className="text-xs text-slate-505 text-slate-500">
              Your message is formulated as a secure email mockup packet and routed directly to H3F supervisors.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-bold text-slate-705 text-slate-800 uppercase tracking-wide">
                  Your Full Name <span className="text-rose-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="E.g. Santanu Paul"
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-sky-500 transition-all"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-bold text-slate-705 text-slate-800 uppercase tracking-wide">
                  Email Address <span className="text-rose-500">*</span>
                </label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="E.g. santanupaul@gmail.com"
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-sky-500 transition-all"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-bold text-slate-705 text-slate-800 uppercase tracking-wide">
                  Phone Number
                </label>
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="E.g. +91 82406 03991"
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-sky-500 transition-all"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-bold text-slate-705 text-slate-800 uppercase tracking-wide">
                  Type of Inquiry <span className="text-rose-500">*</span>
                </label>
                <select
                  value={inquiryType}
                  onChange={(e) => setInquiryType(e.target.value as any)}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-3 text-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-sky-500 transition-all cursor-pointer"
                >
                  <option value="General">General Inquiry / Greeting</option>
                  <option value="Volunteer">Volunteer / Tutor Registry</option>
                  <option value="Donate">Donation Assistance / Receipt Help</option>
                  <option value="Partnership">Corporate Partnership & CSR</option>
                </select>
              </div>
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-bold text-slate-705 text-slate-800 uppercase tracking-wide">
                Message Subject
              </label>
              <input
                type="text"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                placeholder="E.g. Request to join next weekend dry grocery drive"
                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-sky-500 transition-all"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-bold text-slate-705 text-slate-800 uppercase tracking-wide">
                Your Detailed Message <span className="text-rose-505 text-rose-500">*</span>
              </label>
              <textarea
                required
                rows={5}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Share coordinates, volunteer availability, or inquiry points in detail here..."
                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-sky-500 transition-all resize-y"
              ></textarea>
            </div>

            {/* Validation & Feedback Overlay */}
            {successMsg && (
              <div className="p-4 bg-sky-50 border border-sky-100 rounded-2xl flex items-start gap-2.5 text-sky-850 text-slate-900 text-xs sm:text-sm animate-[fadeIn_0.2s_ease-out]">
                <CheckCircle size={18} className="text-emerald-500 shrink-0 mt-0.5" />
                <div className="flex flex-col gap-0.5 ml-1">
                  <span className="font-bold text-sky-800">Email Request Simulated!</span>
                  <span className="text-slate-600 text-[11px] leading-relaxed">
                    We successfully simulated dispatch to supervisors. Scroll to the <span className="font-semibold text-slate-800">Live Requests Monitor</span> bottom bar to verify the data log in real time!
                  </span>
                </div>
              </div>
            )}

            <button
              type="submit"
              id="contact-submit-btn"
              className="mt-2 bg-sky-600 hover:bg-sky-700 text-white font-semibold py-3.5 px-6 rounded-full text-sm sm:text-base flex items-center justify-center gap-2 shadow-md shadow-sky-200 transition-all active:scale-95 outline-none cursor-pointer"
            >
              <Send size={15} />
              <span>Submit Email Request</span>
            </button>
          </form>
        </div>

        {/* Column Right: Kolkata Coordinates & Google Map (span 5) */}
        <div className="lg:col-span-5 flex flex-col gap-6 ">
          {/* Coordinates Block */}
          <div className="bg-slate-900 text-white rounded-3xl p-6 sm:p-7 flex flex-col gap-5 shadow-lg relative overflow-hidden border border-slate-800">
            {/* Design accents */}
            <div className="absolute right-0 top-0 w-32 h-32 bg-sky-500/10 rounded-full blur-3xl pointer-events-none"></div>

            <div className="flex flex-col gap-0.5 scale-95 origin-left">
              <span className="text-xs font-mono text-sky-400 font-bold uppercase tracking-widest leading-none">
                Registered Office
              </span>
              <h3 className="text-lg font-bold text-white mt-1 leading-tight">
                H3F Foundation Headquarters
              </h3>
            </div>

            <div className="flex flex-col gap-4 text-xs sm:text-sm text-slate-300 border-t border-slate-800 pt-4">
              <div className="flex gap-3 items-start">
                <MapPin size={18} className="text-sky-400 shrink-0 mt-0.5" />
                <div className="flex flex-col">
                  <span className="font-bold text-white">Physical Hub:</span>
                  <span>Behala (Near Tram Depot), Kolkata, West Bengal, India - 700061</span>
                </div>
              </div>

              <div className="flex gap-3 items-start">
                <Phone size={18} className="text-sky-400 shrink-0 mt-0.5" />
                <div className="flex flex-col">
                  <span className="font-bold text-white">Operations Phone:</span>
                  <a href="tel:+918240603991" className="hover:text-sky-305 text-sky-300 font-mono">
                    +91 82406 03991
                  </a>
                </div>
              </div>

              <div className="flex gap-3 items-start">
                <Mail size={18} className="text-sky-400 shrink-0 mt-0.5" />
                <div className="flex flex-col">
                  <span className="font-bold text-white">General Email:</span>
                  <a href="mailto:contact@h3f.org.in" className="hover:text-sky-305 text-sky-300 font-mono">
                    contact@h3f.org.in
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Google Maps block */}
          <div className="bg-white border border-slate-100 rounded-3xl p-4 shadow-lg shadow-slate-100/30 flex flex-col gap-3">
            <span className="text-xs font-bold text-slate-400 font-mono uppercase tracking-wider flex items-center gap-1">
              <span>Interactive Map (Kolkata)</span>
            </span>
            <div className="w-full h-[280px] bg-slate-50 rounded-2xl overflow-hidden border border-slate-100 shadow-inner relative">
              <iframe
                title="Google Map Behala Kolkata"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14731.865961448834!2d88.3056023!3d22.4997645!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a027bc97505bdf9%3A0xc3c6046e7598c114!2sBehala%2C%20Kolkata%2C%20West%20Bengal!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                className="w-full h-full border-0"
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            <p className="text-[11px] text-slate-550 text-slate-500 font-light text-center leading-snug px-2">
              Serving the low-income settlements of Behala and adjacent districts in south Kolkata. Visitor parking available.
            </p>
          </div>
        </div>
      </div>

      {/* Live Submission Package Explorer Logger Drawer inside the Page */}
      <div className="mt-16 bg-slate-50 rounded-3xl p-6 sm:p-8 border border-slate-200">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b border-slate-200 pb-4 mb-6">
          <div className="flex items-center gap-2.5">
            <div className="bg-sky-100 text-sky-800 p-2.5 rounded-xl">
              <Inbox size={20} />
            </div>
            <div>
              <h3 className="text-lg font-bold text-slate-900">
                Supervisor Live Requests Monitor
              </h3>
              <p className="text-xs text-slate-505 text-slate-500">
                See submitted form packets simulated as sent to our mail servers (Current Session).
              </p>
            </div>
          </div>
          <div className="bg-white border border-slate-200 text-slate-650 px-3.5 py-1.5 rounded-full text-xs font-mono font-bold flex items-center gap-1.5 shadow-sm">
            <span className="w-2 h-2 bg-sky-500 rounded-full animate-ping"></span>
            <span>Logs Active ({contactLogs.length})</span>
          </div>
        </div>

        {contactLogs.length === 0 ? (
          <div className="text-center py-12 bg-white rounded-2xl border border-dashed border-slate-200 max-w-sm mx-auto flex flex-col items-center gap-2">
            <AlertCircle size={24} className="text-slate-300" />
            <p className="text-xs text-slate-400 font-mono uppercase">
              No inquiries filed yet.
            </p>
            <p className="text-xs text-slate-505 text-slate-500 px-4 leading-normal">
              Inquiries submitted above instantly save inside local session state and log here! Try submitting the contact form to view the simulation live.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-[fadeIn_0.5s_ease-out]">
            {contactLogs.map((log) => (
              <div
                key={log.id}
                id={`live-contact-log-${log.id}`}
                className="bg-white rounded-2xl p-5 border border-slate-200 shadow-sm flex flex-col gap-3 relative animate-[fadeIn_0.3s_ease-out]"
              >
                <div className="flex justify-between items-start border-b border-slate-100 pb-2.5">
                  <div className="flex flex-col">
                    <span className="text-sm font-bold text-slate-950 truncate max-w-[150px]">
                      {log.name}
                    </span>
                    <span className="text-[10px] text-slate-400 font-mono truncate max-w-[150px]">
                      {log.email}
                    </span>
                  </div>
                  <span className="bg-slate-900 text-sky-305 text-[9px] font-mono font-bold uppercase tracking-wider px-2 py-0.5 rounded border border-slate-800 text-sky-400">
                    {log.status}
                  </span>
                </div>

                <div className="flex flex-col gap-1 text-xs">
                  <div className="flex justify-between font-mono text-[10px] text-slate-400">
                    <span>Type: {log.inquiryType}</span>
                    <div className="flex items-center gap-1">
                      <Clock size={9} />
                      <span>{log.timestamp}</span>
                    </div>
                  </div>
                  <div className="font-bold text-slate-800 mt-1 truncate">
                    Subject: {log.subject}
                  </div>
                  <p className="text-slate-650 leading-relaxed bg-slate-50 p-2.5 rounded-lg border border-slate-100 mt-1 text-[11px] h-16 overflow-y-auto">
                    "{log.message}"
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
