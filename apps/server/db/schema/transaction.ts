import { usersSchema } from "./user";
import { baseProperties } from "./utils";
import { integer, pgTable, text } from "drizzle-orm/pg-core";

export const transactionSchema = pgTable("transactions", {
  amount: integer("amount").notNull(),
  unit: text("unit").notNull(),
  purpose: text("purpose").notNull(),
  category: text("category").notNull(),
  user_id: integer("user_id")
    .notNull()
    .references(() => usersSchema.id),
  ...baseProperties,
});
