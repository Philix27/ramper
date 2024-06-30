"use client";

import { AppPages } from "../../../lib";

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
  { title: "About us", href: AppPages.aboutUs },
  { title: "Contact us", href: AppPages.contactUs },
  { title: "Terms of Service", href: AppPages.termsCondition },
  { title: "Privacy Policy", href: AppPages.privacyPolicy },
];
