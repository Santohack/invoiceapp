import { defineConfig } from "drizzle-kit";
import * as dotenv from "dotenv";

dotenv.config({
    path: "./.env",
});
if (!process.env.XATA_POSTGRESS_ENDPOINT) {
  throw new Error("XATA_POSTGRESS_ENDPOINT is not set");
}
export default defineConfig({
  dialect: "postgresql", // 'mysql' | 'sqlite' | 'turso'
  schema: "./src/db/schema.ts",
  out: "./src/db/migrations",
  dbCredentials: {
    url: String(process.env.XATA_POSTGRESS_ENDPOINT),
  },
});
