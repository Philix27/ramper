import { baseProperties } from "./utils";
import { integer, pgTable, text } from "drizzle-orm/pg-core";

export const usersSchema = pgTable("users", {
  wallet_address: text("wallet_address").notNull(),
  phone: text("phone"),
  email: text("email"),
  ...baseProperties,
});
