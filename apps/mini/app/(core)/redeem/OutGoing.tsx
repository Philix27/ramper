import { useQuery } from "@tanstack/react-query";
import { GiftCard } from "../_comps/card";
import { ApiClient } from "@/lib";

export function OutgoingGiftCards() {
  // const query = useQuery({
  //   queryKey: ["giftCard"],
  //   queryFn: () => {
  //     // ApiClient.airtime.$get({ json: {} });
  //   },
  // });

  return (
    <div className="w-full">
      <GiftCard
        cardOwner={"Philix"}
        amount={"$5.00"}
        created="7th July, 2024"
        from="Grey Joy"
      />
    </div>
  );
}
