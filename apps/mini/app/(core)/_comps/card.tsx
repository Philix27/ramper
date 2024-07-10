"use client"
import { TextH, TextP } from "@repo/ui";
import { motion } from "framer-motion";
import React from "react";

export function GiftCard(props: {
  cardOwner: string;
  amount: string;
  created: string;
  from: string;
  onClick?: VoidFunction;
}) {
  return (
    <motion.div
      initial={{ x: 20, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ ease: "easeInOut", duration: 0.5 }}
      className="w-full bg-blue-700 rounded-md px-3 py-2 my-4"
      onClick={props.onClick}
    >
      <div className="flex items-center justify-between">
        <TextP v="p3" className={"text-white"}>
          {props.cardOwner}
        </TextP>
        <TextH v="h3" className={"text-white"}>
          {props.amount}
        </TextH>
      </div>
      <div className="mt-4 flex items-center justify-between">
        <TextP v="p5">
          Created: <span>{props.created}</span>
        </TextP>
        <TextP>
          From: <span>{props.from}</span>
        </TextP>
      </div>
    </motion.div>
  );
}