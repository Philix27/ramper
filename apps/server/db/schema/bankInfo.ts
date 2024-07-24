import { usersSchema } from "./user";
import { baseProperties } from "./utils";
import { integer, pgTable, text } from "drizzle-orm/pg-core";

export const bankInfoSchema = pgTable("bank_info", {
  bankName: text("bank_name"),
  bankAccountName: text("bank_account_name"),
  bankAccountNo: text("bank_account_no"),
  user_id: integer("user_id")
    .notNull()
    .references(() => usersSchema.id),
  ...baseProperties,
});
