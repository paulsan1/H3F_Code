/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { GalleryItem, ProgramItem, TeamMember, DonationTier } from "./types";

export const PROGRAMS_DATA: ProgramItem[] = [
  {
    id: "education",
    name: "Child Education",
    title: "Project Vidyarthi: Enlightening Young Minds",
    iconName: "GraduationCap",
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
    iconName: "FlameKindling", // Representing hot meals/cooking or "HeartPulse" or "Apple"
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
    iconName: "Sparkles",
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
    iconName: "Heart",
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

export const GALLERY_DATA: GalleryItem[] = [
  {
    id: "bag-drive",
    title: "School Backpack Drive",
    description: "Distribution of colorful, cartoon-printed school bags and stationery kits under Project Vidyarthi to inspire children.",
    category: "Education",
    imageUrl: "https://images.unsplash.com/photo-1542810634-71277d95dcbb?q=80&w=800", // Indian children sitting happy in class
    aspectRatio: "wide"
  },
  {
    id: "ration-drive",
    title: "Project Anna Grocery Bags",
    description: "Orderly arrangement of individual essential nutrition kits stacked on tables, ready to be dispatched to daily wage earners.",
    category: "Food Relief",
    imageUrl: "https://images.unsplash.com/photo-1593113598332-cd288d649433?q=80&w=800", // NGO bag charity / support
    aspectRatio: "square"
  },
  {
    id: "classroom-action",
    title: "Interactive Classroom Mentorship",
    description: "Engaged teachers guiding children through basic science and life-skills in a temporary community classroom in Kolkata.",
    category: "Education",
    imageUrl: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=800", // NGO child study
    aspectRatio: "tall"
  },
  {
    id: "community-standee",
    title: "Lend a Hand to Bring a Smile",
    description: "Official Hope Heal and Humanity Foundation banner guiding local donors at a south Kolkata community drive.",
    category: "Community",
    imageUrl: "https://images.unsplash.com/photo-1509099836639-18ba1795216d?q=80&w=800", // Caring gesture or active support
    aspectRatio: "landscape"
  },
  {
    id: "food-dist-drive",
    title: "Nutritious Food Feeding Camp",
    description: "Feeding healthy hot meals to smiling local children. Healthy distribution drives executed in Behala, Kolkata.",
    category: "Food Relief",
    imageUrl: "https://images.unsplash.com/photo-1508847154043-be12a62861c1?q=80&w=800", // Group photo / kids smile
    aspectRatio: "wide"
  },
  {
    id: "elderly-med-camp",
    title: "Elderly Health & Welfare",
    description: "Distributing medical aids, glasses, and diagnostic assistance for senior citizens in the neighborhood community center.",
    category: "Elderly Care",
    imageUrl: "https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?q=80&w=800", // Healthcare / care
    aspectRatio: "square"
  },
  {
    id: "children-hope-drawing",
    title: "Creative Arts and Drawing Session",
    description: "Fostering child creative expression. Providing colors and canvases to bring dreams to life for young artists.",
    category: "Welfare",
    imageUrl: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?q=80&w=800", // Kids drawing color
    aspectRatio: "tallest"
  },
  {
    id: "volunteer-coaching",
    title: "After-school Learning Group",
    description: "Dedicated college student volunteers tutoring young students in primary mathematics and literacy curriculum.",
    category: "Education",
    imageUrl: "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?q=80&w=800", // Mentorship / study
    aspectRatio: "landscape"
  }
];

export const TEAM_DATA: TeamMember[] = [
  {
    id: "team-1",
    name: "Dr. Anirban Choudhury",
    role: "President & Chief Medical Trustee",
    bio: "Pioneering community geriatric health for 14 years. Dr. Choudhury orchestrates dry health drives, senior care units, and directs our elderly welfare program.",
    imageUrl: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=300" // Professional male avatar
  },
  {
    id: "team-2",
    name: "Srimati Priya Sen",
    role: "Director of Child Welfare & Education Strategy",
    bio: "An educationist devoted to foundational learning. Priya shapes Project Vidyarthi's after-school syllabus and guides school-kit distributions across regional primary centers.",
    imageUrl: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=300" // Professional female avatar
  },
  {
    id: "team-3",
    name: "Subhashis Roy",
    role: "Lead Field Operations Coordinator",
    bio: "Subhashis leads the ground logistic lines, ensuring dry food packing is meticulously executed and ration drives in Kolkata's outer slums reach families pinpointed as most in need.",
    imageUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=300" // Professional male avatar
  }
];

export const DONATION_TIERS: DonationTier[] = [
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
