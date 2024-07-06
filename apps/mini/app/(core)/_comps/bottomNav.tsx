"use client";

import React from "react";
import { usePathname, useRouter } from "next/navigation";
import { BookIcon, LucideIcon, UtilityPole } from "lucide-react";
import { IconType } from "react-icons";
import { IoGift, IoHome } from "react-icons/io5";
import { cn } from "@repo/ui";

export function BottomNav() {
  const router = useRouter();
  const path = usePathname();

  function isActive(link: string): boolean {
    if (link === path) {
      return true;
    }
    return false;
  }

  return (
    <div
      className={`
        fixed bottom-0 h-[50px] 
        border-t-[0.5px] bg-primary
        w-full flex items-center justify-center 
      `}
    >
      <div
        className={`
      flex justify-between items-center
      py-2 w-[70%]
      `}
      >
        {navItems.map(({ Icon, title, link }, i) => {
          return (
            <div
              onClick={() => router.push(link)}
              key={i}
              className={cn(
                `size-[40px] 
              flex flex-col items-center justify-center
              rounded-[10px]`,
                isActive(link) ? "bg-background" : "bg-primary"
              )}
            >
              <Icon className={"text-primary-foreground"} size={18} />
            </div>
          );
        })}
      </div>
    </div>
  );
}
const navItems: { title: string; Icon: LucideIcon | IconType; link: string }[] =
  [
    {
      title: "Gift",
      link: "/",
      Icon: IoHome,
    },
    {
      title: "Redeem",
      link: "/redeem",
      Icon: IoGift,
    },
    {
      title: "Utilities",
      link: "/utilities",
      Icon: UtilityPole,
    },
  ];
