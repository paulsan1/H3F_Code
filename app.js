/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

// Global constant datasets
const PROGRAMS_DATA = [
  {
    id: "education",
    name: "Child Education",
    title: "Project Vidyarthi: Enlightening Young Minds",
    iconName: "graduation-cap",
    summary: "Providing comprehensive school kits, backpacks, uniforms, and structural coaching to underprivileged kids in Kolkata.",
    description: "At H3F, we believe education is the single most powerful weapon against poverty. Through Project Vidyarthi, we provide targeted educational kits (including backpacks, notebooks, writing materials, and mathematical instruments) to direct students and maintain routine coaching classes after school hours so that no child drops out due to lack of academic support.",
    objectives: [
      "Distribute custom school kits with cartoon-themed backpacks to spark interest in children.",
      "Conduct regular evening coaching classes led by qualified volunteer educators.",
      "Provide scholarship assistance for meritorious students from marginalized families.",
      "Bridge the digital divide by offering fundamental computer literacy workshops."
    ],
    achievements: "Over 850 children in Behala and adjoining slum pockets have received full educational kits and direct mentorship.",
    beneficiaries: "Children aged 5-15 from low-income, single-parent, or daily-wage workers' families."
  },
  {
    id: "food-relief",
    name: "Food & Nutrition",
    title: "Project Anna: Hunger Elimination & Relief",
    iconName: "flame",
    summary: "Ration kit packing, direct dry grocery supplies, and community food distribution drives for low-resource households.",
    description: "Nourishment is the cornerstone of a healthy community. Under Project Anna, our team packs and distributes dry grocery kits consisting of rice, pulses, cooking oil, flour, salt, and hygiene essentials. We target vulnerable pockets where daily-wage laborers struggle to source two square meals a day.",
    objectives: [
      "Distribute 250+ grocery kits monthly containing dynamic ration essentials.",
      "Host urgent hot-meal distribution kitchens during local crises or monsoons.",
      "Monitor nutritional parameters of growing toddlers in targeted slum areas.",
      "Deliver fresh milk and fruits to support immune health in growing children."
    ],
    achievements: "Successfully distributed 12,000+ meals and 1,500 monthly grocery packets over the last year.",
    beneficiaries: "Slum moradores, construction workers, and families of disabled or laid-off individuals."
  },
  {
    id: "child-welfare",
    name: "Child Welfare",
    title: "Project Suraksha: Safe Nurturing & Rights",
    iconName: "sparkles",
    summary: "Creating secure community safe spaces for girls, organizing health checkups, and defending fundamental welfare.",
    description: "Children deserve a secure environment to laugh, study, and play. Project Suraksha works to shield boys and girls from exploitative labor and early child marriage by hosting safe spaces to explore hobbies, play games, learn about personal safety, and receive medical attention.",
    objectives: [
      "Operate daytime child-activity safe rooms with games, books, and creative tools.",
      "Conduct quarterly medical, pediatric, and vaccine awareness checkups.",
      "Educate older girls on menstrual hygiene, sanitation, and physical boundaries.",
      "Form active child protection committees inside local communities."
    ],
    achievements: "Maintained 3 active safe playrooms and conducted health screenings for over 450 kids.",
    beneficiaries: "Children exposed to hazardous environments, child labor loops, or domestic neglect."
  },
  {
    id: "elderly-care",
    name: "Elderly Support",
    title: "Project Dignity: Senior Citizen Assistance",
    iconName: "heart",
    summary: "Supplying daily medicines, nutrition, and companionship to abandoned or low-income senior citizens.",
    description: "Aging shouldn't be accompanied by fear and abandonment. Through Project Dignity, we reach out to older individuals who lack family support systems, supplying free routine medication, warm clothing, easy-to-digest nutrition packs, and consistent emotional companionship.",
    objectives: [
      "Distribute monthly specialized senior dry-ration and nutritional health packs.",
      "Sponsor essential chronic medicines (hypertension, diabetes, thyroid).",
      "Organize elder companion walks, storytelling sessions, and listening circles.",
      "Provide free walking aids, specs, and essential geriatric medical advice."
    ],
    achievements: "Regularly supporting 120 senior citizens in south-west Kolkata with complete healthcare sponsorships.",
    beneficiaries: "Single, widowed, or financially abandoned elders in Kolkata areas."
  }
];

const GALLERY_DATA = [
  {
    id: "bag-drive",
    title: "School Backpack Drive",
    description: "Distribution of colorful, cartoon-printed school bags and stationery kits under Project Vidyarthi to inspire children.",
    category: "Education",
    imageUrl: "https://images.unsplash.com/photo-1542810634-71277d95dcbb?q=80&w=800",
    aspectRatio: "wide"
  },
  {
    id: "ration-drive",
    title: "Project Anna Grocery Bags",
    description: "Orderly arrangement of individual essential nutrition kits stacked on tables, ready to be dispatched to daily wage earners.",
    category: "Food Relief",
    imageUrl: "https://images.unsplash.com/photo-1593113598332-cd288d649433?q=80&w=800",
    aspectRatio: "square"
  },
  {
    id: "classroom-action",
    title: "Interactive Classroom Mentorship",
    description: "Engaged teachers guiding children through basic science and life-skills in a temporary community classroom in Kolkata.",
    category: "Education",
    imageUrl: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=800",
    aspectRatio: "tall"
  },
  {
    id: "community-standee",
    title: "Lend a Hand to Bring a Smile",
    description: "Official Hope Heal and Humanity Foundation banner guiding local donors at a south Kolkata community drive.",
    category: "Community",
    imageUrl: "https://images.unsplash.com/photo-1509099836639-18ba1795216d?q=80&w=800",
    aspectRatio: "landscape"
  },
  {
    id: "food-dist-drive",
    title: "Nutritious Food Feeding Camp",
    description: "Feeding healthy hot meals to smiling local children. Healthy distribution drives executed in Behala, Kolkata.",
    category: "Food Relief",
    imageUrl: "https://images.unsplash.com/photo-1508847154043-be12a62861c1?q=80&w=800",
    aspectRatio: "wide"
  },
  {
    id: "elderly-med-camp",
    title: "Elderly Health & Welfare",
    description: "Distributing medical aids, glasses, and diagnostic assistance for senior citizens in the neighborhood community center.",
    category: "Elderly Care",
    imageUrl: "https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?q=80&w=800",
    aspectRatio: "square"
  },
  {
    id: "children-hope-drawing",
    title: "Creative Arts and Drawing Session",
    description: "Fostering child creative expression. Providing colors and canvases to bring dreams to life for young artists.",
    category: "Welfare",
    imageUrl: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?q=80&w=800",
    aspectRatio: "tallest"
  },
  {
    id: "volunteer-coaching",
    title: "After-school Learning Group",
    description: "Dedicated college student volunteers tutoring young students in primary mathematics and literacy curriculum.",
    category: "Education",
    imageUrl: "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?q=80&w=800",
    aspectRatio: "landscape"
  }
];

const TEAM_DATA = [
  {
    id: "team-1",
    name: "Dr. Anirban Choudhury",
    role: "President & Chief Medical Director",
    bio: "Pioneering community geriatric health for 14 years. Dr. Choudhury orchestrates dry health drives, senior care units, and directs our elderly welfare program.",
    imageUrl: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=300"
  },
  {
    id: "team-2",
    name: "Srimati Priya Sen",
    role: "Director of Child Welfare & Education Strategy",
    bio: "An educationist devoted to foundational learning. Priya shapes Project Vidyarthi's after-school syllabus and guides school-kit distributions across regional primary centers.",
    imageUrl: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=300"
  },
  {
    id: "team-3",
    name: "Subhashis Roy",
    role: "Lead Field Operations Coordinator",
    bio: "Subhashis leads the ground logistic lines, ensuring dry food packing is meticulously executed and ration drives in Kolkata's outer slums reach families pinpointed as most in need.",
    imageUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=300"
  }
];

const DONATION_TIERS = [
  {
    id: "tier-1",
    amount: 300,
    label: "Sponsor a School Bag & Kit",
    impact: "Project Vidyarthi",
    description: "Funds 1 premium cartoon-themed, durable backpack filled with 5 notebooks, drawing pencils, mathematics instruments, and slate boards."
  },
  {
    id: "tier-2",
    amount: 1000,
    label: "Provide a Month's Relief Ration Pack",
    impact: "Project Anna",
    description: "Supplies a family of four with 10kg Rice, 2kg Atta, 2kg Lentils, 1 Liter Cooking Oil, vital spices, and personal hygiene soaps."
  },
  {
    id: "tier-3",
    amount: 1800,
    label: "Sponsor Elder Medicine For a Quarter",
    impact: "Project Dignity",
    description: "Sponsors chronic cardiac, hypertension, and basic diabetic medications for 1 vulnerable, financially unassisted senior citizen for 3 months."
  },
  {
    id: "tier-4",
    amount: 5000,
    label: "Sponsor a Classroom for 1 Month",
    impact: "Holistic Sponsorship",
    description: "Covers dry snacks, educational material, computer teaching projector lease, and honorarium for regular volunteer educators."
  }
];

const PILLARS_DATA = {
  hope: {
    title: "Hope (Vidyarthi)",
    longDescription: "We provide educational kits, cartoon backpacks, writing slates, folders, pencil boxes, and uniform subsidies to under-resourced schools. Our team has committed to assuring that economic distress never derails primary education in local communities of Behala, Kolkata."
  },
  heal: {
    title: "Heal (Dignity)",
    longDescription: "Healing happens through consistent medical drives, health screening, medicine distribution, diagnostics help, and elder physical aids. Under Project Dignity, we sustain abandoned, low-income elderly populations with basic geriatric therapies and routine monthly health provisions."
  },
  humanity: {
    title: "Humanity (Anna)",
    longDescription: "Feeding hungry households is humanity's primary task. Under Project Anna, our team packs and supplies monthly grocery bags (rice, wheat, lentils, nutrition supplement, hygienic supplies) to daily-wage workers, widows, and vulnerable sectors in regional Kolkata pockets."
  },
  together: {
    title: "Together (Suraksha)",
    longDescription: "We operate secure, daytime childrens' activity spaces featuring games, study hours, drawing canvases, and basic sanitary guides. Mobilizing regional peer support structures and building safe harbor regions forms our unified community objective."
  }
};

// Global Interactive States
let currentTab = 'home';
let mealsServed = 6425;
let kitsGifted = 1284;
let activeGalleryFilter = 'All';
let selectedDonateTierId = 'tier-1';
let isDonateCustomMode = false;
let mobileMenuOpen = false;

let contactLogs = [
  {
    id: "seed-1",
    name: "Santanu Paul (General Director)",
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

// Controls Tab Switching
function setActiveTab(tabId) {
  currentTab = tabId;
  const tabs = ['home', 'about', 'programs', 'gallery', 'donate', 'contact'];
  
  // Close mobile drawer if open
  setMobileMenuState(false);

  // Update DOM sections
  tabs.forEach(tab => {
    const viewEl = document.getElementById(`view-${tab}`);
    if (viewEl) {
      if (tab === tabId) {
        viewEl.classList.remove('hidden');
        viewEl.classList.add('animate-fadeIn');
      } else {
        viewEl.classList.add('hidden');
        viewEl.classList.remove('animate-fadeIn');
      }
    }
  });

  // Update desktop navigation highlighters
  tabs.forEach(tab => {
    const navBtn = document.getElementById(`nav-link-${tab}`);
    if (navBtn) {
      if (tab === tabId) {
        navBtn.className = "relative px-4 py-2 rounded-lg text-sm font-semibold transition-all text-sky-600 border-b-2 border-sky-600 rounded-none pb-1 pt-1";
      } else {
        navBtn.className = "relative px-4 py-2 rounded-lg text-sm font-semibold transition-all text-slate-600 hover:text-sky-600";
      }
    }
  });

  // Update mobile drawer navigation highlighters
  tabs.forEach(tab => {
    const mNavBtn = document.getElementById(`mobile-nav-link-${tab}`);
    if (mNavBtn) {
      if (tab === tabId) {
        mNavBtn.className = "w-full text-left px-4 py-3 rounded-xl text-base font-semibold transition-all bg-sky-50 text-sky-700";
      } else {
        mNavBtn.className = "w-full text-left px-4 py-3 rounded-xl text-base font-semibold transition-all text-slate-700 hover:bg-slate-50 hover:text-sky-600";
      }
    }
  });

  // Scroll to top
  window.scrollTo({ top: 0, behavior: "smooth" });

  // Hook-specific renderers
  if (tabId === 'gallery') {
    filterGallery(activeGalleryFilter);
  } else if (tabId === 'programs') {
    selectProgram('education');
  } else if (tabId === 'about') {
    selectPillar('hope');
  } else if (tabId === 'donate') {
    selectDonateTier('tier-1');
  }
}

// Mobile Menu toggles
function setMobileMenuState(isOpen) {
  mobileMenuOpen = isOpen;
  const drawer = document.getElementById('mobile-drawer');
  const openIcon = document.getElementById('menu-icon-open');
  const closeIcon = document.getElementById('menu-icon-close');
  
  if (drawer) {
    if (isOpen) {
      drawer.classList.remove('hidden');
    } else {
      drawer.classList.add('hidden');
    }
  }

  if (openIcon && closeIcon) {
    if (isOpen) {
      openIcon.classList.add('hidden');
      closeIcon.classList.remove('hidden');
    } else {
      openIcon.classList.remove('hidden');
      closeIcon.classList.add('hidden');
    }
  }
}

function toggleMobileMenu() {
  setMobileMenuState(!mobileMenuOpen);
}

// Counters increment automation
function startCounters() {
  const mealsEl = document.getElementById('meals-served-count');
  const kitsEl = document.getElementById('kits-gifted-count');

  if (mealsEl) {
    mealsEl.innerText = mealsServed.toLocaleString();
  }
  if (kitsEl) {
    kitsEl.innerText = kitsGifted.toLocaleString();
  }

  setInterval(() => {
    mealsServed += Math.floor(Math.random() * 2);
    const mEl = document.getElementById('meals-served-count');
    if (mEl) {
      mEl.innerText = mealsServed.toLocaleString();
    }
  }, 12000);

  setInterval(() => {
    if (Math.random() > 0.85) {
      kitsGifted += 1;
      const kEl = document.getElementById('kits-gifted-count');
      if (kEl) {
        kEl.innerText = kitsGifted.toLocaleString();
      }
    }
  }, 2500);
}

// About pillar panel switcher
function selectPillar(pillarId) {
  const pData = PILLARS_DATA[pillarId];
  if (!pData) return;
  
  const keys = Object.keys(PILLARS_DATA);
  keys.forEach(k => {
    const btn = document.getElementById(`about-pillar-btn-${k}`);
    if (btn) {
      if (k === pillarId) {
        btn.className = "flex flex-col gap-3 p-4 rounded-xl border-2 text-left transition-all outline-none cursor-pointer border-sky-600 bg-sky-50/40 shadow-sm shadow-sky-50";
      } else {
        btn.className = "flex flex-col gap-3 p-4 rounded-xl border-2 text-left transition-all outline-none cursor-pointer border-slate-100 bg-white hover:border-slate-200";
      }
    }
  });

  const activeTitleEl = document.getElementById("selected-pillar-title");
  const activeDescEl = document.getElementById("selected-pillar-description");
  if (activeTitleEl && activeDescEl) {
    activeTitleEl.innerText = pData.title;
    activeDescEl.innerText = `"${pData.longDescription}"`;
  }
}

// Programs Campaign Selector
function selectProgram(progId) {
  const prog = PROGRAMS_DATA.find(p => p.id === progId);
  if (!prog) return;

  PROGRAMS_DATA.forEach(p => {
    const btn = document.getElementById(`program-btn-${p.id}`);
    if (btn) {
      if (p.id === progId) {
        btn.className = "w-full text-left p-5 rounded-2xl border-2 transition-all duration-300 outline-none relative group cursor-pointer border-sky-600 bg-sky-50/30 shadow-sm shadow-sky-50/50";
        const icon = btn.querySelector('.arrow-icon');
        if (icon) icon.className = "arrow-icon text-sky-600 transition-all transform rotate-45 shrink-0";
      } else {
        btn.className = "w-full text-left p-5 rounded-2xl border-2 transition-all duration-300 outline-none relative group cursor-pointer border-slate-100 bg-white hover:border-slate-200";
        const icon = btn.querySelector('.arrow-icon');
        if (icon) icon.className = "arrow-icon text-slate-300 group-hover:text-sky-500 transition-all transform shrink-0";
      }
    }
  });

  const titleEl = document.getElementById("program-detail-title");
  const descEl = document.getElementById("program-detail-desc");
  const objectivesEl = document.getElementById("program-detail-objectives");
  const achievementsEl = document.getElementById("program-detail-achievements");
  const beneficiariesEl = document.getElementById("program-detail-beneficiaries");

  if (titleEl) titleEl.innerText = prog.title;
  if (descEl) descEl.innerText = prog.description;
  if (achievementsEl) achievementsEl.innerText = prog.achievements;
  if (beneficiariesEl) beneficiariesEl.innerText = prog.beneficiaries;

  if (objectivesEl) {
    objectivesEl.innerHTML = prog.objectives.map(obj => `
      <li class="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
        <i data-lucide="check-circle" class="text-sky-500 mt-0.5 shrink-0 w-4 h-4"></i>
        <span>${obj}</span>
      </li>
    `).join('');
    lucide.createIcons();
  }
}

// Gallery aspect structures
function getMasonryItemStyle(aspect) {
  switch (aspect) {
    case "wide":
      return "md:col-span-2 row-span-2 h-full w-full";
    case "tall":
      return "row-span-3 h-full w-full";
    case "tallest":
      return "row-span-4 md:col-span-1 h-full w-full";
    case "landscape":
      return "row-span-2 h-full w-full";
    case "square":
    default:
      return "row-span-2 h-full w-full";
  }
}

// Gallery Dynamic Filter System
function filterGallery(category) {
  activeGalleryFilter = category;
  
  const categories = ["All", "Education", "Food Relief", "Welfare", "Elderly Care", "Community"];
  categories.forEach(cat => {
    const btn = document.getElementById(`filter-btn-${cat}`);
    if (btn) {
      if (cat === category) {
        btn.className = "px-4.5 py-2 rounded-full text-xs sm:text-sm font-semibold tracking-wide transition-all uppercase font-mono cursor-pointer bg-sky-600 text-white shadow-md shadow-sky-100";
      } else {
        btn.className = "px-4.5 py-2 rounded-full text-xs sm:text-sm font-semibold tracking-wide transition-all uppercase font-mono cursor-pointer bg-slate-100 text-slate-600 hover:bg-slate-200";
      }
    }
  });

  const filtered = category === "All" ? GALLERY_DATA : GALLERY_DATA.filter(p => p.category === category);
  const gridEl = document.getElementById("gallery-masonry-grid");
  const fallbackEl = document.getElementById("gallery-empty-fallback");

  if (!gridEl) return;

  if (filtered.length === 0) {
    gridEl.innerHTML = "";
    if (fallbackEl) fallbackEl.classList.remove("hidden");
  } else {
    if (fallbackEl) fallbackEl.classList.add("hidden");
    gridEl.innerHTML = filtered.map(p => `
      <div
        id="gallery-item-${p.id}"
        onclick="openLightbox('${p.id}')"
        class="group relative overflow-hidden rounded-3xl bg-slate-100 border border-slate-100/50 cursor-pointer shadow-sm hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-500 ${getMasonryItemStyle(p.aspectRatio)}"
      >
        <img
          src="${p.imageUrl}"
          alt="${p.title}"
          class="w-full h-full object-cover object-center group-hover:scale-105 duration-700 transition-transform filter brightness-[0.98]"
          loading="lazy"
        />
        <div class="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5 text-white">
          <div class="flex items-center gap-1.5 text-[10px] font-bold font-mono tracking-widest text-sky-400 uppercase mb-1.5 bg-slate-900/60 backdrop-blur-md self-start px-2 py-0.5 rounded border border-slate-850">
            <i data-lucide="layers" class="w-2.5 h-2.5"></i>
            <span>${p.category}</span>
          </div>
          <h4 class="text-base font-bold tracking-tight text-white flex items-center gap-1.5">
            <span>${p.title}</span>
            <i data-lucide="eye" class="opacity-70 w-3.5 h-3.5 mt-0.5"></i>
          </h4>
          <p class="text-xs text-slate-300 leading-snug mt-1 font-light line-clamp-2">
            ${p.description}
          </p>
        </div>
      </div>
    `).join('');
    lucide.createIcons();
  }
}

// Lightbox modal actions
function openLightbox(photoId) {
  const photo = GALLERY_DATA.find(p => p.id === photoId);
  if (!photo) return;

  const modalImg = document.getElementById("lightbox-img");
  const modalCat = document.getElementById("lightbox-category");
  const modalTitle = document.getElementById("lightbox-title");
  const modalDesc = document.getElementById("lightbox-description");
  const lightbox = document.getElementById("gallery-lightbox-modal");

  if (modalImg) modalImg.src = photo.imageUrl;
  if (modalCat) modalCat.innerText = photo.category;
  if (modalTitle) modalTitle.innerText = photo.title;
  if (modalDesc) modalDesc.innerText = photo.description;

  if (lightbox) {
    lightbox.classList.remove("hidden");
    lightbox.classList.add("flex");
  }
}

function closeLightbox() {
  const lightbox = document.getElementById("gallery-lightbox-modal");
  if (lightbox) {
    lightbox.classList.add("hidden");
    lightbox.classList.remove("flex");
  }
}

// Donate logic selector
function selectDonateTier(tierId) {
  selectedDonateTierId = tierId;
  isDonateCustomMode = false;

  DONATION_TIERS.forEach(t => {
    const card = document.getElementById(`donation-tier-card-${t.id}`);
    if (card) {
      if (t.id === tierId) {
        card.className = "flex flex-col gap-4 p-5 rounded-2xl border-2 text-left transition-all outline-none cursor-pointer border-sky-600 bg-sky-50/20 shadow-sm shadow-sky-50";
        const iconCheck = card.querySelector('.check-container');
        if (iconCheck) iconCheck.classList.remove('hidden');
      } else {
        card.className = "flex flex-col gap-4 p-5 rounded-2xl border-2 text-left transition-all outline-none cursor-pointer border-slate-100 bg-white hover:border-slate-200";
        const iconCheck = card.querySelector('.check-container');
        if (iconCheck) iconCheck.classList.add('hidden');
      }
    }
  });

  const customToggleBtn = document.getElementById('custom-toggle-btn');
  if (customToggleBtn) {
    customToggleBtn.className = "text-xs font-bold uppercase tracking-wider font-mono px-3 py-1 rounded-full border transition-all cursor-pointer bg-white text-slate-600 hover:bg-slate-100 border-slate-200";
    customToggleBtn.innerText = "Custom Amount";
  }

  const customFieldArea = document.getElementById('custom-field-area');
  if (customFieldArea) {
    customFieldArea.classList.add('hidden');
    customFieldArea.innerHTML = '';
  }

  const activeMsg = document.getElementById('calculation-active-msg');
  if (activeMsg) activeMsg.classList.remove('hidden');

  calculateTotal();
}

function toggleCustomMode() {
  isDonateCustomMode = !isDonateCustomMode;
  const customToggleBtn = document.getElementById('custom-toggle-btn');
  const customFieldArea = document.getElementById('custom-field-area');
  const activeMsg = document.getElementById('calculation-active-msg');

  DONATION_TIERS.forEach(t => {
    const card = document.getElementById(`donation-tier-card-${t.id}`);
    if (card) {
      card.className = "flex flex-col gap-4 p-5 rounded-2xl border-2 text-left transition-all outline-none cursor-pointer border-slate-100 bg-white hover:border-slate-200";
      const iconCheck = card.querySelector('.check-container');
      if (iconCheck) iconCheck.classList.add('hidden');
    }
  });

  if (isDonateCustomMode) {
    if (customToggleBtn) {
      customToggleBtn.className = "text-xs font-bold uppercase tracking-wider font-mono px-3 py-1 rounded-full border transition-all cursor-pointer bg-sky-600 text-white border-sky-600";
      customToggleBtn.innerText = "Use Brackets";
    }
    
    if (activeMsg) activeMsg.classList.add('hidden');
    if (customFieldArea) {
      customFieldArea.classList.remove('hidden');
      customFieldArea.innerHTML = `
        <div class="flex flex-col gap-3">
          <div class="relative">
            <span class="absolute left-4 top-1/2 -not-sr-only transform -translate-y-1/2 text-lg font-bold text-slate-400 font-mono">₹</span>
            <input
              type="number"
              id="donate-custom-input"
              required
              min="10"
              max="1000000"
              value=""
              oninput="calculateTotal()"
              placeholder="Enter amount in Indian Rupees (INR)"
              class="w-full bg-white border border-slate-200 rounded-xl py-3.5 pl-8 pr-4 font-mono font-bold text-slate-850 placeholder:font-sans placeholder:font-normal focus:outline-none focus:ring-2 focus:ring-sky-500 shadow-sm"
            />
          </div>
          <p class="text-[11px] text-slate-400 leading-snug">
            Enter any size donation from ₹10 to ₹10,00,000. Your funding supports general education materials and monthly grocery kits across Kolkata.
          </p>
        </div>
      `;
    }
  } else {
    selectDonateTier("tier-1");
  }
}

function calculateTotal() {
  let finalAmount = 300;
  let impactText = "Project Vidyarthi";

  if (isDonateCustomMode) {
    const customInput = document.getElementById('donate-custom-input');
    finalAmount = customInput ? Number(customInput.value) || 0 : 0;
    impactText = "General Upliftment Drive";
  } else {
    const tierObj = DONATION_TIERS.find(t => t.id === selectedDonateTierId);
    if (tierObj) {
      finalAmount = tierObj.amount;
      impactText = tierObj.impact;
    }
  }

  const totalAmountEl = document.getElementById('total-amount-display');
  if (totalAmountEl) {
    totalAmountEl.innerText = `₹${finalAmount.toLocaleString("en-IN")}`;
  }
}

function copyUPIId() {
  navigator.clipboard.writeText("h3f.foundation@okhdfc");
  const copyBtn = document.getElementById('copy-upi-btn');
  if (copyBtn) {
    copyBtn.innerHTML = `<i data-lucide="check-circle" class="text-emerald-500 w-3.5 h-3.5"></i>`;
    lucide.createIcons();
    setTimeout(() => {
      copyBtn.innerHTML = `<i data-lucide="copy" class="w-3.5 h-3.5 text-sky-600"></i>`;
      lucide.createIcons();
    }, 2000);
  }
}

function handleDonateFormSubmit(e) {
  e.preventDefault();
  
  let finalAmount = 300;
  let impactText = "Project Vidyarthi";

  if (isDonateCustomMode) {
    const customInput = document.getElementById('donate-custom-input');
    finalAmount = customInput ? Number(customInput.value) || 0 : 0;
    impactText = "General Upliftment Drive";
  } else {
    const tierObj = DONATION_TIERS.find(t => t.id === selectedDonateTierId);
    if (tierObj) {
      finalAmount = tierObj.amount;
      impactText = tierObj.impact;
    }
  }

  if (finalAmount <= 0) {
    alert("Please enter or select a donation amount.");
    return;
  }

  const donorNameInput = document.getElementById('donor-name-input');
  const donorName = donorNameInput ? donorNameInput.value : "";
  
  if (!donorName) {
    alert("Please enter your full name.");
    return;
  }

  const mainPortal = document.getElementById('donation-selector-panels');
  const successPortal = document.getElementById('donation-success-panel');
  
  if (mainPortal && successPortal) {
    mainPortal.classList.add('hidden');
    successPortal.classList.remove('hidden');
    successPortal.classList.add('animate-scaleUp');

    document.getElementById('receipt-id').innerText = `H3F-TX-${Math.floor(10000 + Math.random() * 90000)}`;
    document.getElementById('receipt-name').innerText = donorName || "Anonymous Supporter";
    document.getElementById('receipt-amount').innerText = `₹${finalAmount.toLocaleString("en-IN")} INR`;
    document.getElementById('receipt-impact').innerText = impactText;
  }
}

function resetDonationPortal() {
  const mainPortal = document.getElementById('donation-selector-panels');
  const successPortal = document.getElementById('donation-success-panel');
  
  if (mainPortal && successPortal) {
    successPortal.classList.add('hidden');
    successPortal.classList.remove('animate-scaleUp');
    mainPortal.classList.remove('hidden');
  }

  const donorNameInput = document.getElementById('donor-name-input');
  if (donorNameInput) donorNameInput.value = "";
  selectDonateTier("tier-1");
}

// Contact State persisted on local storage
function initContactLogs() {
  const saved = localStorage.getItem("h3f_contact_logs_static");
  if (saved) {
    try {
      contactLogs = JSON.parse(saved);
    } catch(e) {}
  }
  renderContactLogs();
}

function renderContactLogs() {
  const logsCountEl = document.getElementById("logs-active-count");
  if (logsCountEl) logsCountEl.innerText = `Logs Active (${contactLogs.length})`;

  const listEl = document.getElementById("live-logs-list");
  if (!listEl) return;

  if (contactLogs.length === 0) {
    listEl.innerHTML = `
      <div class="text-center py-12 bg-white rounded-2xl border border-dashed border-slate-200 max-w-sm mx-auto flex flex-col items-center gap-2">
        <i data-lucide="alert-circle" class="text-slate-300 w-6 h-6 animate-pulse"></i>
        <p class="text-xs text-slate-400 font-mono uppercase">No inquiries filed yet.</p>
        <p class="text-xs text-slate-500 px-4 leading-normal">
          Inquiries submitted above instantly save inside local session state and log here! Try submitting the contact form to view the simulation live.
        </p>
      </div>
    `;
    lucide.createIcons();
    return;
  }

  listEl.innerHTML = contactLogs.map(log => `
    <div
      id="live-contact-log-${log.id}"
      class="bg-white rounded-2xl p-5 border border-slate-200 shadow-sm flex flex-col gap-3 relative animate-fadeIn"
    >
      <div class="flex justify-between items-start border-b border-slate-100 pb-2.5">
        <div class="flex flex-col">
          <span class="text-sm font-bold text-slate-900 truncate max-w-[150px]">${log.name}</span>
          <span class="text-[10px] text-slate-400 font-mono truncate max-w-[150px]">${log.email}</span>
        </div>
        <span class="bg-slate-900 text-sky-400 text-[9px] font-mono font-bold uppercase tracking-wider px-2 py-0.5 rounded border border-slate-800">
          ${log.status}
        </span>
      </div>

      <div class="flex flex-col gap-1 text-xs">
        <div class="flex justify-between font-mono text-[10px] text-slate-400">
          <span>Type: ${log.inquiryType}</span>
          <div class="flex items-center gap-1">
            <i data-lucide="clock" class="w-2.5 h-2.5"></i>
            <span>${log.timestamp}</span>
          </div>
        </div>
        <div class="font-bold text-slate-900 mt-1 truncate">Subject: ${log.subject}</div>
        <p class="text-slate-600 leading-relaxed bg-slate-50 p-2.5 rounded-lg border border-slate-100 mt-1 text-[11px] h-16 overflow-y-auto">
          "${log.message}"
        </p>
      </div>
    </div>
  `).join('');
  lucide.createIcons();
}

function handleContactFormSubmit(e) {
  e.preventDefault();

  const name = document.getElementById("contact-name").value;
  const email = document.getElementById("contact-email").value;
  const phone = document.getElementById("contact-phone").value || "Not Provided";
  const type = document.getElementById("contact-type").value;
  const subjectVal = document.getElementById("contact-subject").value;
  const message = document.getElementById("contact-message").value;

  if (!name || !email || !message) {
    alert("Please fill in all mandatory fields before sending.");
    return;
  }

  const subject = subjectVal || `${type} Inquiry of H3F`;

  const newLog = {
    id: `req-${Date.now()}`,
    name,
    email,
    phone,
    subject,
    inquiryType: type,
    message,
    timestamp: new Date().toLocaleTimeString(),
    status: "Email Sim Dispatched"
  };

  contactLogs.unshift(newLog);
  localStorage.setItem("h3f_contact_logs_static", JSON.stringify(contactLogs));
  
  renderContactLogs();

  const successBox = document.getElementById("contact-success-box");
  if (successBox) {
    successBox.classList.remove("hidden");
    setTimeout(() => {
      successBox.classList.add("hidden");
    }, 6000);
  }

  document.getElementById("contact-form").reset();
}

// Initializer once window is fully content-loaded
window.addEventListener('DOMContentLoaded', () => {
  // Initialize dynamic lucide icons
  lucide.createIcons();
  
  // Set default configurations
  setActiveTab('home');
  startCounters();
  initContactLogs();
});
