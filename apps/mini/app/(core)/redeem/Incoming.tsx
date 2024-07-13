import { useState } from "react";
import { GiftCard } from "../_comps/card";
import SettleCard from "./SettleGift";
import { ApiClient } from "@/lib";
import { useQuery } from "@tanstack/react-query";

export function IncomingGiftCards() {
  const [showSettler, setShowSettler] = useState(false);
 const query = useQuery({
   queryKey: ["giftCard"],
   queryFn: () => {
     ApiClient.airtime.$get({ json: {} });
   },
 });
  return (
    <div className="w-full">
      <GiftCard
        onClick={() => setShowSettler(true)}
        cardOwner={"Philix"}
        amount={"$5.00"}
        created="7th July, 2024"
        from="Grey Joy"
      />
      <GiftCard
        onClick={() => setShowSettler(true)}
        cardOwner={"Philix"}
        amount={"$5.00"}
        created="7th July, 2024"
        from="Grey Joy"
      />
      <GiftCard
        onClick={() => setShowSettler(true)}
        cardOwner={"Philix"}
        amount={"$5.00"}
        created="7th July, 2024"
        from="Grey Joy"
      />
      <GiftCard
        onClick={() => setShowSettler(true)}
        cardOwner={"Philix"}
        amount={"$5.00"}
        created="7th July, 2024"
        from="Grey Joy"
      />
      {showSettler && <SettleCard onClose={() => setShowSettler(false)} />}
    </div>
  );
}
