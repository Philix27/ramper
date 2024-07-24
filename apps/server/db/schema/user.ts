import { baseProperties } from "./utils";
import { integer, pgTable, text } from "drizzle-orm/pg-core";

export const usersSchema = pgTable("users", {
  wallet_address: text("wallet_address").notNull().unique(),
  phone: text("phone"),
  email: text("email"),
  bankName: text("bank_name"),
  bankAccountName: text("bank_account_name"),
  bankAccountNo: text("bank_account_no"),
  nin: text("nin"),
  bvn: text("bvn"),
  ...baseProperties,
});
