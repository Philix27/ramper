import { usersSchema } from "./user";
import { baseProperties } from "./utils";
import { integer, pgTable, text, boolean, numeric } from "drizzle-orm/pg-core";

export const giftCardSchema = pgTable("gift_card", {
  amount: integer("amount").notNull(),
  phone: text("phone"),
  email: text("email"),
  purpose: text("purpose"),
  is_redeem: boolean("purpose").default(false),
  user_id: integer("user_id")
    .notNull()
    .references(() => usersSchema.id),
  ...baseProperties,
});
