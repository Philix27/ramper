import { useState } from "react";
import { GiftCard } from "../_comps/card";
import SettleCard from "./SettleGift";
import { ApiClient } from "@/lib";
import { useQuery } from "@tanstack/react-query";
import { ICard } from "./CardsEmail";
import { AppContract, useMinipay } from "@/contract";
import { useReadContract } from "wagmi";
import { formatBalance, genDateTime, shortenAddress, Spinner } from "../_comps";
import { parseEther } from "viem";

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
    return <Spinner />;
  }
  if (!result.data) {
    return <Spinner />;
  }
  const data = result.data as ICard[];
  console.log("Data", data);

  return (
    <div className="w-full">
      {data.map((val, i) => {
        const genDate = genDateTime(Number(val.createdAt));
        return (
          <GiftCard
            key={i}
            cardOwner={val.to}
            amount={val.amount.toString()}
            created={genDate}
            from={shortenAddress(val.from)}
            onClick={() => setShowSettler(true)}
          />
        );
      })}
      {showSettler && <SettleCard onClose={() => setShowSettler(false)} />}
    </div>
  );
}
