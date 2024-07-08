"use client";
import { cn, TextP } from "@repo/ui";
import React, { useState } from "react";
import { OutgoingGiftCards } from "./OutGoing";
import { IncomingGiftCards } from "./Incoming";

export default function RedeemPage() {
  const [isOutgoing, setIsOutgoing] = useState(true);
  return (
    <div className={"flex flex-col items-center"}>
      <div className="flex items-center bg-secondary w-fit rounded-lg p-[2px]">
        <div
          className={cn("px-4 py-1 rounded-sm ", isOutgoing && "bg-background")}
          onClick={() => setIsOutgoing(true)}
        >
          <TextP>Outgoing</TextP>
        </div>
        <div
          className={cn(
            "px-4 py-1 rounded-sm ",
            !isOutgoing && "bg-background"
          )}
          onClick={() => setIsOutgoing(false)}
        >
          <TextP>Incoming</TextP>
        </div>
      </div>

      {isOutgoing ? <OutgoingGiftCards /> : <IncomingGiftCards />}
    </div>
  );
}
