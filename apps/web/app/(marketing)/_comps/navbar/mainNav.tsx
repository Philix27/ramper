"use client";

import Link from "next/link";
import { MainNavProps } from "./site";
import { TextP } from "@repo/ui";

export function NavbarMarketing(props: MainNavProps) {
  return (
    <header className="bg-primary sticky top-0 z-20 w-full border-b">
      <div className="container flex h-[60px] items-center justify-between">
        <div className="flex gap-6 md:gap-10 ">
          <Link
            href="/"
            className="items-center space-x-2 font-extrabold text-primary-foreground tracking-wide text-lg"
          >
            {props.title}
          </Link>
        </div>

        <div className="flex items-center justify-center md:gap-x-3">
          <div className={"hidden md:flex w-full gap-x-4"}>
            {props.items?.map((v, i) => (
              <Link
                href={v.href || "/#"}
                className={`hover:bg-accent p-2 rounded-md`}
              >
                <div key={i}>
                  <TextP v="p6" className={"text-primary-foreground"}>
                    {v.title}
                  </TextP>
                </div>
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
