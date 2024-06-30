"use client";

export interface MainNavProps {
  title: string;
  items?: NavItem[];
}

export interface NavItem {
  title: string;
  href?: string;
  disabled?: boolean;
  external?: boolean;
}

export const MarketingNavItems: NavItem[] = [
  { title: "About us" },
  { title: "Contact us" },
  { title: "Terms of Service" },
  { title: "Privacy Policy" },
];
