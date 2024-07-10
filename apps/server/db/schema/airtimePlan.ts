import { baseProperties } from "./utils";
import { pgTable, text, integer } from "drizzle-orm/pg-core";

export const airtimePlanSchema = pgTable("workspace", {
  amount: integer("amount").notNull(),
  network: text("network").notNull(),
  ...baseProperties,
});
