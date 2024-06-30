"use client";

import React from "react";
import { TextH, TextP } from "@repo/ui";

export default function FooterSection() {
  return (
    <div
      className={`
      w-full border-t-[1px] border-primary`}
    >
      <div className="pt-4 h-full flex items-center justify-around w-full">
        <div className={"flex gap-x-4"}>
          <TextP>Company</TextP>
          <TextP>Contact</TextP>
          <TextP>About</TextP>
        </div>
      </div>
    </div>
  );
}
