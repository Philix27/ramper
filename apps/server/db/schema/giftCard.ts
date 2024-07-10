import { usersSchema } from "./user";
import { baseProperties } from "./utils";
import { integer, pgTable, text, boolean, numeric } from "drizzle-orm/pg-core";

export const giftCardSchema = pgTable("workspace", {
  amount: numeric("amount").notNull(),
  phone: text("phone"),
  email: text("email"),
  purpose: text("purpose"),
  user_id: integer("user_id")
    .notNull()
    .references(() => usersSchema.id),
  ...baseProperties,
});
