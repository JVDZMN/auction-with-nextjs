import { integer, pgTable, serial, text, timestamp } from "drizzle-orm/pg-core";


export const bids = pgTable("bids", {
  id: serial("id").primaryKey(),
  //amount: integer("amount").notNull(),
  //carId: serial("carId").notNull().references(() => cars.id, { onDelete: "cascade" }),
  //userId: text("userId").notNull().references(() => users.id, { onDelete: "cascade" }),
  //timestamp: timestamp("timestamp", { mode: "date" }).notNull(),
});

export const cars = pgTable("cars", {
  id: serial("id").primaryKey(),
  userId: text("userId")
    .notNull()
    .references(() => users.id, { onDelete: "cascade" }),
  name: text("name").notNull(),
  fileKey: text("fileKey").notNull(),
  currentBid: integer("currentBid").notNull().default(0),
  startingPrice: integer("startingPrice").notNull().default(0),
  bidInterval: integer("bidInterval").notNull().default(100),
  endDate: timestamp("endDate", { mode: "date" }).notNull(),

  //address
  streetAddress1: text("streetAddress1").notNull(),
  streetAddress2: text("streetAddress2").notNull(),
  city: text("city").notNull(),
  postalCode: text("postalCode").notNull(),
  //fuel
  fuel: text("fuel").notNull(),
   
  brand: text("brand").notNull(),
  model: text("model").notNull(),
  year: integer("year").notNull(),
  color: text("color").notNull(),
 
});

export const users = pgTable("users", {
  id: text("id")
    .primaryKey()
    .$defaultFn(() => crypto.randomUUID()),
  name: text("name"),
  email: text("email").notNull(),
  emailVerified: timestamp("emailVerified", { mode: "date" }),
  image: text("image"),
});


