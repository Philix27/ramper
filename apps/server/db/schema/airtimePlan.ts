import { baseProperties } from "./utils";
import { pgTable, text, integer } from "drizzle-orm/pg-core";

export const airtimePlanSchema = pgTable("airtime_plan", {
  amount: integer("amount").notNull(),
  network: text("network").notNull(),
  ...baseProperties,
});
