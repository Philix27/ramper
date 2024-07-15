import { useQuery } from "@tanstack/react-query";
import { ApiClient } from "@/lib";
import { GiftCard } from "../_comps/card";
import { AppContract, useMinipay } from "@/contract";
import { useReadContract } from "wagmi";

export interface ICard {
  amount: number;
  createdAt: number;
  from: string;
  id: number;
  isClaimed: boolean;
  to: string;
  updatedAt: number;
}

export function EmailGiftCards() {
  const { walletAddress } = useMinipay();

  const result = useReadContract({
    abi: AppContract.abi,
    address: AppContract.address as `0x${string}`,
    functionName: "getCardsCreatedFor",
    args: ["an identifier"],
  });

  if (!walletAddress) {
    return <div>Loading...</div>;
  }
  if (!result.data) {
    return <div>Loading...</div>;
  }
  const data = result.data as ICard[];
  console.log("Data", data);
  // const query = useQuery({
  //   queryKey: ["giftCard"],
  //   queryFn: () => {
  //     // ApiClient.airtime.$get({ json: {} });
  //   },
  // });

  return (
    <div className="w-full">
      {data.map((val, i) => (
        <GiftCard
          cardOwner={val.to}
          amount={val.amount.toString()}
          created={val.createdAt.toString()}
          from={val.from}
        />
      ))}
    </div>
  );
}
