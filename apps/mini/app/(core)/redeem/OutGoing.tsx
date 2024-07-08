import { GiftCard } from "./card";

export function OutgoingGiftCards() {
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
