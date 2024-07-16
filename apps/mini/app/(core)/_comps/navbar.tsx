import { TextP } from "@repo/ui";
import React from "react";
import { IconType } from "react-icons";
import { ThemeToggle } from "./theme";

export function Navbar(props: {
  title: string;
  icon?: IconType;
  onIconClick?: VoidFunction;
}) {
  const Icon = props.icon!;
  return (
    <div
      className={
        "h-[50px] border-b-[0.3px] px-4 flex items-center justify-between"
      }
    >
      <div>
        {/* <IoIosCard className={"text-white text-2xl font-black"} /> */}
        <h1 className={"text-primary text-md font-black tracking-wide"}>
          Rampage
        </h1>
      </div>
      <TextP v="p4" className="text-card-foreground my-0">
        {props.title}
      </TextP>
      <div className="flex items-center gap-x-3">
        <ThemeToggle />
        {props.icon ? <Icon onClick={props.onIconClick} /> : <div />}
      </div>
    </div>
  );
}
