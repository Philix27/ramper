import { usersSchema } from "./user";
import { baseProperties } from "./utils";
import { integer, pgTable, text, boolean, numeric } from "drizzle-orm/pg-core";

export const giftCardSchema = pgTable("gift_card", {
  amount: integer("amount").notNull(),
  phone: text("phone"),
  email: text("email"),
  purpose: text("purpose"),
  creator_wallet_address: text("creator_wallet_address"),
  is_redeem: boolean("is_redeem").default(false),
  // user_id: integer("user_id")
  //   .notNull()
  //   .references(() => usersSchema.id),
  ...baseProperties,
});
