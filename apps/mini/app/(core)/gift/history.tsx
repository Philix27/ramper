"use client"
import { TextH } from "@repo/ui";
import { GiftCard } from "../_comps/card";
import { ApiClient } from "@/lib";
import { ContractFn } from "@/contract/fn";
import { useEffect } from "react";

export function CardsCreationHistory() {
   const result = useReadContract({
     abi: AppContract.abi,
     address: AppContract.address as `0x${string}`,
     functionName: "getAllCards",
   });

   if (result.data) {
     console.log("result", result.data);
   }


  return (
    <div className="w-full mt-10">
      <div className="border-b w-full pb-2">
        <TextH v="h5" className="text-card-foreground">
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
