"use client";

import { TextH, TextP } from "@repo/ui";
import React from "react";

// import { TextB, TextH } from "@/repo/ui"

export function HeroCenter(props: { title: string; subtitle: string }) {
  return (
    <section className="container md:w-[80%] w-full">
      <div
        className={`
        min-h-[400px] w-full 
        flex items-center justify-center
        px-2 md:px-[5%]
    `}
      >
        <div
          className={`
        pt-4 h-full flex flex-col 
        items-center justify-center 
        w-[95%]
        md:w-[55%]
         text-center
      `}
        >
          <TextH
            v="h1"
            className={"text-[24px] md:text-[50px] text-card-foreground"}
          >
            {props.title}
          </TextH>
          <div className="mb-10" />
          <div className="w-4/5">
            <TextP v={"p4"}>{props.subtitle}</TextP>
          </div>
        </div>
      </div>
    </section>
  );
}
