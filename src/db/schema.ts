import {
  pgTable,
  timestamp,
  serial,
  integer,
  text,
  pgEnum,
} from "drizzle-orm/pg-core";
export const statusEnum = pgEnum("status", [
  "open",
  "v",
  "paid",
  "uncollected",
]);
export  const Invoices = pgTable("invoices", {
  id: serial("id").primaryKey().notNull(),
  createdTs: timestamp("createdTs").defaultNow().notNull(),
  status: statusEnum("status").notNull(),
  value: integer("value").notNull(),
  description: text("description").notNull(),
});
