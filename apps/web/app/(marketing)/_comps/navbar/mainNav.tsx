"use client";

import Link from "next/link";
import { MainNavProps } from "./site";
import { TextH, TextP } from "@repo/ui";

export function NavbarMarketing(props: MainNavProps) {
  return (
    <header className="bg-card sticky top-0 z-20 w-full border-b">
      <div className="container flex h-[60px] items-center justify-between">
        <div className="flex gap-6 md:gap-10 ">
          <Link href="/" className="items-center space-x-2">
            <TextH
              v="h3"
              className={"text-primary font-extrabold tracking-wider"}
            >
              {props.title}
            </TextH>
          </Link>
        </div>

        <div className="flex items-center justify-center md:gap-x-3">
          <div className={"hidden md:flex w-full gap-x-4"}>
            {props.items?.map((v, i) => (
              <Link
                key={i}
                href={v.href || "/#"}
                className={`hover:bg-accent p-2 rounded-md hover:[&>p]:text-primary-foreground`}
              >
                <TextP v="p6" className={"text-primary"}>
                  {v.title}
                </TextP>
              </Link>
            ))}
          </div>
          <div className="mr-4">{/* <ThemeToggle /> */}</div>
          <div className={"md:hidden"}>
            {/* {isSidebarOpen ? (
              <SidebarClose
                onClick={() => {
                  setIsSidebarOpen(false);
                }}
              />
            ) : (
              <MenuIcon
                onClick={() => {
                  setIsSidebarOpen(true);
                }}
              />
            )} */}
          </div>
        </div>
      </div>
    </header>
  );
}
