/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { GALLERY_DATA } from "../data";
import { GalleryItem } from "../types";
import { X, ZoomIn, Eye, Layers } from "lucide-react";

export default function Gallery() {
  const [activeFilter, setActiveFilter] = useState<string>("All");
  const [selectedPhoto, setSelectedPhoto] = useState<GalleryItem | null>(null);

  const categories = ["All", "Education", "Food Relief", "Welfare", "Elderly Care", "Community"];

  const filteredPhotos = activeFilter === "All"
    ? GALLERY_DATA
    : GALLERY_DATA.filter((photo) => photo.category === activeFilter);

  // Map predefined aspect ratios to Tailwind Grid Column/Row spans or height configurations
  const getMasonryItemStyle = (aspect: string) => {
    switch (aspect) {
      case "wide":
        return "md:col-span-2 h-[260px] sm:h-[300px]";
      case "tall":
        return "row-span-2 h-[450px] sm:h-[500px]";
      case "tallest":
        return "row-span-2 h-[480px] sm:h-[560px] md:col-span-1";
      case "landscape":
        return "h-[200px] sm:h-[240px]";
      case "square":
      default:
        return "h-[240px] sm:h-[300px]";
    }
  };

  return (
    <section className="py-16 sm:py-24 px-8 max-w-7xl mx-auto" id="h3f-gallery-page">
      {/* Narrative Section Header */}
      <div className="text-center max-w-2xl mx-auto mb-12 flex flex-col items-center gap-2">
        <span className="text-xs font-bold text-sky-600 font-mono tracking-widest uppercase bg-sky-50 px-3 py-1 rounded-full">
          Visual Impact Log
        </span>
        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 mt-2">
          H3F Campaign Gallery
        </h2>
        <div className="h-1 w-16 bg-sky-600 rounded-full mt-2"></div>
        <p className="text-sm text-slate-600 leading-relaxed mt-4">
          A visual sitemap overview of our actual support drives in Kolkata schools and slums. Click any rectangle picture to enlarge.
        </p>
      </div>

      {/* Interactive Category Filter Menu */}
      <div className="flex flex-wrap justify-center gap-2 mb-10" id="gallery-filters">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveFilter(category)}
            className={`px-4.5 py-2 rounded-full text-xs sm:text-sm font-semibold tracking-wide transition-all uppercase font-mono cursor-pointer ${
              activeFilter === category
                ? "bg-sky-600 text-white shadow-md shadow-sky-100"
                : "bg-slate-100 text-slate-600 hover:bg-slate-200"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* "Random Rectangle Size in a Box" Masonry Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-max" id="gallery-masonry-grid">
        {filteredPhotos.map((photo) => (
          <div
            key={photo.id}
            id={`gallery-item-${photo.id}`}
            onClick={() => setSelectedPhoto(photo)}
            className={`group relative overflow-hidden rounded-3xl bg-slate-100 border border-slate-100/50 cursor-pointer shadow-sm hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-500 ${getMasonryItemStyle(photo.aspectRatio)}`}
          >
            {/* Image render */}
            <img
              src={photo.imageUrl}
              alt={photo.title}
              className="w-full h-full object-cover object-center group-hover:scale-105 duration-700 transition-transform filter brightness-[0.98]"
              loading="lazy"
              referrerPolicy="no-referrer"
            />

            {/* Glowing Hover Layer Overlay Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-350 flex flex-col justify-end p-5 text-white animate-[fadeIn_0.2s_ease]" id={`hover-overlay-${photo.id}`}>
              <div className="flex items-center gap-1.5 text-[10px] font-bold font-mono tracking-widest text-sky-305 uppercase mb-1.5 bg-slate-905/50 bg-slate-900/50 backdrop-blur-md self-start px-2 py-0.5 rounded text-sky-400">
                <Layers size={10} />
                <span>{photo.category}</span>
              </div>
              <h4 className="text-base font-bold tracking-tight text-white flex items-center gap-1">
                <span>{photo.title}</span>
                <Eye size={14} className="opacity-70 inline" />
              </h4>
              <p className="text-xs text-slate-350 leading-snug mt-1 font-light line-clamp-2">
                {photo.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Fallback for Empty Categories */}
      {filteredPhotos.length === 0 && (
        <div className="text-center py-20 bg-slate-50 rounded-3xl border border-dashed border-slate-205 max-w-md mx-auto">
          <p className="text-slate-500 font-mono text-sm uppercase">No campaigns logged in this bracket yet.</p>
          <button
            onClick={() => setActiveFilter("All")}
            className="text-sky-600 hover:text-sky-700 font-semibold text-xs mt-3 underline"
          >
            Revert to All Pictures
          </button>
        </div>
      )}

      {/* Lightbox Modal fullscreen view */}
      {selectedPhoto && (
        <div
          className="fixed inset-0 z-[100] bg-slate-950/98 flex flex-col justify-center items-center p-4 backdrop-blur-sm animate-[fadeIn_0.2s_ease]"
          onClick={() => setSelectedPhoto(null)}
          id="gallery-lightbox-modal"
        >
          {/* Close button top right */}
          <button
            onClick={() => setSelectedPhoto(null)}
            className="absolute top-4 right-4 bg-white/15 hover:bg-white/25 text-white p-3 rounded-full transition-colors z-50 pointer-events-auto shadow cursor-pointer"
            aria-label="Close picture"
          >
            <X size={20} />
          </button>

          {/* Picture Box */}
          <div
            className="relative max-w-4xl max-h-[75vh] flex justify-center items-center pointer-events-none mb-6 animate-[scaleUp_0.2s_ease-out]"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedPhoto.imageUrl}
              alt={selectedPhoto.title}
              className="max-w-full max-h-[75vh] object-contain rounded-2xl shadow-2xl pointer-events-auto cursor-auto"
              referrerPolicy="no-referrer"
            />
          </div>

          {/* Description block beneath */}
          <div
            className="max-w-xl text-center text-white px-4 select-none relative animate-[fadeIn_0.4s_ease-in]"
            onClick={(e) => e.stopPropagation()}
          >
            <span className="inline-block px-3 py-1 rounded-full text-[10px] font-bold font-mono uppercase bg-sky-500/10 text-sky-305 border border-sky-500/20 mb-2 text-sky-305">
              {selectedPhoto.category}
            </span>
            <h3 className="text-lg sm:text-xl font-bold leading-tight">{selectedPhoto.title}</h3>
            <p className="text-xs sm:text-sm text-slate-300 mt-2 leading-relaxed font-light font-sans">
              {selectedPhoto.description}
            </p>
          </div>
        </div>
      )}
    </section>
  );
}
