"use client"
import { TextH } from "@repo/ui";
import { GiftCard } from "../_comps/card";
import { ApiClient } from "@/lib";
import { ContractFn } from "@/contract/fn";
import { useEffect } from "react";

export function CardsCreationHistory() {
  async function taker() {
    const res = await ContractFn.getAllCards({
      userAddress: "0x20F50b8832f87104853df3FdDA47Dd464f885a49",
    });

    console.log("Get all cards", res);
  }
  useEffect(() => {
    taker();
  }, []);

  return (
    <div className="w-full mt-10">
      <div className="border-b w-full pb-2">
        <TextH v="h5" className="text-white">
          History
        </TextH>
      </div>
      <GiftCard
        cardOwner={"Philix"}
        amount={"$5.00"}
        created="7th July, 2024"
        from="Grey Joy"
      />
      <GiftCard
        cardOwner={"Philix"}
        amount={"$5.00"}
        created="7th July, 2024"
        from="Grey Joy"
      />
      <GiftCard
        cardOwner={"Philix"}
        amount={"$5.00"}
        created="7th July, 2024"
        from="Grey Joy"
      />
    </div>
  );
}
