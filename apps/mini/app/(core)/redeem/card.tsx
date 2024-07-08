import { TextH, TextP } from "@repo/ui";
import React from "react";

export function GiftCard(props: {
  cardOwner: string;
  amount: string;
  created: string;
  from: string;
}) {
  return (
    <div className="w-full bg-blue-700 rounded-xl p-3 my-4">
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
    </div>
  );
}
