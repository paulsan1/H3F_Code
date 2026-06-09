/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface GalleryItem {
  id: string;
  title: string;
  description: string;
  category: "Education" | "Food Relief" | "Welfare" | "Elderly Care" | "Community";
  imageUrl: string;
  aspectRatio: "square" | "wide" | "tall" | "tallest" | "landscape";
}

export interface ProgramItem {
  id: string;
  name: string;
  title: string;
  iconName: string;
  summary: string;
  description: string;
  objectives: string[];
  achievements: string;
  beneficiaries: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  imageUrl: string;
}

export interface ContactRequest {
  id: string;
  name: string;
  email: string;
  phone: string;
  subject: string;
  inquiryType: "Volunteer" | "Donate" | "Partnership" | "General";
  message: string;
  timestamp: string;
  status: "Received" | "Processing" | "Email Sim Dispatched";
}

export interface DonationTier {
  id: string;
  amount: number;
  label: string;
  impact: string;
  description: string;
}
