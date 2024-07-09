import { TextH } from "@repo/ui";
import { GiftCard } from "../_comps/card";

export function CardsCreationHistory() {
  return (
    <div className="w-full mt-10">
      <div className="border-b w-full pb-2">
        <TextH v="h5" className="text-white">History</TextH>
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
