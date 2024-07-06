import { baseProperties } from "./utils";
import { integer, pgTable, text } from "drizzle-orm/pg-core";

export const usersSchema = pgTable("users", {
  phone: text("phone").notNull(),
  password: text("password").notNull(),
  bvn: integer("bvn").notNull(),
  first_name: text("first_name"),
  last_name: text("last_name"),
  email: text("email"),
  country: text("country"),
  state: text("state"),
  lga: text("lga"),
  identity_proof: text("identity_proof"),
  address_proof: text("address_proof"),
  dob: text("dob"),
  gender: text("gender"),
  address: text("address"),
  ...baseProperties,
});
