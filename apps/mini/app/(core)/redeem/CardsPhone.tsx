import { useState } from "react";
import { GiftCard } from "../_comps/card";
import SettleCard from "./SettleGift";
import { ApiClient } from "@/lib";
import { useQuery } from "@tanstack/react-query";
import { ICard } from "./CardsEmail";
import { AppContract, useMinipay } from "@/contract";
import { useReadContract } from "wagmi";

export function PhoneGiftCards() {
  const [showSettler, setShowSettler] = useState(false);

  const { walletAddress } = useMinipay();

  const result = useReadContract({
    abi: AppContract.abi,
    address: AppContract.address as `0x${string}`,
    functionName: "getCardsCreatedFor",
    args: ["08108850572"],
  });

  if (!walletAddress) {
    return <div>Loading...</div>;
  }
  if (!result.data) {
    return <div>Loading...</div>;
  }
  const data = result.data as ICard[];
  console.log("Data", data);

  return (
    <div className="w-full">
      {data.map((val, i) => (
        <GiftCard
          onClick={() => setShowSettler(true)}
          cardOwner={val.to}
          amount={val.amount.toString()}
          created={val.createdAt.toString()}
          from={val.from}
        />
      ))}
      {showSettler && <SettleCard onClose={() => setShowSettler(false)} />}
    </div>
  );
}