import { TextP } from "@repo/ui";
import React from "react";
import { IconType } from "react-icons";
import {} from "react-icons/ai";
import { IoIosCard } from "react-icons/io";

export default function Navbar(props: {
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
        <h1 className={"text-white text-md font-black"}>Rampage</h1>
      </div>
      <TextP v="p4" className="text-primary-foreground my-0">
        {props.title}
      </TextP>
      {props.icon ? <Icon onClick={props.onIconClick} /> : <div />}
    </div>
  );
}

