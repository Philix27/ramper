"use client";

import Link from "next/link";
import { MainNavProps } from "./site";
import { TextH, TextP } from "@repo/ui";
import MobileSidebar from "../sidebar";
import { useState } from "react";
import {  AiOutlineClose, AiOutlineMenu} from "react-icons/ai";


export function NavbarMarketing(props: MainNavProps) {
  const [showNav, setShowNav] = useState(false);

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
            <div className="mr-4">{/* <ThemeToggle /> */}</div>
          </div>

          <div className={"md:hidden"}>
            {showNav && <MobileSidebar items={props.items} />}

            {showNav ? (
              <AiOutlineClose
                className="size-[20px] text-primary"
                onClick={() => {
                  setShowNav(false);
                }}
              />
            ) : (
              <AiOutlineMenu
                className="size-[20px] text-primary"
                onClick={() => {
                  setShowNav(true);
                }}
              />
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
