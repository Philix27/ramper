import { usersSchema } from "./user";
import { baseProperties } from "./utils";
import { integer, pgTable, text, boolean } from "drizzle-orm/pg-core";

export const beneficiarySchema = pgTable("airtimeBeneficiary", {
  phone: text("phone").notNull(),
  title: text("title").notNull(),
  user_id: integer("user_id")
    .notNull()
    .references(() => usersSchema.id),
  ...baseProperties,
});
