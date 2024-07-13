import { usersSchema } from "./user";
import { baseProperties } from "./utils";
import { integer, pgTable, text, boolean } from "drizzle-orm/pg-core";

export const beneficiarySchema = pgTable("beneficiary", {
  phone: text("phone").notNull(),
  title: text("title"),
  user_id: integer("user_id")
    .notNull()
    .references(() => usersSchema.id),
  ...baseProperties,
});
