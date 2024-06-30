"use client";

import React from "react";
import { TextH, TextP } from "@repo/ui";
import Link from "next/link";

export default function FooterSection() {
  return (
    <div
      className={`
      w-full border-t-[1px] border-primary bg-primary`}
    >
      <div className="py-4 h-full flex md:flex-row flex-col items-center md:items-start justify-around w-full">
        <Section
          title={"Company"}
          list={[
            { title: "About Us", link: "#" },
            { title: "Blogs", link: "#" },
            { title: "Terms of Service", link: "#" },
            { title: "Privacy Policy", link: "#" },
          ]}
        />
        <Section
          title={"Solutions"}
          list={[
            { title: "Gift cards", link: "#" },
            { title: "Swap", link: "#" },
          ]}
        />
        <Section
          title={"Support"}
          list={[
            { title: "FAQ", link: "#" },
            { title: "Supported Countries", link: "#" },
          ]}
        />
        <Section
          title={"Contact"}
          list={[
            { title: "Email", link: "#" },
            { title: "LinkedIn", link: "#" },
            { title: "Instagram", link: "#" },
            { title: "Facebook", link: "#" },
          ]}
        />
      </div>
    </div>
  );
}

function Section(props: {
  title: string;
  list: { title: string; link: string }[];
}) {
  return (
    <div
      className={
        "flex flex-col mb-4 w-full md:w-fit md:items-start items-center md:py-4 py-2"
      }
    >
      <TextH v="h4" className={"font-bold text-primary-foreground"}>
        {props.title}
      </TextH>
      {props.list.map((val, i) => (
        <Link href={val.link} key={i}>
          <TextP>{val.title}</TextP>
        </Link>
      ))}
    </div>
  );
}
