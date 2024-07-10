import { baseProperties } from "./utils";
import { pgTable, text, numeric } from "drizzle-orm/pg-core";

export const airtimePlanSchema = pgTable("workspace", {
  amount: numeric("amount").notNull(),
  network: text("network"),
  ...baseProperties,
});
